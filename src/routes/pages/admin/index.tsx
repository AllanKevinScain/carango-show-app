import { Button, Container, TextField } from "@/components";
import { twMerge } from "tailwind-merge";
import { CreateModal, EditModal } from "./components";
import { useToggle } from "@/hooks";

export function AdminPage() {
  const editModal = useToggle();
  const createModal = useToggle();

  return (
    <>
      <EditModal open={editModal.open} handle={editModal.handle} />
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
          <TextField id="search" placeholder="Pesquisar..." />
          <Button className="w-fit h-fit px-3 py-2">Pesquisar</Button>
        </div>

        <div className="w-full h-[50px] bg-green-400">
          {/* <TextField id="thumb" />
          <TextField id="name" placeholder="Nome" />
          <TextField id="trade" placeholder="Marca" />
          <TextField id="model" placeholder="Modelo" />
          <TextField id="year" placeholder="Ano" />
          <TextField id="price" placeholder="Valor" />
          <TextField id="specifications" placeholder="Specificações" /> */}
        </div>
      </Container>
    </>
  );
}
