import { api } from "@/api";

export interface SupplierRankingItem {
  supplierId: number;
  supplierName: string;
  supplierEmail: string;
  totalProductsSold: number;
  totalAmount: number;
  averageOrderValue: number;
}

export interface SupplierRankingResponse {
  period: string;
  suppliers: SupplierRankingItem[];
}

export interface SummaryResponse {
  totalMonthAmount: number;
  orderCount: number;
}

export interface TopProductResponse {
  productId: number;
  productName: string;
  productTrade: string;
  productModel: string;
  totalQuantitySold: number;
  totalAmount: number;
}

export function useDashboard() {
  async function getSummary() {
    const response = await api.get(`/report/total-sales`);
    return response.data as SummaryResponse;
  }

  async function getTopProduct() {
    const response = await api.get(`/report/top-selling-product-by-month`);
    return response.data as TopProductResponse;
  }

  async function getSupplierRanking() {
    const response = await api.get(`/report/suppliers-ranking`);
    return response.data as SupplierRankingResponse;
  }

  return {
    getSummary,
    getTopProduct,
    getSupplierRanking,
  };
}
