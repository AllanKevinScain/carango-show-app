import { Card, Container } from "@/components";
import { twMerge } from "tailwind-merge";

export function ListPage() {
  return (
    <Container
      className={twMerge(
        "grid grid-cols-1 gap-[32px]",
        "py-[132px]",
        "md:grid-cols-2",
        "lg:grid-cols-3"
      )}
    >
      {Array(10)
        .fill(null)
        .map((_, index) => {
          return (
            <Card.default
              key={index}
              href="#"
              carName="Nissan GT - R"
              carType="Sport"
              carThumbnail="/carro_medio.png"
              carPrice={8000}
            />
          );
        })}
    </Container>
  );
}
