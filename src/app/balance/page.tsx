import Balance from "@/components/page-components/Balance";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";

const BalancePage = async () => {
  const fetchedMonthlyBalanceData = await getMonthlyBalanceData("2025-04");

  return <Balance balanceDataDTO={fetchedMonthlyBalanceData} />;
};

export default BalancePage;
