import { twMerge } from "tailwind-merge";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = (props: ContainerProps) => {
  const { children, className = "" } = props;
  return (
    <div
      className={twMerge(
        "mx-auto max-w-7xl px-4",
        "sm:px-6",
        "lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
