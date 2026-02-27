import Bullet from "../components/Bullet";
import ExternalLink from "../components/ExternalLink";
import AlertTriangleIcon from "../components/Icons/AlertTriangleIcon";
import DocumentIcon from "../components/Icons/DocumentIcon";
import EyeIcon from "../components/Icons/EyeIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import IconBadge from "../components/Icons/IconBadge";
import NetworkIcon from "../components/Icons/NetworkIcon";
import ScaleIcon from "../components/Icons/ScaleIcon";
import ShieldIcon from "../components/Icons/ShieldIcon";
import SectionCard from "../components/SectionCard";
import InternalLink from "../components/InternalLink";
import BackToHomeButton from "../components/BackToHomeButton";
import Footer from "../components/Footer";

export default function ManifestPage() {
    return (
        <main
            className="min-h-screen bg-black px-1 pb-24 pt-10 text-white"
            aria-label="Página do Manifesto"
        >
            <div className="mx-auto w-full max-w-3xl">
                <div className="mb-4">
                    <BackToHomeButton />
                </div>
                {/* Header */}
                <header className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-lg backdrop-blur">
                    <p className="text-xs font-medium tracking-widest text-zinc-400">
                        OPEN SOURCE • TRANSPARÊNCIA • ACCOUNTABILITY
                    </p>

                    <h1 className="mt-2 text-2xl font-semibold text-white">
                        Manifesto do OpenAudit Brasil
                    </h1>

                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed text-justify">
                        O OpenAudit Brasil é uma iniciativa open source para fortalecer a
                        transparência pública com responsabilidade: cruzar bases abertas,
                        identificar inconsistências estruturais e produzir sinais
                        auditáveis — sem transformar estatística em acusação.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <ExternalLink
                            href="https://github.com/OpenAudit-Brasil"
                            label="Repositório no GitHub"
                            icon={<GithubIcon className="h-5 w-5" />}
                        />
                        <InternalLink
                            href="/manifest"
                            label="Versão completa do Manifesto"
                            icon={<DocumentIcon className="h-5 w-5" />}
                        />
                    </div>
                </header>

                {/* Sections */}
                <div className="mt-6 grid gap-4 text-justify">
                    <SectionCard
                        title="Nossa missão"
                        subtitle="Criar infraestrutura pública, auditável e juridicamente defensável para análise de dados governamentais."
                        icon={
                            <IconBadge title="Missão">
                                <ShieldIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Transformar dados dispersos em análises rastreáveis e
                                reproduzíveis.
                            </li>
                            <li className="text-zinc-300">
                                • Ajudar jornalistas, pesquisadores e cidadãos a priorizar
                                investigações manuais com base em sinais técnicos.
                            </li>
                            <li className="text-zinc-300">
                                • Incentivar cultura de transparência e prestação de contas no
                                Estado Democrático de Direito.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="Princípios inegociáveis"
                        subtitle="O projeto existe para proteger o interesse público — e precisa ser seguro para não virar arma."
                        icon={
                            <IconBadge title="Princípios">
                                <ScaleIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-4" role="list">
                            <Bullet
                                icon={<EyeIcon className="h-4 w-4" />}
                                title="Explicabilidade e rastreabilidade"
                            >
                                Cada resultado precisa apontar origem do dado, transformações e
                                método usado para chegar ao sinal.
                            </Bullet>

                            <Bullet
                                icon={<NetworkIcon className="h-4 w-4" />}
                                title="Separação entre análise e alegação"
                            >
                                O sistema produz <span className="text-zinc-200">anomalias</span>,{" "}
                                <span className="text-zinc-200">divergências documentais</span> e{" "}
                                <span className="text-zinc-200">padrões atípicos</span>. Nunca
                                “culpa”.
                            </Bullet>

                            <Bullet
                                icon={<AlertTriangleIcon className="h-4 w-4" />}
                                title="Minimização de danos"
                            >
                                Qualquer funcionalidade que aumente risco de perseguição,
                                difamação ou abuso deve ser tratada como risco crítico de
                                projeto.
                            </Bullet>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="O que o projeto NÃO é"
                        subtitle="Limites claros para reduzir risco jurídico e político."
                        icon={
                            <IconBadge title="Limites">
                                <AlertTriangleIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Não é ferramenta de acusação automática.
                            </li>
                            <li className="text-zinc-300">
                                • Não é plataforma de exposição de pessoas.
                            </li>
                            <li className="text-zinc-300">
                                • Não é substituto de investigação jornalística, auditoria formal
                                ou devido processo legal.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="Como participar"
                        subtitle="Contribuições técnicas e não técnicas são bem-vindas, desde que respeitem o código de conduta."
                        icon={
                            <IconBadge title="Participar">
                                <NetworkIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <div className="grid gap-3 sm:grid-cols-2" role="list">
                            <ExternalLink
                                href="https://github.com/OpenAudit-Brasil"
                                label="Acompanhar issues e PRs"
                                icon={<GithubIcon className="h-5 w-5" />}
                            />
                            <InternalLink
                                href="/manifest"
                                label="Ler o Manifesto completo"
                                icon={<DocumentIcon className="h-5 w-5" />}
                            />
                        </div>

                        <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                            <p className="text-xs font-medium text-zinc-400">Contato</p>
                            <a
                                href="mailto:comunidade@openauditbrasil.com"
                                className="mt-1 inline-block text-sm font-semibold text-white underline decoration-red-700/60 underline-offset-4 hover:text-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                                comunidade@openauditbrasil.com
                            </a>
                            <p className="mt-2 text-xs text-zinc-400">
                                Se você é de área jurídica, dados, jornalismo, segurança ou
                                engenharia e quer ajudar a reduzir riscos do projeto, este é um
                                ponto crítico de contribuição.
                            </p>
                        </div>
                    </SectionCard>
                </div>

                {/* Footer note */}

                <Footer
                    text="Este manifesto é um compromisso público com transparência, ética e responsabilidade. Atualizações devem ser registradas com histórico e justificativa."
                    links={[
                        { href: "/terms", label: "Termos" },
                        { href: "/privacy", label: "Política de Privacidade" },
                        { href: "/manifest", label: "Manifesto" }
                    ]}
                />
            </div>
        </main>
    );
}
