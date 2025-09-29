import { api } from "@/api";
import { useQuery } from "@tanstack/react-query";
import { type ProducInfertype } from "../use-product";

export function useProductById(id?: string) {
  async function getProduct() {
    if (!id) return null;
    const response = await api.get(`/product/${id}`);
    return response.data;
  }

  const query = useQuery<ProducInfertype>({
    queryKey: ["product", id],
    queryFn: getProduct,
    enabled: !!id,
  });

  return query;
}
