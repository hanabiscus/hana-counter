import { Card } from "@mui/material";
import Counter from "../Counter";
import { bigbonusCounterProps } from "@/const/types";
import {
  BLUE_FEATHER_COUNTER,
  BONUS_COUNTER_FIELD_SIZE,
  CARD_BACKGROUND,
  CARD_MARGIN,
  GREEN_FEATHER_COUNTER,
  RED_FEATHER_COUNTER,
  WATERMELON_COUNTER,
  YELLOW_FEATHER_COUNTER,
} from "@/const/constants";

const BigbonusCounter = (props: bigbonusCounterProps) => {
  return (
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <Counter
          counterKind={WATERMELON_COUNTER}
          counterNumber={props.bigbonusCounterNumbers.watermelonCounterNumber}
          decrementFlag={props.decrementFlag}
          imagePath="waterMelon.svg"
          textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
        />
        <div className="flex">
          <div className="basis-1/2">
            <Counter
              counterKind={RED_FEATHER_COUNTER}
              counterNumber={
                props.bigbonusCounterNumbers.redFeatherCounterNumber
              }
              decrementFlag={props.decrementFlag}
              imagePath="red.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={GREEN_FEATHER_COUNTER}
              counterNumber={
                props.bigbonusCounterNumbers.greenFeatherCounterNumber
              }
              decrementFlag={props.decrementFlag}
              imagePath="green.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <Counter
              counterKind={YELLOW_FEATHER_COUNTER}
              counterNumber={
                props.bigbonusCounterNumbers.yellowFeatherCounterNumber
              }
              decrementFlag={props.decrementFlag}
              imagePath="yellow.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={BLUE_FEATHER_COUNTER}
              counterNumber={
                props.bigbonusCounterNumbers.blueFeatherCounterNumber
              }
              decrementFlag={props.decrementFlag}
              imagePath="blue.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default BigbonusCounter;
