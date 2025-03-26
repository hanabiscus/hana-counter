"use server";

import { cookies } from "next/headers";
import {
  BELL_COUNTER,
  BLUE_FEATHER_COUNTER,
  BLUE_SIDE_COUNTER,
  COOKIES_AGE,
  GREEN_FEATHER_COUNTER,
  GREEN_SIDE_COUNTER,
  RED_FEATHER_COUNTER,
  RED_SIDE_COUNTER,
  WATERMELON_COUNTER,
  YELLOW_FEATHER_COUNTER,
  YELLOW_SIDE_COUNTER,
} from "@/const/constants";

const setCookiesCounterNumber = async (
  counterKind: string,
  countNumber: number
) => {
  (await cookies()).set(counterKind, String(countNumber), {
    path: "/",
    maxAge: COOKIES_AGE,
  });
};

const resetCookiesCounterNumber = async () => {
  await setCookiesCounterNumber(BELL_COUNTER, 0);
  await setCookiesCounterNumber(WATERMELON_COUNTER, 0);
  await setCookiesCounterNumber(RED_FEATHER_COUNTER, 0);
  await setCookiesCounterNumber(GREEN_FEATHER_COUNTER, 0);
  await setCookiesCounterNumber(YELLOW_FEATHER_COUNTER, 0);
  await setCookiesCounterNumber(BLUE_FEATHER_COUNTER, 0);
  await setCookiesCounterNumber(RED_SIDE_COUNTER, 0);
  await setCookiesCounterNumber(GREEN_SIDE_COUNTER, 0);
  await setCookiesCounterNumber(YELLOW_SIDE_COUNTER, 0);
  await setCookiesCounterNumber(BLUE_SIDE_COUNTER, 0);
};

const getCookiesCounterNumber = async (counterKind: string) => {
  return (await (await cookies()).has(counterKind))
    ? Number(await (await cookies()).get(counterKind)?.value)
    : 0;
};

const getCookiesAllCounterNumber = async () => {
  return {
    bellCounterNumber: Number(await getCookiesCounterNumber(BELL_COUNTER)),
    watermelonCounterNumber: Number(
      await getCookiesCounterNumber(WATERMELON_COUNTER)
    ),
    redFeatherCounterNumber: Number(
      await getCookiesCounterNumber(RED_FEATHER_COUNTER)
    ),
    greenFeatherCounterNumber: Number(
      await getCookiesCounterNumber(GREEN_FEATHER_COUNTER)
    ),
    yellowFeatherCounterNumber: Number(
      await getCookiesCounterNumber(YELLOW_FEATHER_COUNTER)
    ),
    blueFeatherCounterNumber: Number(
      await getCookiesCounterNumber(BLUE_FEATHER_COUNTER)
    ),
    redSideCounterNumber: Number(
      await getCookiesCounterNumber(RED_SIDE_COUNTER)
    ),
    greenSideCounterNumber: Number(
      await getCookiesCounterNumber(GREEN_SIDE_COUNTER)
    ),
    yellowSideCounterNumber: Number(
      await getCookiesCounterNumber(YELLOW_SIDE_COUNTER)
    ),
    blueSideCounterNumber: Number(
      await getCookiesCounterNumber(BLUE_SIDE_COUNTER)
    ),
  };
};

export {
  setCookiesCounterNumber,
  resetCookiesCounterNumber,
  getCookiesCounterNumber,
  getCookiesAllCounterNumber,
};
