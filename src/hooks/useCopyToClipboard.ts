import { useState, useCallback, useEffect, useRef } from "react";

type CopyStatus = "idle" | "pending" | "copied" | "error";

export function useCopyToClipboard(delay = 1800) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const request = useRef(0);

  useEffect(() => () => {
    request.current += 1;
    clearTimeout(timer.current);
  }, []);

  const copy = useCallback(async (text: string) => {
    const current = ++request.current;
    clearTimeout(timer.current);
    setStatus("pending");
    try {
      await navigator.clipboard.writeText(text);
      if (current !== request.current) return;
      setStatus("copied");
      timer.current = setTimeout(() => setStatus("idle"), delay);
    } catch {
      if (current === request.current) setStatus("error");
    }
  }, [delay]);

  return { status, copy };
}
