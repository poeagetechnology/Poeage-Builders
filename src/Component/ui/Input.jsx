// components/ui/Input.jsx
export default function Input({
  label,
  error,
  className = "",
  ...props
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <input
        className={`
          w-full px-4 py-2.5 border rounded-lg text-sm
          border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500
          outline-none transition
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}