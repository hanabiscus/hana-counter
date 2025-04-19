import { JSX } from "react";
import { useBalanceDate, useBalanceValue } from "@/hooks/useBalance";
import { useBalanceModal, useCreateBalance } from "@/hooks/useBalanceModal";
import { getCurrentBalanceDate } from "@/utils/dateUtils";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const BalanceCreateButton: () => JSX.Element = () => {
  const createBalanceMutator: (isCreate: boolean) => void =
    useCreateBalance()[1].createBalanceMutator;

  const balanceModalMutator: () => void = useBalanceModal();

  const setIntegerIncome: (income: number) => void =
    useBalanceValue()[2].setIntegerIncome;

  const setIntegerExpenditure: (expenditure: number) => void =
    useBalanceValue()[2].setIntegerExpenditure;

  const setStringBalanceDate: (balanceDate: string) => void =
    useBalanceDate()[1].setBalanceDate;

  const handleClickBalanceCreate: () => void = () => {
    setIntegerIncome(0);
    setIntegerExpenditure(0);
    setStringBalanceDate(getCurrentBalanceDate());
    createBalanceMutator(true);
    balanceModalMutator();
  };

  return (
    <>
      <button
        onClick={handleClickBalanceCreate}
        className="h-[50px] w-[50px] bg-[#009844] rounded-full shadow-md"
      >
        <div className="flex justify-center items-center">
          <AddRoundedIcon />
        </div>
      </button>
    </>
  );
};

export default BalanceCreateButton;
