import React from "react";

export default function Button({
  type,
  children,
  isLoading = false,
  disabled = false,
  className = "",
  icon,
  variant = "",
  ...props
}) {
  const variantClasses = {
    primary: `
      text-white bg-black
      transition-all duration-200 ease-out
      hover:shadow-md
    `,
    secondary: `
      bg-white text-[#0057ff] 
      hover:bg-[#0057ff] hover:text-white
      transition-colors duration-300
    `,

    text: "text-heading text-[14px] font-semibold hover:underline",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`
    ${variantClasses[variant]} 
    ${className}

    w-40 sm:w-[180px] md:w-48
    h-12 sm:h-[52px] md:h-12
    rounded
    font-semibold tracking-wide 
    text-sm lg:text-[15px]
    flex items-center justify-center 
    cursor-pointer

    transition-all duration-200 ease-out
    hover:shadow-lg
    active:scale-95

    disabled:opacity-60
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:hover:shadow-none
  `}
      {...props}
    >
      {isLoading ? "Loading..." : children}
      {icon && icon}
    </button>

  );
}
