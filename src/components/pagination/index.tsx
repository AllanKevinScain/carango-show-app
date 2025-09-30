import { Button } from "@/components";
import { Link, type SetURLSearchParams } from "react-router";
import { twMerge } from "tailwind-merge";

interface PaginationInterface {
  page: number;
  limit: number;
  totalPages: number;
  setPage: SetURLSearchParams;
}

export const Pagination = (props: PaginationInterface) => {
  const { page, limit, totalPages, setPage } = props;

  function handlePageChange(newPage: number) {
    setPage({ page: String(newPage), limit: String(limit) });
  }
  function handleLimitChange(newLimit: number) {
    setPage({ page: String(page), limit: String(newLimit) });
  }

  return (
    <div
      className={twMerge(
        "sticky bottom-0",
        "bg-white py-4 shadow-md",
        "border-blue-950 border-t",
        "flex items-center justify-end",
        "gap-4"
      )}
    >
      <select
        value={limit}
        onChange={(e) => {
          handleLimitChange(Number(e.target.value));
        }}
        className={twMerge(
          "w-fit px-4 py-2",
          "focus:outline-none",
          "text-blue-600",
          "border-2 border-blue-600 rounded-lg"
        )}
      >
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
      <Button
        disabled={page <= 1}
        variant="outline"
        onClick={() => handlePageChange(page - 1)}
        className={twMerge("w-fit px-4 py-2", "disabled:opacity-50")}
      >
        Anterior
      </Button>

      <span>
        Página {page} de{" "}
        <Link
          to={`/product?page=${totalPages}&limit=10`}
          className={twMerge("underline px-[4px]", "hover:text-blue-600")}
        >
          {totalPages}
        </Link>
      </span>

      <Button
        disabled={page === totalPages}
        variant="outline"
        onClick={() => handlePageChange(page + 1)}
        className={twMerge("w-fit px-4 py-2", "disabled:opacity-50")}
      >
        Próxima
      </Button>
    </div>
  );
};
