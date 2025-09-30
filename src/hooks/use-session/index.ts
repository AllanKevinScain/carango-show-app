import { api } from "@/api";
import { SessionContext } from "@/providers";
import { useContext } from "react";
import toast from "react-hot-toast";
import type { LoginInfertype } from "../use-login";
import { useMutation } from "@tanstack/react-query";

export function useSession() {
  const { session, signIn, signOut, loading } = useContext(SessionContext);

  async function login(values: LoginInfertype) {
    const res = await api.post("/auth", values);
    if (res.status !== 200) {
      return toast.error("Ocorreu um erro");
    }

    signIn(res.data.token);
    toast.success("Login efetuado com sucesso!");
  }
  const mutationLogin = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  return {
    data: session,
    logout: signOut,
    loading,
    mutationLogin,
  };
}
