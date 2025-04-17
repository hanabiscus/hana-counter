import Balance from "@/components/page-components/Balance";
import { checkAuthSession } from "@/server/authentication/amplifyAuthSession";
import {
  getBalanceMonthList,
  getMonthlyBalanceData,
} from "@/server/balance/balanceProcessors";
import { getCurrentBalanceMonth } from "@/utils/dateUtils";
import { balanceDTOType, balanceMonthDTOType } from "@/const/types";

const BalancePage = async () => {
  const isLogin = await checkAuthSession();

  const fetchedMonthlyBalanceData: balanceDTOType = [];
  const fetchedBalanceMonthData: balanceMonthDTOType = [];

  const currentBalanceMonth = getCurrentBalanceMonth();

  if (isLogin) {
    Array.prototype.push.apply(
      fetchedMonthlyBalanceData,
      await getMonthlyBalanceData(currentBalanceMonth)
    );

    Array.prototype.push.apply(
      fetchedBalanceMonthData,
      await getBalanceMonthList()
    );
  }

  return (
    <>
      {isLogin ? (
        <>
          <Balance balanceMonthDataDTO={fetchedBalanceMonthData} />
        </>
      ) : (
        <div className="h-svh flex justify-center items-center">
          <Balance balanceMonthDataDTO={[]} />
        </div>
      )}
    </>
  );
};

export default BalancePage;
