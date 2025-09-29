import { Container } from "@/components";
import { twMerge } from "tailwind-merge";
import { useOrder } from "@/hooks/use-order";
import { FaTruckLoading } from "react-icons/fa";
import { OrderTable } from "@/components/order-table";

export function OrderPage() {
  const { data: orders, isLoading } = useOrder();

  if (isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <Container className="flex items-center justify-center h-[500px]">
        <span className="text-gray-500">Nenhum pedido encontrado</span>
      </Container>
    );
  }

  return (
    <Container
      className={twMerge(
        "py-[132px]",
        "grid grid-cols-1 gap-[32px]",
        "lg:grid-cols-1"
      )}
    >
      <h1 className="text-2xl font-bold text-blue-950 mb-[16px]">
        Meus Pedidos
      </h1>
      <div className="flex flex-col gap-4">
        {orders.map((order) => (
          <OrderTable
            key={order.id}
            id={order.id}
            totalAmount={order.totalAmount}
            createdAt={order.createdAt}
          />
        ))}
      </div>
    </Container>
  );
}
