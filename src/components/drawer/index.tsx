import { CgClose } from "react-icons/cg";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import colors from "tailwindcss/colors";
import { Button } from "../button";
import { ImCart, ImProfile } from "react-icons/im";
import { GrUserAdmin } from "react-icons/gr";
import {
  FaTachometerAlt,
  FaBoxes,
  FaBoxOpen,
  FaChartLine,
} from "react-icons/fa";
import { CustomLink } from "./link";
import { useSession } from "@/hooks";
import { MdBarChart, MdMonetizationOn } from "react-icons/md";

interface DrawerInterface {
  open: boolean;
  handle: () => void;
}

export const Drawer = (props: DrawerInterface) => {
  const { open, handle } = props;

  const { data, logout } = useSession();

  const isAdmin: boolean = data?.role === "admin";

  return (
    <div className="relative">
      {open && (
        <div
          className={twMerge("fixed inset-0 z-30", "bg-black/50")}
          onClick={handle}
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
            <Button variant="ghost" className="w-fit" onClick={handle}>
              <CgClose size={20} color={colors.neutral[400]} />
            </Button>
          </div>

          <nav className="p-4 space-y-2">
            <CustomLink
              beforeHandle={handle}
              to="product"
              Icon={FaTachometerAlt}
              label="Home"
            />
            {isAdmin && (
              <>
                <CustomLink
                  beforeHandle={handle}
                  to="/admin?page=1&limit=10"
                  Icon={GrUserAdmin}
                  label="Painel do admin"
                />
                <CustomLink
                  beforeHandle={handle}
                  to="order?page=1&limit=10"
                  Icon={FaBoxes}
                  label="Ver pedidos"
                />
                <CustomLink
                  beforeHandle={handle}
                  to="supplier?page=1&limit=10"
                  Icon={FaBoxOpen}
                  label="Ver fornecedores"
                />
                <CustomLink
                  beforeHandle={handle}
                  to="dashboard"
                  Icon={MdBarChart}
                  label="Dashboard"
                />
                <CustomLink
                  beforeHandle={handle}
                  to="relatorio/vendas"
                  Icon={FaChartLine}
                  label="Relatório de vendas"
                />
                <CustomLink
                  beforeHandle={handle}
                  to="relatorio/financeiro"
                  Icon={MdMonetizationOn}
                  label="Relatório Financeiro"
                />
              </>
            )}

            <CustomLink
              beforeHandle={handle}
              to={`/profile/${data?.id}`}
              Icon={ImProfile}
              label="Meu perfil"
            />

            {!isAdmin && (
              <>
                <CustomLink
                  beforeHandle={handle}
                  to="cart"
                  Icon={ImCart}
                  label="Carrinho"
                />
                <CustomLink
                  beforeHandle={handle}
                  to="/order?page=1&limit=10"
                  Icon={FaBoxes}
                  label="Ver meus pedidos"
                />
              </>
            )}
          </nav>
        </div>

        <div className="p-4">
          <Button onClick={logout}>Sair</Button>
        </div>
      </div>
    </div>
  );
};
