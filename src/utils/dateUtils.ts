import { BALANCE_MONTH_FORMAT } from "@/const/constants";

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

