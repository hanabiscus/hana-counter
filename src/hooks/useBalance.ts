import { useAtom, useSetAtom } from "jotai";
import {
  balanceDateState,
  balanceMonthDataState,
  balanceMonthState,
  balanceState,
  expenditureState,
  incomeState,
  balanceDataState,
} from "@/atoms/balanceState";
import dayjs from "dayjs";
import {
  hooksBalanceDateReturn,
  hooksBalanceMonthDataReturn,
  hooksBalanceMonthReturn,
  hooksBalanceValueReturn,
  hooksBalanceDataReturn,
} from "@/const/types";
import { BALANCE_MAX_VALUE } from "@/const/constants";

export const useBalanceValue: () => hooksBalanceValueReturn = () => {
  const setBalance = useSetAtom(balanceState);
  const [income, setIncome] = useAtom(incomeState);
  const [expenditure, setExpenditure] = useAtom(expenditureState);

  const setIntegerIncome = (income: number) => {
    if (income > BALANCE_MAX_VALUE) {
      setIncome(BALANCE_MAX_VALUE);
    } else if (income >= 0) {
      setIncome(Math.floor(income));
    } else {
      setIncome(0);
    }

    setBalance(income - expenditure);
  };

  const setIntegerExpenditure = (expenditure: number) => {
    if (expenditure > BALANCE_MAX_VALUE) {
      setExpenditure(BALANCE_MAX_VALUE);
    } else if (expenditure >= 0) {
      setExpenditure(Math.floor(expenditure));
    } else {
      setExpenditure(0);
    }

    setBalance(income - expenditure);
  };

  return [income, expenditure, { setIntegerIncome, setIntegerExpenditure }];
};

export const useBalanceDate: () => hooksBalanceDateReturn = () => {
  const [balanceDate, setBalanceDate] = useAtom(balanceDateState);

  const setStringBalanceDate = (balanceDate: dayjs.Dayjs | null) => {
    if (balanceDate != null) {
      setBalanceDate(balanceDate.format("YYYY-MM-DD"));
    }
  };

  return [balanceDate, { setBalanceDate, setStringBalanceDate }];
};

export const useBalanceMonth: () => hooksBalanceMonthReturn = () => {
  const [balanceMonth, setBalanceMonth] = useAtom(balanceMonthState);

  return [balanceMonth, { setBalanceMonth }];
};

export const useBalanceData: () => hooksBalanceDataReturn = () => {
  const [balanceData, setBalanceData] = useAtom(balanceDataState);

  return [balanceData, { setBalanceData }];
};

export const useBalanceMonthData: () => hooksBalanceMonthDataReturn = () => {
  const [balanceMonthData, setBalanceMonthData] = useAtom(
    balanceMonthDataState
  );

  return [balanceMonthData, { setBalanceMonthData }];
};
