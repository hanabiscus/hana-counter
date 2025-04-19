export const formatNumberToYen: (balance: number) => string = (
  balance: number
) => {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(balance);
};

export const formatBalanceToCurrency: (balance: number) => string = (
  balance: number
) => {
  if (String(balance).length < 4) {
    return String(balance);
  } else {
    return new Intl.NumberFormat("ja", { minimumIntegerDigits: 3 }).format(
      balance
    );
  }
};

export const formatBalanceToSmallDigit: (balance: number) => string = (
  balance: number
) => {
  return String(balance).slice(0, 4) + "...";
};
