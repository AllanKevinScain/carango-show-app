import { useForm } from "react-hook-form";
import { Button, TextField } from "@/components";

type RegisterFormData = {
  name: string;
  email: string;
  password: string;
  birthdate: string;
  gender: string;
  confirmPassword: string;
};

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    console.log("Dados do cadastro:", data);
  };

  const password = watch("password");

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
            type="text"
            label="Nome"
            placeholder="Digite seu nome"
            {...register("name", { required: "O nome é obrigatório" })}
            error={errors.name?.message}
          />

          <TextField
            id="email"
            type="email"
            label="Email"
            placeholder="Digite seu email"
            {...register("email", { required: "O email é obrigatório" })}
            error={errors.email?.message}
          />

          <TextField
            id="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            {...register("password", { required: "A senha é obrigatória" })}
            error={errors.password?.message}
          />

          <TextField
            id="confirmPassword"
            type="password"
            label="Confirmar Senha"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword", {
              required: "Confirme sua senha",
              validate: (value) =>
                value === password || "As senhas não coincidem",
            })}
            error={errors.confirmPassword?.message}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="birthdate"
                className="block text-white font-bold mb-2"
              >
                Nascimento
              </label>
              <input
                type="date"
                id="birthdate"
                {...register("birthdate", {
                  required: "A data de nascimento é obrigatória",
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.birthdate && (
                <p className="text-red-400 text-sm">
                  {errors.birthdate.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-white font-bold mb-2"
              >
                Sexo
              </label>
              <select
                id="gender"
                {...register("gender", { required: "O sexo é obrigatório" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </select>
              {errors.gender && (
                <p className="text-red-400 text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Cadastrar
          </Button>

          <p className="text-center text-white mt-4">
            Já tem conta?{" "}
            <a href="/" className="text-blue-400 hover:underline">
              Faça login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
