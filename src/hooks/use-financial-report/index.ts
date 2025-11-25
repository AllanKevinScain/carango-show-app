import { api } from "@/api";

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

export interface FinancialReportResponse {
  period: string;
  metrics: FinancialMetrics;
}

export function useFinancialReport() {
  async function getFinancialReport() {
    const response = await api.get(`/report/financial`);
    return response.data as FinancialReportResponse;
  }

  return { getFinancialReport };
}
