import { isSuperHeaderMenuOpenState } from "@/atoms/superHeaderMenuState";
import { useAtom, useAtomValue } from "jotai";

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
