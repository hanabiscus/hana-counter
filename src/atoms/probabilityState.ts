import { atom } from "jotai";

export const totalGameCounterNumberState = atom<number>(0);
export const bigbonusCounterNumberState = atom<number>(0);
export const regularbonusCounterNumberState = atom<number>(0);

export const probabilityOutputState = atom<number[]>([0, 0, 0, 0, 0, 0]);
