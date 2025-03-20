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
} from "@/const/types";

const setCookiesCounterNumber = async (
  counterKind: string,
  countNumber: number
) => {
  (await cookies()).set(counterKind, String(countNumber), {
    path: "/",
    maxAge: COOKIES_AGE,
  });
};

const getCookiesCounterNumber = async (counterKind: string) => {
  return (await (await cookies()).has(counterKind))
    ? Number(await (await cookies()).get(counterKind)?.value)
    : 0;
};

const getCookiesAllCounterNumber = async () => {
  return {
    bellCounterNumber: await getCookiesCounterNumber(BELL_COUNTER),
    watermelonCounterNumber: await getCookiesCounterNumber(WATERMELON_COUNTER),
    redFeatherCounterNumber: await getCookiesCounterNumber(RED_FEATHER_COUNTER),
    greenFeatherCounterNumber: await getCookiesCounterNumber(
      GREEN_FEATHER_COUNTER
    ),
    yellowFeatherCounterNumber: await getCookiesCounterNumber(
      YELLOW_FEATHER_COUNTER
    ),
    blueFeatherCounterNumber: await getCookiesCounterNumber(
      BLUE_FEATHER_COUNTER
    ),
    redSideCounterNumber: await getCookiesCounterNumber(RED_SIDE_COUNTER),
    greenSideCounterNumber: await getCookiesCounterNumber(GREEN_SIDE_COUNTER),
    yellowSideCounterNumber: await getCookiesCounterNumber(YELLOW_SIDE_COUNTER),
    blueSideCounterNumber: await getCookiesCounterNumber(BLUE_SIDE_COUNTER),
  };
};

export {
  setCookiesCounterNumber,
  getCookiesCounterNumber,
  getCookiesAllCounterNumber,
};
