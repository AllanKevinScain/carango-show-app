import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface TextFieldInterface<T extends FieldValues> {
  id: Path<T>;
  control: Control<T>;
  type?: string;
  placeholder?: string;
  label?: string;
  classNameInput?: string;
}

export const TextField = <T extends FieldValues>(
  props: TextFieldInterface<T>
) => {
  const { label, id, control, classNameInput, ...restProps } = props;

  return (
    <Controller
      name={id}
      control={control}
      defaultValue={"" as PathValue<T, Path<T>>}
      render={({ field, fieldState }) => {
        const { error } = fieldState;
        const hasError = !!error?.message;

        return (
          <div className="flex flex-col gap-2 w-full">
            {label && (
              <label htmlFor={id} className="block text-white font-bold">
                {label}
              </label>
            )}
            <input
              {...field}
              id={id}
              className={twMerge(
                "w-full px-3 py-2",
                "focus:outline-none focus:ring-2",
                "text-white",
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500",
                "border rounded-lg",
                "placeholder-white",
                classNameInput
              )}
              {...restProps}
            />
            {hasError && (
              <span className="text-red-500 text-sm">{error.message}</span>
            )}
          </div>
        );
      }}
    />
  );
};
