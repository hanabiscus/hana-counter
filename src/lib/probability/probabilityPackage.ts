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
) => number[] = (input: conditionalProbabilityOfBonusInput) => {
  switch (input.hanaKind) {
    case KING_HANAHANA:
      let denominator = BigNumber(0.0);

      for (let index = 0; index < PROBABILITIES_OF_BB_KING.length; index++) {
        denominator = denominator.plus(
          BigNumber(
            combinations(input.totalGameCounterNumber, input.bonusCounterNumber)
          )
            .times(
              PROBABILITIES_OF_BB_KING[index].pow(input.bonusCounterNumber)
            )
            .times(
              BigNumber(1.0)
                .minus(PROBABILITIES_OF_BB_KING[index])
                .pow(input.totalGameCounterNumber - input.bonusCounterNumber)
            )
        );
      }

      const bigResult = [
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
      ];

      for (let index = 0; index < bigResult.length; index++) {
        bigResult[index] = BigNumber(
          combinations(input.totalGameCounterNumber, input.bonusCounterNumber)
        )
          .times(PROBABILITIES_OF_BB_KING[index].pow(input.bonusCounterNumber))
          .times(
            BigNumber(1.0)
              .minus(PROBABILITIES_OF_BB_KING[index])
              .pow(input.totalGameCounterNumber - input.bonusCounterNumber)
          )
          .div(denominator);
      }

      const result = [
        bigResult[0].toNumber(),
        bigResult[1].toNumber(),
        bigResult[2].toNumber(),
        bigResult[3].toNumber(),
        bigResult[4].toNumber(),
        bigResult[5].toNumber(),
      ];

      return result;

    default:
      return [0, 0, 0, 0, 0, 0];
  }
};

export const calculateConditionalProbabilitiesOfRegularbonus: (
  input: conditionalProbabilityOfBonusInput
) => number[] = (input: conditionalProbabilityOfBonusInput) => {
  switch (input.hanaKind) {
    case KING_HANAHANA:
      let denominator = BigNumber(0.0);

      for (let index = 0; index < PROBABILITIES_OF_RB_KING.length; index++) {
        denominator = denominator.plus(
          BigNumber(
            combinations(input.totalGameCounterNumber, input.bonusCounterNumber)
          )
            .times(
              PROBABILITIES_OF_RB_KING[index].pow(input.bonusCounterNumber)
            )
            .times(
              BigNumber(1.0)
                .minus(PROBABILITIES_OF_RB_KING[index])
                .pow(input.totalGameCounterNumber - input.bonusCounterNumber)
            )
        );
      }

      const bigResult = [
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
        BigNumber(0.0),
      ];

      for (let index = 0; index < bigResult.length; index++) {
        bigResult[index] = BigNumber(
          combinations(input.totalGameCounterNumber, input.bonusCounterNumber)
        )
          .times(PROBABILITIES_OF_RB_KING[index].pow(input.bonusCounterNumber))
          .times(
            BigNumber(1.0)
              .minus(PROBABILITIES_OF_RB_KING[index])
              .pow(input.totalGameCounterNumber - input.bonusCounterNumber)
          )
          .div(denominator);
      }

      const result = [
        bigResult[0].toNumber(),
        bigResult[1].toNumber(),
        bigResult[2].toNumber(),
        bigResult[3].toNumber(),
        bigResult[4].toNumber(),
        bigResult[5].toNumber(),
      ];

      return result;

    default:
      return [0, 0, 0, 0, 0, 0];
  }
};
