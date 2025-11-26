import React from "react";
import type { SupplierRankingItem } from "@/hooks/use-dashboard";

interface SupplierRankingProps {
  suppliers: SupplierRankingItem[];
  period: string;
}

export const SupplierRanking: React.FC<SupplierRankingProps> = ({
  suppliers,
  period,
}) => {
  return (
    <div
      className="
        bg-neutral-50
        p-6
        rounded-xl
        shadow-sm
        border
        border-neutral-200
        flex
        flex-col
        gap-6
      "
    >
      <div className="flex items-center justify-between">
        <h2 className="text-blue-950 text-xl font-semibold">
          Ranking de Fornecedores
        </h2>

        <span className="text-neutral-500 text-sm">Periodo: {period}</span>
      </div>

      <div className="flex flex-col gap-4">
        {suppliers.map((item, index) => (
          <div
            key={item.supplierId}
            className="
              flex
              flex-wrap
              items-center
              bg-white
              p-4
              rounded-lg
              border
              border-neutral-200
              hover:shadow-md
              transition
              gap-4
            "
          >
            <div
              className="
                w-10
                h-10
                flex
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                font-bold
                flex-shrink-0
              "
            >
              {index + 1}
            </div>

            <div className="flex flex-col min-w-[180px] flex-1">
              <span className="font-semibold text-blue-950">
                {item.supplierName}
              </span>
              <span className="text-neutral-500 text-sm break-all">
                {item.supplierEmail}
              </span>
            </div>

            <div className="text-right min-w-[140px] flex-shrink">
              <span className="font-semibold text-blue-700 block">
                R$ {item.totalAmount.toLocaleString()}
              </span>
              <span className="text-neutral-500 text-sm">
                {item.totalProductsSold} produtos
              </span>
            </div>

            <div className="text-right min-w-[140px] flex-shrink">
              <span className="text-neutral-600 text-sm">
                Media: R$ {item.averageOrderValue.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
