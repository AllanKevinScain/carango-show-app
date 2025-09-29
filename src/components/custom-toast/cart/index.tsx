import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import { IoCloseCircleSharp } from "react-icons/io5";

interface CartInterface {
  message?: string;
  click?: () => void;
}

export const cart = (props: CartInterface) =>
  toast.custom((t) => {
    return (
      <button
        onClick={() => {
          toast.dismiss(t.id);
          props.click?.();
        }}
        className={twMerge(
          t.visible ? "animate-custom-enter" : "animate-custom-leave",
          "flex items-center",
          "bg-white py-[8px] px-[10px] cursor-pointer",
          "rounded-[8px]"
        )}
      >
        <IoCloseCircleSharp className="text-red-400" size={20} />
        <p className="text-neutral-800 my-[4px] mx-[10px] text-[16px] leading-[16px]">
          {props.message || "Este item já existe no carrinho!"}
        </p>
      </button>
    );
  });
