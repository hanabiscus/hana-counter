import {
  BONUS_COUNTER_FIELD_SIZE,
  BLUE_FEATHER_COUNTER,
  CARD_BACKGROUND,
  CARD_MARGIN,
  GREEN_FEATHER_COUNTER,
  RED_FEATHER_COUNTER,
  WATERMELON_COUNTER,
  YELLOW_FEATHER_COUNTER,
  bigbonusCounterProps,
} from "@/const/types";
import { Card } from "@mui/material";
import Counter from "../Counter";

const BigbonusCounter = (props: bigbonusCounterProps) => {
  return (
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <Counter
          counterKind={WATERMELON_COUNTER}
          counterNumber={props.watermelonCounterNumber}
          decrementFlag={props.decrementFlag}
          imagePath="waterMelon.svg"
          textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
        />
        <div className="flex">
          <div className="basis-1/2">
            <Counter
              counterKind={RED_FEATHER_COUNTER}
              counterNumber={props.redFeatherCounterNumber}
              decrementFlag={props.decrementFlag}
              imagePath="red.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={GREEN_FEATHER_COUNTER}
              counterNumber={props.greenFeatherCounterNumber}
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
              counterNumber={props.yellowFeatherCounterNumber}
              decrementFlag={props.decrementFlag}
              imagePath="yellow.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={BLUE_FEATHER_COUNTER}
              counterNumber={props.blueFeatherCounterNumber}
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
