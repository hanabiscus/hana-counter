import { useAtom } from "jotai";
import { hanaKindState } from "@/atoms/hanaKindState";
import { hooksHanaKindReturn } from "@/const/types";

export const useHanaKind: () => hooksHanaKindReturn = () => {
  const [hanaKind, setHanaKind] = useAtom(hanaKindState);

  return [hanaKind, { setHanaKind }];
};
