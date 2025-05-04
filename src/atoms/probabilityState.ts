import { atom } from "jotai";

export const bigbonusCounterNumberState = atom<number>(0);
export const regularbonusCounterNumberState = atom<number>(0);
export const bigbonusWaterMelonCounterNumberState = atom<number>(0);
export const redSideLampCounterNumberState = atom<number>(0);
export const greenSideLampCounterNumberState = atom<number>(0);
export const yellowSideLampCounterNumberState = atom<number>(0);
export const blueSideLampCounterNumberState = atom<number>(0);
export const probabilityOutputState = atom<number[]>([0, 0, 0, 0, 0, 0]);
