function Link({
  href = "#",
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const baseStyles = `transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm
    active:opacity-70`;

  const variants = {
    default: "text-black font-semibold text-sm hover:text-teal focus:ring-teal",
    footer: "text-black font-semibold text-sm hover:text-teal focus:ring-teal",
    small: "text-xs text-black font-semibold hover:text-teal focus:ring-teal",
    muted: "text-darkGray text-sm hover:text-black focus:ring-teal",
    white: "text-white font-inter font-semibold text-sm hover:opacity-80 focus:ring-white focus:ring-offset-teal",
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
