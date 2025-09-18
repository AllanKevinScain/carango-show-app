import { Card } from "@/components";
import { twMerge } from "tailwind-merge";

export const List = () => {
  return (
    <div className={twMerge("flex flex-col gap-[5px]")}>
      {Array(10)
        .fill(null)
        .map((_, index) => {
          return (
            <Card.table
              key={index}
              name="Nissan GT - R"
              description="Sport"
              price={800 * 3}
              thumbnail="/carro_medio.png"
              href="#"
            />
          );
        })}
    </div>
  );
};
