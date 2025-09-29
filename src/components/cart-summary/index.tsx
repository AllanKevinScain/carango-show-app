import { twMerge } from "tailwind-merge";
import { Button } from "@/components";

interface CartSummaryProps {
  total: number;
  clearCart: () => void;
  checkout: () => void;
}

export function CartSummary({ total, clearCart, checkout }: CartSummaryProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-[16px]",
        "p-[24px] bg-blue-600 text-white rounded-xl shadow-lg"
      )}
    >
      <h2 className="text-xl font-bold">Card Details</h2>

      <div className="flex flex-col gap-[8px]">
        <span className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </span>
      </div>

      <Button
        className="w-full bg-blue-950 hover:bg-blue-900 cursor-pointer h-10"
        onClick={checkout}
      >
        Finalizar Compra
      </Button>
      <Button
        className="w-full bg-white hover:bg-gray-100 cursor-pointer h-10 text-blue-950"
        onClick={clearCart}
      >
        Limpar Carrinho
      </Button>
    </div>
  );
}
