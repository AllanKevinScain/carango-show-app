import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export const Logo = () => {
  return (
    <Link
      to="/list"
      className={twMerge(
        "md:flex md:gap-[10px] md:items-center",
        "cursor-pointer",
        "hidden"
      )}
    >
      <img src="/carro_medio.png" className="h-[55px]" />
      <h3 className="text-blue-400 font-extrabold text-[24px]">
        Carango Show shopping
      </h3>
    </Link>
  );
};
