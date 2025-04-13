"use client";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import CircularProgress from "@mui/material/CircularProgress";
import { useIsLogoutState } from "@/hooks/useLogout";
import { useMonthlyBalanceData } from "@/hooks/useBalance";
import BalanceCalendar from "../balance-calendar/BalanceCalendar";
import BalanceCreateButton from "../balance-create-button/BalanceCreateButton";
import BalanceModal from "../balance-modal/BalanceModal";
import { balanceProps } from "@/const/types";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const Balance = (props: balanceProps) => {
  const logoutState = useIsLogoutState();
  const { setFetchedMonthlyBalanceData } = useMonthlyBalanceData()[1];

  setFetchedMonthlyBalanceData(props.balanceDataDTO);

  return (
    <>
      {logoutState ? (
        <div className="h-svh grid justify-center content-center">
          <CircularProgress color="error" size={30} />
        </div>
      ) : (
        <Authenticator socialProviders={["google"]} hideSignUp>
          <BalanceCalendar />
          <div className="h-svh relative">
            <div className="z-50 opacity-100 fixed bottom-8 right-8">
              <BalanceCreateButton />
            </div>
          </div>
          <BalanceModal />
        </Authenticator>
      )}
    </>
  );
};

export default Balance;
