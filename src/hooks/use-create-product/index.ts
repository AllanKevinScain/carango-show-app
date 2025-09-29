import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const createProductSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatorio"),
  price: yup
    .number()
    .typeError("O preco deve ser um numero")
    .positive("O preco deve ser maior que 0")
    .required("O preco é obrigatorio"),
  trade: yup.string().required("A marca é obrigatoria"),
  model: yup.string().required("O modelo é obrigatorio"),
  specifications: yup
    .array()
    .of(
      yup.object({
        value: yup.string(),
      })
    )
    .default([]),
  thumb: yup
    .string()
    .url("A URL da imagem deve ser valida")
    .required("A imagem é obrigatoria"),
  year: yup.string().required("O ano é obrigatorio"),
});

export type CreateProductType = yup.InferType<typeof createProductSchema>;

export function useCreateProduct() {
  const createProductMethods = useForm<CreateProductType>({
    resolver: yupResolver(createProductSchema),
    defaultValues: {
      name: "",
      price: undefined,
      trade: "",
      model: "",
      specifications: [],
      thumb: "",
      year: "",
    },
  });

  return {
    createProductMethods,
  };
}
