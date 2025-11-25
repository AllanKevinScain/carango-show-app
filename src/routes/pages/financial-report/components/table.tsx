export interface TopSellingProduct {
  productId: number;
  productName: string;
  productTrade: string;
  productModel: string;
  totalQuantitySold: number;
  totalAmount: number;
}

export interface FinancialMetrics {
  totalAmount: number;
  totalOrders: number;
  averageOrderValue: number;
  averageItemPrice: number;
  topSellingProduct: TopSellingProduct;
}

export interface FinancialAnalysisProps {
  period: string;
  metrics: FinancialMetrics;
}

export function FinancialAnalysisReport({
  period,
  metrics,
}: FinancialAnalysisProps) {
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
        Relatório Financeiro — {period}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Receita total</p>
          <p className="text-blue-950 font-semibold text-lg">
            R${metrics.totalAmount.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Total Pedidos</p>
          <p className="text-blue-950 font-semibold text-lg">
            {metrics.totalOrders}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Valor Médio dos Pedidos</p>
          <p className="text-blue-950 font-semibold text-lg">
            R$ {metrics.averageOrderValue.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-neutral-200 shadow-sm">
          <p className="text-neutral-500 text-sm">Preço Médio dos Itens</p>
          <p className="text-blue-950 font-semibold text-lg">
            R$ {metrics.averageItemPrice.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="overflow-auto mt-4">
        <h3 className="text-blue-950 font-semibold text-lg mb-2">
          Produto mais vendido
        </h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-100 border-b border-neutral-300">
              <th className="text-left p-3 font-semibold text-neutral-600">
                Produto
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Marca
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Modelo
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Qtd. Vendida
              </th>
              <th className="text-left p-3 font-semibold text-neutral-600">
                Receita
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-neutral-200 hover:bg-neutral-100 transition">
              <td className="p-3 text-blue-950 font-medium">
                {metrics.topSellingProduct.productName}
              </td>
              <td className="p-3 text-neutral-700">
                {metrics.topSellingProduct.productTrade}
              </td>
              <td className="p-3 text-neutral-700">
                {metrics.topSellingProduct.productModel}
              </td>
              <td className="p-3 text-neutral-700">
                {metrics.topSellingProduct.totalQuantitySold}
              </td>
              <td className="p-3 text-neutral-700">
                R$ {metrics.topSellingProduct.totalAmount.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
