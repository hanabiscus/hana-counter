import { JSX } from "react";
import {
  useBalanceDate,
  useBalanceMonth,
  useBalanceValue,
  useBalanceData,
} from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoading } from "@/hooks/useLoading";
import { updateBalance } from "@/server/balance/balanceProcedures";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";
import { translateBalanceDateToBalanceMonth } from "@/utils/dateUtils";
import { balanceDTOType } from "@/const/types";
import { SUBMIT } from "@/const/constants";

const BalanceUpdateButton: () => JSX.Element = () => {
  const [income, expenditure] = useBalanceValue();

  const balanceDate: string = useBalanceDate()[0];

  const loadingMutator: (isLoading: boolean) => void =
    useLoading()[1].loadingMutator;

  const balanceModalMutator: () => void = useBalanceModal();

  const setBalanceData: (balanceData: balanceDTOType) => void =
    useBalanceData()[1].setBalanceData;

  const setBalanceMonth: (balanceMonth: string) => void =
    useBalanceMonth()[1].setBalanceMonth;

  const handleClickBalanceUpdate: () => Promise<void> = async () => {
    balanceModalMutator();
    loadingMutator(true);
    await updateBalance(income, expenditure, balanceDate);
    setBalanceMonth(translateBalanceDateToBalanceMonth(balanceDate));
    setBalanceData(
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
      {SUBMIT}
    </button>
  );
};

export default BalanceUpdateButton;
