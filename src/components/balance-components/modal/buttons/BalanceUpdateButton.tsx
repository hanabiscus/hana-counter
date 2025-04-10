import { useBalanceDate, useBalanceValue } from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { updateBalance } from "@/server/balance/balanceProcedures";

const BalanceUpdateButton = () => {
  const [income, expenditure] = useBalanceValue();
  const [balanceDate] = useBalanceDate();
  const balanceModalMutator = useBalanceModal();

  const handleClickBalanceUpdateButton = async () => {
    balanceModalMutator();
    await updateBalance(income, expenditure, balanceDate);
  };

  return (
    <button
      onClick={handleClickBalanceUpdateButton}
      className="text-[13px] text-[#3f50b5] m-2"
    >
      {"登録"}
    </button>
  );
};

export default BalanceUpdateButton;
