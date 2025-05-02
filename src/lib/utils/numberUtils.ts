import BigNumber from "bignumber.js";

export const formatNumberToYen: (number: number) => string = (
  number: number
) => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(number);
};

export const formatNumberToCurrency: (number: number) => string = (
  number: number
) => {
  if (String(number).length < 4) {
    return String(number);
  } else {
    return new Intl.NumberFormat("ja", { minimumIntegerDigits: 3 }).format(
      number
    );
  }
};

export const formatNumberToSmallDigit: (number: number) => string = (
  number: number
) => {
  return String(number).slice(0, 4) + "...";
};

export const formatNumberToPercent: (number: number) => number = (
  number: number
) => {
  if (number >= 0 && number <= 1) {
    return Number(BigNumber(number).times(BigNumber(100)).toFixed(1));
  } else {
    return 0;
  }
};
