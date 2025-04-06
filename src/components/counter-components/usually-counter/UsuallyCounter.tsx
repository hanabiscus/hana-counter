import Counter from "../Counter";
import { usuallyCounterProps } from "@/const/types";
import {
  BELL_COUNTER,
  BELL_IMAGE_PATH,
  USUALLY_COUNTER_FIELD_SIZE,
} from "@/const/constants";

const UsuallyCounter = (props: usuallyCounterProps) => {
  return (
    <div className="bg-[#bfc5ca] rounded-md p-1 m-2">
      <Counter
        counterKind={BELL_COUNTER}
        counterNumber={props.usuallyCounterNumber.bellCounterNumber}
        decrementFlag={props.decrementFlag}
        imagePath={BELL_IMAGE_PATH}
        textFieldWidth={USUALLY_COUNTER_FIELD_SIZE}
      />
    </div>
  );
};

export default UsuallyCounter;
