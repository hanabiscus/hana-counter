"use client";

import { JSX } from "react";
import HanaKindSelector from "../probabilities/hana-kind-selector/HanaKindSelector";
import ProbabilityInput from "../probabilities/probability-input/ProbabilityInput";
import CalculateButton from "../probabilities/calculate-button/CalculateButton";
import ProbabilityModal from "../probabilities/probability-modal/ProbabilityModal";

const Probability: () => JSX.Element = () => {
  return (
    <>
      <HanaKindSelector />
      <ProbabilityInput />
      <CalculateButton />
      <ProbabilityModal />
    </>
  );
};

export default Probability;
