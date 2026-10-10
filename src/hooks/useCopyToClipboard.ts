import { useState, useCallback } from "react";

export function useCopyToClipboard(delay = 1800) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), delay);
  }, [delay]);

  return { copied, copy };
}