export default function AlertTriangleIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M12 3l10 18H2L12 3z" />
            <path d="M12 9v5" />
            <path d="M12 17h.01" />
        </svg>
    );
}
