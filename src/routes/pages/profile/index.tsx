import { Container, Button, TextField } from "@/components";
import { twMerge } from "tailwind-merge";
import { useProfile, type ProfileInfertype } from "@/hooks";

export function ProfilePage() {
  const { profileMethods } = useProfile();
  const { handleSubmit, control } = profileMethods;

  const onSubmit = (data: ProfileInfertype) => {
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
