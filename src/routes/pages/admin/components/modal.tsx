export interface ModalInterface {
  open: boolean;
  handle: () => void;
}

export const Modal = (props: ModalInterface) => {
  const { open, handle } = props;

  return (
    <div className="relative">
      {open && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={handle}></div>
      )}

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-white w-96 rounded-2xl shadow-lg overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-neutral-200">
            <h2 className="text-lg font-semibold text-neutral-800">
              Título do Modal
            </h2>
            <button
              onClick={handle}
              className="text-neutral-500 hover:text-neutral-700"
            >
              ✖
            </button>
          </div>

          <div className="p-4 text-neutral-700">
            <p>
              Este é um exemplo de modal simples feito apenas com React +
              TailwindCSS.
            </p>
          </div>

          <div className="flex justify-end gap-2 p-4 border-t border-neutral-200">
            <button
              onClick={handle}
              className="px-4 py-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-100"
            >
              Cancelar
            </button>
            <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
