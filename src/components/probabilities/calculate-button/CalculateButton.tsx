"use client";

import { JSX } from "react";
import { useLoading } from "@/hooks/useLoading";
import {
  useProbabilityInput,
  useProbabilityOutput,
} from "@/hooks/useProbability";
import { useProbabilityModal } from "@/hooks/useProbabilityModal";
import { calculateProbabilitiesOfHana } from "@/server/probability/probabilityProcessors";
import { useHanaKind } from "@/hooks/useHanaKind";
import { CALCULATE } from "@/const/constants";

const CalculateButton: () => JSX.Element = () => {
  const loadingMutator: (isLoading: boolean) => void =
    useLoading()[1].loadingMutator;
  const hanaKind: string = useHanaKind()[0];
  const totalGameCounterNumber: number = useProbabilityInput()[0];
  const bigbonusGameCounterNumber: number = useProbabilityInput()[1];
  const regularbonusCounterNumber: number = useProbabilityInput()[2];

  const probabilityModalMutator: () => void = useProbabilityModal();

  const setProbabilityOutput: (probabilityOutput: number[]) => void =
    useProbabilityOutput()[1].setProbabilityOutput;

  const handleClickCalculate: () => Promise<void> = async () => {
    probabilityModalMutator();
    loadingMutator(true);
    setProbabilityOutput(
      await calculateProbabilitiesOfHana({
        hanaKind: hanaKind,
        totalGameCounterNumber: totalGameCounterNumber,
        bigbonusCounterNumber: bigbonusGameCounterNumber,
        regularbonusCounterNumber: regularbonusCounterNumber,
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
