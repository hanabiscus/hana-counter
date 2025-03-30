"use client";

import { useState } from "react";
import { hanaCounterProps } from "@/const/types";
import BigbonusCounter from "../counter/bigbonus-counter/BIgbonusCounter";
import UsuallyCounter from "../counter/usually-counter/UsuallyCounter";
import RegularBonusCounter from "../counter/regularbonus-counter/RegularbonusCounter";
import CounterModeSwitch from "../counter-manager/CounterModeSwitch";
import CounterModeIndicator from "../counter-manager/CounterModeIndicator";
import ResetCounterNumberButton from "../counter-manager/ResetCounterNumberButton";

const HanaCounter = (props: hanaCounterProps) => {
  const [decrementFlag, setDecrementFlag] = useState(false);

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDecrementFlag(event.target.checked);
  };

  return (
    <div className="h-screen">
      <div className="mt-1 flex justify-end content-center h-0.5/6">
        {decrementFlag ? <ResetCounterNumberButton /> : null}
        <CounterModeSwitch onChange={handleModeChange} />
      </div>
      <div className="content-center h-1/12">
        <UsuallyCounter
          decrementFlag={decrementFlag}
          usuallyCounterNumber={{
            bellCounterNumber:
              props.allCounterNumbers.usuallyCounterNumber.bellCounterNumber,
          }}
        />
      </div>
      <div className="content-center h-1.5/6">
        <BigbonusCounter
          decrementFlag={decrementFlag}
          bigbonusCounterNumbers={{
            watermelonCounterNumber:
              props.allCounterNumbers.bigbonusCounterNumbers
                .watermelonCounterNumber,
            redFeatherCounterNumber:
              props.allCounterNumbers.bigbonusCounterNumbers
                .redFeatherCounterNumber,
            greenFeatherCounterNumber:
              props.allCounterNumbers.bigbonusCounterNumbers
                .greenFeatherCounterNumber,
            yellowFeatherCounterNumber:
              props.allCounterNumbers.bigbonusCounterNumbers
                .yellowFeatherCounterNumber,
            blueFeatherCounterNumber:
              props.allCounterNumbers.bigbonusCounterNumbers
                .blueFeatherCounterNumber,
          }}
        />
      </div>
      <div className="content-center h-1/6">
        <RegularBonusCounter
          decrementFlag={decrementFlag}
          regularbonusCounterNumbers={{
            redSideCounterNumber:
              props.allCounterNumbers.regularbonusCounterNumbers
                .redSideCounterNumber,
            greenSideCounterNumber:
              props.allCounterNumbers.regularbonusCounterNumbers
                .greenSideCounterNumber,
            yellowSideCounterNumber:
              props.allCounterNumbers.regularbonusCounterNumbers
                .yellowSideCounterNumber,
            blueSideCounterNumber:
              props.allCounterNumbers.regularbonusCounterNumbers
                .blueSideCounterNumber,
          }}
        />
      </div>
      <div className="content-center h-1/6">
        <CounterModeIndicator decrementFlag={decrementFlag} />
      </div>
    </div>
  );
};

export default HanaCounter;
