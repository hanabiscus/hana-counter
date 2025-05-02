import { useAtom, useAtomValue } from "jotai";
import { probabilityModalState } from "@/atoms/probabilityModalState";

export const useIsProbabilityModalOpen: () => boolean = () => {
  return useAtomValue(probabilityModalState);
};

export const useProbabilityModal: () => () => void = () => {
  const [isProbabilityModalOpen, setIsProbabilityModalOpen] = useAtom(
    probabilityModalState
  );

  const probabilityModalMutator: () => void = () =>
    setIsProbabilityModalOpen(!isProbabilityModalOpen);

  return probabilityModalMutator;
};
