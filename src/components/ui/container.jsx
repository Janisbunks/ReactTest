export default function Container({ children, size = "lg", className = "" }) {
  const sizes = {
    sm: "max-w-[707px]",
    md: "max-w-[800px]",
    xl: "max-w-[1392px]",
  };

  return (
    <div className={`mx-auto px-6 md:px-4 ${sizes[size]} ${className}`}>
      {children}
    </div>
  );
}
