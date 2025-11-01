function Link({
  href = "#",
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const baseStyles = "transition hover:text-teal";

  const variants = {
    default: "text-black font-semibold text-sm",
    footer: "text-black font-semibold text-sm",
    small: "text-xs text-black font-semibold",
    muted: "text-darkGray text-sm",
    white: "text-white font-inter font-semibold text-sm",
  };

  return (
    <a
      href={href}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

export default Link;
