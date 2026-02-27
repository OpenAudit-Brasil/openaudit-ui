export default function SectionCard({
    title,
    subtitle,
    icon,
    children,
}: {
    title: string;
    subtitle?: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    const titleId = `${title.replace(/\s+/g, "-").toLowerCase()}-title`;
    return (
        <section
            aria-labelledby={titleId}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 shadow-lg backdrop-blur"
        >
            <div className="flex items-start gap-4">
                <div className="group shrink-0">{icon}</div>
                <div className="min-w-0">
                    <h2 id={titleId} className="text-base font-semibold text-white">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="mt-1 text-sm text-zinc-300 leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                    <div className="mt-4 text-sm text-zinc-200 leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </section>
    );
}
