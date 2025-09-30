export interface ModalInterface {
  open: boolean;
  handle: () => void;
  title?: string;
  children?: React.ReactNode;
}

export const Modal = (props: ModalInterface) => {
  const { open, handle, title, children } = props;

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
            <h2 className="text-lg font-semibold text-neutral-800">{title}</h2>
            <button
              onClick={handle}
              className="text-neutral-500 hover:text-neutral-700 cursor-pointer"
            >
              ✖
            </button>
          </div>

          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
