import { useAtom } from "jotai";
import {
  bigbonusCounterNumberState,
  probabilityOutputState,
  regularbonusCounterNumberState,
  totalGameCounterNumberState,
} from "@/atoms/probabilityState";
import {
  hooksProbabilityInputReturn,
  hooksProbabilityOutputReturn,
} from "@/const/types";

export const useProbabilityInput: () => hooksProbabilityInputReturn = () => {
  const [totalGameCounterNumber, setTotalGameCounterNumber] = useAtom(
    totalGameCounterNumberState
  );

  const [bigbonusCounterNumber, setBigbonusCounterNumber] = useAtom(
    bigbonusCounterNumberState
  );

  const [regularbonusCounterNumber, setRegularBonusCounterNumber] = useAtom(
    regularbonusCounterNumberState
  );

  const setAbsoluteTotalGameCounterNumber: (counterNumber: number) => void = (
    counterNumber: number
  ) => {
    if (counterNumber < 0) {
      setTotalGameCounterNumber(0);
    } else {
      setTotalGameCounterNumber(Math.floor(counterNumber));
    }
  };

  const setAbsoluteBigbonusCounterNumber: (counterNumber: number) => void = (
    counterNumber: number
  ) => {
    if (counterNumber < 0) {
      setBigbonusCounterNumber(0);
    } else {
      setBigbonusCounterNumber(Math.floor(counterNumber));
    }
  };

  const setAbsoluteRegularBonusCounterNumber: (
    counterNumber: number
  ) => void = (counterNumber: number) => {
    if (counterNumber < 0) {
      setRegularBonusCounterNumber(0);
    } else {
      setRegularBonusCounterNumber(Math.floor(counterNumber));
    }
  };

  return [
    totalGameCounterNumber,
    bigbonusCounterNumber,
    regularbonusCounterNumber,
    {
      setAbsoluteTotalGameCounterNumber,
      setAbsoluteBigbonusCounterNumber,
      setAbsoluteRegularBonusCounterNumber,
    },
  ];
};

export const useProbabilityOutput: () => hooksProbabilityOutputReturn = () => {
  const [probabilityOutput, setProbabilityOutput] = useAtom(
    probabilityOutputState
  );

  return [probabilityOutput, { setProbabilityOutput }];
};
