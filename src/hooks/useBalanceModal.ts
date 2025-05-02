import { useAtom, useAtomValue } from "jotai";
import {
  balanceModalState,
  createBalanceState,
} from "@/atoms/balanceModalState";
import { hooksIsCreateBalanceReturn } from "@/const/types";

export const useIsBalanceModalOpen: () => boolean = () => {
  return useAtomValue(balanceModalState);
};

export const useBalanceModal: () => () => void = () => {
  const [isBalanceModalOpen, setIsBalanceModalOpen] =
    useAtom(balanceModalState);

  const balanceModalMutator: () => void = () =>
    setIsBalanceModalOpen(!isBalanceModalOpen);

  return balanceModalMutator;
};

export const useCreateBalance: () => hooksIsCreateBalanceReturn = () => {
  const [isCreateBalance, setIsCreateBalance] = useAtom(createBalanceState);

  const createBalanceMutator: (isCreate: boolean) => void = (
    isCreate: boolean
  ) => setIsCreateBalance(isCreate);

  return [isCreateBalance, { createBalanceMutator }];
};
