"use server";

import BigNumber from "bignumber.js";
import {
  calculateConditionalProbabilitiesOfBigbonus,
  calculateConditionalProbabilitiesOfRegularbonus,
} from "@/lib/probability/probabilityPackage";
import { calculateProbabilitiesOfHanaInput } from "@/const/types";
import {
  HANA_KINDS,
  PROBABILITY_WEIGHT_OF_BB,
  PROBABILITY_WEIGHT_OF_RB,
} from "@/const/constants";

export const calculateProbabilitiesOfHana: (
  input: calculateProbabilitiesOfHanaInput
) => Promise<number[]> = async (input: calculateProbabilitiesOfHanaInput) => {
  if (
    HANA_KINDS.includes(input.hanaKind) &&
    Number.isInteger(input.totalGameCounterNumber) &&
    Number.isInteger(input.bigbonusCounterNumber) &&
    Number.isInteger(input.regularbonusCounterNumber) &&
    input.totalGameCounterNumber >= 0 &&
    input.bigbonusCounterNumber >= 0 &&
    input.regularbonusCounterNumber >= 0 &&
    input.totalGameCounterNumber >=
      input.bigbonusCounterNumber + input.regularbonusCounterNumber
  ) {
    const conditionalProbabilitiesOfBigbonus =
      calculateConditionalProbabilitiesOfBigbonus({
        hanaKind: input.hanaKind,
        totalGameCounterNumber: input.totalGameCounterNumber,
        bonusCounterNumber: input.bigbonusCounterNumber,
      });

    const conditionalProbabilitiesOfRegularbonus =
      calculateConditionalProbabilitiesOfRegularbonus({
        hanaKind: input.hanaKind,
        totalGameCounterNumber: input.totalGameCounterNumber,
        bonusCounterNumber: input.regularbonusCounterNumber,
      });

    const bigResult = [
      BigNumber(conditionalProbabilitiesOfBigbonus[0])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[0]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
      BigNumber(conditionalProbabilitiesOfBigbonus[1])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[1]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
      BigNumber(conditionalProbabilitiesOfBigbonus[2])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[2]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
      BigNumber(conditionalProbabilitiesOfBigbonus[3])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[3]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
      BigNumber(conditionalProbabilitiesOfBigbonus[4])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[4]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
      BigNumber(conditionalProbabilitiesOfBigbonus[5])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[5]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
      BigNumber(conditionalProbabilitiesOfBigbonus[6])
        .times(PROBABILITY_WEIGHT_OF_BB)
        .plus(
          BigNumber(conditionalProbabilitiesOfRegularbonus[6]).times(
            PROBABILITY_WEIGHT_OF_RB
          )
        )
        .toFixed(4),
    ];

    return [
      Number(bigResult[0]),
      Number(bigResult[1]),
      Number(bigResult[2]),
      Number(bigResult[3]),
      Number(bigResult[4]),
      Number(bigResult[5]),
    ];
  } else {
    return [0, 0, 0, 0, 0, 0];
  }
};
