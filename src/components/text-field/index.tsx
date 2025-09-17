import { twMerge } from "tailwind-merge";

interface TextFieldInterface {
  id: string;
  type?: string;
  placeholder?: string;
}

export const TextField = (props: TextFieldInterface) => {
  return (
    <div className="mb-6">
      <label htmlFor="password" className=" block text-white font-bold mb-2">
        Senha
      </label>
      <input
        className={twMerge(
          "w-full px-3 py-2",
          "focus:outline-none focus:ring-2 focus:ring-blue-500",
          "border border-gray-300 rounded-lg",
          "placeholder-white"
        )}
        {...props}
      />
    </div>
  );
};
