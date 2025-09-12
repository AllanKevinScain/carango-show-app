import { twMerge } from "tailwind-merge";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelDuotone } from "react-icons/pi";

import { FaUser } from "react-icons/fa6";
import { HiMiniUsers } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { PiUsersFourBold } from "react-icons/pi";
import { Button } from "@/components";

import colors from "tailwindcss/colors";
import { Link } from "react-router";
import { currencyFormatterForFixValues } from "@/helpers";

interface DefaultCardProps {
  href: string;
  carName: string;
  carType: string;
  carPrice: number;
  carThumbnail: string;
}

export const DefaultCard = (props: DefaultCardProps) => {
  const {
    carName = "",
    carPrice = 0,
    carThumbnail = "",
    carType = "",
    href = "#",
  } = props;

  const qty: number = 0;

  return (
    <Link to={href}>
      <div
        className={twMerge(
          "flex flex-col gap-[4px]",
          "p-[24px] bg-neutral-50 h-[388px]",
          "rounded-lg",
          "hover:shadow-2xl"
        )}
      >
        <h5 className="text-[20px] font-bold text-blue-950">{carName}</h5>
        <span className="text-[14px] font-bold text-gray-400">{carType}</span>
        <img
          src={carThumbnail}
          className={twMerge("max-h-[200px]", "object-contain")}
        />

        <div className="flex justify-between overflow-hidden">
          <div className="flex items-center gap-[4px]">
            <BsFillFuelPumpFill color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">80L</span>
          </div>
          <div className="flex items-center gap-[4px]">
            <PiSteeringWheelDuotone color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">Manual</span>
          </div>
          <div className="flex items-center gap-[4px]">
            {qty === 2 && <HiMiniUsers color={colors.gray[400]} />}
            {qty === 3 && <FaUsers color={colors.gray[400]} />}
            {qty === 4 && <PiUsersFourBold color={colors.gray[400]} />}
            {qty === 0 && <FaUser color={colors.gray[400]} />}
            <span className="text-[14px] font-bold text-gray-400">
              2 People
            </span>
          </div>
        </div>

        <div
          className={twMerge(
            "flex flex-col gap-[12px] items-center",
            "lg:flex-row"
          )}
        >
          <div className="flex flex-col w-full">
            <span className="text-[20px] font-bold text-blue-950">
              {currencyFormatterForFixValues({
                value: carPrice,
                qtyDecimal: 2,
                showR$: true,
              })}
            </span>
            <span className="text-[14px] font-bold text-gray-400 line-through">
              {currencyFormatterForFixValues({
                value: 100,
                qtyDecimal: 2,
                showR$: true,
              })}
            </span>
          </div>
          <Button className="h-full">Comprar agora</Button>
        </div>
      </div>
    </Link>
  );
};
