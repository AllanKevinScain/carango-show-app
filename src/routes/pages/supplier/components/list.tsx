import { api } from "@/api";
import { Button, Container, Pagination } from "@/components";
import { useToggle } from "@/hooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { DeleteModal } from "./delete-modal";
import { EditModal } from "./edit-modal";
import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import {
  useSupplier,
  type ListSupplierReturnType,
  type SupplierInfoType,
} from "@/hooks/use-supplier";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export const List = () => {
  const { listSuppliers } = useSupplier();
  const [searchParams, setSearchParams] = useSearchParams();
  const deleteModal = useToggle();
  const editModal = useToggle();

  const [supplierToDelete, setSupplierToDelete] = useState<string | null>(null);
  const [supplierToEdit, setSupplierToEdit] = useState<SupplierInfoType | null>(
    null
  );

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const suppliers = useQuery<ListSupplierReturnType>({
    queryKey: ["list-suppliers", page, limit],
    queryFn: () => listSuppliers({ page, limit }),
  });

  if (suppliers.isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  const confirmDelete = (id: string) => {
    setSupplierToDelete(id);
    deleteModal.handle();
  };

  const handleDelete = async () => {
    if (!supplierToDelete) return;

    try {
      await api.delete(`/supplier/${supplierToDelete}`);
      toast.success("Fornecedor removido com sucesso!");
      suppliers.refetch();
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro desconhecido");
    } finally {
      deleteModal.handle();
      setSupplierToDelete(null);
    }
  };

  const handleEdit = (supplier: SupplierInfoType) => {
    setSupplierToEdit(supplier);
    editModal.handle();
  };

  return (
    <div className="flex flex-col gap-[10px]">
      {suppliers.data?.data?.map((supplier: SupplierInfoType) => (
        <div
          key={supplier.id}
          className={twMerge(
            "flex justify-between items-center p-4 bg-neutral-50 rounded-lg shadow-sm"
          )}
        >
          <div className="flex flex-col">
            <span className="font-bold text-blue-950">{supplier.name}</span>
            <span className="text-gray-400 text-sm">
              E-mail: {supplier.email}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              onClick={() => handleEdit(supplier)}
              className={twMerge(
                "text-blue-500 w-fit h-full",
                "transition",
                "hover:text-blue-700"
              )}
              variant="ghost"
            >
              <FiEdit2 size={20} />
            </Button>

            <Button
              onClick={() => confirmDelete(String(supplier.id))}
              className={twMerge(
                "text-red-500 w-fit h-full",
                "transition",
                "hover:text-red-700"
              )}
              variant="ghost"
            >
              <FiTrash2 size={20} />
            </Button>
          </div>
        </div>
      ))}

      <DeleteModal {...deleteModal} handleDelete={handleDelete} />

      {supplierToEdit && (
        <EditModal
          {...editModal}
          supplier={supplierToEdit}
          onUpdated={() => suppliers.refetch()}
        />
      )}

      <Pagination
        page={page}
        limit={limit}
        totalPages={suppliers?.data?.totalPages || 0}
        setPage={setSearchParams}
      />
    </div>
  );
};
