import { atom } from "jotai";
import { balanceDTOType, balanceMonthDTOType } from "@/const/types";
import {
  getCurrentBalanceDate,
  getCurrentBalanceMonth,
} from "@/utils/dateUtils";

export const balanceState = atom<number>(0);
export const incomeState = atom<number>(0);
export const expenditureState = atom<number>(0);
export const balanceDateState = atom<string>(getCurrentBalanceDate());
export const balanceMonthState = atom<string>(getCurrentBalanceMonth());
export const monthlyBalanceDataState = atom<balanceDTOType>([]);
export const balanceMonthDataState = atom<balanceMonthDTOType>([]);
