import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import * as yup from "yup";

export const cartItemSchema = yup.object().shape({
  id: yup.number().required(),
  userId: yup.number().required(),
  productId: yup.number().required(),
  productName: yup.string().required(),
  productPrice: yup.number().required(),
  productThumb: yup.string().url(),
});

export const cartSchema = yup.object().shape({
  items: yup.array().of(cartItemSchema).required(),
  total: yup.number().required(),
});

export type CartItemType = yup.InferType<typeof cartItemSchema>;
export type CartType = yup.InferType<typeof cartSchema>;

export function useCart() {
  async function listCart() {
    const response = await api.get(`/cart`);
    return response.data as CartType;
  }

  const query = useQuery<CartType>({
    queryKey: ["cart"],
    queryFn: listCart,
    retry: false,
  });

  return query;
}
