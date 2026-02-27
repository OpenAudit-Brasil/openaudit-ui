import { Phase } from "app/types";
import { useEffect, useRef } from "react";

export default function useAutoFocusOnIdle(phase: Phase) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (phase === "idle") inputRef.current?.focus();
  }, [phase]);

  return inputRef;
}
