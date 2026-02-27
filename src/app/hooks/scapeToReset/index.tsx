import { useEffect } from "react";

export default function useEscapeToReset({
    enabled,
    onEscape,
}: {
    enabled: boolean;
    onEscape: () => void;
}) {
    useEffect(() => {
        if (!enabled) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return;
            e.preventDefault();
            onEscape();
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [enabled, onEscape]);
}
