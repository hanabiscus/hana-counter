import { useAtomValue, useSetAtom } from "jotai";
import { isLogoutState } from "@/atoms/logoutState";

export const useIsLogoutState = () => {
  return useAtomValue(isLogoutState);
};

export const useSetLogout = () => {
  const setIsLogout = useSetAtom(isLogoutState);
  const setLogoutState = () => setIsLogout(true);

  return setLogoutState;
};
