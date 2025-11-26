import { Container } from "@/components";
import { useDashboard } from "@/hooks/use-dashboard";
import { useQuery } from "@tanstack/react-query";
import { FaTruckLoading } from "react-icons/fa";
import { MdAttachMoney, MdBarChart, MdStar } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { DashboardCard } from "./components/card";
import { SupplierRanking } from "./components/supplierRanking";

export function DashboardPage() {
  const { getSummary, getTopProduct, getSupplierRanking } = useDashboard();

  const summaryQuery = useQuery({
    queryKey: ["dashboard-summary"],
    queryFn: getSummary,
  });

  const topProductQuery = useQuery({
    queryKey: ["dashboard-top-product"],
    queryFn: getTopProduct,
  });

  const rankingQuery = useQuery({
    queryKey: ["supplier-ranking"],
    queryFn: getSupplierRanking,
  });

  const isLoading =
    summaryQuery.isLoading ||
    summaryQuery.isFetching ||
    topProductQuery.isLoading ||
    topProductQuery.isFetching;

  if (isLoading) {
    return (
      <Container
        className={twMerge("flex items-center justify-center", "h-[500px]")}
      >
        <FaTruckLoading className="animate-spin" size={30} />
      </Container>
    );
  }

  return (
    <Container className={twMerge("flex flex-col gap-[32px]", "py-[132px]")}>
      <h1 className="text-2xl font-bold text-blue-950 mb-[16px]">
        Dashboard Mensal
      </h1>
      <div
        className={twMerge(
          "grid grid-cols-1 gap-[32px]",
          "md:grid-cols-2",
          "lg:grid-cols-3"
        )}
      >
        <DashboardCard
          name="Total vendido no mês"
          description={`R$ ${summaryQuery.data?.totalMonthAmount ?? 0}`}
          icon={<MdAttachMoney size={32} />}
        />

        <DashboardCard
          name="Total de pedidos"
          description={summaryQuery.data?.orderCount ?? 0}
          icon={<MdBarChart size={32} />}
        />

        <DashboardCard
          name="Produto mais vendido"
          description={topProductQuery.data?.productName ?? "Nenhum"}
          icon={<MdStar size={32} />}
        />

        {rankingQuery.data && (
          <SupplierRanking
            period={rankingQuery.data.period}
            suppliers={rankingQuery.data.suppliers}
          />
        )}
      </div>
    </Container>
  );
}
