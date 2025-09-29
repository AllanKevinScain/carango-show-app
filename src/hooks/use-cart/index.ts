import * as yup from "yup";
import { productSchema } from "../use-product";
import { api } from "@/api";
import type { GetCartItemsInterface } from "./use-cart.type";
import toast from "react-hot-toast";
import { customToast } from "@/components";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const _cartItemSchema = yup.object().shape({
  id: yup.number(),
  product: productSchema,
});

export type CartItemsInfertype = yup.InferType<typeof _cartItemSchema>;

export function useCart() {
  const queryClient = useQueryClient();

  async function getCartItems(): Promise<GetCartItemsInterface> {
    const response = await api.get("/cart");
    return response.data;
  }

  async function addToCart(id: string) {
    const response = await api.post("/cart/add", { productId: Number(id) });
    if (response.status !== 200) {
      customToast.cart({ message: response.data.message });
    } else {
      toast.success(
        response.data.message || "Adicionado ao carrinho com sucesso"
      );
    }
  }
  const addToCartMutation = useMutation({
    mutationKey: ["add-to-cart"],
    mutationFn: addToCart,
    onSuccess: () =>
      queryClient.refetchQueries({ queryKey: ["product-by-id"] }),
  });

  async function removeToCart(id: number) {
    const response = await api.delete(`/cart/remove/${id}`);
    if (response.status !== 200) {
      customToast.cart({ message: response.data.message });
    } else {
      toast.success(
        response.data.message || "Removido do carrinho com sucesso"
      );
    }
  }

  function clearCart() {}

  return {
    addToCart: addToCartMutation,
    removeToCart,
    clearCart,
    getCartItems,
  };
}
