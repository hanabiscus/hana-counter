import { JSX } from "react";
import {
  useBalanceDate,
  useBalanceMonth,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoadingState } from "@/hooks/useLoading";
import { deleteBalance } from "@/server/balance/balanceProcedures";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";
import { balanceDTOType } from "@/const/types";

const BalanceDeleteButton: () => JSX.Element = () => {
  const balanceDate: string = useBalanceDate()[0];

  const balanceMonth: string = useBalanceMonth()[0];

  const loadingMutator: (isLoading: boolean) => void =
    useLoadingState()[1].loadingMutator;

  const balanceModalMutator: () => void = useBalanceModal();

  const setFetchedMonthlyBalanceData: (balanceData: balanceDTOType) => void =
    useMonthlyBalanceData()[1].setFetchedMonthlyBalanceData;

  const handleClickBalanceDelete: () => Promise<void> = async () => {
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
