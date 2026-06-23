// components/ui/Button.jsx
export default function Button({
  children,
  variant = "primary",
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  const styles = {
    primary:
      "bg-gradient-to-r from-yellow-400 to-amber-500  text-white hover:bg-amber-700",
    secondary:
      "border border-gray-300 text-gray-700 hover:bg-gray-50",
    ghost:
      "text-gray-700 hover:bg-gray-100",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center gap-2
        px-5 py-2.5 rounded-lg font-semibold text-sm
        transition disabled:opacity-60 disabled:cursor-not-allowed
        ${styles[variant]} ${className}
      `}
      {...props}
    >
      {loading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
      {children}
    </button>
  );
}