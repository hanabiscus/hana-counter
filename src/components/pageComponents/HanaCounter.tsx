import { hanaCounterProps } from "@/const/types";
import BigbonusCounter from "../counter/bigbonus-counter/BIgbonusCounter";
import UsuallyCounter from "../counter/usually-counter/UsuallyCounter";
import RegularBonusCounter from "../counter/regularbonus-counter/RegularbonusCounter";

const HanaCounter = (props: hanaCounterProps) => {
  return (
    <>
      <UsuallyCounter
        incrementFlag={props.incrementFlag}
        bellCounterNumber={props.bellCounterNumber}
      />
      <BigbonusCounter
        incrementFlag={props.incrementFlag}
        watermelonCounterNumber={props.watermelonCounterNumber}
        redFeatherCounterNumber={props.redFeatherCounterNumber}
        greenFeatherCounterNumber={props.greenFeatherCounterNumber}
        yellowFeatherCounterNumber={props.yellowFeatherCounterNumber}
        blueFeatherCounterNumber={props.blueFeatherCounterNumber}
      />
      <RegularBonusCounter
        incrementFlag={props.incrementFlag}
        redSideCounterNumber={props.redSideCounterNumber}
        greenSideCounterNumber={props.greenSideCounterNumber}
        yellowSideCounterNumber={props.yellowSideCounterNumber}
        blueSideCounterNumber={props.blueSideCounterNumber}
      />
    </>
  );
};

export default HanaCounter;
