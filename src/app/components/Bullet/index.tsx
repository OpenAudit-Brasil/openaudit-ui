export default function Bullet({
    icon,
    title,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <li className="flex gap-3">
            <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950/30 text-zinc-100">
                {icon}
            </span>
            <div className="min-w-0">
                <p className="font-medium text-white">{title}</p>
                <p className="mt-1 text-zinc-300">{children}</p>
            </div>
        </li>
    );
}
