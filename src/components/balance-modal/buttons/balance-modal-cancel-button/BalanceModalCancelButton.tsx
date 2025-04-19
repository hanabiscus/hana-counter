import { JSX } from "react";
import { useBalanceModal } from "@/hooks/useBalanceModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const BalanceModalCancelButton: () => JSX.Element = () => {
  const balanceModalMutator: () => void = useBalanceModal();

  return (
    <div className="m-[6px] flex justify-center items-center">
      <button onClick={balanceModalMutator}>
        <CloseRoundedIcon />
      </button>
    </div>
  );
};

export default BalanceModalCancelButton;
