import { Card } from "@/components";
import { twMerge } from "tailwind-merge";

export function ListPage() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">Listagem de produtos</h1>

      <div
        className={twMerge("grid grid-cols-3", "bg-neutral-500", "p-[24px]")}
      >
        {Array(10)
          .fill(null)
          .map((_, index) => {
            return (
              <Card.default key={index}>
                <p className="bg-allan">{index}</p>
              </Card.default>
            );
          })}
      </div>
    </div>
  );
}
