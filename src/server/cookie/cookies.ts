"use server";

import { cookies } from "next/headers";
import {
  ALL_COUNTER_KIND_SET,
  BELL_COUNTER,
  BLUE_FEATHER_COUNTER,
  BLUE_SIDE_COUNTER,
  COOKIES_AGE,
  GREEN_FEATHER_COUNTER,
  GREEN_SIDE_COUNTER,
  HOME_PAGE_PATH,
  RED_FEATHER_COUNTER,
  RED_SIDE_COUNTER,
  WATERMELON_COUNTER,
  YELLOW_FEATHER_COUNTER,
  YELLOW_SIDE_COUNTER,
} from "@/const/constants";

export const setCookiesCounterNumber = async (
  counterKind: string,
  countNumber: number
) => {
  if (
    ALL_COUNTER_KIND_SET.includes(counterKind) &&
    Number.isInteger(countNumber) &&
    countNumber >= 0
  ) {
    (await cookies()).set(counterKind, String(countNumber), {
      path: HOME_PAGE_PATH,
      maxAge: COOKIES_AGE,
      sameSite: "lax",
      secure: true,
      httpOnly: true,
    });
  }
};

export const resetCookiesCounterNumber = async () => {
  (await cookies()).delete(BELL_COUNTER);
  (await cookies()).delete(WATERMELON_COUNTER);
  (await cookies()).delete(RED_FEATHER_COUNTER);
  (await cookies()).delete(GREEN_FEATHER_COUNTER);
  (await cookies()).delete(YELLOW_FEATHER_COUNTER);
  (await cookies()).delete(BLUE_FEATHER_COUNTER);
  (await cookies()).delete(RED_SIDE_COUNTER);
  (await cookies()).delete(GREEN_SIDE_COUNTER);
  (await cookies()).delete(YELLOW_SIDE_COUNTER);
  (await cookies()).delete(BLUE_SIDE_COUNTER);
};

export const getCookiesCounterNumber = async (counterKind: string) => {
  if (ALL_COUNTER_KIND_SET.includes(counterKind)) {
    return (await (await cookies()).has(counterKind))
      ? Number(await (await cookies()).get(counterKind)?.value)
      : 0;
  }
};

export const getCookiesAllCounterNumber = async () => {
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
