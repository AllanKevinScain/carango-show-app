import { Container, Button, TextField } from "@/components";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";

type ProfileFormData = {
  name: string;
  email: string;
  phone: string;
  gender: string;
  birthDate: string;
};

export function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormData>({
    defaultValues: {
      name: "Nome aqui",
      email: "email@email.com",
      phone: "+55 51 99999-9999",
      gender: "masculino",
      birthDate: "2000-01-01",
    },
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log("Perfil atualizado:", data);
  };

  return (
    <Container
      className={twMerge(
        "pt-[50px] pb-[132px]",
        "flex flex-col items-center justify-center"
      )}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl bg-white shadow-lg rounded-2xl border border-gray-200 p-8 flex flex-col gap-6"
      >
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
          id="phone"
          type="text"
          label="Telefone"
          placeholder="Digite seu telefone"
          {...register("phone", { required: "O telefone é obrigatório" })}
          error={errors.phone?.message}
        />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="gender"
              className="block text-xl font-semibold text-blue-950 mb-2"
            >
              Gênero
            </label>
            <select
              id="gender"
              {...register("gender", { required: "O gênero é obrigatório" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
            {errors.gender && (
              <p className="text-red-400 text-sm">{errors.gender.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="birthDate"
              className="block text-xl font-semibold text-blue-950 mb-2"
            >
              Data de nascimento
            </label>
            <input
              type="date"
              id="birthDate"
              {...register("birthDate", {
                required: "A data de nascimento é obrigatória",
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.birthDate && (
              <p className="text-red-400 text-sm">{errors.birthDate.message}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Salvar Alterações
        </Button>
      </form>
    </Container>
  );
}
