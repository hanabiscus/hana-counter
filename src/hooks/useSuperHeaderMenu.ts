import { useAtom } from "jotai";
import { isSuperHeaderMenuOpenState } from "@/atoms/superHeaderMenuState";
import { hooksSuperHeaderMenuReturn } from "@/const/types";

export const useSuperHeaderMenu: () => hooksSuperHeaderMenuReturn = () => {
  const [isSuperHeaderMenuOpen, setIsSuperHeaderMenuOpen] = useAtom(
    isSuperHeaderMenuOpenState
  );

  const superHeaderMenuMutator = () =>
    setIsSuperHeaderMenuOpen(!isSuperHeaderMenuOpen);

  return [isSuperHeaderMenuOpen, { superHeaderMenuMutator }];
};
