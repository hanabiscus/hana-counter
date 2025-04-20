import { atom } from "jotai";
import { getCurrentBalanceDate } from "@/utils/dateUtils";
import { balanceDTOType, balanceMonthDTOType } from "@/const/types";
import { ALL_BALANCE_MONTH } from "@/const/constants";

export const balanceState = atom<number>(0);
export const incomeState = atom<number>(0);
export const expenditureState = atom<number>(0);
export const balanceDateState = atom<string>(getCurrentBalanceDate());
export const balanceMonthState = atom<string>(ALL_BALANCE_MONTH);
export const balanceDataState = atom<balanceDTOType>([]);
export const balanceMonthDataState = atom<balanceMonthDTOType>([]);
