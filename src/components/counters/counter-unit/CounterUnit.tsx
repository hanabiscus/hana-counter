"use client";

import { useCounter } from "@/hooks/useCounter";
import TextField from "@mui/material/TextField";
import { counterProps } from "@/const/types";
import {
  BELL_COUNTER,
  BLUE_FEATHER_COUNTER,
  BLUE_SIDE_COUNTER,
  GREEN_FEATHER_COUNTER,
  GREEN_SIDE_COUNTER,
  RED_FEATHER_COUNTER,
  RED_SIDE_COUNTER,
  WATERMELON_COUNTER,
  YELLOW_FEATHER_COUNTER,
  YELLOW_SIDE_COUNTER,
} from "@/const/constants";

const CounterUnit = (props: counterProps) => {
  const [counterNumber, { increment, decrement, setCounterNumber }] =
    useCounter({
      counterKind: props.counterKind,
      counterNumber: props.counterNumber,
    });

  const counterIcon = () => {
    switch (props.counterKind) {
      case BELL_COUNTER:
        return (
          <div className="w-0 h-0 border-l-[13.5px] border-l-transparent border-b-[27px] border-b-[#fdc11e] border-r-[13.5px] border-r-transparent"></div>
        );
      case WATERMELON_COUNTER:
        return (
          <div className="h-[27px] w-[27px] bg-[#f04e58] border-solid border-[5px] border-[#5b9922] rounded-full"></div>
        );
      case RED_FEATHER_COUNTER:
      case RED_SIDE_COUNTER:
        return (
          <div className="h-[27px] w-[27px] bg-[#f04e58] rounded-full"></div>
        );
      case GREEN_FEATHER_COUNTER:
      case GREEN_SIDE_COUNTER:
        return (
          <div className="h-[27px] w-[27px] bg-[#5b9922] rounded-full"></div>
        );
      case YELLOW_FEATHER_COUNTER:
      case YELLOW_SIDE_COUNTER:
        return (
          <div className="h-[27px] w-[27px] bg-[#fdc11e] rounded-full"></div>
        );
      case BLUE_FEATHER_COUNTER:
      case BLUE_SIDE_COUNTER:
        return (
          <div className="h-[27px] w-[27px] bg-[#659ad2] rounded-full"></div>
        );
      default:
        return;
    }
  };

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
        <div className="flex justify-center items-center">{counterIcon()}</div>
      </button>
    </div>
  );
};

export default CounterUnit;
