import { useBalanceDate, useBalanceValue } from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoadingState } from "@/hooks/useLoading";
import { updateBalance } from "@/server/balance/balanceProcedures";

const BalanceUpdateButton = () => {
  const { loadingMutator } = useLoadingState()[1];
  const [income, expenditure] = useBalanceValue();
  const [balanceDate] = useBalanceDate();
  const balanceModalMutator = useBalanceModal();

  const handleClickBalanceUpdateButton = async () => {
    balanceModalMutator();
    loadingMutator(true);
    await updateBalance(income, expenditure, balanceDate);
    loadingMutator(false);
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
