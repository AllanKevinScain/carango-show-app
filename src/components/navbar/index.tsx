import { twMerge } from "tailwind-merge";
import { Logo } from "./logo";
import { LogoutButton } from "./logout";
import { Container } from "../container";
import { BiMenu } from "react-icons/bi";
import { Button } from "../button";

interface NavbarInterface {
  handleDrawer: () => void;
}

export const Navbar = (props: NavbarInterface) => {
  const { handleDrawer } = props;

  return (
    <nav className="bg-blue-950 p-[14px]">
      <Container className={twMerge("flex justify-between items-center")}>
        <div className="flex items-center gap-[14px]">
          <Button
            variant="ghost"
            className="text-blue-400 w-fit"
            onClick={handleDrawer}
          >
            <BiMenu size={40} />
          </Button>
          <Logo />
        </div>

        <LogoutButton />
      </Container>
    </nav>
  );
};
