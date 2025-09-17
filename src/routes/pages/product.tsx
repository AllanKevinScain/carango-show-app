import { useParams } from "react-router";
import { Container, Button } from "@/components";
import { twMerge } from "tailwind-merge";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { PiSteeringWheelDuotone } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import colors from "tailwindcss/colors";
import { currencyFormatterForFixValues } from "@/helpers";

export function ProductPage() {
  const { id } = useParams();

  const product = {
    id,
    carName: "Nissan GT - R",
    carType: "Sport",
    carPrice: 8000,
    carThumbnail: "/carro_medio.png",
    fuel: "80L",
    transmission: "Manual",
    seats: 2,
    description:
      "O Nissan GT-R é um dos esportivos mais icônicos do mundo, combinando desempenho impressionante com tecnologia avançada.",
  };

  return (
    <Container
      className={twMerge(
        "py-[132px]",
        "grid grid-cols-1 gap-[32px]",
        "lg:grid-cols-2"
      )}
    >
      <div className="flex items-center justify-center">
        <img
          src={product.carThumbnail}
          alt={product.carName}
          className="max-h-[400px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-[24px]">
        <div>
          <h1 className="text-4xl font-bold text-blue-950">
            {product.carName}
          </h1>
          <span className="text-lg font-bold text-gray-400">
            {product.carType}
          </span>
        </div>

        <p className="text-gray-600">{product.description}</p>
        <div className="flex gap-[24px]">
          <div className="flex items-center gap-[8px]">
            <BsFillFuelPumpFill color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">
              {product.fuel}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <PiSteeringWheelDuotone color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">
              {product.transmission}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <FaUser color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">
              {product.seats} Pessoas
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
            <span className="text-[28px] font-bold text-blue-950">
              {currencyFormatterForFixValues({
                value: product.carPrice,
                qtyDecimal: 2,
                showR$: true,
              })}
            </span>
            <span className="text-[14px] font-bold text-gray-400 line-through">
              {currencyFormatterForFixValues({
                value: 10000,
                qtyDecimal: 2,
                showR$: true,
              })}
            </span>
          </div>
          <Button className="h-full px-[32px]">Adicionar ao Carrinho</Button>
        </div>
      </div>
    </Container>
  );
}
