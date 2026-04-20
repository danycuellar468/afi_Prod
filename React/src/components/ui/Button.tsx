interface ButtonProps {
    variant: "primary" | "secondary" | "destructive" | "success" | "gold";
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
    disabled?: boolean;
}

export default function Button({ variant, children, onClick, className, disabled }: ButtonProps) {
    function getStyle() {
        switch (variant) {
            case "primary":
                return "text-white bg-slate-900 border-slate-900 enabled:hover:bg-slate-800 enabled:active:bg-slate-950";
            case "secondary":
                return "text-slate-900 border-slate-900 bg-white enabled:hover:bg-slate-900 enabled:hover:text-white enabled:active:bg-slate-950";
            case "destructive":
                return "text-white bg-destructive border-transparent enabled:active:bg-destructive-dark";
            case "success":
                return "text-white bg-emerald-600 border-emerald-600 enabled:hover:bg-emerald-500 enabled:active:bg-emerald-700";
            case "gold":
                return "font-anton text-slate-900 border-amber-400 bg-amber-300 enabled:hover:bg-amber-400 enabled:hover:border-amber-400 enabled:active:bg-amber-500";
            default:
                return "";
        }
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-4 py-2 rounded-2xl font-medium border-4 shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${getStyle()} ${className ?? ""}`}
        >
            {children}
        </button>
    );
}