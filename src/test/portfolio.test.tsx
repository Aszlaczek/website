import { StrictMode } from "react";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import { Header } from "../components/layout/Header";
import { Projects } from "../features/projects/Projects";
import { Contact } from "../features/contact/Contact";
import { Hero } from "../features/hero/Hero";
import { en } from "../Language/en";
import { pl } from "../Language/pl";
import { EMAIL, NAV_LINKS } from "../data";
import { publicAsset } from "../lib/assets";

function LanguageProbe() {
  const { lang, toggle, t } = useLanguage();
  return <><button onClick={toggle}>Switch</button><output>{lang}</output><Hero lang={lang} t={t} /></>;
}
function renderLanguage() {
  return render(<StrictMode><LanguageProvider><LanguageProbe /></LanguageProvider></StrictMode>);
}

describe("language and CV", () => {
  it("gives ?lang=pl precedence over stored language and switches text, URL, lang and CV", async () => {
    localStorage.setItem("lang", "en");
    window.history.replaceState(null, "", "/?lang=pl#projects");
    renderLanguage();
    expect(screen.getByRole("status")).toHaveTextContent("pl");
    expect(document.documentElement).toHaveAttribute("lang", "pl");
    expect(screen.getByRole("link", { name: /Pobierz CV/ })).toHaveAttribute("href", publicAsset("files/CV_AWzorek_new_PL.pdf"));
    await userEvent.click(screen.getByRole("button", { name: "Switch" }));
    expect(screen.getByRole("status")).toHaveTextContent("en");
    expect(document.documentElement.lang).toBe("en");
    expect(window.location.pathname).toBe("/en/");
    expect(window.location.hash).toBe("#projects");
    expect(localStorage.getItem("lang")).toBe("en");
    expect(screen.getByRole("link", { name: /Download CV/ })).toHaveAttribute("href", publicAsset("files/CV_AWzorek_new_EN.pdf"));
  });
  it("uses a language path ahead of saved preferences", () => {
    localStorage.setItem("lang", "en");
    window.history.replaceState(null, "", "/pl/");
    renderLanguage();
    expect(screen.getByRole("status")).toHaveTextContent("pl");
  });
  it("honors saved preference at the root and invalid query falls back", () => {
    localStorage.setItem("lang", "pl");
    window.history.replaceState(null, "", "/?lang=de");
    renderLanguage();
    expect(screen.getByRole("status")).toHaveTextContent("pl");
  });
  it("works when localStorage access throws", async () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("blocked"); });
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("blocked"); });
    renderLanguage();
    await userEvent.click(screen.getByRole("button", { name: "Switch" }));
    expect(screen.getByRole("status")).toHaveTextContent("pl");
  });
  it("responds to back/forward URL changes", () => {
    renderLanguage();
    act(() => { window.history.replaceState(null, "", "/pl/"); window.dispatchEvent(new PopStateEvent("popstate")); });
    expect(screen.getByRole("status")).toHaveTextContent("pl");
  });
});

describe("projects", () => {
  it.each([en, pl])("shows three verified featured projects and toggles the remaining projects", async (t) => {
    render(<Projects t={t} />);
    expect(screen.getAllByRole("article").map((card) => within(card).getByRole("heading").textContent)).toEqual(["Work Out", "Counter", "Calculator"]);
    const filter = screen.getByRole("button", { name: new RegExp(t.projects.all) });
    expect(filter).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(filter);
    expect(screen.getAllByRole("article")).toHaveLength(6);
    expect(filter).toHaveAttribute("aria-expanded", "true");
    const calculator = screen.getByRole("article", { name: "Calculator" });
    expect(within(calculator).getByRole("link", { name: "Demo — Calculator" })).toHaveAttribute("href", "https://calculator-five-vert-80.vercel.app/");
    expect(within(calculator).getByText(/AST/)).toBeInTheDocument();
    await userEvent.click(filter);
    expect(screen.getAllByRole("article")).toHaveLength(3);
  });
});

describe("mobile navigation", () => {
  function setup() {
    render(<LanguageProvider><Header /><main id="main-content"><a href="#contact">Background</a></main></LanguageProvider>);
    return screen.getByRole("button", { name: en.nav.menu });
  }
  it("focuses the dialog, traps Tab in both directions and restores focus after Escape", async () => {
    const user = userEvent.setup(); const trigger = setup();
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const dialog = screen.getByRole("dialog");
    const close = within(dialog).getByRole("button", { name: en.nav.closeMenu });
    expect(close).toHaveFocus();
    expect(document.getElementById("main-content")?.inert).toBe(true);
    expect(document.body.style.overflow).toBe("hidden");
    await user.tab({ shift: true });
    expect(within(dialog).getByRole("link", { name: /Hire me/ })).toHaveFocus();
    await user.tab(); expect(close).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(document.getElementById("main-content")?.inert).toBeFalsy();
  });
  it("has valid section links and closes when a destination is chosen", async () => {
    const user = userEvent.setup(); const trigger = setup();
    await user.click(trigger);
    const dialog = screen.getByRole("dialog");
    for (const id of NAV_LINKS) expect(within(dialog).getByRole("link", { name: en.nav[id] })).toHaveAttribute("href", `#${id}`);
    await user.click(within(dialog).getByRole("link", { name: en.nav.projects }));
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(trigger).toHaveFocus();
  });
});

describe("email", () => {
  it("announces success only after clipboard completion and offers mailto", async () => {
    let finish!: () => void;
    const writeText = vi.fn(() => new Promise<void>((resolve) => { finish = resolve; }));
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    render(<Contact t={en} />);
    fireEvent.click(screen.getByRole("button", { name: /Copy email/ }));
    expect(writeText).toHaveBeenCalledWith(EMAIL);
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    await act(async () => finish());
    expect(screen.getByRole("status")).toHaveTextContent(en.contact.copied);
    expect(screen.getByRole("link", { name: /Send an email/ })).toHaveAttribute("href", `mailto:${EMAIL}`);
  });
  it.each([undefined, { writeText: () => Promise.reject(new Error("denied")) }])("reports failure when clipboard is unavailable or rejects", async (clipboard) => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: clipboard });
    render(<Contact t={pl} />);
    fireEvent.click(screen.getByRole("button", { name: /Kopiuj adres/ }));
    await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent(pl.contact.copyError));
    expect(screen.queryByText(pl.contact.copied)).not.toBeInTheDocument();
  });
  it("clears success feedback and cleans the timer on unmount", async () => {
    vi.useFakeTimers();
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText: vi.fn().mockResolvedValue(undefined) } });
    const view = render(<Contact t={en} />);
    await act(async () => { fireEvent.click(screen.getByRole("button", { name: /Copy email/ })); });
    act(() => vi.advanceTimersByTime(1800));
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
    await act(async () => { fireEvent.click(screen.getByRole("button", { name: /Copy email/ })); });
    view.unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
