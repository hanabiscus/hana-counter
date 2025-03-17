"use client";

import BigbonusCounter from "../counter/bigbonus-counter/BIgbonusCounter";
import UsuallyCounter from "../counter/usually-counter/UsuallyCounter";
import RegularBonusCounter from "../counter/regularbonus-counter/RegularbonusCounter";

const HanaCounter = () => {
  const countNumber = 0;
  return (
    <>
      <UsuallyCounter counterNumber={countNumber} incrementFlag={true} />
      <BigbonusCounter
        watermelonCounterNumber={countNumber}
        redFeatherCounterNumber={countNumber}
        greenFeatherCounterNumber={countNumber}
        yellowFeatherCounterNumber={countNumber}
        blueFeatherCounterNumber={countNumber}
        incrementFlag={true}
      />
      <RegularBonusCounter
        redSideCounterNumber={countNumber}
        greenSideCounterNumber={countNumber}
        yellowSideCounterNumber={countNumber}
        blueSideCounterNumber={countNumber}
        incrementFlag={true}
      />
    </>
  );
};

export default HanaCounter;
