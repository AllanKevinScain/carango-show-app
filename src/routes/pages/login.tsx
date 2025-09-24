import { Button } from "@/components";

export function LoginPage() {
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
        <form className="p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-white">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" placeholder-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className=" block text-white font-bold mb-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              className=" placeholder-white w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            Entrar
          </Button>

          <p className="text-center text-white mt-4">
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
