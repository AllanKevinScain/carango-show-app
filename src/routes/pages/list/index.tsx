import { Card, Container } from "@/components";
import { useProduct, type ProducInfertype } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export function ListPage() {
  const { listProducts } = useProduct();

  const products = useQuery<ProducInfertype[]>({
    queryKey: ["list-products"],
    queryFn: listProducts,
  });

  if (products.isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  return (
    <Container
      className={twMerge(
        "grid grid-cols-1 gap-[32px]",
        "py-[132px]",
        "md:grid-cols-2",
        "lg:grid-cols-3"
      )}
    >
      {products.data?.map((product, index) => {
        const { id: _, ...restProduct } = product;
        return (
          <Card.default key={index} href={`${product.id}`} {...restProduct} />
        );
      })}
    </Container>
  );
}
