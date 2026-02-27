export default function ScaleIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M12 3v18" />
            <path d="M5 7h14" />
            <path d="M7 7l-3 6h6l-3-6z" />
            <path d="M17 7l-3 6h6l-3-6z" />
        </svg>
    );
}
