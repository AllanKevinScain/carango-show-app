import { api } from "@/api";
import * as yup from "yup";

export const orderSchema = yup.object().shape({
  id: yup.number().required(),
  totalAmount: yup.number().required(),
  createdAt: yup.string().required(),
});

export type OrderType = yup.InferType<typeof orderSchema>;

export type ListOrderReturnType = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  data: OrderType[];
};

interface ListOrderInterface {
  page?: number;
  limit?: number;
}

export function useOrder() {
  async function listOrders(props?: ListOrderInterface) {
    if (props) {
      const { page = 1, limit = 50 } = props;
      const response = await api.get(`/order?page=${page}&limit=${limit}`);
      return response.data;
    }
  }

  return {
    listOrders,
  };
}
