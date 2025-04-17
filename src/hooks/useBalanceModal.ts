import { useAtom, useAtomValue } from "jotai";
import {
  balanceModalState,
  createBalanceState,
} from "@/atoms/balanceModalState";
import { hooksIsCreateBalanceReturn } from "@/const/types";

export const useIsBalanceOpenState = () => {
  return useAtomValue(balanceModalState);
};

export const useBalanceModal = () => {
  const [isBalanceModalOpen, setIsBalanceModalOpen] =
    useAtom(balanceModalState);

  const balanceModalMutator = () => setIsBalanceModalOpen(!isBalanceModalOpen);

  return balanceModalMutator;
};

export const useCreateBalance = (): hooksIsCreateBalanceReturn => {
  const [isCreateBalance, setIsCreateBalance] = useAtom(createBalanceState);

  const createBalanceStateMutator = (isCreate: boolean) =>
    setIsCreateBalance(isCreate);

  return [isCreateBalance, { createBalanceStateMutator }];
};
