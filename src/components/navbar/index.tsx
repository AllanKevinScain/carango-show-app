import { twMerge } from "tailwind-merge";
import { Logo } from "./logo";
import { LoginButton } from "./login";
import { Container } from "../container";

export const Navbar = () => {
  return (
    <nav className="bg-blue-950 p-[14px]">
      <Container className={twMerge("flex justify-between items-center")}>
        <Logo />

        <LoginButton />
      </Container>
    </nav>
  );
};
