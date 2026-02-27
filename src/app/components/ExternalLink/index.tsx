import IconBadge from "../Icons/IconBadge";

export default function ExternalLink({
    href,
    label,
    icon,
}: {
    href: string;
    label: string;
    icon: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/30 p-3 text-sm text-zinc-200 transition hover:border-red-700/60 hover:bg-zinc-950/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
            <IconBadge title={label}>{icon}</IconBadge>
            <span className="min-w-0">
                <span className="block font-medium text-white">{label}</span>
                <span className="block truncate text-xs text-zinc-400">{href}</span>
            </span>
        </a>
    );
}
