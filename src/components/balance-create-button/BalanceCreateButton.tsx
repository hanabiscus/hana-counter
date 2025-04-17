import { useBalanceDate, useBalanceValue } from "@/hooks/useBalance";
import { useBalanceModal, useCreateBalance } from "@/hooks/useBalanceModal";
import { getCurrentBalanceDate } from "@/utils/dateUtils";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const BalanceCreateButton = () => {
  const { createBalanceStateMutator } = useCreateBalance()[1];
  const balanceModalMutator = useBalanceModal();
  const setIntegerIncome = useBalanceValue()[2].setIntegerIncome;
  const setIntegerExpenditure = useBalanceValue()[2].setIntegerExpenditure;
  const setStringBalanceDate = useBalanceDate()[1].setBalanceDate;

  const handleClickBalanceCreate = () => {
    setIntegerIncome(0);
    setIntegerExpenditure(0);
    setStringBalanceDate(getCurrentBalanceDate());
    createBalanceStateMutator(true);
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
