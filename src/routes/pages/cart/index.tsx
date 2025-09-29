import { Button, Card, Container } from "@/components";
import { CartSummary } from "@/components/cart-summary";
import { useCart } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { FaCarOn } from "react-icons/fa6";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router";

export function CartPage() {
  const router = useNavigate();

  const { getCartItems, removeToCart } = useCart();

  const query = useQuery({
    queryKey: ["cart-items"],
    queryFn: getCartItems,
  });

  const hasItems = (query.data?.items.length || 0) > 0;

  async function removeItem(id: number) {
    await removeToCart(id).then(() => query.refetch());
  }

  return (
    <Container
      className={twMerge(
        "py-[132px]",
        "grid grid-cols-1 gap-[32px]",
        hasItems && "lg:grid-cols-3"
      )}
    >
      <div className="flex flex-col gap-[16px] lg:col-span-2">
        <h1 className="text-2xl font-bold text-blue-950 mb-[16px]">
          Seu Carrinho
        </h1>
        {query.isLoading && (
          <div className="flex justify-center items-center">
            <FaTruckLoading className="animate-spin" size={30} />
          </div>
        )}
        {!query.isLoading &&
          query.data?.items.map((car) => (
            <Card.table
              key={car.productId}
              name={car.productName}
              price={car.productPrice}
              thumbnail={car.productThumb}
              href={`/product/${car.productId}`}
              onRemove={() => removeItem(car.id)}
            />
          ))}
        {!query.isLoading && !hasItems && (
          <div className="flex flex-col items-center gap-[8px] mt-[32px]">
            <span className="text-gray-400">Não há itens no carrinho,</span>
            <Button
              variant="ghost"
              className={twMerge("max-w-[400px] h-[40px]", "flex gap-[8px]")}
              onClick={() => router("/product")}
            >
              Quero adicionar <FaCarOn size={24} />
            </Button>
          </div>
        )}
      </div>
      {!query.isLoading && hasItems && (
        <CartSummary total={query.data?.total || 0} />
      )}
    </Container>
  );
}
