import { useBalanceModal } from "@/hooks/useBalanceModal";

const BalanceModalCancelButton = () => {
  const balanceModalMutator = useBalanceModal();

  return (
    <button
      onClick={balanceModalMutator}
      className="text-[13px] text-[#3f50b5] m-2"
    >
      {"キャンセル"}
    </button>
  );
};

export default BalanceModalCancelButton;
