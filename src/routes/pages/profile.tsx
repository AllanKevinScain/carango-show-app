import { Container } from "@/components";
import { twMerge } from "tailwind-merge";

export function ProfilePage() {
  return (
    <Container
      className={twMerge(
        "pt-[50px] pb-[132px]",
        "flex flex-col items-center justify-center"
      )}
    >
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl border border-gray-200 p-8 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-950">Nome</h1>
          <p className="text-gray-600">Nome aqui</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-950">Email</h2>
          <p className="text-gray-600">email@email.com</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-950">Telefone</h2>
          <p className="text-gray-600">+55 51 99999-9999</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-950">
            Perfil de acesso
          </h2>
          <p className="text-gray-600">Admin</p>
        </div>
      </div>
    </Container>
  );
}
