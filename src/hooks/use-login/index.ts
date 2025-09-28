import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
});

export type LoginInfertype = yup.InferType<typeof loginSchema>;

export function useLogin() {
  const logingMethods = useForm<LoginInfertype>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "administrador@example.com",
      password: "admin1",
    },
  });

  return {
    logingMethods,
  };
}
