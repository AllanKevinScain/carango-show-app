import React from "react";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {
  const {
    variant = "solid",
    className,
    disabled = false,
    children,
    isLoading = false,
    ...restprops
  } = props;

  return (
    <button
      disabled={disabled}
      className={twMerge(
        "inline-flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        " rounded-lg font-medium  transition-colors",
        variant === "solid" &&
          "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500",
        variant === "outline" &&
          "border-2 border-indigo-600 bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
        variant === "ghost" &&
          "bg-transparent text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500",
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...restprops}
    >
      {isLoading ? (
        <FaTruckLoading className="animate-spin" size={30} />
      ) : (
        children
      )}
      {children}
    </button>
  );
};
