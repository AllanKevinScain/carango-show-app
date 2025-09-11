import { twMerge } from "tailwind-merge";

interface DefaultCardProps {
  children: React.ReactNode;
}

export const DefaultCard = (props: DefaultCardProps) => {
  const { children } = props;
  return (
    <div
      className={twMerge(
        "flex",
        "p-[24px] bg-neutral-50 h-[388px] w-[304px]",
        "hover:shadow-2xl"
      )}
    >
      {children}
    </div>
  );
};
