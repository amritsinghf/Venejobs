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
    primary: "text-white w-40 rounded bg-primary hover:bg-blue-800",
    secondary: "bg-gray-200 text-black hover:bg-gray-300",
    text: "text-heading text-[14px] font-semibold hover:underline",
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={` ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {isLoading ? "Loading..." : children}
      {icon && icon}
    </button>
  );
}
  