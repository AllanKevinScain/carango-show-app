import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "@/api";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const profileSchema = yup.object().shape({
  id: yup.string().required(),
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().required("Campo obrigatório"),
});

export type ProfileInfertype = yup.InferType<typeof profileSchema>;

export function useProfile(id: string) {
  async function _getProfileById(id: string) {
    const response = await api.get(`/user/${id}`);
    if (response.status !== 200) {
      toast.error(response.data.message || "Erro ao buscar perfil");
    }
    return response.data;
  }
  const profileQuery = useQuery<ProfileInfertype>({
    queryKey: ["get-profile", id],
    queryFn: () => _getProfileById(id),
    throwOnError: (error, _) => {
      const auxError = error as AxiosError<{ message: string }>;
      toast.error(auxError.response?.data.message || "Erro ao alterar perfil");
      return false;
    },
  });

  const profileMethods = useForm<ProfileInfertype>({
    resolver: yupResolver(profileSchema),
    defaultValues: profileQuery.data,
  });

  async function putProfile(values: ProfileInfertype) {
    const { id, name, email: _ } = values;
    const response = await api.put(`/user/${id}`, { name });
    if (response.status == 200) {
      toast.success(response.data.message || "Perfil aletrado com sucesso");
    }
  }
  const mutation = useMutation({
    mutationKey: ["create-profile"],
    mutationFn: putProfile,
  });

  return {
    profileMethods,
    profileQuery,
    mutationProfile: mutation,
  };
}
