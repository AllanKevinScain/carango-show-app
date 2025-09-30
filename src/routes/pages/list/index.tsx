import { Card, Container } from "@/components";
import { useProduct, type ListProductReturnType } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { Pagination } from "./pagination";
import { useSearchParams } from "react-router";

export function ListPage() {
  const { listProducts } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const products = useQuery<ListProductReturnType>({
    queryKey: ["list-products", page, limit],
    queryFn: () => listProducts({ page, limit }),
  });

  if (products.isLoading || products.isFetching) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  return (
    <Container className={twMerge("flex flex-col gap-[32px]", "py-[132px]")}>
      <section
        className={twMerge(
          "grid grid-cols-1 gap-[32px]",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        {products.data?.data.map((product, index) => {
          const { id: _, ...restProduct } = product;
          return (
            <Card.default key={index} href={`${product.id}`} {...restProduct} />
          );
        })}
      </section>

      <Pagination
        page={page}
        limit={limit}
        totalPages={products.data?.totalPages || 0}
        setPage={setSearchParams}
      />
    </Container>
  );
}
