import BigNumber from "bignumber.js";
import {
  conditionalProbabilitiesOfRegularbonusSideLampInput,
  conditionalProbabilityOfBigbonusWatermelonInput,
} from "@/const/types";
import {
  NUM_OF_BB_GAME,
  NUM_OF_SETTEI,
  PROBABILITIES_OF_RB_SIDE,
  PROBABILITIES_OF_WM,
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

export const calculateConditionalProbabilitiesOfBigbonusWatermelon: (
  input: conditionalProbabilityOfBigbonusWatermelonInput
) => Promise<number[]> = async (
  input: conditionalProbabilityOfBigbonusWatermelonInput
) => {
  let denominator: BigNumber = BigNumber(0.0);
  let bigResults = new Array(NUM_OF_SETTEI);

  const combinationsValue = new BigNumber(
    combinations(
      input.bigbonusCounterNumber * NUM_OF_BB_GAME,
      input.bigbonusWatermelonCounterNumber
    )
  );

  bigResults = PROBABILITIES_OF_WM.map((value) => {
    return combinationsValue
      .times(value.pow(BigNumber(input.bigbonusWatermelonCounterNumber)))
      .times(
        BigNumber(1.0)
          .minus(value)
          .pow(
            BigNumber(input.bigbonusCounterNumber)
              .times(BigNumber(NUM_OF_BB_GAME))
              .minus(BigNumber(input.bigbonusWatermelonCounterNumber))
          )
      );
  });

  for (let index = 0; index < NUM_OF_SETTEI; index++) {
    denominator = denominator.plus(bigResults[index]);
  }

  for (let index = 0; index < bigResults.length; index++) {
    bigResults[index] = bigResults[index].div(denominator).toNumber();
  }

  return bigResults;
};

export const calculateConditionalProbabilitiesOfRegularbonusSideLamp: (
  input: conditionalProbabilitiesOfRegularbonusSideLampInput
) => Promise<number[]> = async (
  input: conditionalProbabilitiesOfRegularbonusSideLampInput
) => {
  let denominator: BigNumber = BigNumber(0.0);
  let preBigResults = [
    BigNumber(0.0),
    BigNumber(0.0),
    BigNumber(0.0),
    BigNumber(0.0),
    BigNumber(0.0),
    BigNumber(0.0),
  ];
  let bigResults: number[] = new Array(NUM_OF_SETTEI);

  const combinationsValues: BigNumber[] = [
    BigNumber(
      combinations(
        input.regularbonusCounterNumber,
        input.redSideLampCounterNumber
      )
    ),
    BigNumber(
      combinations(
        input.regularbonusCounterNumber,
        input.greenSideLampCounterNumber
      )
    ),
    BigNumber(
      combinations(
        input.regularbonusCounterNumber,
        input.yellowSideLampCounterNumber
      )
    ),
    BigNumber(
      combinations(
        input.regularbonusCounterNumber,
        input.blueSideLampCounterNumber
      )
    ),
  ];

  preBigResults = PROBABILITIES_OF_RB_SIDE.map((array, indexOfSettei) => {
    for (let index = 0; index < array.length; index++) {
      preBigResults[indexOfSettei] = preBigResults[indexOfSettei].plus(
        combinationsValues[index]
          .times(array[index].pow(BigNumber(input.redSideLampCounterNumber)))
          .times(
            BigNumber(1.0)
              .minus(input.redSideLampCounterNumber)
              .pow(
                BigNumber(input.regularbonusCounterNumber).minus(
                  BigNumber(input.redSideLampCounterNumber)
                )
              )
          )
      );
    }

    return preBigResults[indexOfSettei];
  }, 0);

  for (let index = 0; index < NUM_OF_SETTEI; index++) {
    denominator = denominator.plus(preBigResults[index]);
  }

  for (let index = 0; index < preBigResults.length; index++) {
    bigResults[index] = preBigResults[index].div(denominator).toNumber();
  }

  return bigResults;
};
