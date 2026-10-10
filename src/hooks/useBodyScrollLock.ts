import { useEffect } from "react";

export function useBodyScrollLock(lock: boolean) {
  useEffect(() => {
    if (!lock) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [lock]);
}