import {
  useBalanceDate,
  useBalanceMonth,
  useBalanceValue,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoadingState } from "@/hooks/useLoading";
import { updateBalance } from "@/server/balance/balanceProcedures";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";
import { translateBalanceDateToBalanceMonth } from "@/utils/dateUtils";

const BalanceUpdateButton = () => {
  const { loadingMutator } = useLoadingState()[1];
  const [income, expenditure] = useBalanceValue();
  const balanceDate = useBalanceDate()[0];
  const balanceModalMutator = useBalanceModal();
  const setFetchedMonthlyBalanceData =
    useMonthlyBalanceData()[1].setFetchedMonthlyBalanceData;
  const setBalanceMonth = useBalanceMonth()[1].setBalanceMonth;

  const handleClickBalanceUpdate = async () => {
    balanceModalMutator();
    loadingMutator(true);
    await updateBalance(income, expenditure, balanceDate);
    setBalanceMonth(translateBalanceDateToBalanceMonth(balanceDate));
    setFetchedMonthlyBalanceData(
      await getMonthlyBalanceData(
        translateBalanceDateToBalanceMonth(balanceDate)
      )
    );
    loadingMutator(false);
  };

  return (
    <button
      onClick={handleClickBalanceUpdate}
      className="m-[10px] text-[15px] text-[#90caf9]"
    >
      {"登録"}
    </button>
  );
};

export default BalanceUpdateButton;
