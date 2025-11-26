import { Button, Container } from "@/components";
import { twMerge } from "tailwind-merge";
import { CreateModal, List } from "./components";
import { useToggle } from "@/hooks";

export function AdminPage() {
  const createModal = useToggle();

  return (
    <>
      <CreateModal open={createModal.open} handle={createModal.handle} />

      <Container
        className={twMerge("pt-[50px] pb-[132px]", "flex flex-col gap-[32px]")}
      >
        <div
          className={twMerge(
            "flex gap-[24px] items-center justify-end",
            "w-full"
          )}
        >
          <Button
            className="w-fit h-fit px-3 py-2"
            onClick={createModal.handle}
          >
            Novo
          </Button>
        </div>

        <List />
      </Container>
    </>
  );
}
