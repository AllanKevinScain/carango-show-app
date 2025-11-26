import { toast } from "react-hot-toast";
import { api } from "@/api";
import {
  useCreateSupplier,
  type CreateSupplierType,
} from "@/hooks/use-create-supplier";
import type { AxiosError } from "axios";
import { Button, TextField } from "@/components";
import { Modal, type ModalInterface } from "../../admin/components/modal";

export const CreateModal = (props: ModalInterface) => {
  const { open, handle } = props;
  const { createSupplierMethods } = useCreateSupplier();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = createSupplierMethods;

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "");

    if (digits.length <= 2) {
      return `(${digits}`;
    }

    if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(
      7,
      11
    )}`;
  };

  const onSubmit = async (data: CreateSupplierType) => {
    try {
      const res = await api.post("/supplier", data);

      if (res.status === 201) {
        handle();
        reset();
        return toast.success("Fornecedor criado com sucesso!");
      }

      return toast.error("Erro desconhecido");
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro desconhecido");
    }
  };

  return (
    <Modal open={open} handle={handle} title="Criar Fornecedor">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4"
      >
        <div className="flex flex-col gap-4 py-4 px-[4px]">
          <TextField
            id="name"
            label="Nome"
            control={control}
            type="text"
            placeholder="Digite o nome do fornecedor"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="email"
            label="Email"
            control={control}
            type="email"
            placeholder="email@fornecedor.com"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="phone"
            label="Telefone"
            control={control}
            type="text"
            placeholder="(11) 98765-4321"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
            mask={formatPhone}
          />
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
          <Button
            onClick={handle}
            disabled={isSubmitting}
            variant="outline"
            className="px-4 py-2"
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 disabled:opacity-50"
          >
            Salvar
          </Button>
        </div>
      </form>
    </Modal>
  );
};
