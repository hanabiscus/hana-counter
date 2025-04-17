import { useBalanceDate } from "@/hooks/useBalance";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import { useLoadingState } from "@/hooks/useLoading";
import { deleteBalance } from "@/server/balance/balanceProcedures";

const BalanceDeleteButton = () => {
  const { loadingMutator } = useLoadingState()[1];
  const balanceDate = useBalanceDate()[0];
  const balanceModalMutator = useBalanceModal();

  const handleClickBalanceUpdateButton = async () => {
    balanceModalMutator();
    loadingMutator(true);
    await deleteBalance(balanceDate);
    loadingMutator(false);
  };

  return (
    <button
      onClick={handleClickBalanceUpdateButton}
      className="m-[10px] text-[13px] text-[#d32f2f]"
    >
      {"削除"}
    </button>
  );
};

export default BalanceDeleteButton;
