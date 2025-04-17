import CounterUnit from "../counter-unit/CounterUnit";
import { bigbonusCounterProps } from "@/const/types";
import {
  BLUE_FEATHER_COUNTER,
  BONUS_COUNTER_FIELD_SIZE,
  GREEN_FEATHER_COUNTER,
  RED_FEATHER_COUNTER,
  WATERMELON_COUNTER,
  YELLOW_FEATHER_COUNTER,
} from "@/const/constants";

const BigbonusCounter = (props: bigbonusCounterProps) => {
  return (
    <div className="bg-[#555555] rounded-md p-1 m-2">
      <CounterUnit
        counterKind={WATERMELON_COUNTER}
        counterNumber={props.bigbonusCounterNumbers.watermelonCounterNumber}
        decrementFlag={props.decrementFlag}
        textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
      />
      <div className="flex">
        <div className="basis-1/2">
          <CounterUnit
            counterKind={RED_FEATHER_COUNTER}
            counterNumber={props.bigbonusCounterNumbers.redFeatherCounterNumber}
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
        <div className="basis-1/2">
          <CounterUnit
            counterKind={GREEN_FEATHER_COUNTER}
            counterNumber={
              props.bigbonusCounterNumbers.greenFeatherCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
      </div>
      <div className="flex">
        <div className="basis-1/2">
          <CounterUnit
            counterKind={YELLOW_FEATHER_COUNTER}
            counterNumber={
              props.bigbonusCounterNumbers.yellowFeatherCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
        <div className="basis-1/2">
          <CounterUnit
            counterKind={BLUE_FEATHER_COUNTER}
            counterNumber={
              props.bigbonusCounterNumbers.blueFeatherCounterNumber
            }
            decrementFlag={props.decrementFlag}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
      </div>
    </div>
  );
};

export default BigbonusCounter;
