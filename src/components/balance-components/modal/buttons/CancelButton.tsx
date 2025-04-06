import { useBalanceModal } from "@/hooks/useBalanceModal";

const CancelButton = () => {
  const balanceModalMutator = useBalanceModal();

  return (
    <button
      onClick={balanceModalMutator}
      className="h-[55px] m-2 text-[#3f50b5]"
    >
      {"キャンセル"}
    </button>
  );
};

export default CancelButton;
