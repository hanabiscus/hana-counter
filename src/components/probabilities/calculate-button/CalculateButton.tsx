"use client";

import { JSX } from "react";
import { useLoading } from "@/hooks/useLoading";
import {
  useBonusInput,
  useBigbonusWatermelonInput,
  useRegularbonusSideLampInput,
  useProbabilityOutput,
} from "@/hooks/useProbability";
import { useProbabilityModal } from "@/hooks/useProbabilityModal";
import { calculateProbabilitiesOfHana } from "@/server/probability/probabilityProcessors";
import { CALCULATE } from "@/const/constants";

const CalculateButton: () => JSX.Element = () => {
  const loadingMutator: (isLoading: boolean) => void =
    useLoading()[1].loadingMutator;

  const bigbonusGameCounterNumber: number = useBonusInput()[0];
  const regularbonusCounterNumber: number = useBonusInput()[1];

  const bigbonusWatermelonCounterNumber: number =
    useBigbonusWatermelonInput()[0];

  const redSideLampCounterNumber: number = useRegularbonusSideLampInput()[0];
  const greenSideLampCounterNumber: number = useRegularbonusSideLampInput()[1];
  const yellowSideLampCounterNumber: number = useRegularbonusSideLampInput()[2];
  const blueSideLampCounterNumber: number = useRegularbonusSideLampInput()[3];

  const probabilityModalMutator: () => void = useProbabilityModal();

  const setProbabilityOutput: (probabilityOutput: number[]) => void =
    useProbabilityOutput()[1].setProbabilityOutput;

  const handleClickCalculate: () => Promise<void> = async () => {
    probabilityModalMutator();
    loadingMutator(true);
    setProbabilityOutput(
      await calculateProbabilitiesOfHana({
        bigbonusCounterNumber: bigbonusGameCounterNumber,
        regularbonusCounterNumber: regularbonusCounterNumber,
        bigbonusWatermelonCounterNumber: bigbonusWatermelonCounterNumber,
        redSideLampCounterNumber: redSideLampCounterNumber,
        greenSideLampCounterNumber: greenSideLampCounterNumber,
        yellowSideLampCounterNumber: yellowSideLampCounterNumber,
        blueSideLampCounterNumber: blueSideLampCounterNumber,
      })
    );
    loadingMutator(false);
  };

  return (
    <div className="m-3 flex justify-center">
      <button
        onClick={handleClickCalculate}
        className="bg-[#cccccc] h-[45px] w-[140px] m-[10px] border-[2px] border-[#666666] rounded-[30px]"
      >
        <div className="text-[16px] text-[#333333] p-[2px] flex justify-center">
          {CALCULATE}
        </div>
      </button>
    </div>
  );
};

export default CalculateButton;
