"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Phase = "idle" | "searching" | "done";

const SOURCES = ["Receita Federal", "gov.br", "IBGE", "IPEA", "TSE"] as const;

function LoadingDots() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setCount((c) => (c + 1) % 4); // 0..3
    }, 450);
    return () => window.clearInterval(id);
  }, []);

  return <>{Array(count).fill(".").join("")}</>;
}

export default function HomePage() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [query, setQuery] = useState("");
  const [sourceIndex, setSourceIndex] = useState(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const currentSource = useMemo(() => {
    return SOURCES[Math.min(sourceIndex, SOURCES.length - 1)];
  }, [sourceIndex]);

  const startSearch = () => {
    if (phase === "searching") return;

    // MVP: até aceita query vazia (você decide depois se bloqueia)
    setPhase("searching");
    setSourceIndex(0);
  };

  useEffect(() => {
    if (phase !== "searching") return;

    let idx = 0;
    const intervalId = window.setInterval(() => {
      idx += 1;
      if (idx >= SOURCES.length) {
        window.clearInterval(intervalId);
        setPhase("done");
        return;
      }
      setSourceIndex(idx);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [phase]);

  // UX: foco no input quando volta pra idle
  useEffect(() => {
    if (phase === "idle") inputRef.current?.focus();
  }, [phase]);

  const mainClass = phase === "idle" ? "main centered" : "main searching";

  return (
    <div className="page">
      <main className={mainClass}>
        {phase === "idle" && (
          <div className="logo" aria-label="OpenAudit Brasil">
            <strong>OpenAudit</strong>
            <span>Brasil</span>
          </div>
        )}

        <div className="searchWrap">
          <div className="searchBar" role="search">
            <input
              ref={inputRef}
              className="searchInput"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar registro…"
              aria-label="Campo de busca"
              onKeyDown={(e) => {
                if (e.key === "Enter") startSearch();
              }}
            />

            <button
              className="iconBtn"
              onClick={startSearch}
              aria-label="Iniciar pesquisa"
              type="button"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7"></circle>
                <path d="M20 20L17 17"></path>
              </svg>
            </button>
          </div>

          {(phase === "searching" || phase === "done") && (
            <div className="loadingArea" aria-live="polite">
              {phase === "searching" && (
                <>
                  <div className="loadingTitle">
                    Pesquisando<LoadingDots />
                  </div>
                  <div className="sourceLine">{currentSource}</div>
                </>
              )}

              {phase === "done" && (
                <div className="resultBox">
                  página em desenvolvimento. Apoie a causa{" "}
                  <strong>comunidade@openauditbrasil.com</strong>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="footer" aria-label="Rodapé">
        <a href="/terms">Termos</a>
        <a href="/privacy">Política de Privacidade</a>
      </footer>
    </div>
  );
}
