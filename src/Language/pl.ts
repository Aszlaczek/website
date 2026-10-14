import type { ProjectCopy } from "../data/types";
import type { ProjectId } from "../data/constants";
import { KARATE_IMAGE, CAMP_IMAGE, WORKSPACE_IMAGE } from "@/data";
import type { en } from "./en";

const projectItems: Record<ProjectId, ProjectCopy> = {
  workout: {
    tag: "Full-stack",
    desc: "Planowanie treningów i analiza postępów w jednej aplikacji.",
    problem:
      "Rozproszone notatki utrudniają śledzenie treningów i porównywanie wyników.",
    decisions: [
      "Model relacyjny w PostgreSQL; Supabase Auth i RLS kontrolują dostęp do danych.",
      "Współdzielone plany treningowe oddzielone od prywatnej historii; wykresy w Recharts.",
    ],
    outcome: "Plany, zapis serii i historia postępów w jednym miejscu.",
  },
  counter: {
    tag: "Narzędzie dla administracji",
    desc: "Przeliczanie czasu wyjść pracowników, ewidencja wpisów i eksport XLSX.",
    problem:
      "Ręczne przeliczanie minut na godziny i przygotowywanie zestawień.",
    decisions: [
      "Minuty przechowywane jako liczby; format godzin jest wyliczany do prezentacji.",
      "Zustand zarządza wpisami, a ExcelJS eksportuje osobne kolumny godzin, minut i sumy.",
    ],
    outcome:
      "Dodawanie, edycja i usuwanie wpisów oraz zestawienie gotowe do Excela.",
    note: "Wdrożenie w urzędzie i 2 użytkowników.",
  },
  calculator: {
    tag: "Parser i wizualizacja",
    desc: "Kalkulator naukowy z własnym parserem wyrażeń i wykresami funkcji.",
    problem: "Obliczanie i wizualizowanie tej samej formuły matematycznej.",
    decisions: [
      "Tokenizator i parser rekurencyjnego zejścia budują AST, obliczane bez eval.",
      "Canvas rysuje wykres funkcji z możliwością powiększania i przesuwania.",
    ],
    outcome: "Jeden silnik wyrażeń do obliczeń i wykresów; obsługa klawiatury.",
  },
  teacher: {
    tag: "Narzędzie językowe",
    desc: "Tłumaczenia, korekta zdań i przykłady użycia w czterech językach.",
    problem:
      "Nauka języka wymaga zarówno tłumaczenia, jak i wyjaśnienia błędów.",
    decisions: [
      "Endpoint Next.js wywołuje Gemini po stronie serwera.",
      "Walidacja danych wejściowych i kolejne próby z różnymi modelami przy błędach API.",
    ],
    outcome: "Tłumaczenie i korekta z przykładami w jednym formularzu.",
  },
  colors: {
    tag: "Narzędzie frontendowe",
    desc: "Zapisywanie, porównywanie i filtrowanie własnej palety kolorów.",
    problem:
      "Potrzeba szybkiego zebrania kolorów bez konta i osobnego programu.",
    decisions: [
      "localStorage zachowuje paletę między wizytami.",
      "Wartości HEX/RGB są przeliczane na HSL; filtry działają na kanałach kolorów.",
    ],
    outcome: "Paleta w widoku listy lub siatki, z kopiowaniem kodów.",
  },
  memory: {
    tag: "Gra przeglądarkowa",
    desc: "Gra w dobieranie par na planszy 4 × 4.",
    problem: "Ćwiczenie pamięci z czytelną informacją o ruchach i wyniku.",
    decisions: [
      "Własny hook oddziela logikę gry od komponentów React.",
      "Tasowanie Fishera–Yatesa i kontrola odkrywania maksymalnie dwóch kart.",
    ],
    outcome: "Osiem par, licznik ruchów i możliwość rozpoczęcia nowej gry.",
  },
  "custom-components": {
    tag: "Biblioteka UI",
    desc: "Wielokrotnego użytku komponenty do budowania aplikacji internetowych.",
    problem: "Niespójny design i zachowanie w różnych projektach.",
    decisions: [
      "Biblioteka komponentów standaryzuje elementy UI i interakcje.",
      "Storybook prezentuje komponenty w izolacji, co ułatwia rozwój.",
    ],
    outcome: "Spójne, wielokrotnego użytku komponenty przyspieszające rozwój.",
  },
};

export const pl: typeof en = {
  nav: {
    about: "o mnie",
    projects: "projekty",
    skills: "umiejętności",
    contact: "kontakt",
    hireMe: "Zatrudnij mnie",
    menu: "Menu",
    primary: "Główna nawigacja",
    home: "Początek strony",
    switchLanguage: "Switch to English",
    skip: "Przejdź do treści",
    closeMenu: "Zamknij menu",
  },
  hero: {
    openToWork: "Szukam pracy · Junior Full Stack Developer",
    degree: "Magister inżynier informatyki · Polska",
    title1: "Buduję rzeczy",
    title2: "w sieci.",
    title3: "Też: instruktor karate.",
    desc: "Jestem magistrem inżynierem informatyki. Tworzząc aplikacje w React, TypeScript i Next.js, rozwijam się w kierunku full-stack. Mam doświadczenie we wsparciu IT i wdrażaniu narzędzi usprawniających codzienną pracę.",
    seeWork: "Zobacz moje projekty ↓",
    downloadCv: "Pobierz CV",
    karate: "Instruktor\nKarate",
    campLead: "Wychowawca\nObozowy",
    travelGuide: "5+ lat\nnauczania",
    ghostText: "DEV + SENSEI",
    chapterLabel: "Historia o ciekawości,\ndyscyplinie i ludziach",
    scrollCue: "Przewiń, aby odkryć",
    valuesLabel: "Moje podejście",
    values: ["01 / Rozwiązuj", "02 / Wytrwaj", "03 / Łącz"],
  },
  stats: {
    label: "W skrócie",
    years: "Lat nauki kodowania",
    degree: "Mgr inż. informatyki",
    karate: "Lat karate",
    camps: "Lat nauczania",
  },
  about: {
    section: "Poza kodem",
    title1: "To nie prosta ścieżka.",
    title2: "Historia w ruchu.",
    openToWork: "Szukam pracy",
    relocation: "Otwarty na przeprowadzkę",
    chapter: "Rozdział",
    storyOpening: {
      index: "00 / PROLOG",
      p1: "Nie jestem tylko programistą, instruktorem ani opiekunem na obozie.",
      p2: "Jestem sumą każdego problemu, przy którym wytrwałem, każdej osoby, której pomogłem się rozwinąć i każdego planu, który po drodze musiałem wymyślić od nowa.",
    },
    journey: [
      {
        number: "01",
        overline: "Iskra",
        title: "Zaczęło się od problemu.",
        lead: "Potem od kolejnego. I nagle budowałem.",
        body: "Informatyka dała tej ciekawości język. Kod stał się moim sposobem, by w gąszczu znaleźć wzorzec i zamienić go w użyteczny produkt. Każdy rozwiązany problem sprawiał, że chciałem kolejnego — trudniejszego.",
        lesson: "Ciekawość → rzemiosło",
        image: WORKSPACE_IMAGE,
        alt: "Laptop na biurku developera",
        tone: "code",
      },
      {
        number: "02",
        overline: "Dyscyplina",
        title: "Postęp to powtarzanie.",
        lead: "Piętnaście lat na macie to uświadomiło.",
        body: "Karate nauczyło mnie, że pewność buduje się po cichu: jedna technika, jeden błąd i jedna lepsza próba na raz. Jako aktywny instruktor nauczyłem się też prosto wyjaśniać trudne rzeczy i dostrzegać, kiedy ktoś potrzebuje wsparcia — albo odrobinę cierpliwości.",
        lesson: "Dyscyplina → przywództwo",
        image: KARATE_IMAGE,
        alt: "Karateka przygotowujący się do rozbicia stosu płyt",
        tone: "dojo",
      },
      {
        number: "03",
        overline: "Ludzie",
        title: "Plany się zmieniają. Liczą się ludzie.",
        lead: "Obozy zamieniły odpowiedzialność w przygodę.",
        body: "Wycieczki, obozy i grupy młodych ludzi rzadko podążają za idealnym planem. Nauczyły mnie organizować chaos, komunikować się z energią i zachowywać spokój, gdy rzeczywistość wdraża niespodziewaną funkcję. Najlepszy efekt to zawsze coś, co tworzymy razem.",
        lesson: "Odpowiedzialność → zaufanie",
        image: CAMP_IMAGE,
        alt: "Mężczyzna z plecakiem nad jeziorem",
        tone: "camp",
      },
    ],
    finale: {
      number: "04",
      overline: "Następny rozdział",
      title1: "Wciąż się uczę.",
      title2: "Wciąż idę dalej.",
      title3: "Gotowy na więcej.",
      paragraph:
        "Te ścieżki nie odwróciły mnie od programowania. Ukształtowały programistę, którym chcę być: zaradnym, niezawodnym, otwartym na uwagi i po prostu dobrym we współpracy.",
      cta: "Zobacz, jak to wygląda w kodzie",
    },
    profileCard: {
      kicker: "Trzy ścieżki. Jedna postawa.",
      paragraph:
        "Buduję produkty, uczę dyscypliny i tworzę przygody, które się pamięta.",
    },
    experience: "Doświadczenie zawodowe",
    experienceTitle1: "Od dyplomu",
    experienceTitle2: "do produkcji.",
    exp1Title: "Informatyk",
    exp1Company: "Starostwo Powiatowe w Lidzbarku Warmińskim",
    exp1Date: "Wrz 2025 – Wrz 2026",
    exp1Desc:
      "Administrowałem systemami operacyjnymi i infrastrukturą sieciową w kilku lokalizacjach. Rozwiązywałem problemy techniczne pracowników (helpdesk). Zaprojektowałem i wdrożyłem aplikację w TypeScript, która automatycznie przeliczała czas wyjść z minut na godziny — z zapisem danych i eksportem do .xlsx.",
    exp2Title: "Administrator strony internetowej",
    exp2Company: "homideko.pl",
    exp2Date: "Cze 2024 – Lis 2024",
    exp2Desc:
      "Aktualizowałem i przebudowywałem strukturę oraz treści witryny opartej na PrestaShop.",
  },
  projects: {
    section: "Wybrane projekty",
    title1: "Projekty z",
    title2: "misją.",
    featured: "Tylko wyróżnione",
    all: "Pokaż wszystkie",
    problem: "Problem",
    outcome: "Rezultat",
    details: "Decyzje techniczne",
    code: "Kod",
    items: projectItems,
  },
  skills: {
    section: "Stack technologiczny",
    title1: "Umiejętności",
    title2: "i fundamenty.",
    introEyebrow: "Jak wybieram narzędzia",
    introText:
      "Bardziej zależy mi na rozwiązaniu właściwego problemu niż na gonieniu za każdym nowym frameworkiem.",
    introStrong:
      "Najpierw mocne fundamenty. Potem właściwa technologia. Nauka się nie kończy.",
    groups: ["Języki", "Frontend", "Backend", "Bazy danych"],
    groupItems: [
      ["JavaScript", "TypeScript", "Python", "PHP"],
      ["React", "Next.js", "HTML/CSS", "MUI", "Bootstrap"],
      ["Node.js", "Django", "FastAPI"],
      ["PostgreSQL", "MySQL", "SQLite"],
    ],
    other: "Inne narzędzia",
    otherItems: ["Git/GitHub", "CMS (WordPress, PrestaShop)"],
    communication: "Komunikacja",
    communicationDesc:
      "Lata pracy z dziećmi i w zespole nauczyły mnie tłumaczyć złożone rzeczy w prosty sposób — podczas zajęć i wspólnego rozwiązywania problemów.",
    leadership: "Samodzielność",
    leadershipDesc:
      "Sam zauważyłem nieefektywny proces i zaproponowałem jego automatyzację — od analizy potrzeb, przez projekt, po wdrożenie w środowisku produkcyjnym.",
    discipline: "Dyscyplina",
    disciplineDesc:
      "Ponad 5 lat prowadzenia zajęć karate i pracy z dziećmi nauczyło mnie pracować pod presją i być konsekwentnym. To samo podejście wnoszę do tworzenia oprogramowania.",
  },
  workflow: {
    title: "AI-assisted development",
    desc: "Wykorzystuję Codex i Claude Code do wspierania implementacji aplikacji. Pracę rozpoczynam od zdefiniowania problemu i struktury projektu. Analizuję wygenerowane zmiany, sprawdzam działanie aplikacji oraz utrzymuję dokumentację pozwalającą zachować kontekst między kolejnymi sesjami agentów.",
    steps: [
      "Problem i oczekiwany rezultat",
      "Struktura plików i odpowiedzialności",
      "Wymagania jakościowe, w tym DRY",
      "Implementacja z agentem",
      "Przegląd kodu i zmian",
      "Build, testy i sprawdzenie aplikacji",
    ],
    docs: "Kontekst w PERSONAL.md po istotnych zmianach; ukończone i przyszłe zadania w DONE.md i TODO.md.",
  },
  contact: {
    section: "Kontakt",
    ghostText: "ZBUDUJMY COŚ",
    title1: "Szukasz",
    title2: "programisty do zespołu?",
    desc: "Aktywnie szukam pracy jako junior web developer. Interesuje mnie praca stacjonarna, hybrydowa lub zdalna. Porozmawiajmy — odpowiadam szybciej niż wykonuję kata.",
    copyEmail: "Kopiuj adres e-mail",
    sendEmail: "Napisz e-mail",
    copyError:
      "Nie udało się skopiować. Zaznacz adres lub wybierz Napisz e-mail.",
    copied: "✓ Skopiowano!",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    copyright:
      "© 2026 Adrian Wzorek — MSc Eng. · Junior Full Stack Developer · Sensei",
    tagline: "Zbudowane od zera · ",
    alwaysShipping: "Zawsze dostarczam.",
  },
};
