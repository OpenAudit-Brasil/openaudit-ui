"use client";

import React from "react";
import { ProjectSupportCard } from "./components/ProjectSupportCard";
import useSearchMachine from "./hooks/searchMachine";
import useAutoFocusOnIdle from "./hooks/autoFocusOnIdle";
import IconButton from "./components/Icons/IconButton";
import ClearIcon from "./components/Icons/ClearIcon";
import SearchIcon from "./components/Icons/SearchIcon";
import LoadingDots from "./components/LoadingDots";
import useEscapeToReset from "./hooks/scapeToReset";
import Link from "next/link";


export default function HomePage() {
  const {
    phase,
    query,
    setQuery,
    currentSource,
    isSearching,
    isAfterSearch,
    isInputBlocked,
    startSearch,
    resetToIdle,
  } = useSearchMachine();

  const inputRef = useAutoFocusOnIdle(phase);

  const mainClass = phase === "idle" ? "main centered" : "main searching";

  const statusId = "search-status";

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") startSearch();
    if (e.key === "Escape" && isAfterSearch) resetToIdle();
  };

  useEscapeToReset({ enabled: isAfterSearch, onEscape: resetToIdle });

  return (
    <div className="page">
      <main className={mainClass} aria-busy={isSearching}>
        {phase === "idle" && (
          <div className="logo" aria-label="OpenAudit Brasil">
            <strong>OpenAudit</strong>
            <span className="text-yellow-300">Brasil</span>
          </div>
        )}

        <div className="searchWrap">
          <div className="searchBar" role="search" aria-describedby={statusId}>
            <input
              ref={inputRef}
              className="searchInput"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Pesquisar"
              aria-label="Campo de busca"
              onKeyDown={handleKeyDown}
              readOnly={isInputBlocked}
              aria-readonly={isInputBlocked}
            />

            {isAfterSearch ? (
              <IconButton
                onClick={resetToIdle}
                label="Limpar pesquisa e voltar ao início"
              >
                <ClearIcon />
              </IconButton>
            ) : (
              <IconButton
                onClick={startSearch}
                label="Iniciar pesquisa"
                disabled={isSearching}
              >
                <SearchIcon />
              </IconButton>
            )}
          </div>

          {isAfterSearch && (
            <div
              className={phase === "searching" ? "loadingOverlay" : "loadingArea"}
              aria-live="polite"
              id={statusId}
            >
              {phase === "searching" && (
                <div className="loadingCenter">
                  <div className="loadingTitle">
                    <span className="inline-flex items-baseline">
                      <span className="text-yellow-300">Pesquisando</span>
                      <LoadingDots />
                    </span>
                  </div>
                  <div className="m-0 p-0 sourceLine">{currentSource}</div>
                </div>
              )}

              {phase === "done" && (
                <ProjectSupportCard
                  projectName="OpenAudit Brasil"
                  githubUrl="https://github.com/OpenAudit-Brasil"
                  manifestoUrl="/manifest"
                  email="comunidade@openauditbrasil.com"
                />
              )}
            </div>
          )}
        </div>
      </main>

      <footer className="footer" aria-label="Rodapé">
        <Link href="/terms">Termos</Link>
        <Link href="/privacy">Política de Privacidade</Link>
        <Link href="/manifest">Manifesto</Link>
      </footer>
    </div>
  );
}
