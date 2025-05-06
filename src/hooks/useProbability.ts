import { useAtom } from "jotai";
import {
  bigbonusCounterNumberState,
  bigbonusWaterMelonCounterNumberState,
  blueSideLampCounterNumberState,
  greenSideLampCounterNumberState,
  probabilityOutputState,
  redSideLampCounterNumberState,
  regularbonusCounterNumberState,
  yellowSideLampCounterNumberState,
} from "@/atoms/probabilityState";
import {
  hooksBigbonusWatermelonInputReturn,
  hooksBonusInputReturn,
  hooksProbabilityOutputReturn,
  hooksRegularbonusSideLampReturn,
} from "@/const/types";
import { COUNTER_NUMBER_MAX_VALUE } from "@/const/constants";

export const useBonusInput: () => hooksBonusInputReturn = () => {
  const [bigbonusCounterNumber, setBigbonusCounterNumber] = useAtom(
    bigbonusCounterNumberState
  );

  const [regularbonusCounterNumber, setRegularBonusCounterNumber] = useAtom(
    regularbonusCounterNumberState
  );

  const setAbsoluteBigbonusCounterNumber: (counterNumber: number) => void = (
    counterNumber: number
  ) => {
    if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
      setBigbonusCounterNumber(COUNTER_NUMBER_MAX_VALUE);
    } else if (counterNumber < 0) {
      setBigbonusCounterNumber(0);
    } else {
      setBigbonusCounterNumber(Math.floor(counterNumber));
    }
  };

  const setAbsoluteRegularbonusCounterNumber: (
    counterNumber: number
  ) => void = (counterNumber: number) => {
    if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
      setRegularBonusCounterNumber(COUNTER_NUMBER_MAX_VALUE);
    } else if (counterNumber < 0) {
      setRegularBonusCounterNumber(0);
    } else {
      setRegularBonusCounterNumber(Math.floor(counterNumber));
    }
  };

  return [
    bigbonusCounterNumber,
    regularbonusCounterNumber,
    { setAbsoluteBigbonusCounterNumber, setAbsoluteRegularbonusCounterNumber },
  ];
};

export const useBigbonusWatermelonInput: () => hooksBigbonusWatermelonInputReturn =
  () => {
    const [
      bigbonusWaterMelonCounterNumber,
      setBigbonusWatermelonCounterNumber,
    ] = useAtom(bigbonusWaterMelonCounterNumberState);

    const setAbsoluteBigbonusWatermelonCounterNumber: (
      counterNumber: number
    ) => void = (counterNumber: number) => {
      if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
        setBigbonusWatermelonCounterNumber(COUNTER_NUMBER_MAX_VALUE);
      } else if (counterNumber < 0) {
        setBigbonusWatermelonCounterNumber(0);
      } else {
        setBigbonusWatermelonCounterNumber(Math.floor(counterNumber));
      }
    };

    return [
      bigbonusWaterMelonCounterNumber,
      { setAbsoluteBigbonusWatermelonCounterNumber },
    ];
  };

export const useRegularbonusSideLampInput: () => hooksRegularbonusSideLampReturn =
  () => {
    const [redSideLampCounterNumber, setRedSideLampCounterNumber] = useAtom(
      redSideLampCounterNumberState
    );

    const [greenSideLampCounterNumber, setGreenSideLampCounterNumber] = useAtom(
      greenSideLampCounterNumberState
    );

    const [yellowSideLampCounterNumber, setYellowSideLampCounterNumber] =
      useAtom(yellowSideLampCounterNumberState);

    const [blueSideLampCounterNumber, setBlueSideLampCounterNumber] = useAtom(
      blueSideLampCounterNumberState
    );

    const setAbsoluteRedSideLampCounterNumber: (
      counterNumber: number
    ) => void = (counterNumber: number) => {
      if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
        setRedSideLampCounterNumber(COUNTER_NUMBER_MAX_VALUE);
      } else if (counterNumber < 0) {
        setRedSideLampCounterNumber(0);
      } else {
        setRedSideLampCounterNumber(Math.floor(counterNumber));
      }
    };

    const setAbsoluteGreenSideLampCounterNumber: (
      counterNumber: number
    ) => void = (counterNumber: number) => {
      if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
        setGreenSideLampCounterNumber(COUNTER_NUMBER_MAX_VALUE);
      } else if (counterNumber < 0) {
        setGreenSideLampCounterNumber(0);
      } else {
        setGreenSideLampCounterNumber(Math.floor(counterNumber));
      }
    };

    const setAbsoluteYellowSideLampCounterNumber: (
      counterNumber: number
    ) => void = (counterNumber: number) => {
      if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
        setYellowSideLampCounterNumber(COUNTER_NUMBER_MAX_VALUE);
      } else if (counterNumber < 0) {
        setYellowSideLampCounterNumber(0);
      } else {
        setYellowSideLampCounterNumber(Math.floor(counterNumber));
      }
    };

    const setAbsoluteBlueSideLampCounterNumber: (
      counterNumber: number
    ) => void = (counterNumber: number) => {
      if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
        setBlueSideLampCounterNumber(COUNTER_NUMBER_MAX_VALUE);
      } else if (counterNumber < 0) {
        setBlueSideLampCounterNumber(0);
      } else {
        setBlueSideLampCounterNumber(Math.floor(counterNumber));
      }
    };

    return [
      redSideLampCounterNumber,
      greenSideLampCounterNumber,
      yellowSideLampCounterNumber,
      blueSideLampCounterNumber,
      {
        setAbsoluteRedSideLampCounterNumber,
        setAbsoluteGreenSideLampCounterNumber,
        setAbsoluteYellowSideLampCounterNumber,
        setAbsoluteBlueSideLampCounterNumber,
      },
    ];
  };

export const useProbabilityOutput: () => hooksProbabilityOutputReturn = () => {
  const [probabilityOutput, setProbabilityOutput] = useAtom(
    probabilityOutputState
  );

  return [probabilityOutput, { setProbabilityOutput }];
};
