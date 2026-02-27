import Link from "next/link";

export type FooterProps = {
    text?: string;
    links?: { href: string; label: string }[];
};

export default function Footer({ text, links }: FooterProps) {
    return (
        <footer className="mt-8 text-xs text-zinc-500 p-4 border-t border-zinc-800 rounded-lg">
            {text && <p>{text}</p>}
            <br />
            <div className="flex flex-wrap gap-4 justify-center">
                {links && links?.map?.((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        target="_self"
                        rel="noreferrer"
                        className="text-zinc-400 hover:text-zinc-200 transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </footer>
    )
}
