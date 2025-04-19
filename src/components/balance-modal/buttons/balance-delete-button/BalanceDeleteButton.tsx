import {
  useBalanceDate,
  useBalanceMonth,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoadingState } from "@/hooks/useLoading";
import { deleteBalance } from "@/server/balance/balanceProcedures";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";

const BalanceDeleteButton = () => {
  const { loadingMutator } = useLoadingState()[1];
  const balanceDate = useBalanceDate()[0];
  const balanceModalMutator = useBalanceModal();
  const setFetchedMonthlyBalanceData =
    useMonthlyBalanceData()[1].setFetchedMonthlyBalanceData;
  const balanceMonth = useBalanceMonth()[0];

  const handleClickBalanceDelete = async () => {
    balanceModalMutator();
    loadingMutator(true);
    await deleteBalance(balanceDate);
    setFetchedMonthlyBalanceData(await getMonthlyBalanceData(balanceMonth));
    loadingMutator(false);
  };

  return (
    <button
      onClick={handleClickBalanceDelete}
      className="m-[10px] text-[15px] text-[#d32f2f]"
    >
      {"削除"}
    </button>
  );
};

export default BalanceDeleteButton;
