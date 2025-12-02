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
    primary: "text-white bg-black hover:bg-neutral-900",
    secondary: "bg-white text-gray-600 hover:bg-gray-100",
    text: "text-heading text-[14px] font-semibold hover:underline",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={`
        ${variantClasses[variant]} 
        ${className}
        w-[160px] sm:w-[180px] md:w-[208px]
        h-[48px] sm:h-[52px] md:h-[56px]
        rounded
        font-semibold tracking-wide 
        text-sm sm:text-base
        flex items-center justify-center 
        cursor-pointer
        transition-all
      `}
      {...props}
    >
      {isLoading ? "Loading..." : children}
      {icon && icon}
    </button>
  );
}
