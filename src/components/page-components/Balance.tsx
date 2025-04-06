import BalanceCreateButton from "../balance-components/balance-create-button/BalanceCreateButton";

const Balance = () => {
  return (
    <div className="h-svh relative">
      <div className="z-50 opacity-100 fixed bottom-16 right-8">
        <BalanceCreateButton />
      </div>
    </div>
  );
};

export default Balance;
