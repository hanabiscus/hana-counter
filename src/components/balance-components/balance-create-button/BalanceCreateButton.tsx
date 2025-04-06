import { useBalanceModal } from "@/hooks/useBalanceModal";
import BalanceModal from "../modal/BalanceModal";

const BalanceCreateButton = () => {
  const balanceModalMutator = useBalanceModal();

  return (
    <>
      <button
        onClick={balanceModalMutator}
        className="h-[50px] w-[50px] bg-[#009844] rounded-full flex justify-center"
      >
        <div className="text-4xl text-[#333333] h-[50px] w-[50px] content-center">
          {"+"}
        </div>
      </button>
      <BalanceModal />
    </>
  );
};

export default BalanceCreateButton;
