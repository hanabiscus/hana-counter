"use client";

import {
  USUALLY_COUNTER_FIELD_SIZE,
  CARD_BACKGROUND,
  CARD_MARGIN,
  BELL_COUNTER,
  usuallyCounterProps,
} from "@/const/types";
import { Card } from "@mui/material";
import Counter from "../Counter";

const UsuallyCounter = (props: usuallyCounterProps) => {
  return (
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <Counter
          counterKind={BELL_COUNTER}
          counterNumber={props.counterNumber}
          incrementFlag={props.incrementFlag}
          imagePath="bell.svg"
          textFieldWidth={USUALLY_COUNTER_FIELD_SIZE}
        />
      </Card>
    </>
  );
};

export default UsuallyCounter;
