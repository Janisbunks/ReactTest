function Button({
  children,
  onClick,
  className = '',
  color = 'bg-teal',
  ...props
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 text-white uppercase font-bold font-montserrat rounded-full cursor-pointer ${color} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
