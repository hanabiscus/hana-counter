import { JSX } from "react";
import CounterUnit from "../counter-unit/CounterUnit";
import { regularbonusCounterProps } from "@/const/types";
import {
  BLUE_SIDE_COUNTER,
  BONUS_COUNTER_FIELD_SIZE,
  GREEN_SIDE_COUNTER,
  RED_SIDE_COUNTER,
  YELLOW_SIDE_COUNTER,
} from "@/const/constants";

const RegularBonusCounter: (props: regularbonusCounterProps) => JSX.Element = (
  props: regularbonusCounterProps
) => {
  return (
    <div className="bg-[#555555] rounded-md p-1 m-2">
      <div className="flex">
        <div className="basis-1/2">
          <CounterUnit
            counterKind={RED_SIDE_COUNTER}
            counterNumber={
              props.regularbonusCounterNumbers.redSideCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
        <div className="basis-1/2">
          <CounterUnit
            counterKind={GREEN_SIDE_COUNTER}
            counterNumber={
              props.regularbonusCounterNumbers.greenSideCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <CounterUnit
            counterKind={YELLOW_SIDE_COUNTER}
            counterNumber={
              props.regularbonusCounterNumbers.yellowSideCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
        <div className="basis-1/2">
          <CounterUnit
            counterKind={BLUE_SIDE_COUNTER}
            counterNumber={
              props.regularbonusCounterNumbers.blueSideCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
      </div>
    </div>
  );
};

export default RegularBonusCounter;
