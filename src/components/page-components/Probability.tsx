"use client";

import { JSX } from "react";
import HanaKindSelector from "../probabilities/hana-kind-selector/HanaKindSelector";
import ProbabilityInput from "../probabilities/probability-input/ProbabilityInput";
import CalculateButton from "../probabilities/calculate-button/CalculateButton";

const Probability: () => JSX.Element = () => {
  return (
    <>
      <HanaKindSelector />
      <ProbabilityInput />
      <CalculateButton />
    </>
  );
};

export default Probability;
