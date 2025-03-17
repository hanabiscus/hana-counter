"use client";

import { hooksCounterProps, hooksReturnCounterProps } from "@/const/types";
import {
  getCookiesCounterNumber,
  setCookiesCounterNumber,
} from "@/server/cookie/coookies";
import { useState, useEffect } from "react";

const UseCounter = (props: hooksCounterProps): hooksReturnCounterProps => {
  const [counterNumber, setCount] = useState(props.counterNumber);

  useEffect(() => {
    const fetchCookies = async () => {
      const counterNumber = await getCookiesCounterNumber(props.counterKind);
      setCount(counterNumber);
    };
    fetchCookies();
  }, []);

  const increment = async () => {
    await setCookiesCounterNumber(props.counterKind, counterNumber + 1);
    setCount((counterNumber) => counterNumber + 1);
  };

  const decrement = async () => {
    if (counterNumber === 0) {
      setCookiesCounterNumber(props.counterKind, 0);
    } else {
      setCookiesCounterNumber(props.counterKind, counterNumber - 1);
    }

    setCount((counterNumber) =>
      counterNumber > 0 ? counterNumber - 1 : (counterNumber = 0)
    );
  };

  const setCounterNumber = (counterNumber: number) => {
    setCount(counterNumber);
    setCookiesCounterNumber(props.counterKind, counterNumber);
  };

  return [counterNumber, { increment, decrement, setCounterNumber }];
};

export default UseCounter;
