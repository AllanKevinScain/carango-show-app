import Lottie from "lottie-react";
import successAnimation from "./Success.json";

export function CongratulationsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-white px-4">
      <Lottie
        animationData={successAnimation}
        loop={false}
        autoplay
        className="w-48 h-48"
      />

      <h1 className="mt-6 text-2xl font-bold text-gray-800">Parabéns!</h1>
      <p className="mt-2 text-gray-600 max-w-md">
        Seu pedido foi realizado com sucesso.
      </p>
    </div>
  );
}
