import { useNavigate, useParams } from "react-router";
import { Container, Button, customToast } from "@/components";
import { twMerge } from "tailwind-merge";
import colors from "tailwindcss/colors";
import { currencyFormatterForFixValues } from "@/helpers";
import { useCart, useProduct, type ProducInfertype } from "@/hooks";
import { useQuery } from "@tanstack/react-query";
import { FaTruckLoading } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";

export function ProductPage() {
  const { productId } = useParams();
  const router = useNavigate();

  const { getProductById } = useProduct();
  const { addToCart, getCartItems } = useCart();

  const query = useQuery({
    queryKey: ["cart-items"],
    queryFn: getCartItems,
  });

  const product = useQuery<ProducInfertype>({
    queryKey: ["product-by-id"],
    queryFn: () => getProductById(productId ?? ""),
  });

  async function addItem() {
    const isItemInCart = query.data?.items.find(
      (item) => Number(item.productId) === Number(productId)
    );
    if (isItemInCart !== undefined) {
      return customToast.cart({
        message: "Produto já adicionado ao carrinho",
        click: () => router("/cart"),
      });
    }

    await addToCart.mutateAsync(productId ?? "").then(() => query.refetch());
  }

  if (product.isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  if (product.data) {
    const { name, model, price, trade, year, thumb, specifications } =
      product.data;
    const carYear = new Date(year ?? "");

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
            src={
              thumb ??
              "https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
            }
            alt={name}
            className="max-h-[400px] object-contain"
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <div>
            <h1 className="text-4xl font-bold text-blue-950">{name}</h1>
            <span className="text-lg font-bold text-gray-400">{trade}</span>
          </div>

          <p className="text-gray-600">{specifications?.join(", ")}</p>

          <div className="flex items-center gap-[8px]">
            <BsFillFuelPumpFill color={colors.gray[400]} />
            <span className="text-[14px] font-bold text-gray-400">{model}</span>
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
                  value: price ?? 0,
                  qtyDecimal: 2,
                  showR$: true,
                })}
              </span>
              <span className="text-[14px] font-bold text-gray-400 underline">
                {trade}, {carYear.toLocaleDateString("pt-BR")}
              </span>
            </div>
            <Button className="h-[40px] px-[32px]" onClick={addItem}>
              {addToCart.isPending ? (
                <FaTruckLoading className="animate-spin" size={24} />
              ) : (
                "Adicionar ao carrinho"
              )}
            </Button>
          </div>
        </div>
      </Container>
    );
  }

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
          src="https://ih1.redbubble.net/image.4905811447.8675/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
          alt="Sem produto"
          className="max-h-[400px] object-contain"
        />
      </div>
      <h1 className="text-4xl font-bold text-blue-950">
        Nenhum dado carregado para este produto
      </h1>
    </Container>
  );
}
