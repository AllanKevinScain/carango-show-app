import { Modal, type ModalInterface } from "./modal";

export interface DeleteModalProps extends ModalInterface {
  handleDelete: () => void;
}

export const DeleteModal = (props: DeleteModalProps) => {
  const { open, handle, handleDelete } = props;

  return (
    <Modal open={open} handle={handle} title="Confirmar Remoção">
      <div className="p-4 flex flex-col gap-4">
        <p>Tem certeza que deseja remover este produto?</p>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
            onClick={handle}
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600"
            onClick={handleDelete}
          >
            Remover
          </button>
        </div>
      </div>
    </Modal>
  );
};
