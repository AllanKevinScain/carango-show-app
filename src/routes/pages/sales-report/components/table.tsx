export interface SalesOrder {
  id: number;
  userId: number;
  totalAmount: number;
  createdAt: string;
  itemCount: number;
}

export interface SalesReportProps {
  period: string;
  totalOrders: number;
  totalItemsSold: number;
  averageOrderValue: number;
  orders: SalesOrder[];
}

export function SalesReportTable({
  period,
  totalOrders,
  totalItemsSold,
  averageOrderValue,
  orders,
}: SalesReportProps) {
  return (
    <div
      className="
      bg-neutral-50 
      p-6 
      rounded-xl 
      border 
      border-neutral-200 
      shadow-sm
      flex 
      flex-col 
      gap-4
    "
    >
      <h2 className="text-blue-950 font-semibold text-xl">
        Relatório de Vendas — {period}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Total Pedidos</p>
          <p className="text-blue-950 font-semibold text-lg">{totalOrders}</p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Total Itens Vendidos</p>
          <p className="text-blue-950 font-semibold text-lg">
            {totalItemsSold}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Valor Médio dos Pedidos</p>
          <p className="text-blue-950 font-semibold text-lg">
            R${averageOrderValue.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="overflow-auto">
        <table className="w-full border-collapse mt-4">
          <thead>
            <tr className="bg-neutral-100 border-b border-neutral-300">
              <th className="text-left p-3 font-semibold text-neutral-600">
                ID
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                User
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Total
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Qtd
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Data
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-neutral-200 hover:bg-neutral-100 transition"
              >
                <td className="p-3 text-blue-950 font-medium">{order.id}</td>
                <td className="p-3 text-neutral-700">{order.userId}</td>
                <td className="p-3 text-neutral-700">
                  R$ {order.totalAmount.toFixed(2)}
                </td>
                <td className="p-3 text-neutral-700">{order.itemCount}</td>
                <td className="p-3 text-neutral-700">
                  {new Date(order.createdAt).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
