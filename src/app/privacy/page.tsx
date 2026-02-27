import ExternalLink from "../components/ExternalLink";
import DocumentIcon from "../components/Icons/DocumentIcon";
import GithubIcon from "../components/Icons/GithubIcon";
import ShieldIcon from "../components/Icons/ShieldIcon";
import EyeIcon from "../components/Icons/EyeIcon";
import AlertTriangleIcon from "../components/Icons/AlertTriangleIcon";
import IconBadge from "../components/Icons/IconBadge";
import SectionCard from "../components/SectionCard";
import BackToHomeButton from "../components/BackToHomeButton";
import Footer from "../components/Footer";

export default function PrivacyPage() {
    return (
        <main
            className="min-h-screen bg-black px-1 pb-24 pt-10 text-white"
            aria-label="Página de Política de Privacidade"
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
                        PRIVACIDADE • DADOS • TRANSPARÊNCIA
                    </p>

                    <h1 className="mt-2 text-2xl font-semibold text-white">
                        Política de Privacidade
                    </h1>

                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                        Esta Política descreve como o OpenAudit Brasil trata dados
                        relacionados ao uso do site e do software. O projeto prioriza
                        minimização de coleta, transparência metodológica e responsabilidade
                        no uso de dados públicos.
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <ExternalLink
                            href="https://github.com/OpenAudit-Brasil"
                            label="Repositório no GitHub"
                            icon={<GithubIcon className="h-5 w-5" />}
                        />
                        <ExternalLink
                            href="/terms"
                            label="Termos de Uso"
                            icon={<DocumentIcon className="h-5 w-5" />}
                        />
                    </div>

                    <p className="mt-4 text-xs text-zinc-400">
                        Acessibilidade: navegue com <span className="text-zinc-200">Tab</span>.
                        Estrutura semântica compatível com leitores de tela.
                    </p>
                </header>

                {/* Sections */}
                <div className="mt-6 grid gap-4">
                    <SectionCard
                        title="1) Dados coletados"
                        subtitle="Coletamos o mínimo necessário para operação básica."
                        icon={
                            <IconBadge title="Dados coletados">
                                <EyeIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Dados técnicos de navegação (ex.: logs de acesso, IP,
                                navegador) para segurança e diagnóstico.
                            </li>
                            <li className="text-zinc-300">
                                • Informações enviadas voluntariamente por e-mail ou formulário
                                (quando aplicável).
                            </li>
                            <li className="text-zinc-300">
                                • Não coletamos dados sensíveis sem finalidade clara e base
                                legal adequada.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="2) Uso de dados públicos"
                        subtitle="O projeto utiliza bases públicas, mas com responsabilidade."
                        icon={
                            <IconBadge title="Dados públicos">
                                <ShieldIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Utilizamos dados oficialmente disponibilizados por órgãos
                                públicos.
                            </li>
                            <li className="text-zinc-300">
                                • A disponibilidade pública não elimina a necessidade de uso
                                ético e contextualizado.
                            </li>
                            <li className="text-zinc-300">
                                • Resultados devem ser interpretados como sinais estatísticos,
                                não como imputações pessoais.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="3) Finalidade do tratamento"
                        subtitle="Segurança, melhoria do serviço e transparência."
                        icon={
                            <IconBadge title="Finalidade">
                                <DocumentIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Garantir funcionamento técnico do site.
                            </li>
                            <li className="text-zinc-300">
                                • Melhorar experiência do usuário e estabilidade.
                            </li>
                            <li className="text-zinc-300">
                                • Prevenir abuso, fraude ou uso indevido da plataforma.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="4) Compartilhamento"
                        subtitle="Não comercializamos dados pessoais."
                        icon={
                            <IconBadge title="Compartilhamento">
                                <AlertTriangleIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <p className="text-zinc-300">
                            Não vendemos nem comercializamos dados pessoais. Dados podem ser
                            compartilhados apenas quando exigido por obrigação legal ou para
                            proteção da integridade técnica e jurídica do projeto.
                        </p>
                    </SectionCard>

                    <SectionCard
                        title="5) Segurança"
                        subtitle="Medidas técnicas e organizacionais proporcionais."
                        icon={
                            <IconBadge title="Segurança">
                                <ShieldIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <ul className="space-y-3" role="list">
                            <li className="text-zinc-300">
                                • Controle de acesso a repositórios e infraestrutura.
                            </li>
                            <li className="text-zinc-300">
                                • Monitoramento básico de logs para prevenção de abuso.
                            </li>
                            <li className="text-zinc-300">
                                • Atualizações regulares de dependências.
                            </li>
                        </ul>
                    </SectionCard>

                    <SectionCard
                        title="6) Direitos do titular"
                        subtitle="Quando aplicável, conforme legislação vigente (ex.: LGPD)."
                        icon={
                            <IconBadge title="Direitos">
                                <EyeIcon className="h-5 w-5" />
                            </IconBadge>
                        }
                    >
                        <p className="text-zinc-300">
                            Caso haja tratamento de dados pessoais identificáveis sob
                            responsabilidade direta do projeto, titulares podem solicitar
                            informações, correções ou esclarecimentos pelo canal de contato.
                        </p>
                    </SectionCard>

                    <SectionCard
                        title="7) Contato"
                        subtitle="Dúvidas ou solicitações relacionadas a privacidade."
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
                                Descreva o contexto da solicitação e inclua informações
                                suficientes para análise.
                            </p>
                        </div>
                    </SectionCard>
                </div>

                <Footer
                    text="Esta política é uma versão inicial e deve evoluir com revisão jurídica especializada, especialmente quanto à LGPD e normas aplicáveis."
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