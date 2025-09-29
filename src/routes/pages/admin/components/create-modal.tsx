import { Modal, type ModalInterface } from "./modal";
import { toast } from "react-hot-toast";
import { api } from "@/api";
import {
  useCreateProduct,
  type CreateProductType,
} from "@/hooks/use-create-product";
import type { AxiosError } from "axios";
import { TextField } from "@/components";
import { useFieldArray } from "react-hook-form";

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
        <TextField
          id="name"
          control={control}
          type="text"
          placeholder="Digite o nome do veiculo"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <TextField
          id="price"
          control={control}
          type="number"
          placeholder="Preco"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <TextField
          id="trade"
          control={control}
          type="text"
          placeholder="Digite a marca do veiculo"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <TextField
          id="model"
          control={control}
          type="text"
          placeholder="Digite o modelo do veiculo"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <TextField
          id="thumb"
          control={control}
          type="text"
          placeholder="URL da imagem"
          classNameInput="text-gray-800 placeholder-gray-400 bg-white"
        />

        <TextField
          id="year"
          control={control}
          type="date"
          placeholder="Ano do veiculo"
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
            <button
              type="button"
              onClick={() => remove(index)}
              className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
            >
              Remover
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => append({ value: "" })}
          className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Add Especificação
        </button>

        <div className="flex justify-end gap-2 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={handle}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Salvando..." : "Salvar"}
          </button>
        </div>
      </form>
    </Modal>
  );
};
