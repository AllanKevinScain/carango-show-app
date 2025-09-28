import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const testPassword: yup.TestFunction<string, yup.AnyObject> = (
  value,
  { parent }
) => {
  if (!value) return false;
  if (parent["password"] !== value) return false;
  return true;
};

const registerSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .min(6, "Senha deve ter no mínimo 6 caracteres")
    .required("Senha é obrigatória")
    .test({
      name: "testPassword",
      test: testPassword,
      message: "As senhas não coincidem!",
    }),
  role: yup.string().required(),
});

export type RegisterInfertype = yup.InferType<typeof registerSchema>;

export function useRegister() {
  const registerMethods = useForm<RegisterInfertype>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      email: "allan@example.com",
      password: "admin1",
      confirmPassword: "admin1",
      name: "allan kevin scain",
      role: "customer",
    },
  });

  return {
    registerMethods,
  };
}
