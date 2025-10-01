import type { ComponentType } from "react";
import { FiAlertCircle } from "react-icons/fi";

export const ErrorBoundary: ComponentType<unknown> = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-blue-900 text-white px-4">
      <FiAlertCircle className="w-16 h-16 mb-4 animate-bounce text-yellow-400" />
      <h1 className="text-3xl font-bold mb-2">Ocorreu um erro</h1>
      <p className="text-lg text-blue-200 mb-6 text-center max-w-md">
        Algo inesperado aconteceu. Por favor, tente novamente ou volte para a
        página inicial.
      </p>
      <a
        href="/product"
        className="rounded-2xl bg-white text-blue-900 px-6 py-2 font-semibold shadow hover:bg-blue-200 transition"
      >
        Voltar para Home
      </a>
    </div>
  );
};
