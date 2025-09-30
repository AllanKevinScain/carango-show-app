import { api } from "@/api";
import { Button, TextField } from "@/components";
import { useRegister, type RegisterInfertype } from "@/hooks";
import type { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function RegisterPage() {
  const router = useNavigate();

  const { registerMethods } = useRegister();
  const { handleSubmit, control } = registerMethods;

  async function onSubmit(data: RegisterInfertype) {
    const { confirmPassword: _, ...restValues } = data;
    try {
      const response = await api.post("/user", restValues);
      if (response.status === 201) {
        toast.success("Conta criada com sucesso!");
        router("/");

        return;
      }
      return toast.error("Erro desconhecido");
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro deconhecido");
    }
  }

  return (
    <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <div className="flex items-center justify-center bg-white h-full">
        <img
          src="/carro_medio.png"
          alt="Logo Carango Show"
          className="max-h-[400px] object-contain"
        />
      </div>
      <div className="flex items-center justify-center bg-blue-950 h-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Cadastro</h2>

          <TextField
            id="name"
            control={control}
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <TextField
            id="email"
            control={control}
            type="email"
            label="Email"
            placeholder="Digite seu email"
          />

          <TextField
            id="password"
            control={control}
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <TextField
            id="confirmPassword"
            control={control}
            type="password"
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cadastrar
          </Button>

          <p className="text-center text-white mt-4">
            Já tem conta?
            <a href="/" className="text-blue-400 hover:underline">
              Faça login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
