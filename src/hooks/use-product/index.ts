import { api } from "@/api";
import * as yup from "yup";

export const productSchema = yup.object().shape({
  id: yup.number(),
  name: yup.string().required("Campo obrigatório"),
  trade: yup.string().required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  year: yup.string().required("Campo obrigatório"),
  price: yup.number().required("Campo obrigatório"),
  specifications: yup.array().of(yup.string().required("Campo obrigatório")),
  thumb: yup.string(),
});

export type ProducInfertype = yup.InferType<typeof productSchema>;

export type ListProductReturnType = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  data: ProducInfertype[];
};

interface ListProductInterface {
  page?: number;
  limit?: number;
}

export function useProduct() {
  async function listProducts(props?: ListProductInterface) {
    if (props) {
      const { page = 1, limit = 50 } = props;
      const response = await api.get(`/product?page=${page}&limit=${limit}`);
      return response.data;
    }
  }

  async function getProductById(id: string) {
    const response = await api.get(`/product/${id}`);
    return response.data;
  }

  return {
    listProducts,
    getProductById,
  };
}
