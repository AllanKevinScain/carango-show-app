import { Container } from "@/components";
import { useFinancialReport } from "@/hooks/use-financial-report";
import { useQuery } from "@tanstack/react-query";
import { FaTruckLoading } from "react-icons/fa";
import { FinancialAnalysisReport } from "./components/table";
import { twMerge } from "tailwind-merge";

export default function FinancialReportPage() {
  const { getFinancialReport } = useFinancialReport();

  const report = useQuery({
    queryKey: ["financial-report"],
    queryFn: () => getFinancialReport(),
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
    <Container className={twMerge("flex flex-col gap-[32px]", "py-[132px]")}>
      <FinancialAnalysisReport
        period={report.data.period}
        metrics={report.data.metrics}
      />
    </Container>
  );
}
