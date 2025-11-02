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
      className={`px-5 py-3 text-white uppercase font-bold font-montserrat rounded-full cursor-pointer
        transition-all duration-200 ease-in-out
        hover:shadow-lg hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white
        active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        ${color} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
