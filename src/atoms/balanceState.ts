import { balanceDTOType } from "@/const/types";
import { atom } from "jotai";

export const balanceState = atom<number>(0);

export const incomeState = atom<number>(0);

export const expenditureState = atom<number>(0);

export const balanceDateState = atom<string>(
  new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replaceAll("/", "-")
);

export const monthlyBalanceDataState = atom<balanceDTOType>([]);
