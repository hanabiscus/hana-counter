"use client";

import { hooksCounterProps, hooksReturnCounterProps } from "@/const/types";
import { setCookiesCounterNumber } from "@/server/cookie/coookies";
import { useState } from "react";

const useCounter = (props: hooksCounterProps): hooksReturnCounterProps => {
  const [counterNumber, setCount] = useState(props.counterNumber);

  const increment = async () => {
    await setCookiesCounterNumber(props.counterKind, counterNumber + 1);
    setCount((counterNumber) => counterNumber + 1);
  };

  const decrement = async () => {
    if (counterNumber > 0) {
      await setCookiesCounterNumber(props.counterKind, counterNumber - 1);
      setCount((counterNumber) => counterNumber - 1);
    }
  };

  const setCounterNumber = async (counterNumber: number) => {
    await setCookiesCounterNumber(props.counterKind, counterNumber);
    setCount(counterNumber);
  };

  return [counterNumber, { increment, decrement, setCounterNumber }];
};

export default useCounter;
