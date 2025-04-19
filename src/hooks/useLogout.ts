import { useAtomValue, useSetAtom } from "jotai";
import { isLogoutState } from "@/atoms/logoutState";

export const useIsLogoutState: () => boolean = () => {
  return useAtomValue(isLogoutState);
};

export const useSetLogout: () => () => void = () => {
  const setIsLogout = useSetAtom(isLogoutState);
  const setLogoutState = () => setIsLogout(true);

  return setLogoutState;
};
