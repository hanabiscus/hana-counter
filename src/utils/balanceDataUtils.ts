import {
  getLastDay,
  getMonthOfBalanceMonth,
  getYearOfBalanceMonth,
} from "./dateUtils";
import { balanceDTOType } from "@/const/types";
import { BALANCE_MONTH_FORMAT } from "@/const/constants";

export const createBalanceCalendarArray: (
  balanceMonth: string,
  monthlyBalanceData: balanceDTOType
) => balanceDTOType = (
  balanceMonth: string,
  monthlyBalanceData: balanceDTOType
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
      monthlyBalanceData.forEach((data) => {
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
