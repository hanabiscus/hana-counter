import { useAtom, useAtomValue } from "jotai";
import { balanceModalState } from "@/atoms/balanceModalState";

export const useIsBalanceOpenState = () => {
  return useAtomValue(balanceModalState);
};

export const useBalanceModal = () => {
  const [isBalanceModalOpen, setIsBalanceModalOpen] =
    useAtom(balanceModalState);

  const balanceModalMutator = () => setIsBalanceModalOpen(!isBalanceModalOpen);

  return balanceModalMutator;
};
