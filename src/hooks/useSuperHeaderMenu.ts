import { useAtom, useAtomValue } from "jotai";
import { isSuperHeaderMenuOpenState } from "@/atoms/superHeaderMenuState";

export const useIsSuperHeaderMenuOpenState = () => {
  return useAtomValue(isSuperHeaderMenuOpenState);
};

export const useSuperHeaderMenu = () => {
  const [isSuperHeaderMenuOpen, setIsSuperHeaderMenuOpen] = useAtom(
    isSuperHeaderMenuOpenState
  );

  const superHeaderMutator = () =>
    setIsSuperHeaderMenuOpen(!isSuperHeaderMenuOpen);

  return superHeaderMutator;
};
