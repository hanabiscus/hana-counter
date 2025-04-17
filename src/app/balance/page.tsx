import Balance from "@/components/page-components/Balance";
import { checkAuthSession } from "@/server/authentication/amplifyAuthSession";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";
import { balanceDTOType } from "@/const/types";
import { getCurrentBalanceMonth } from "@/utils/dateUtils";

const BalancePage = async () => {
  const isLogin = await checkAuthSession();
  const fetchedMonthlyBalanceData: balanceDTOType = [];
  if (isLogin) {
    Array.prototype.push.apply(
      fetchedMonthlyBalanceData,
      await getMonthlyBalanceData(getCurrentBalanceMonth())
    );
  }

  return (
    <>
      {isLogin ? (
        <Balance balanceDataDTO={fetchedMonthlyBalanceData} />
      ) : (
        <div className="h-svh flex justify-center items-center">
          <Balance balanceDataDTO={fetchedMonthlyBalanceData} />
        </div>
      )}
    </>
  );
};

export default BalancePage;
