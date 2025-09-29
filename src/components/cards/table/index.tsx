import { twMerge } from "tailwind-merge";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router";

interface CartItemProps {
  name: string;
  description: string;
  price: number;
  thumbnail: string;
  href?: string;
  onRemove?: () => void;
  onEdit?: () => void;
}

export const TableCard = (props: CartItemProps) => {
  const { name, description, price, thumbnail, href, onRemove, onEdit } = props;

  return (
    <div
      className={twMerge(
        "flex items-center justify-between gap-4 p-4 bg-neutral-50 rounded-lg shadow-sm"
      )}
    >
      <Link to={href || ""} className="flex items-center gap-4 flex-1">
        <img
          src={thumbnail}
          alt={name}
          className="w-16 h-16 object-cover rounded-md"
        />
        <div className="flex flex-col">
          <span className="font-bold text-blue-950">{name}</span>
          <span className="text-sm text-gray-400">{description}</span>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <span className="text-lg font-bold text-blue-950">
          ${price.toFixed(2)}
        </span>
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="text-blue-500 hover:text-blue-700 transition cursor-pointer"
          >
            <FiEdit2 size={20} />
          </button>
        )}
        {onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="text-red-500 hover:text-red-700 transition cursor-pointer"
          >
            <FiTrash2 size={20} />
          </button>
        )}
      </div>
    </div>
  );
};
