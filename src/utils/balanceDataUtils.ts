import {
  getLastDay,
  getMonthOfBalanceMonth,
  getYearOfBalanceMonth,
} from "./dateUtils";
import {
  balanceData,
  balanceDTOType,
  balanceMonthDTOType,
  balanceYearDTOType,
} from "@/const/types";
import { BALANCE_MONTH_FORMAT } from "@/const/constants";

export const createBalanceCalendarArray: (
  balanceMonth: string,
  balanceData: balanceDTOType
) => balanceDTOType = (
  balanceMonth: string,
  balanceData: balanceDTOType
) => {
  if (BALANCE_MONTH_FORMAT.test(balanceMonth)) {
    const yearOfBalanceDate = getYearOfBalanceMonth(balanceMonth);
    const monthOfBalanceDate = getMonthOfBalanceMonth(balanceMonth);

    const monthOfBalanceLastDay = getLastDay(
      yearOfBalanceDate,
      monthOfBalanceDate
    );

    const balanceCalendarArray = new Array(monthOfBalanceLastDay);
    balanceCalendarArray.fill(undefined);

    for (let i = 0; i < monthOfBalanceLastDay; i++) {
      balanceData.forEach((data) => {
        if (
          balanceMonth + "-" + ("0" + String(i + 1)).slice(-2) ===
          data.balanceDate
        ) {
          balanceCalendarArray[i] = data;
        }
      });
    }

    return balanceCalendarArray;
  } else {
    return [];
  }
};

export const transformBalanceDataToBalanceDTO: (
  data: balanceData
) => balanceDTOType = (data: balanceData) => {
  return data.map(({ income, expenditure, balanceDate }) => ({
    income,
    expenditure,
    balanceDate,
  }));
};

export const transformBalanceDataToBalanceMonthDTO: (
  data: balanceData
) => balanceMonthDTOType = (data: balanceData) => {
  return data
    .map(({ balanceMonth }) => ({ balanceMonth }))
    .filter(
      (balanceData, index, self) =>
        self.findIndex(
          (data) => data.balanceMonth === balanceData.balanceMonth
        ) === index
    )
    .sort(
      (a, b) =>
        Number(b.balanceMonth.replace("-", "")) -
        Number(a.balanceMonth.replace("-", ""))
    );
};

export const transformBalanceDataToBalanceYearDTO: (
  data: balanceData
) => balanceYearDTOType = (data: balanceData) => {
  return data
    .map(({ balanceYear }) => ({ balanceYear }))
    .filter(
      (balanceData, index, self) =>
        self.findIndex(
          (data) => data.balanceYear === balanceData.balanceYear
        ) === index
    )
    .sort(
      (a, b) =>
        Number(b.balanceYear.replace("-", "")) -
        Number(a.balanceYear.replace("-", ""))
    );
};
