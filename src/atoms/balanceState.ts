import { balanceDTOType } from "@/const/types";
import { getCurrentBalanceDate } from "@/utils/dateUtils";
import { atom } from "jotai";

export const balanceState = atom<number>(0);
export const incomeState = atom<number>(0);
export const expenditureState = atom<number>(0);
export const balanceDateState = atom<string>(getCurrentBalanceDate());
export const monthlyBalanceDataState = atom<balanceDTOType>([]);
