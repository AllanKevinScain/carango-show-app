import { BiLogInCircle } from "react-icons/bi";
import { twMerge } from "tailwind-merge";

export const Navbar = () => {
  return (
    <nav
      className={twMerge("flex justify-between items-center", "bg-blue-950")}
    >
      <div className="flex gap-[10px]">
        <img src="" />
        <h3>carango show shopping</h3>
      </div>

      <button>
        <BiLogInCircle size={30} />
      </button>
    </nav>
  );
};
