import React from "react";

const baseStyles = "inline-flex items-center justify-center font-medium transition focus:outline-none";

const sizeVariants = {
  sm: "px-4 py-1 text-sm",
  md: "px-5 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const variantStyles = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
};

const Button = ({ children, size = "md", variant = "default", className = "", ...props }) => {
  return (
    <button
      className={`${baseStyles} ${sizeVariants[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
