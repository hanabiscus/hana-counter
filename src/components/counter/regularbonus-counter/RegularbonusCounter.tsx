"use client";

import {
  BIGBONUS_COUNTER_FIELD_SIZE,
  BLUE_SIDE_COUNTER,
  CARD_BACKGROUND,
  CARD_MARGIN,
  GREEN_SIDE_COUNTER,
  RED_SIDE_COUNTER,
  regularbonusCounterProps,
  YELLOW_SIDE_COUNTER,
} from "@/const/types";
import { Card } from "@mui/material";
import Counter from "../Counter";

const RegularBonusCounter = (props: regularbonusCounterProps) => {
  return (
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <div className="flex">
          <div className="basis-1/4">
            <Counter
              counterKind={RED_SIDE_COUNTER}
              counterNumber={props.redSideCounterNumber}
              incrementFlag={props.incrementFlag}
              imagePath="red.svg"
              textFieldWidth={BIGBONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/4">
            <Counter
              counterKind={GREEN_SIDE_COUNTER}
              counterNumber={props.greenSideCounterNumber}
              incrementFlag={props.incrementFlag}
              imagePath="green.svg"
              textFieldWidth={BIGBONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/4">
            <Counter
              counterKind={YELLOW_SIDE_COUNTER}
              counterNumber={props.yellowSideCounterNumber}
              incrementFlag={props.incrementFlag}
              imagePath="yellow.svg"
              textFieldWidth={BIGBONUS_COUNTER_FIELD_SIZE}
            />
          </div>
          <div className="basis-1/4">
            <Counter
              counterKind={BLUE_SIDE_COUNTER}
              counterNumber={props.blueSideCounterNumber}
              incrementFlag={props.incrementFlag}
              imagePath="blue.svg"
              textFieldWidth={BIGBONUS_COUNTER_FIELD_SIZE}
            />
          </div>
        </div>
      </Card>
    </>
  );
};

export default RegularBonusCounter;
