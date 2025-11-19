import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const createSupplierSchema = yup.object().shape({
  name: yup.string().required("O nome e obrigatorio"),
  email: yup.string().email("Email invalido").required("O email e obrigatorio"),
  phone: yup.string().required("O telefone e obrigatorio"),
});

export type CreateSupplierType = yup.InferType<typeof createSupplierSchema>;

export function useCreateSupplier() {
  const createSupplierMethods = useForm<CreateSupplierType>({
    resolver: yupResolver(createSupplierSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  return {
    createSupplierMethods,
  };
}
