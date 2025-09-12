import { twMerge } from "tailwind-merge";
import { Logo } from "./logo";
import { LoginButton } from "./login";

export const Navbar = () => {
  return (
    <nav
      className={twMerge(
        "flex justify-between items-center",
        "bg-blue-950 p-[14px]"
      )}
    >
      <Logo />

      <LoginButton />
    </nav>
  );
};
