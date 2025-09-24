import { useState } from "react";
import { BiLogInCircle } from "react-icons/bi";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export const LoginButton = () => {
  const [activeAnimation, setAnimation] = useState(false);

  return (
    <Link
      to="/"
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      className={twMerge(
        "text-blue-400",
        "flex items-center justify-center gap-[10px]",
        "cursor-pointer"
      )}
    >
      <div className="w-fit overflow-hidden">
        <span
          className={twMerge(activeAnimation ? "show-text" : "hidden-text")}
        >
          Olá, Allan Kevin Scain
        </span>
      </div>
      <BiLogInCircle size={40} />
    </Link>
  );
};
