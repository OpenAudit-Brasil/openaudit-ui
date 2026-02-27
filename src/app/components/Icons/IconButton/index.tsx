export default function IconButton({
    onClick,
    label,
    disabled,
    children,
}: {
    onClick: () => void;
    label: string;
    disabled?: boolean;
    children: React.ReactNode;
}) {
    return (
        <button
            className="iconBtn"
            onClick={onClick}
            aria-label={label}
            type="button"
            disabled={disabled}
        >
            {children}
        </button>
    );
}
