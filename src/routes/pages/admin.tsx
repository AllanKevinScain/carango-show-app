import { Container } from "@/components";
import { twMerge } from "tailwind-merge";

export function AdminPage() {
  return (
    <Container
      className={twMerge("pt-[50px] pb-[132px]", "flex flex-col gap-[32px]")}
    >
      <div className="bg-red-500 h-[50px] w-full"></div>

      <div className="w-full h-[50px] bg-green-400"></div>
    </Container>
  );
}
