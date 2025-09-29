import { PiShoppingCartBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import { useCart } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router";

export const CartButton = () => {
  const router = useNavigate();

  const { getCartItems } = useCart();

  const query = useQuery({
    queryKey: ["cart-items"],
    queryFn: getCartItems,
  });
  const qtyCartItems = query.data?.items.length || 0;

  return (
    <Button
      variant="ghost"
      className={twMerge(
        "text-blue-400 w-fit",
        "hover:bg-transparent",
        "relative"
      )}
      onClick={() => router("/cart")}
    >
      {qtyCartItems > 0 && (
        <div
          className={twMerge(
            "bg-red-500 px-[8px]",
            "rounded-2xl border-blue-950 border-[4px]",
            "absolute -top-2 -right-4"
          )}
        >
          {query.isLoading || query.isFetching ? (
            <CgSpinner className="animate-spin text-white" />
          ) : (
            <span className="text-white">{qtyCartItems}+</span>
          )}
        </div>
      )}
      <PiShoppingCartBold size={40} />
    </Button>
  );
};
