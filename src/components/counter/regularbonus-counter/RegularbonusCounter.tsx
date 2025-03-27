import { Card } from "@mui/material";
import Counter from "../Counter";
import { regularbonusCounterProps } from "@/const/types";
import {
  BLUE_IMAGE_PATH,
  BLUE_SIDE_COUNTER,
  BONUS_COUNTER_FIELD_SIZE,
  CARD_BACKGROUND,
  CARD_MARGIN,
  GREEN_IMAGE_PATH,
  GREEN_SIDE_COUNTER,
  RED_IMAGE_PATH,
  RED_SIDE_COUNTER,
  YELLOW_IMAGE_PATH,
  YELLOW_SIDE_COUNTER,
} from "@/const/constants";

const RegularBonusCounter = (props: regularbonusCounterProps) => {
  return (
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <div className="flex">
          <div className="basis-1/2">
            <Counter
              counterKind={RED_SIDE_COUNTER}
              counterNumber={
                props.regularbonusCounterNumbers.redSideCounterNumber
              }
              decrementFlag={props.decrementFlag}
              imagePath={RED_IMAGE_PATH}
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={GREEN_SIDE_COUNTER}
              counterNumber={
                props.regularbonusCounterNumbers.greenSideCounterNumber
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
              counterKind={YELLOW_SIDE_COUNTER}
              counterNumber={
                props.regularbonusCounterNumbers.yellowSideCounterNumber
              }
              decrementFlag={props.decrementFlag}
              imagePath={YELLOW_IMAGE_PATH}
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={BLUE_SIDE_COUNTER}
              counterNumber={
                props.regularbonusCounterNumbers.blueSideCounterNumber
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

export default RegularBonusCounter;
