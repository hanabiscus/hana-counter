"use client";

import Image from "next/image";
import { useCounter } from "@/hooks/useCounter";
import TextField from "@mui/material/TextField";
import { counterProps } from "@/const/types";
import { COUNTER_ICON_SIZE } from "@/const/constants";

const Counter = (props: counterProps) => {
  const [counterNumber, { increment, decrement, setCounterNumber }] =
    useCounter({
      counterKind: props.counterKind,
      counterNumber: props.counterNumber,
    });

  return (
    <div className="m-2 flex items-center justify-center">
      <TextField
        type="number"
        value={counterNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCounterNumber(Number(event.target.value))
        }
        size="small"
        sx={{ maxWidth: props.textFieldWidth }}
      />
      <button
        onClick={props.decrementFlag ? decrement : increment}
        className="h-[45px] w-[45px] ml-5 bg-[#dcdcdc] rounded-xl"
      >
        <div className="flex justify-center">
          <Image
            src={props.imagePath}
            alt="counterIcon"
            width={COUNTER_ICON_SIZE}
            height={COUNTER_ICON_SIZE}
          />
        </div>
      </button>
    </div>
  );
};

export default Counter;
