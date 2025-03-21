"use client";

import { hanaCounterProps } from "@/const/types";
import BigbonusCounter from "../counter/bigbonus-counter/BIgbonusCounter";
import UsuallyCounter from "../counter/usually-counter/UsuallyCounter";
import RegularBonusCounter from "../counter/regularbonus-counter/RegularbonusCounter";
import CounterModeSwitch from "../counter-manager/CounterModeSwitch";
import { useState } from "react";

import styles from "./hana-counter.module.css";
import CounterModeIndicator from "../counter-manager/CounterModeIndicator";

const HanaCounter = (props: hanaCounterProps) => {
  const [decrementFlag, setDecrementFlag] = useState(false);

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDecrementFlag(event.target.checked);
  };

  return (
    <>
      <div className={styles.counterManager}>
        <CounterModeSwitch onChange={handleModeChange} />
      </div>

      <UsuallyCounter
        decrementFlag={decrementFlag}
        bellCounterNumber={props.bellCounterNumber}
      />
      <BigbonusCounter
        decrementFlag={decrementFlag}
        watermelonCounterNumber={props.watermelonCounterNumber}
        redFeatherCounterNumber={props.redFeatherCounterNumber}
        greenFeatherCounterNumber={props.greenFeatherCounterNumber}
        yellowFeatherCounterNumber={props.yellowFeatherCounterNumber}
        blueFeatherCounterNumber={props.blueFeatherCounterNumber}
      />
      <RegularBonusCounter
        decrementFlag={decrementFlag}
        redSideCounterNumber={props.redSideCounterNumber}
        greenSideCounterNumber={props.greenSideCounterNumber}
        yellowSideCounterNumber={props.yellowSideCounterNumber}
        blueSideCounterNumber={props.blueSideCounterNumber}
      />
      <CounterModeIndicator decrementFlag={decrementFlag} />
    </>
  );
};

export default HanaCounter;
