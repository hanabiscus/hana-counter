import CounterUnit from "../counter-unit/CounterUnit";
import { bigbonusCounterProps } from "@/const/types";
import {
  BLUE_FEATHER_COUNTER,
  BLUE_IMAGE_PATH,
  BONUS_COUNTER_FIELD_SIZE,
  GREEN_FEATHER_COUNTER,
  GREEN_IMAGE_PATH,
  RED_FEATHER_COUNTER,
  RED_IMAGE_PATH,
  WATERMELON_COUNTER,
  WATERMELON_IMAGE_PATH,
  YELLOW_FEATHER_COUNTER,
  YELLOW_IMAGE_PATH,
} from "@/const/constants";

const BigbonusCounter = (props: bigbonusCounterProps) => {
  return (
    <div className="bg-[#bfc5ca] rounded-md p-1 m-2">
      <CounterUnit
        counterKind={WATERMELON_COUNTER}
        counterNumber={props.bigbonusCounterNumbers.watermelonCounterNumber}
        decrementFlag={props.decrementFlag}
        imagePath={WATERMELON_IMAGE_PATH}
        textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
      />
      <div className="flex">
        <div className="basis-1/2">
          <CounterUnit
            counterKind={RED_FEATHER_COUNTER}
            counterNumber={props.bigbonusCounterNumbers.redFeatherCounterNumber}
            decrementFlag={props.decrementFlag}
            imagePath={RED_IMAGE_PATH}
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
            imagePath={GREEN_IMAGE_PATH}
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
            imagePath={YELLOW_IMAGE_PATH}
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
            imagePath={BLUE_IMAGE_PATH}
            textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
          />
        </div>
      </div>
    </div>
  );
};

export default BigbonusCounter;
