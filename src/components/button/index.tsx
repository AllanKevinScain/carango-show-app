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
      type="button"
      disabled={disabled}
      className={twMerge(
        "flex items-center justify-center",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        "rounded-lg font-medium w-full",
        "transition-colors",
        variant === "solid" && "bg-blue-600 text-white hover:bg-blue-700",
        variant === "outline" &&
          "border-2 border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50",
        variant === "ghost" && "bg-transparent text-blue-600 hover:bg-blue-50",
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
    </button>
  );
};
