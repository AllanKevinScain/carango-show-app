import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import { CiLogout } from "react-icons/ci";
import { useSession } from "@/hooks";

export const LogoutButton = () => {
  const [activeAnimation, setAnimation] = useState(false);
  const { logout, data } = useSession();

  return (
    <Button
      variant="ghost"
      className={twMerge("text-blue-400 w-fit", "hover:bg-transparent")}
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
      onClick={logout}
    >
      <div className="w-fit overflow-hidden">
        <span
          className={twMerge(activeAnimation ? "show-text" : "hidden-text")}
        >
          Deseja sair {data?.name.split(" ")[0].toLowerCase()}?
        </span>
      </div>
      <CiLogout size={40} />
    </Button>
  );
};
