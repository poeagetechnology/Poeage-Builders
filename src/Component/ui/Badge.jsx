// components/ui/Badge.jsx
export default function Badge({ children, variant = "default" }) {
  const styles = {
    default: "bg-gray-100 text-gray-700",
    primary: "bg-amber-100 text-amber-700",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${styles[variant]}`}
    >
      {children}
    </span>
  );
}