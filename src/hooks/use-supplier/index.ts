import { api } from "@/api";
import * as yup from "yup";

export const supplierSchema = yup.object().shape({
  id: yup.number().required("Campo obrigatorio"),
  name: yup.string().required("Campo obrigatorio"),
  email: yup.string().required("Campo obrigatorio"),
  phone: yup.string().required("Campo obrigatorio"),
});

export type SupplierInfoType = yup.InferType<typeof supplierSchema>;

export type ListSupplierReturnType = {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  data: SupplierInfoType[];
};

interface ListSupplierInterface {
  page?: number;
  limit?: number;
}

export function useSupplier() {
  async function listSuppliers({
    page = 1,
    limit = 10,
  }: ListSupplierInterface) {
    const response = await api.get(`/supplier?page=${page}&limit=${limit}`);

    const array = response.data;

    return {
      total: array.length,
      page,
      limit,
      totalPages: Math.ceil(array.length / limit),
      data: array,
    };
  }

  async function getSupplierById(id: string): Promise<SupplierInfoType> {
    const response = await api.get(`/supplier/${id}`);
    return response.data as SupplierInfoType;
  }

  return {
    listSuppliers,
    getSupplierById,
  };
}
