export default function Button({
    children,
    className = "",
    onClick,
    type = "button",
    disabled = false,
}) {
    return (
        <button
            className={className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
}