import { useBalanceDate, useBalanceValue } from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoadingState } from "@/hooks/useLoading";
import { updateBalance } from "@/server/balance/balanceProcedures";

const BalanceUpdateButton = () => {
  const { loadingMutator } = useLoadingState()[1];
  const [income, expenditure] = useBalanceValue();
  const balanceDate = useBalanceDate()[0];
  const balanceModalMutator = useBalanceModal();

  const handleClickBalanceUpdate = async () => {
    balanceModalMutator();
    loadingMutator(true);
    await updateBalance(income, expenditure, balanceDate);
    loadingMutator(false);
  };

  return (
    <button
      onClick={handleClickBalanceUpdate}
      className="m-[10px] text-[13px] text-[#90caf9]"
    >
      {"登録"}
    </button>
  );
};

export default BalanceUpdateButton;
