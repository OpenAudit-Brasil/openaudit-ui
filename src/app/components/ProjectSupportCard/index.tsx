"use client";

import { LinkItem } from "app/types";
import React from "react";
import DocumentIcon from "../Icons/DocumentIcon";
import GithubIcon from "../Icons/GithubIcon";
import MailIcon from "../Icons/MailIcon";

export function ProjectSupportCard({
    projectName = "OpenAudit Brasil",
    githubUrl = "https://github.com/OpenAudit-Brasil",
    manifestoUrl = "https://openauditbrasil.com/manifest",
    email = "comunidade@openauditbrasil.com",
}: {
    projectName?: string;
    githubUrl?: string;
    manifestoUrl?: string;
    email?: string;
}) {
    const links: LinkItem[] = [
        {
            label: "Repositório no GitHub",
            href: githubUrl,
            icon: <GithubIcon className="h-5 w-5" />,
        },
        {
            label: "Manifesto",
            href: manifestoUrl,
            icon: <DocumentIcon className="h-5 w-5" />,
        },
    ];

    return (
        <section
            aria-label="Informações do projeto"
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-lg backdrop-blur"
        >
            <div className="flex items-end justify-between gap-4 w-full mb-4">
                <p className="text-xs font-medium tracking-widest text-zinc-400">
                    RESULTADO
                </p>
                <span
                    className="shrink-0 rounded-full border border-red-900/60 bg-red-950/30 px-3 py-1 text-xs font-semibold text-red-300"
                    aria-label="Status"
                >
                    Em desenvolvimento
                </span>
            </div>
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <h2 className="mt-1 text-lg font-semibold text-white">
                        {projectName}
                    </h2>
                    <p className="mt-2 text-sm text-zinc-300">
                        Página em desenvolvimento. Se você quer acelerar isso, participe da
                        comunidade e ajude a construir de forma aberta e auditável.
                    </p>
                </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {links.map((item) => (
                    <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/30 p-3 text-sm text-zinc-200 transition hover:border-red-700/60 hover:bg-zinc-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-400/90 text-zinc-900 transition
                 group-hover:border-red-600 group-hover:bg-white group-hover:text-red-600">
                            {item.icon}
                        </span>
                        <span className="min-w-0">
                            <span className="block font-medium text-white">{item.label}</span>
                            <span className="block truncate text-xs text-zinc-400">
                                {item.href}
                            </span>
                        </span>
                    </a>
                ))}
            </div>

            <div className="mt-4 flex flex-col gap-2 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-600 bg-zinc-400/90 text-zinc-900 transition
                 group-hover:border-red-600 group-hover:bg-white group-hover:text-red-600">
                        <MailIcon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                        <p className="text-xs font-medium text-zinc-400">Contato</p>
                        <a
                            href={`mailto:${email}`}
                            className="text-sm font-semibold text-white underline decoration-red-700/60 underline-offset-4 hover:text-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        >
                            {email}
                        </a>
                    </div>
                </div>

                <div className="text-xs text-zinc-400">
                    Dica: pressione <span className="text-zinc-200">Esc</span> para limpar
                    e voltar.
                </div>
            </div>
        </section>
    );
}
