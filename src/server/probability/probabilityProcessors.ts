"use server";

import BigNumber from "bignumber.js";
import {
  calculateConditionalProbabilitiesOfBigbonusWatermelon,
  calculateConditionalProbabilitiesOfRegularbonusSideLamp,
} from "@/lib/probability/probabilityPackage";
import { calculateProbabilitiesOfHanaInput } from "@/const/types";
import {
  NUM_OF_SETTEI,
  PROBABILITY_WEIGHT_OF_BB_WATERMELON,
  PROBABILITY_WEIGHT_OF_RB_SIDE,
} from "@/const/constants";

export const calculateProbabilitiesOfHana: (
  input: calculateProbabilitiesOfHanaInput
) => Promise<number[]> = async (input: calculateProbabilitiesOfHanaInput) => {
  if (
    Number.isInteger(input.bigbonusCounterNumber) &&
    Number.isInteger(input.regularbonusCounterNumber) &&
    Number.isInteger(input.bigbonusWatermelonCounterNumber) &&
    Number.isInteger(input.redSideLampCounterNumber) &&
    Number.isInteger(input.greenSideLampCounterNumber) &&
    Number.isInteger(input.yellowSideLampCounterNumber) &&
    Number.isInteger(input.blueSideLampCounterNumber) &&
    input.bigbonusCounterNumber > 0 &&
    input.regularbonusCounterNumber > 0 &&
    input.regularbonusCounterNumber >=
      input.redSideLampCounterNumber +
        input.greenSideLampCounterNumber +
        input.yellowSideLampCounterNumber +
        input.blueSideLampCounterNumber
  ) {
    const bigResults = new Array(NUM_OF_SETTEI);

    const conditionalProbabilitiesOfBigbonusWatermelon =
      await calculateConditionalProbabilitiesOfBigbonusWatermelon({
        bigbonusCounterNumber: input.bigbonusCounterNumber,
        bigbonusWatermelonCounterNumber: input.bigbonusWatermelonCounterNumber,
      });

    const conditionalProbabilitiesOfRegularbonusSideLamp =
      await calculateConditionalProbabilitiesOfRegularbonusSideLamp({
        regularbonusCounterNumber: input.regularbonusCounterNumber,
        redSideLampCounterNumber: input.redSideLampCounterNumber,
        greenSideLampCounterNumber: input.greenSideLampCounterNumber,
        yellowSideLampCounterNumber: input.yellowSideLampCounterNumber,
        blueSideLampCounterNumber: input.blueSideLampCounterNumber,
      });

    for (let index = 0; index < NUM_OF_SETTEI; index++) {
      bigResults[index] = Number(
        BigNumber(conditionalProbabilitiesOfBigbonusWatermelon[index])
          .times(PROBABILITY_WEIGHT_OF_BB_WATERMELON)
          .plus(
            BigNumber(
              conditionalProbabilitiesOfRegularbonusSideLamp[index]
            ).times(PROBABILITY_WEIGHT_OF_RB_SIDE)
          )
          .toFixed(4)
      );
    }

    return bigResults;
  } else {
    return [0, 0, 0, 0, 0, 0];
  }
};
