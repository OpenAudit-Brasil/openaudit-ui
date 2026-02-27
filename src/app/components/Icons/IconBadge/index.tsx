export default function IconBadge({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    return (
        <span
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-600 bg-zinc-200/90 text-zinc-900 transition group-hover:border-red-600 group-hover:bg-white group-hover:text-red-600"
            aria-hidden="true"
            title={title}
        >
            {children}
        </span>
    );
}
