import { Button, Container, TextField } from "@/components";
import { twMerge } from "tailwind-merge";
import { CreateModal, List } from "./components";
import { useToggle } from "@/hooks";
import { useForm } from "react-hook-form";

export function AdminPage() {
  const createModal = useToggle();

  const { control } = useForm({
    defaultValues: {
      search: "",
    },
  });

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
        <div className={twMerge("flex gap-[24px] items-center", "w-full")}>
          <TextField id="search" placeholder="Pesquisar..." control={control} />
          <Button className="w-fit h-fit px-3 py-2">Pesquisar</Button>
        </div>

        <List />
      </Container>
    </>
  );
}
