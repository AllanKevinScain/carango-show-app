import { Button, TextField } from "@/components";
import { useLogin, useSession } from "@/hooks";

import { twMerge } from "tailwind-merge";

export function LoginPage() {
  const { logingMethods } = useLogin();
  const { mutationLogin } = useSession();

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
          className={twMerge("p-8 w-full max-w-md", "flex flex-col gap-4")}
          onSubmit={logingMethods.handleSubmit((data) =>
            mutationLogin.mutate(data)
          )}
        >
          <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>

          <TextField
            control={logingMethods.control}
            id="email"
            label="Email"
            placeholder="Digite seu email"
          />
          <TextField
            control={logingMethods.control}
            id="password"
            label="Senha"
            placeholder="Digite sua senha"
            type="password"
          />

          <Button
            type="submit"
            isLoading={mutationLogin.isPending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Entrar
          </Button>

          <p className="text-center text-white">
            Não tem conta?{" "}
            <a href="/register" className="text-blue-400 hover:underline">
              Faça o cadastro
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
