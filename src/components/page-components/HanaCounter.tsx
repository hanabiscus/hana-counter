"use client";

import { useState } from "react";
import { hanaCounterProps } from "@/const/types";
import BigbonusCounter from "../counters/bigbonus-counter/BIgbonusCounter";
import UsuallyCounter from "../counters/usually-counter/UsuallyCounter";
import RegularBonusCounter from "../counters/regularbonus-counter/RegularbonusCounter";
import CounterModeSwitch from "../counter-managers/counter-mode-switch/CounterModeSwitch";
import ResetCounterNumberButton from "../counter-managers/reset-counter-number-button/ResetCounterNumberButton";

const HanaCounter = (props: hanaCounterProps) => {
  const [decrementFlag, setDecrementFlag] = useState(false);

  const handleModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDecrementFlag(event.target.checked);
  };

  return (
    <div className="h-[650px]">
      <div className="mt-1 grid grid-cols-2">
        <div className="content-center flex justify-start ml-2">
          <CounterModeSwitch onChange={handleModeChange} />
        </div>
        <div className="content-center flex justify-end mr-2">
          {decrementFlag ? <ResetCounterNumberButton /> : null}
        </div>
      </div>
      <div className="content-center h-[85px]">
        <UsuallyCounter
          decrementFlag={decrementFlag}
          usuallyCounterNumber={{
            bellCounterNumber:
              props.allCounterNumbers.usuallyCounterNumber.bellCounterNumber,
          }}
        />
      </div>
      <div className="content-center h-[207px]">
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
      <div className="content-center h-[146px]">
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
    </div>
  );
};

export default HanaCounter;
