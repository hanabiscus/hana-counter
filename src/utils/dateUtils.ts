import { BALANCE_MONTH_FORMAT } from "@/const/constants";

export const getCurrentBalanceDate = () => {
  return new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-");
};

export const getCurrentBalanceMonth = () => {
  return new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .slice(0, 7)
    .replaceAll("/", "-");
};

export const getLastDay = (year: number, month: number): number => {
  return new Date(year, month - 1, 0).getDate();
};

export const getYearOfBalanceMonth = (balanceDate: string): number => {
  if (BALANCE_MONTH_FORMAT.test(balanceDate)) {
    return Number(balanceDate.slice(0, 3));
  } else {
    return NaN;
  }
};

export const getMonthOfBalanceMonth = (balanceDate: string): number => {
  if (BALANCE_MONTH_FORMAT.test(balanceDate)) {
    return Number(balanceDate.slice(5, 6));
  } else {
    return NaN;
  }
};

export const getDayFromBalanceMonth = (balanceMonth: string): number => {
  return new Date(
    Number(balanceMonth.slice(0, 3)),
    Number(balanceMonth.slice(5, 6)) - 1,
    1
  ).getDay();
};
