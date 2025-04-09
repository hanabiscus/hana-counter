import BalanceCreateButton from "../balance-components/balance-create-button/BalanceCreateButton";
import BalanceModal from "../balance-components/modal/BalanceModal";

const Balance = () => {
  return (
    <>
      <div className="h-svh relative">
        <div className="z-50 opacity-100 fixed bottom-8 right-8">
          <BalanceCreateButton />
        </div>
      </div>
      <BalanceModal />
    </>
  );
};

export default Balance;
