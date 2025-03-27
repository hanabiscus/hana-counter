import { Card } from "@mui/material";
import Counter from "../Counter";
import { bigbonusCounterProps } from "@/const/types";
import {
  BLUE_FEATHER_COUNTER,
  BLUE_IMAGE_PATH,
  BONUS_COUNTER_FIELD_SIZE,
  CARD_BACKGROUND,
  CARD_MARGIN,
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
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <Counter
          counterKind={WATERMELON_COUNTER}
          counterNumber={props.bigbonusCounterNumbers.watermelonCounterNumber}
          decrementFlag={props.decrementFlag}
          imagePath={WATERMELON_IMAGE_PATH}
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
              imagePath={RED_IMAGE_PATH}
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
              imagePath={GREEN_IMAGE_PATH}
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
              imagePath={YELLOW_IMAGE_PATH}
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
              imagePath={BLUE_IMAGE_PATH}
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default BigbonusCounter;
