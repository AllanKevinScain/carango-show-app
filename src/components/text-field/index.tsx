import { twMerge } from "tailwind-merge";

interface TextFieldInterface {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
}

export const TextField = (props: TextFieldInterface) => {
  const { label, error, id, ...restProps } = props;

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label htmlFor={id} className="block text-white font-bold">
          {label}
        </label>
      )}
      <input
        id={id}
        className={twMerge(
          "w-full px-3 py-2",
          "focus:outline-none focus:ring-2",
          error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500",
          "border rounded-lg",
          "placeholder-white"
        )}
        {...restProps}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};
