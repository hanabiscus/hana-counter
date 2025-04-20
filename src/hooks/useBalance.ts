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
  balanceDTOType,
  balanceMonthDTOType,
  hooksBalanceDateReturn,
  hooksBalanceMonthDataReturn,
  hooksBalanceMonthReturn,
  hooksBalanceValueReturn,
  hooksBalanceDataReturn,
} from "@/const/types";

export const useBalanceValue: () => hooksBalanceValueReturn = () => {
  const setBalance = useSetAtom(balanceState);
  const [income, setIncome] = useAtom(incomeState);
  const [expenditure, setExpenditure] = useAtom(expenditureState);

  const setIntegerIncome = (income: number) => {
    if (income >= 0) {
      setIncome(Math.floor(income));
    } else {
      setIncome(0);
    }

    setBalance(income - expenditure);
  };

  const setIntegerExpenditure = (expenditure: number) => {
    if (expenditure >= 0) {
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
  const [monthlyBalanceData, setMonthlyBalanceData] = useAtom(balanceDataState);

  const setFetchedBalanceData = (balanceData: balanceDTOType) => {
    setMonthlyBalanceData(balanceData);
  };

  return [monthlyBalanceData, { setFetchedBalanceData }];
};

export const useBalanceMonthData: () => hooksBalanceMonthDataReturn = () => {
  const [balanceMonthData, setBalanceMonthData] = useAtom(
    balanceMonthDataState
  );

  const setFetchedBalanceMonthData = (
    balanceMonthData: balanceMonthDTOType
  ) => {
    setBalanceMonthData(balanceMonthData);
  };

  return [balanceMonthData, { setFetchedBalanceMonthData }];
};
