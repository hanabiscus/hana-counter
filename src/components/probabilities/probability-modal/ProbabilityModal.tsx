"use client";

import { JSX } from "react";
import Modal from "@mui/material/Modal";
import { useLoading } from "@/hooks/useLoading";
import { useIsProbabilityModalOpen } from "@/hooks/useProbabilityModal";
import ProbabilityModalCloseButton from "./probability-modal-close-button/ProbabilityModalCloseButton";
import CircularProgress from "@mui/material/CircularProgress";
import ProbabilityResultGraph from "./probability-result-graph/ProbabilityResultGraph";

const ProbabilityModal: () => JSX.Element = () => {
  const isProbabilityModalOpen: boolean = useIsProbabilityModalOpen();
  const isLoading: boolean = useLoading()[0];

  return (
    <Modal open={isProbabilityModalOpen}>
      <div className="h-svh flex flex-wrap justify-center items-center">
        <div className="h-[310px] w-[350px] bg-[#444444] rounded-2xl shadow-xl">
          <div className="h-[30px] flex justify-end items-center">
            <ProbabilityModalCloseButton />
          </div>
          {isLoading ? (
            <div className="h-[280px] flex justify-center items-center">
              <CircularProgress color="secondary" disableShrink={true} />
            </div>
          ) : (
            <div className="h-[280px] flex justify-center items-center">
              <ProbabilityResultGraph />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProbabilityModal;
