"use client";

import { useState } from "react";
import { setCookiesCounterNumber } from "@/server/cookie/cookies";
import { hooksCounterProps, hooksCounterReturn } from "@/const/types";

export const useCounter = (props: hooksCounterProps): hooksCounterReturn => {
  const [counterNumber, setCount] = useState(props.counterNumber);

  const increment = async () => {
    setCount((counterNumber) => counterNumber + 1);
    await setCookiesCounterNumber(props.counterKind, counterNumber + 1);
  };

  const decrement = async () => {
    if (counterNumber > 0) {
      setCount((counterNumber) => counterNumber - 1);
      await setCookiesCounterNumber(props.counterKind, counterNumber - 1);
    }
  };

  const setCounterNumber = async (counterNumber: number) => {
    setCount(Math.floor(counterNumber));
    await setCookiesCounterNumber(props.counterKind, Math.floor(counterNumber));
  };

  return [counterNumber, { increment, decrement, setCounterNumber }];
};
