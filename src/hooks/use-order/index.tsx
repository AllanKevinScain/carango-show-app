import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import * as yup from "yup";

export const orderSchema = yup.object().shape({
  id: yup.number().required(),
  totalAmount: yup.number().required(),
  createdAt: yup.string().required(),
});

export type OrderType = yup.InferType<typeof orderSchema>;

export function useOrder() {
  async function listOrders() {
    const response = await api.get("/order");
    return response.data as OrderType[];
  }

  const query = useQuery<OrderType[]>({
    queryKey: ["order"],
    queryFn: listOrders,
  });

  return query;
}
