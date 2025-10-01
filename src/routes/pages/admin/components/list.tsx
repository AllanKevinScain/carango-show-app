import { api } from "@/api";
import { Card, Container, Pagination } from "@/components";
import { useProduct, useToggle, type ListProductReturnType } from "@/hooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { DeleteModal } from "./delete-modal";
import { EditModal, type Product } from "./edit-modal";
import type { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const List = () => {
  const { listProducts } = useProduct();
  const [searchParams, setSearchParams] = useSearchParams();
  const deleteModal = useToggle();
  const editModal = useToggle();

  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 10;

  const products = useQuery<ListProductReturnType>({
    queryKey: ["list-products", page, limit],
    queryFn: () => listProducts({ page, limit }),
  });

  if (products.isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }
  const confirmDelete = (id: string) => {
    setProductToDelete(id);
    deleteModal.handle();
  };

  const handleDelete = async () => {
    if (!productToDelete) return;

    try {
      await api.delete(`/product/${productToDelete}`);
      toast.success("Produto removido com sucesso!");
      products.refetch();
    } catch (error) {
      const aux = error as AxiosError<{ message: string }>;
      return toast.error(aux?.response?.data?.message || "Erro deconhecido");
    } finally {
      deleteModal.handle();
      setProductToDelete(null);
    }
  };

  const handleEdit = (product: Product) => {
    setProductToEdit(product);
    editModal.handle();
  };

  return (
    <div className={twMerge("flex flex-col gap-[5px]")}>
      {products.data?.data
        ?.filter((product) => product.id !== undefined)
        .map((product, index) => (
          <Card.table
            key={index}
            name={product.name}
            price={product.price}
            thumbnail={"/carro_medio.png"}
            href={`/product/${product.id}`}
            onRemove={() => confirmDelete(String(product.id))}
            onEdit={() => handleEdit(product as Product)}
          />
        ))}
      <DeleteModal {...deleteModal} handleDelete={handleDelete} />
      {productToEdit && (
        <EditModal
          {...editModal}
          product={productToEdit}
          onUpdated={() => products.refetch()}
        />
      )}

      <Pagination
        page={page}
        limit={limit}
        totalPages={products?.data?.totalPages || 0}
        setPage={setSearchParams}
      />
    </div>
  );
};
