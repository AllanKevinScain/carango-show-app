import { Modal, type ModalInterface } from "./modal";
import { toast } from "react-hot-toast";
import { api } from "@/api";
import {
  useCreateProduct,
  type CreateProductType,
} from "@/hooks/use-create-product";
import type { AxiosError } from "axios";
import { Button, TextField } from "@/components";
import { useFieldArray } from "react-hook-form";
import { twMerge } from "tailwind-merge";

export const CreateModal = (props: ModalInterface) => {
  const { open, handle } = props;
  const { createProductMethods } = useCreateProduct();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
    reset,
  } = createProductMethods;

  const { fields, append, remove } = useFieldArray<
    CreateProductType,
    "specifications"
  >({
    control,
    name: "specifications",
  });

  const onSubmit = async (data: CreateProductType) => {
    try {
      const payload = {
        ...data,
        specifications: data.specifications.map((s) => s.value),
      };
      const res = await api.post("/product", payload);
      if (res.status === 201) {
        handle();
        reset();
        return toast.success("Produto criado com sucesso!");
      }
      return toast.error("Erro desconhecido");
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro desconhecido");
    }
  };

  return (
    <Modal open={open} handle={handle} title="Criar Produto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4"
      >
        <div
          className={twMerge(
            "flex flex-col gap-4",
            "py-4 px-[4px]",
            "overflow-auto max-h-[50vh]"
          )}
        >
          <TextField
            id="name"
            label="Nome"
            control={control}
            type="text"
            placeholder="Digite o nome do veiculo"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="price"
            label="Preço"
            control={control}
            type="number"
            placeholder="Preco"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="trade"
            label="Marca"
            control={control}
            type="text"
            placeholder="Digite a marca do veiculo"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="model"
            label="Modelo"
            control={control}
            type="text"
            placeholder="Digite o modelo do veiculo"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="thumb"
            label="Imagem"
            control={control}
            type="text"
            placeholder="URL da imagem"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          <TextField
            id="year"
            label="Ano do veículo"
            control={control}
            type="date"
            placeholder="Ano do veiculo"
            classNameLabel="text-neutral-600 font-medium"
            classNameInput="text-gray-800 placeholder-gray-400 bg-white"
          />

          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-2 items-center">
              <TextField
                id={`specifications.${index}.value`}
                control={control}
                type="text"
                placeholder={`Especificação ${index + 1}`}
                classNameInput="text-gray-800 placeholder-gray-400 bg-white"
              />
              <Button
                variant="ghost"
                onClick={() => remove(index)}
                className="w-fit px-2 py-2.5 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Remover
              </Button>
            </div>
          ))}
        </div>

        <Button
          onClick={() => append({ value: "" })}
          className="px-3 py-1 bg-blue-600 disabled:opacity-50"
        >
          Add Especificação
        </Button>

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
