import type { IconType } from "react-icons";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

import colors from "tailwindcss/colors";

interface LinkInterface {
  to: string;
  Icon: IconType;
  label: string;
  beforeHandle: () => void;
}

export const CustomLink = (props: LinkInterface) => {
  const { to, Icon, label, beforeHandle } = props;
  return (
    <Link
      to={to}
      className={twMerge(
        "flex items-center gap-[14px]",
        "px-3 py-2 rounded",
        "hover:bg-gray-100"
      )}
      onClick={beforeHandle}
    >
      <Icon size={20} color={colors.neutral[400]} /> {label}
    </Link>
  );
};
