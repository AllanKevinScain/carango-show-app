import { api } from "@/api";

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

  return {
    getSummary,
    getTopProduct,
  };
}
