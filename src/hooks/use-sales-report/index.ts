import { api } from "@/api";

export interface SalesOrder {
  id: number;
  userId: number;
  totalAmount: number;
  createdAt: string;
  itemCount: number;
}

export interface SalesReportResponse {
  period: string;
  totalOrders: number;
  totalItemsSold: number;
  averageOrderValue: number;
  orders: SalesOrder[];
}

export function useSalesReport() {
  async function getSalesReport() {
    const response = await api.get(`/report/sales`);
    return response.data as SalesReportResponse;
  }

  return { getSalesReport };
}
