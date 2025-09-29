import { useParams } from "react-router";
import { Container, Button } from "@/components";
import { twMerge } from "tailwind-merge";
import colors from "tailwindcss/colors";
import { currencyFormatterForFixValues } from "@/helpers";
import { useProductById } from "@/hooks/use-product-by-id";
import { FaCalendar, FaTag, FaTruckLoading } from "react-icons/fa";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import { api } from "@/api";

export function ProductPage() {
  const { productId } = useParams();
  const { data: product, isLoading } = useProductById(productId);

  if (isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="flex items-center justify-center h-[500px]">
        <span className="text-gray-500">Produto não encontrado</span>
      </Container>
    );
  }

  const handleAddToCart = async () => {
    try {
      await api.post("/cart/add", { productId: product.id });
      toast.success("Produto adicionado ao carrinho!");
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro deconhecido");
    }
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
          src={product.thumb || "/carro_medio.png"}
          alt={product.name}
          className="max-h-[400px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-[24px]">
        <div>
          <h1 className="text-4xl font-bold text-blue-950">{product.name}</h1>
          <span className="text-lg font-bold text-gray-400">
            {product.model}
          </span>
        </div>

        <p className="text-gray-600">{product.specifications?.join(", ")}</p>

        <div className="flex gap-[24px]">
          <div className="flex items-center gap-[8px]">
            <FaTag color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">
              {product.trade}
            </span>
          </div>
          <div className="flex items-center gap-[8px]">
            <FaCalendar color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">
              {new Date(product.year).toLocaleDateString("pt-BR")}
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
                value: product.price,
                qtyDecimal: 2,
                showR$: true,
              })}
            </span>
            <span className="text-[14px] font-bold text-gray-400 line-through">
              {currencyFormatterForFixValues({
                value: product.price * 1.2,
                qtyDecimal: 2,
                showR$: true,
              })}
            </span>
          </div>
          <Button
            className="h-full px-[32px]"
            onClick={() => handleAddToCart()}
          >
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
    </Container>
  );
}
