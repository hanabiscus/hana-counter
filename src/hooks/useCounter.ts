"use client";

import { useState } from "react";
import { setCookiesCounterNumber } from "@/server/cookie/cookies";
import { hooksCounterProps, hooksCounterReturn } from "@/const/types";
import { COUNTER_NUMBER_MAX_VALUE } from "@/const/constants";

export const useCounter: (props: hooksCounterProps) => hooksCounterReturn = (
  props: hooksCounterProps
) => {
  const [counterNumber, setCount] = useState<number>(props.counterNumber);

  const increment = async () => {
    if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
      setCount(COUNTER_NUMBER_MAX_VALUE);
      await setCookiesCounterNumber(
        props.counterKind,
        COUNTER_NUMBER_MAX_VALUE
      );
    } else {
      setCount((counterNumber) => counterNumber + 1);
      await setCookiesCounterNumber(props.counterKind, counterNumber + 1);
    }
  };

  const decrement = async () => {
    if (counterNumber > 0) {
      setCount((counterNumber) => counterNumber - 1);
      await setCookiesCounterNumber(props.counterKind, counterNumber - 1);
    } else {
      setCount(0);
      await setCookiesCounterNumber(props.counterKind, 0);
    }
  };

  const setCounterNumber = async (counterNumber: number) => {
    if (counterNumber >= COUNTER_NUMBER_MAX_VALUE) {
      setCount(COUNTER_NUMBER_MAX_VALUE);
      await setCookiesCounterNumber(
        props.counterKind,
        COUNTER_NUMBER_MAX_VALUE
      );
    } else if (counterNumber < 0) {
      setCount(0);
      await setCookiesCounterNumber(props.counterKind, 0);
    } else {
      setCount(Math.floor(counterNumber));
      await setCookiesCounterNumber(
        props.counterKind,
        Math.floor(counterNumber)
      );
    }
  };

  return [counterNumber, { increment, decrement, setCounterNumber }];
};
