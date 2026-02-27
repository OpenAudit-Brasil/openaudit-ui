export type Phase = "idle" | "searching" | "done";

export const SOURCES = ["Receita Federal", "gov.br", "IBGE", "IPEA", "TSE"] as const;

export type LinkItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};
