import { useAtom } from "jotai";
import { isLoadingState } from "@/atoms/loadingState";
import { hooksLoadingReturn } from "@/const/types";

export const useLoadingState = (): hooksLoadingReturn => {
  const [isLoading, setIsLoading] = useAtom(isLoadingState);

  const loadingMutator = (isLoading: boolean) => setIsLoading(isLoading);

  return [isLoading, { loadingMutator }];
};
