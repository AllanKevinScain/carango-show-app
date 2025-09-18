import { Card, Container } from "@/components";
import { CartSummary } from "@/components/cartSummary";
import { twMerge } from "tailwind-merge";

export function CartPage() {
  const cars = [
    {
      id: 1,
      name: "Nissan GT - R",
      type: "Sport",
      pricePerDay: 800,
      thumbnail: "/carro_medio.png",
      days: 3,
    },
    {
      id: 2,
      name: "BMW M4",
      type: "Coupe",
      pricePerDay: 950,
      thumbnail: "/carro_medio.png",
      days: 2,
    },
  ];

  const subtotal = cars.reduce(
    (acc, car) => acc + car.pricePerDay * car.days,
    0
  );
  const fee = 100;
  const total = subtotal + fee;

  return (
    <Container
      className={twMerge(
        "py-[132px]",
        "grid grid-cols-1 gap-[32px]",
        "lg:grid-cols-3"
      )}
    >
      <div className="flex flex-col gap-[16px] lg:col-span-2">
        <h1 className="text-2xl font-bold text-blue-950 mb-[16px]">
          Seu Carrinho
        </h1>
        {cars.map((car) => (
          <Card.table
            name={car.name}
            description={car.type}
            price={car.pricePerDay * car.days}
            thumbnail={car.thumbnail}
            href="#"
          />
        ))}
      </div>
      <CartSummary subtotal={subtotal} shipping={fee} total={total} />
    </Container>
  );
}
