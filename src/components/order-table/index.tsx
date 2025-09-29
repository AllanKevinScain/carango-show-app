import { twMerge } from "tailwind-merge";

interface OrderTableProps {
  id: number;
  totalAmount: number;
  createdAt: string;
}

export const OrderTable = ({ id, totalAmount, createdAt }: OrderTableProps) => {
  return (
    <div
      className={twMerge(
        "flex justify-between items-center p-4 bg-neutral-50 rounded-lg shadow-sm"
      )}
    >
      <div className="flex flex-col">
        <span className="font-bold text-blue-950">Pedido #{id}</span>
        <span className="text-gray-400 text-sm">
          Criado em: {new Date(createdAt).toLocaleDateString("pt-BR")}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-lg font-bold text-blue-950">
          R${totalAmount.toFixed(2)}
        </span>
      </div>
    </div>
  );
};
