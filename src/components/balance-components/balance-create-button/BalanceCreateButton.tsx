import { useBalanceModal } from "@/hooks/useBalanceModal";

const BalanceCreateButton = () => {
  const balanceModalMutator = useBalanceModal();

  return (
    <>
      <button
        onClick={balanceModalMutator}
        className="h-[50px] w-[50px] bg-[#009844] rounded-full shadow-md"
      >
        <div className="flex justify-center items-center">
          <div className="text-[30px] text-[#333333]">{"+"}</div>
        </div>
      </button>
    </>
  );
};

export default BalanceCreateButton;
