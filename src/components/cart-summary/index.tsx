import { twMerge } from "tailwind-merge";
import { Button } from "@/components";

interface CartSummaryProps {
  total: number;
}

export function CartSummary({ total }: CartSummaryProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-[16px]",
        "p-[24px] bg-blue-600 text-white rounded-xl shadow-lg"
      )}
    >
      <h2 className="text-xl font-bold">Card Details</h2>

      <div className="flex flex-col gap-[8px]">
        {/* <span className="flex justify-between">
          <span>Valor carro</span>
          <span>${subtotal.toFixed(2)}</span>
        </span>
        <span className="flex justify-between">
          <span>Frete</span>
          <span>${shipping.toFixed(2)}</span>
        </span> */}
        <span className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </span>
      </div>

      <Button className="w-full bg-blue-950 hover:bg-blue-900 cursor-pointer h-10">
        Finalizar Compra
      </Button>
    </div>
  );
}
