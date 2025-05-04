"use client";

import { JSX } from "react";
import ProbabilityInput from "../probabilities/probability-input/ProbabilityInput";
import CalculateButton from "../probabilities/calculate-button/CalculateButton";
import ProbabilityModal from "../probabilities/probability-modal/ProbabilityModal";

const Probability: () => JSX.Element = () => {
  return (
    <>
      <ProbabilityInput />
      <CalculateButton />
      <ProbabilityModal />
    </>
  );
};

export default Probability;
