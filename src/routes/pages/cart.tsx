import { Card, Container } from "@/components";
import { CartSummary } from "@/components/cart-summary";
import { twMerge } from "tailwind-merge";
import { useCart } from "@/hooks/use-cart";
import { api } from "@/api";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";

export function CartPage() {
  const { data: cart, isLoading, refetch } = useCart();

  async function onRemove(id: number) {
    try {
      await api.delete(`/cart/remove/${id}`);
      toast.success("Item removido do carrinho!");
      refetch();
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro deconhecido");
    }
  }

  async function onClear() {
    try {
      await api.delete("/cart/clear");
      toast.success("Carrinho limpo com sucesso!");
      refetch();
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro deconhecido");
    }
  }

  async function checkout() {
    try {
      const res = await api.post("/cart/checkout");
      if (res.status === 200) {
        refetch();
        return toast.success("Pedido realizado com sucesso");
      }

      return toast.success("Carrinho vazio");
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro deconhecido");
    }
  }

  if (isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <span>Carregando...</span>
      </Container>
    );
  }

  const subtotal =
    cart?.items.reduce((acc, item) => acc + item.productPrice, 0) || 0;
  const fee = 0;
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

        {cart?.items.map((item) => (
          <Card.table
            key={item.id}
            name={item.productName}
            description=""
            price={item.productPrice}
            thumbnail={item.productThumb || ""}
            href={`/product/${item.productId}`}
            onRemove={() => onRemove(item.id)}
          />
        ))}
      </div>

      <CartSummary
        subtotal={subtotal}
        shipping={fee}
        total={total}
        clearCart={onClear}
        checkout={checkout}
      />
    </Container>
  );
}
