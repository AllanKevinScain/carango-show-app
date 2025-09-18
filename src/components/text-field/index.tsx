import { twMerge } from "tailwind-merge";

interface TextFieldInterface {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
}

export const TextField = (props: TextFieldInterface) => {
  const { label, ...restProps } = props;
  return (
    <div className={twMerge("flex flex-col gap-2", "w-full")}>
      {label && (
        <label htmlFor="password" className=" block text-white font-bold">
          {label}
        </label>
      )}
      <input
        className={twMerge(
          "w-full px-3 py-2",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "border border-gray-300 rounded-lg",
          "placeholder-white"
        )}
        {...restProps}
      />
    </div>
  );
};
