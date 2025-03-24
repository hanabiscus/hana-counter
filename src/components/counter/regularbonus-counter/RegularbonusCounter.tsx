import { Card } from "@mui/material";
import Counter from "../Counter";
import { regularbonusCounterProps } from "@/const/types";
import {
  BLUE_SIDE_COUNTER,
  BONUS_COUNTER_FIELD_SIZE,
  CARD_BACKGROUND,
  CARD_MARGIN,
  GREEN_SIDE_COUNTER,
  RED_SIDE_COUNTER,
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
              counterNumber={props.redSideCounterNumber}
              decrementFlag={props.decrementFlag}
              imagePath="red.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={GREEN_SIDE_COUNTER}
              counterNumber={props.greenSideCounterNumber}
              decrementFlag={props.decrementFlag}
              imagePath="green.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
        </div>
        <div className="flex">
          <div className="basis-1/2">
            <Counter
              counterKind={YELLOW_SIDE_COUNTER}
              counterNumber={props.yellowSideCounterNumber}
              decrementFlag={props.decrementFlag}
              imagePath="yellow.svg"
              textFieldWidth={BONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/2">
            <Counter
              counterKind={BLUE_SIDE_COUNTER}
              counterNumber={props.blueSideCounterNumber}
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

export default RegularBonusCounter;
