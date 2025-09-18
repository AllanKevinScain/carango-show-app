import { twMerge } from "tailwind-merge";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const TextField = ({
  label,
  error,
  className,
  ...props
}: TextFieldProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={props.id} className="block text-white font-bold mb-2">
        {label}
      </label>

      <input
        {...props}
        className={twMerge(
          "w-full px-3 py-2 border border-gray-300 rounded-lg",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "placeholder-white",
          error && "border-red-500 focus:ring-red-400",
          className
        )}
      />

      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};
