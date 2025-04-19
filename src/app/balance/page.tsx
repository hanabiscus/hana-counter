import { JSX } from "react";
import Balance from "@/components/page-components/Balance";
import { checkAuthSession } from "@/server/authentication/amplifyAuthSession";
import { getBalanceMonthList } from "@/server/balance/balanceProcessors";
import { balanceMonthDTOType } from "@/const/types";

const BalancePage = async (): Promise<JSX.Element> => {
  const isLogin: boolean = await checkAuthSession();

  const fetchedBalanceMonthList: balanceMonthDTOType = [];

  if (isLogin) {
    Array.prototype.push.apply(
      fetchedBalanceMonthList,
      await getBalanceMonthList()
    );
  }

  return (
    <>
      {isLogin ? (
        <Balance balanceMonthDataDTO={fetchedBalanceMonthList} />
      ) : (
        <div className="h-svh flex justify-center items-center">
          <Balance balanceMonthDataDTO={[]} />
        </div>
      )}
    </>
  );
};

export default BalancePage;
