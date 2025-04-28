"use client";

import { JSX } from "react";
import BonusInput from "./bonus-input/BonusInput";
import TotalGameInput from "./total-game-input/TotalGameInput";

const ProbabilityInput: () => JSX.Element = () => {
  return (
    <>
      <TotalGameInput />
      <BonusInput />
    </>
  );
};

export default ProbabilityInput;
