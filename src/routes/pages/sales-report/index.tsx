import { Container } from "@/components";
import { useSalesReport } from "@/hooks/use-sales-report";
import { useQuery } from "@tanstack/react-query";
import { FaTruckLoading } from "react-icons/fa";
import { SalesReportTable } from "./components/table";

export default function SalesReportPage() {
  const { getSalesReport } = useSalesReport();

  const report = useQuery({
    queryKey: ["sales-report"],
    queryFn: () => getSalesReport(),
  });

  if (report.isLoading || report.isFetching) {
    return (
      <Container className="flex items-center justify-center h-[500px]">
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  if (!report.data) {
    return (
      <Container className="flex items-center justify-center h-[300px]">
        Sem dados
      </Container>
    );
  }

  return (
    <Container className="py-[132px] flex flex-col gap-10">
      <SalesReportTable
        period={report.data.period}
        totalOrders={report.data.totalOrders}
        totalItemsSold={report.data.totalItemsSold}
        averageOrderValue={report.data.averageOrderValue}
        orders={report.data.orders}
      />
    </Container>
  );
}
