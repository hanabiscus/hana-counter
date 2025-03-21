import { hanaCounterProps } from "@/const/types";
import BigbonusCounter from "../counter/bigbonus-counter/BIgbonusCounter";
import UsuallyCounter from "../counter/usually-counter/UsuallyCounter";
import RegularBonusCounter from "../counter/regularbonus-counter/RegularbonusCounter";
import CounterModeSwitch from "../counter-manager/CounterModeSwitch";

const HanaCounter = (props: hanaCounterProps) => {
  return (
    <>
      <CounterModeSwitch />
      <UsuallyCounter
        decrementFlag={props.decrementFlag}
        bellCounterNumber={props.bellCounterNumber}
      />
      <BigbonusCounter
        decrementFlag={props.decrementFlag}
        watermelonCounterNumber={props.watermelonCounterNumber}
        redFeatherCounterNumber={props.redFeatherCounterNumber}
        greenFeatherCounterNumber={props.greenFeatherCounterNumber}
        yellowFeatherCounterNumber={props.yellowFeatherCounterNumber}
        blueFeatherCounterNumber={props.blueFeatherCounterNumber}
      />
      <RegularBonusCounter
        decrementFlag={props.decrementFlag}
        redSideCounterNumber={props.redSideCounterNumber}
        greenSideCounterNumber={props.greenSideCounterNumber}
        yellowSideCounterNumber={props.yellowSideCounterNumber}
        blueSideCounterNumber={props.blueSideCounterNumber}
      />
    </>
  );
};

export default HanaCounter;
