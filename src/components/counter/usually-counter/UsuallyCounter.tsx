import { Card } from "@mui/material";
import Counter from "../Counter";
import { usuallyCounterProps } from "@/const/types";
import {
  BELL_COUNTER,
  BELL_IMAGE_PATH,
  CARD_BACKGROUND,
  CARD_MARGIN,
  USUALLY_COUNTER_FIELD_SIZE,
} from "@/const/constants";

const UsuallyCounter = (props: usuallyCounterProps) => {
  return (
    <>
      <Card sx={{ margin: CARD_MARGIN, background: CARD_BACKGROUND }}>
        <Counter
          counterKind={BELL_COUNTER}
          counterNumber={props.usuallyCounterNumber.bellCounterNumber}
          decrementFlag={props.decrementFlag}
          imagePath={BELL_IMAGE_PATH}
          textFieldWidth={USUALLY_COUNTER_FIELD_SIZE}
        />
      </Card>
    </>
  );
};

export default UsuallyCounter;
