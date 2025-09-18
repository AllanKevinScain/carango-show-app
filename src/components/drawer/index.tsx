import { CgClose } from "react-icons/cg";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import colors from "tailwindcss/colors";
import { Button } from "../button";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router";
import { GrUserAdmin } from "react-icons/gr";
import { FaTachometerAlt, FaBoxes } from "react-icons/fa";

interface DrawerInterface {
  open: boolean;
  hanlde: () => void;
}

export const Drawer = (props: DrawerInterface) => {
  const { open, hanlde } = props;

  const isAdmin: boolean = false;

  return (
    <div className="relative">
      {open && (
        <div
          className={twMerge("fixed inset-0 z-30", "bg-black/50")}
          onClick={hanlde}
        />
      )}

      <div
        className={twMerge(
          "fixed top-0 left-0  z-40",
          "flex flex-col justify-between",
          "transform transition-transform duration-300 ease-in-out -translate-x-full",
          "h-full w-64 bg-white shadow-lg",
          open && "translate-x-0"
        )}
      >
        <div className="flex flex-col">
          <div
            className={twMerge(
              "flex justify-between items-center",
              "p-4 border-b"
            )}
          >
            <PiSteeringWheelDuotone size={40} color={colors.neutral[400]} />
            <Button variant="ghost" className="w-fit" onClick={hanlde}>
              <CgClose size={20} color={colors.neutral[400]} />
            </Button>
          </div>

          <nav className="p-4 space-y-2">
            {isAdmin && (
              <>
                <Link
                  to="admin"
                  className={twMerge(
                    "flex items-center gap-[14px]",
                    "px-3 py-2 rounded",
                    "hover:bg-gray-100"
                  )}
                >
                  <GrUserAdmin size={20} color={colors.neutral[400]} /> Painel
                  do admin
                </Link>
                <Link
                  to="admin/order"
                  className={twMerge(
                    "flex items-center gap-[14px]",
                    "px-3 py-2 rounded",
                    "hover:bg-gray-100"
                  )}
                >
                  <FaBoxes size={20} color={colors.neutral[400]} /> Ver pedidos
                </Link>
              </>
            )}

            <Link
              to="product"
              className={twMerge(
                "flex items-center gap-[14px]",
                "px-3 py-2 rounded",
                "hover:bg-gray-100"
              )}
            >
              <FaTachometerAlt size={20} color={colors.neutral[400]} /> Home
            </Link>
            <Link
              to="profile"
              className={twMerge(
                "flex items-center gap-[14px]",
                "px-3 py-2 rounded",
                "hover:bg-gray-100"
              )}
            >
              <ImProfile size={20} color={colors.neutral[400]} /> Meu perfil
            </Link>

            {!isAdmin && (
              <Link
                to="profile/order"
                className={twMerge(
                  "flex items-center gap-[14px]",
                  "px-3 py-2 rounded",
                  "hover:bg-gray-100"
                )}
              >
                <FaBoxes size={20} color={colors.neutral[400]} /> Ver meus
                pedidos
              </Link>
            )}
          </nav>
        </div>

        <div className="p-4">
          <Button>Sair</Button>
        </div>
      </div>
    </div>
  );
};
