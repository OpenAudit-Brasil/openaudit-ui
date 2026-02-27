import ArrowLeftIcon from "../Icons/ArrowLeftIcon";

export default function BackToHomeButton({
    href = "/",
    label = "Voltar para a página inicial",
    text = "Voltar",
    showIcon = false,
}: {
    href?: string;
    label?: string;
    text?: string;
    showIcon?: boolean;
}) {
    return (
        <a
            href={href}
            aria-label={label}
            className="group inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/30 px-6 py-4 text-sm font-medium text-white transition
                 hover:border-red-700/60 hover:bg-zinc-950/60
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
            {showIcon && <span
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-600 bg-zinc-200/90 text-zinc-900 transition
                   group-hover:border-red-600 group-hover:bg-white group-hover:text-red-600"
                aria-hidden="true"
            >
                <ArrowLeftIcon className="h-5 w-5" />
            </span>}

            <span className="leading-none">{text}</span>
        </a>
    );
}
