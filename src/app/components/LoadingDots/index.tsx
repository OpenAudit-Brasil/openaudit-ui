import { useEffect, useState } from "react";

export default function LoadingDots({ intervalMs = 450 }: { intervalMs?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setCount((c) => (c + 1) % 4), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);

  const dots = ".".repeat(count);
  const padded = dots.padEnd(3, "\u00A0"); // mantém 3 posições sempre

  return (
    <span
      aria-hidden="true"
      className="inline-block w-[3ch] text-left"
    >
      {padded}
    </span>
  );
}
