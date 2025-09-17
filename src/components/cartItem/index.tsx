import { twMerge } from "tailwind-merge";
import { FiTrash2 } from "react-icons/fi";

interface CartItemProps {
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  onRemove?: () => void;
}

export function CartItem(props: CartItemProps) {
  const { name, description, price, thumbnail, onRemove } = props;

  return (
    <div
      className={twMerge(
        "flex items-center justify-between gap-[16px]",
        "p-[16px] bg-neutral-50 rounded-lg shadow-sm"
      )}
    >
      <div className="flex items-center gap-[16px]">
        <img
          src={thumbnail}
          alt={name}
          className="w-[64px] h-[64px] object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-bold text-blue-950">{name}</span>
          <span className="text-sm text-gray-400">{description}</span>
        </div>
      </div>

      <div className="flex items-center gap-[16px]">
        <span className="text-lg font-bold text-blue-950">
          ${price.toFixed(2)}
        </span>
        <button
          onClick={onRemove}
          className="text-red-500 hover:text-red-700 transition"
        >
          <FiTrash2 size={20} />
        </button>
      </div>
    </div>
  );
}
