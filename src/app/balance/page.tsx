import Balance from "@/components/page-components/Balance";
import { checkAuthSession } from "@/server/authentication/amplifyAuthSession";
import { getBalanceMonthList } from "@/server/balance/balanceProcessors";
import { balanceMonthDTOType } from "@/const/types";

const BalancePage = async () => {
  const isLogin = await checkAuthSession();

  const fetchedBalanceMonthData: balanceMonthDTOType = [];

  if (isLogin) {
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
