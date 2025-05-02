import BigNumber from "bignumber.js";
import { conditionalProbabilityOfBonusInput } from "@/const/types";
import {
  KING_HANAHANA,
  PROBABILITIES_OF_BB_KING,
  PROBABILITIES_OF_RB_KING,
} from "@/const/constants";

const combinations: (n: number, k: number) => number = (
  n: number,
  k: number
) => {
  let molecule = BigNumber(1);
  let denominator = BigNumber(1);

  for (let index = n; index >= n - k + 1; index--) {
    molecule = molecule.times(BigNumber(index));
  }

  for (let index = 2; index <= k; index++) {
    denominator = denominator.times(BigNumber(index));
  }

  const result = molecule.div(denominator);

  return result.toNumber();
};

export const calculateConditionalProbabilitiesOfBigbonus: (
  input: conditionalProbabilityOfBonusInput
) => Promise<number[]> = async (input: conditionalProbabilityOfBonusInput) => {
  switch (input.hanaKind) {
    case KING_HANAHANA:
      let denominator = BigNumber(0.0);
      let bigResults = new Array(PROBABILITIES_OF_BB_KING.length);
      const combinationsValue = new BigNumber(
        combinations(input.totalGameCounterNumber, input.bonusCounterNumber)
      );

      bigResults = PROBABILITIES_OF_BB_KING.map((value) => {
        return combinationsValue
          .times(value.pow(input.bonusCounterNumber))
          .times(
            BigNumber(1.0)
              .minus(value)
              .pow(input.totalGameCounterNumber - input.bonusCounterNumber)
          );
      });

      for (let index = 0; index < PROBABILITIES_OF_BB_KING.length; index++) {
        denominator = denominator.plus(bigResults[index]);
      }

      for (let index = 0; index < bigResults.length; index++) {
        bigResults[index] = bigResults[index].div(denominator).toNumber();
      }

      return bigResults;

    default:
      return [0, 0, 0, 0, 0, 0];
  }
};

export const calculateConditionalProbabilitiesOfRegularbonus: (
  input: conditionalProbabilityOfBonusInput
) => Promise<number[]> = async (input: conditionalProbabilityOfBonusInput) => {
  switch (input.hanaKind) {
    case KING_HANAHANA:
      let denominator = BigNumber(0.0);
      let bigResults = new Array(PROBABILITIES_OF_RB_KING.length);
      const combinationsValue = new BigNumber(
        combinations(input.totalGameCounterNumber, input.bonusCounterNumber)
      );

      bigResults = PROBABILITIES_OF_RB_KING.map((value) => {
        return combinationsValue
          .times(value.pow(input.bonusCounterNumber))
          .times(
            BigNumber(1.0)
              .minus(value)
              .pow(input.totalGameCounterNumber - input.bonusCounterNumber)
          );
      });

      for (let index = 0; index < PROBABILITIES_OF_RB_KING.length; index++) {
        denominator = denominator.plus(bigResults[index]);
      }

      for (let index = 0; index < bigResults.length; index++) {
        bigResults[index] = bigResults[index].div(denominator).toNumber();
      }

      return bigResults;

    default:
      return [0, 0, 0, 0, 0, 0];
  }
};
