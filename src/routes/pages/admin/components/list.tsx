import { api } from "@/api";
import { Card, Container } from "@/components";
import { useProduct } from "@/hooks";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaTruckLoading } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { DeleteModal } from "./delete-modal";
import { EditModal, type Product } from "./edit-modal";
import type { AxiosError } from "axios";

export const List = () => {
  const products = useProduct();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);

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
    setDeleteModalOpen(true);
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
      setDeleteModalOpen(false);
      setProductToDelete(null);
    }
  };

  const handleEdit = (product: Product) => {
    setProductToEdit(product);
    setEditModalOpen(true);
  };

  return (
    <div className={twMerge("flex flex-col gap-[5px]")}>
      {products?.data
        ?.filter((product) => product.id !== undefined)
        .map((product, index) => (
          <Card.table
            key={index}
            name={product.name}
            description={""}
            price={product.price}
            thumbnail={"/carro_medio.png"}
            href={`${product.id}`}
            onRemove={() => confirmDelete(String(product.id))}
            onEdit={() => handleEdit(product as Product)}
          />
        ))}
      <DeleteModal
        open={deleteModalOpen}
        handle={() => setDeleteModalOpen(false)}
        handleDelete={handleDelete}
      />
      {productToEdit && (
        <EditModal
          open={editModalOpen}
          handle={() => setEditModalOpen(false)}
          product={productToEdit}
          onUpdated={() => products.refetch()}
        />
      )}
    </div>
  );
};
