import ExternalLink from "../components/ExternalLink";
import DocumentIcon from "../components/Icons/DocumentIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import AlertTriangleIcon from "../components/Icons/AlertTriangleIcon";
import EyeIcon from "../components/Icons/EyeIcon";
import ScaleIcon from "../components/Icons/ScaleIcon";
import ShieldIcon from "../components/Icons/ShieldIcon";
import IconBadge from "../components/Icons/IconBadge";
import SectionCard from "../components/SectionCard";
import BackToHomeButton from "../components/BackToHomeButton";
import Footer from "../components/Footer";

export default function TermsPage() {
    return (
        <main
            className="min-h-screen bg-black px-1 pb-24 pt-10 text-white"
            aria-label="Página de Termos de Uso"
        >
            <div className="mx-auto w-full max-w-3xl">
                {/* Top bar */}
                <div className="mb-4 flex items-center justify-between gap-3">
                    <BackToHomeButton />
                    <p className="text-xs text-zinc-500">
                        Última atualização: <span className="text-zinc-300">27/02/2026</span>
                    </p>
                </div>

                {/* Header */}
                <header className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 shadow-lg backdrop-blur">
                    <p className="text-xs font-medium tracking-widest text-zinc-400">
                        TERMOS • USO RESPONSÁVEL • OPEN SOURCE
                    </p>

                    <h1 className="mt-2 text-2xl font-semibold text-white">Termos de Uso</h1>

                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                        Estes Termos descrevem regras básicas para uso do site e do software do
                        OpenAudit Brasil. O objetivo é reduzir riscos de abuso, difamação e mau uso de
                        análises baseadas em dados públicos.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <ExternalLink
                            href="https://github.com/OpenAudit-Brasil"
                            label="Repositório no GitHub"
                            icon={<GithubIcon className="h-5 w-5" />}
                        />
                        <ExternalLink
                            href="/manifest"
                            label="Ler o Manifesto (resumo)"
                            icon={<DocumentIcon className="h-5 w-5" />}
                        />
                    </div>

                    <p className="mt-4 text-xs text-zinc-400">
                        Acessibilidade: navegue com <span className="text-zinc-200">Tab</span>. Os
                        títulos são estruturados para leitores de tela.
                    </p>
                </header>

                {/* Sections */}
                <div className="mt-6 grid gap-4">
                    <SectionCard
                        title="1) Aceitação"
                        subtitle="Ao acessar este site, você concorda com estas regras."
                        icon={
                            <IconBadge title="Aceitação">
                                <ScaleIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <p className="text-zinc-300">
                            Se você não concordar com estes Termos, não utilize o site nem o software.
                            Mudanças relevantes podem ocorrer ao longo do tempo; recomenda-se verificar
                            a versão atual periodicamente.
                        </p>
                    </SectionCard>

                    <SectionCard
                        title="2) Natureza do conteúdo"
                        subtitle="O OpenAudit Brasil produz sinais e análises, não acusações."
                        icon={
                            <IconBadge title="Natureza do conteúdo">
                                <EyeIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Resultados devem ser interpretados como <span className="text-zinc-200">anomalias</span>,{" "}
                                <span className="text-zinc-200">padrões atípicos</span> ou{" "}
                                <span className="text-zinc-200">divergências documentais</span>.
                            </li>
                            <li className="text-zinc-300">
                                • Nenhuma saída do sistema deve ser tratada como “prova” de crime ou culpa.
                            </li>
                            <li className="text-zinc-300">
                                • Toda conclusão relevante exige verificação manual e contexto.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="3) Uso responsável"
                        subtitle="Regras para reduzir risco de abuso, perseguição e difamação."
                        icon={
                            <IconBadge title="Uso responsável">
                                <ShieldIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Você se compromete a não usar o projeto para assédio, perseguição, doxxing
                                ou ataques pessoais.
                            </li>
                            <li className="text-zinc-300">
                                • Você não deve apresentar resultados como acusações ou imputações de
                                conduta ilícita.
                            </li>
                            <li className="text-zinc-300">
                                • Se publicar análises, inclua contexto, limitações e fonte dos dados
                                quando aplicável.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="4) Limitações e isenção"
                        subtitle="Sem garantias; use por sua conta e risco."
                        icon={
                            <IconBadge title="Limitações">
                                <AlertTriangleIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • O site e o software são fornecidos “como estão”, sem garantias de
                                disponibilidade, completude ou acurácia.
                            </li>
                            <li className="text-zinc-300">
                                • Dados públicos podem conter erros, atrasos, inconsistências e mudanças de
                                formato.
                            </li>
                            <li className="text-zinc-300">
                                • O OpenAudit Brasil não se responsabiliza por decisões tomadas com base
                                exclusiva nos resultados.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="5) Propriedade intelectual e licenças"
                        subtitle="Código open source; conteúdo e marca seguem regras do repositório."
                        icon={
                            <IconBadge title="Licenças">
                                <DocumentIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <p className="text-zinc-300">
                            O código-fonte e artefatos do projeto seguem a licença definida nos repositórios
                            oficiais. Para contribuições, verifique também o guia de contribuição e as
                            políticas de segurança, quando existirem.
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <ExternalLink
                                href="https://github.com/OpenAudit-Brasil"
                                label="Ver licença no GitHub"
                                icon={<GithubIcon className="h-5 w-5" />}
                            />
                            <ExternalLink
                                href="/privacy"
                                label="Política de Privacidade"
                                icon={<DocumentIcon className="h-5 w-5" />}
                            />
                        </div>
                    </SectionCard>

                    <SectionCard
                        title="6) Contato"
                        subtitle="Para dúvidas, pedidos e reporte de abuso."
                        icon={
                            <IconBadge title="Contato">
                                <ShieldIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <div className="rounded-xl border border-zinc-800 bg-zinc-950/30 p-4">
                            <p className="text-xs font-medium text-zinc-400">E-mail</p>
                            <a
                                href="mailto:comunidade@openauditbrasil.com"
                                className="mt-1 inline-block text-sm font-semibold text-white underline decoration-red-700/60 underline-offset-4 hover:text-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                            >
                                comunidade@openauditbrasil.com
                            </a>
                            <p className="mt-2 text-xs text-zinc-400">
                                Se o tema envolver segurança, abuso ou risco jurídico, descreva o cenário e
                                inclua passos para reprodução quando aplicável.
                            </p>
                        </div>
                    </SectionCard>
                </div>
                <Footer
                    text="Estes Termos são um documento básico inicial e devem evoluir com orientação jurídica, alinhados ao Manifesto e às políticas do repositório."
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