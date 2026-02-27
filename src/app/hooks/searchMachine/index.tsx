import { Phase, SOURCES } from "app/types";
import { useEffect, useMemo, useRef, useState } from "react";

export default function useSearchMachine() {
    const [phase, setPhase] = useState<Phase>("idle");
    const [query, setQuery] = useState("");
    const [sourceIndex, setSourceIndex] = useState(0);

    const intervalRef = useRef<number | null>(null);

    const stopProgress = () => {
        if (intervalRef.current !== null) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    const resetToIdle = () => {
        stopProgress();
        setPhase("idle");
        setSourceIndex(0);
        setQuery("");
    };

    const startSearch = () => {
        if (phase === "searching") return;
        setPhase("searching");
        setSourceIndex(0);
    };

    useEffect(() => {
        if (phase !== "searching") {
            stopProgress();
            return;
        }

        stopProgress();
        let idx = 0;

        intervalRef.current = window.setInterval(() => {
            idx += 1;

            if (idx >= SOURCES.length) {
                stopProgress();
                setPhase("done");
                return;
            }

            setSourceIndex(idx);
        }, 1000);

        return () => stopProgress();
    }, [phase]);

    const currentSource = useMemo(() => {
        return SOURCES[Math.min(sourceIndex, SOURCES.length - 1)];
    }, [sourceIndex]);

    const isSearching = phase === "searching";
    const isAfterSearch = phase === "searching" || phase === "done";
    const isInputBlocked = phase === "searching";

    return {
        phase,
        query,
        setQuery,
        currentSource,
        isSearching,
        isAfterSearch,
        isInputBlocked,
        startSearch,
        resetToIdle,
    };
}
