"use client";

import { JSX } from "react";
import BonusInput from "./bonus-input/BonusInput";
import WaterMelonInput from "./watermelon-input/WaterMelonInput";
import SideLampInput from "./side-lamp-input/SideLampInput";

const ProbabilityInput: () => JSX.Element = () => {
  return (
    <>
      <BonusInput />
      <WaterMelonInput />
      <SideLampInput />
    </>
  );
};

export default ProbabilityInput;
