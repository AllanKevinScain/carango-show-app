import { twMerge } from "tailwind-merge";
import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";
import { Button } from "@/components";

interface CartItemProps {
  name: string;
  price: number;
  thumbnail: string;
  href: string;
  onRemove?: () => void;
}

export const TableCard = (props: CartItemProps) => {
  const { name, price, thumbnail, href = "#", onRemove } = props;

  return (
    <Link to={href}>
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
          <span className="font-bold text-blue-950">{name}</span>
        </div>

        <div className="flex items-center gap-[16px]">
          <span className="text-lg font-bold text-blue-950">
            ${price.toFixed(2)}
          </span>
          {onRemove && (
            <Button
              variant="ghost"
              onClick={(e) => {
                e.preventDefault();
                onRemove();
              }}
              className={twMerge(
                "text-red-500 w-fit h-full",
                "transition",
                "hover:text-red-700"
              )}
            >
              <FiTrash2 size={20} />
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
};
