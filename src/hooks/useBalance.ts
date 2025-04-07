import { useAtom, useSetAtom } from "jotai";
import {
  balanceDateState,
  balanceState,
  expenditureState,
  incomeState,
} from "@/atoms/balanceState";
import { hooksBalanceDateReturn, hooksBalanceValueReturn } from "@/const/types";
import dayjs from "dayjs";

export const useBalanceValue = (): hooksBalanceValueReturn => {
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

export const useBalanceDate = (): hooksBalanceDateReturn => {
  const [balanceDate, setBalanceDate] = useAtom(balanceDateState);

  const setStringBalanceDate = (balanceDate: dayjs.Dayjs | null) => {
    if (balanceDate != null) {
      setBalanceDate(balanceDate.format("YYYY-MM-DD"));
    }
  };

  return [balanceDate, { setStringBalanceDate }];
};
