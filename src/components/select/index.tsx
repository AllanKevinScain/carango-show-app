import type { ComponentProps } from "react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type PathValue,
} from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface SelectFieldProps<T extends FieldValues> {
  id: Path<T>;
  control: Control<T>;
  options: Option[];
  label?: string;
  placeholder?: string;
  classNameSelect?: ComponentProps<"select">["className"];
  classNameLabel?: ComponentProps<"label">["className"];
  disabled?: boolean;
}

export const Select = <T extends FieldValues>(props: SelectFieldProps<T>) => {
  const {
    id,
    control,
    label,
    options,
    placeholder = "Selecione...",
    classNameSelect,
    classNameLabel,
    disabled,
  } = props;

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
              <label
                htmlFor={id}
                aria-disabled={disabled}
                className={twMerge(
                  "block text-white font-bold",
                  disabled && "cursor-not-allowed opacity-50",
                  classNameLabel
                )}
              >
                {label}
              </label>
            )}

            <select
              {...field}
              id={id}
              disabled={disabled}
              className={twMerge(
                "w-full px-3 py-2 border rounded-lg",
                "bg-transparent text-white",
                "focus:outline-none focus:ring-2",
                hasError
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500",
                "disabled:cursor-not-allowed disabled:opacity-50",
                classNameSelect
              )}
            >
              <option value="" disabled>
                {placeholder}
              </option>

              {options.map((opt) => (
                <option
                  key={String(opt.value)}
                  value={opt.value}
                  disabled={opt.disabled}
                >
                  {opt.label}
                </option>
              ))}
            </select>

            {hasError && (
              <span className="text-red-500 text-sm">{error.message}</span>
            )}
          </div>
        );
      }}
    />
  );
};
