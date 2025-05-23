import {
  ALL_BALANCE_MONTH,
  BALANCE_DATE_FORMAT,
  BALANCE_MONTH_FORMAT,
} from "@/const/constants";

export const getCurrentBalanceDate: () => string = () => {
  return new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");
};

export const getLastDay: (year: number, month: number) => number = (
  year: number,
  month: number
) => {
  return new Date(year, month, 0).getDate();
};

export const getYearOfBalanceMonth: (balanceDate: string) => number = (
  balanceDate: string
) => {
  if (BALANCE_MONTH_FORMAT.test(balanceDate)) {
    return Number(balanceDate.slice(0, 4));
  } else {
    return NaN;
  }
};

export const getMonthOfBalanceMonth: (balanceDate: string) => number = (
  balanceDate: string
) => {
  if (BALANCE_MONTH_FORMAT.test(balanceDate)) {
    return Number(balanceDate.slice(5, 7));
  } else {
    return NaN;
  }
};

export const getDayFromBalanceMonth: (balanceMonth: string) => number = (
  balanceMonth: string
) => {
  if (BALANCE_MONTH_FORMAT.test(balanceMonth)) {
    return new Date(balanceMonth + "-01").getDay();
  } else {
    return 0;
  }
};

export const translateBalanceDateToBalanceMonth: (
  balanceDate: string
) => string = (balanceDate: string) => {
  if (BALANCE_DATE_FORMAT.test(balanceDate)) {
    return balanceDate.slice(0, 7);
  } else {
    return ALL_BALANCE_MONTH;
  }
};
