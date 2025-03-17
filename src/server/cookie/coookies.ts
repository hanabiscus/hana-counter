"use server";

import { cookies } from "next/headers";
import { COOKIES_AGE } from "@/const/types";

const setCookiesCounterNumber = async (counterKind: string, countNumber: number) => {
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

export { setCookiesCounterNumber, getCookiesCounterNumber };
