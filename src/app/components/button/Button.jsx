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

    w-40 sm:min-w-[190px] md:min-w-50
    h-[50px] sm:h-[52px] md:h-14
    rounded
    font-semibold tracking-wide 
    text-sm lg:text-base
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
      {isLoading ? "" : children}
      {icon && icon}
    </button>

  );
}
