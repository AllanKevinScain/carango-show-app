import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const profileSchema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
});

export type ProfileInfertype = yup.InferType<typeof profileSchema>;

export function useProfile() {
  const profileMethods = useForm<ProfileInfertype>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "Nome aqui",
      email: "email@email.com",
    },
  });

  return {
    profileMethods,
  };
}
