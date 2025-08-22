export default function Button({
  children,
  variant = "default",
  size = "md",
  className = "",
  ...props
}) {
  // base style
  let styles =
    "inline-flex items-center justify-center font-mono font-medium transition-colors duration-150 rounded-xs border focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  // variants
  if (variant === "default") {
    styles += "bg-[var(--fg)]";
  }
  if (variant === "outline") {
    styles +=
      " bg-transparent text-[var(--fg)] border-[var(--border)] hover:bg-[var(--fg)] hover:text-[var(--bg)]";
  }
  if (variant === "ghost") {
    styles +=
      " bg-transparent text-[var(--fg)] border-transparent hover:bg-[var(--fg)]/10";
  }

  // sizes
  if (size === "sm") styles += " px-2 py-1 text-xs";
  if (size === "md") styles += " px-4 py-2 text-sm";
  if (size === "lg") styles += " px-6 py-3 text-base";

  return (
    <button className={`${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
