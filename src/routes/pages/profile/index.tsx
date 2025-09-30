import { Container, Button, TextField } from "@/components";
import { twMerge } from "tailwind-merge";
import { useProfile } from "@/hooks";
import { FaTruckLoading } from "react-icons/fa";
import { useParams } from "react-router";
import { FaCarCrash } from "react-icons/fa";
import colors from "tailwindcss/colors";

export function ProfilePage() {
  const { id } = useParams();

  const { profileMethods, mutationProfile, profileQuery } = useProfile(
    id || ""
  );
  const { handleSubmit, control } = profileMethods;

  if (profileQuery.isLoading || profileQuery.isFetching) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  if (profileQuery.isError) {
    return (
      <Container
        className={twMerge(
          "flex items-center justify-center gap-[24px]",
          "h-[500px]"
        )}
      >
        <FaCarCrash size={30} color={colors.red[600]} />
        <b className="text-red-600">
          Erro ao carregar perfil, contate o{" "}
          <a
            href="https://github.com/Flamarionfp"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            suporte.
          </a>
        </b>
      </Container>
    );
  }

  return (
    <Container
      className={twMerge(
        "pt-[50px] pb-[132px]",
        "flex flex-col items-center justify-center"
      )}
    >
      <form
        onSubmit={handleSubmit((e) =>
          mutationProfile.mutate({ ...e, id: id || "" })
        )}
        className={twMerge(
          "flex flex-col gap-6",
          "rounded-2xl border border-gray-200",
          "w-full max-w-2xl shadow-lg p-8"
        )}
      >
        <TextField
          id="name"
          control={control}
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          classNameLabel="text-neutral-600 font-medium"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <TextField
          id="email"
          control={control}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          classNameLabel="text-neutral-600 font-medium"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <div className="flex gap-4">
          <Button type="submit" className="w-fit py-2 px-4">
            Salvar alterações
          </Button>

          <Button type="button" variant="outline" className="w-fit py-2 px-4">
            Cancelar
          </Button>
        </div>
      </form>
    </Container>
  );
}
