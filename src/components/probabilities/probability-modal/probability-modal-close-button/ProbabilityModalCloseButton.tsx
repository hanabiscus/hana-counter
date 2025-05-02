import { JSX } from "react";
import { useProbabilityModal } from "@/hooks/useProbabilityModal";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const ProbabilityModalCloseButton: () => JSX.Element = () => {
  const probabilityModalMutator: () => void = useProbabilityModal();

  return (
    <div className="m-[6px] flex justify-center items-center">
      <button onClick={probabilityModalMutator}>
        <CloseRoundedIcon />
      </button>
    </div>
  );
};

export default ProbabilityModalCloseButton;
