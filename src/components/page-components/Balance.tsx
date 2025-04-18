"use client";

import { JSX } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import CircularProgress from "@mui/material/CircularProgress";
import { useIsLogoutState } from "@/hooks/useLogout";
import BalanceCalendar from "../balance-calendar/BalanceCalendar";
import BalanceCreateButton from "../balance-create-button/BalanceCreateButton";
import BalanceModal from "../balance-modal/BalanceModal";
import BalanceMonthSelector from "../balance-month-selector/BalanceMonthSelector";
import { balanceProps } from "@/const/types";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const Balance: (props: balanceProps) => JSX.Element = (props: balanceProps) => {
  const logoutState: boolean = useIsLogoutState();

  return (
    <>
      {logoutState ? (
        <div className="h-svh grid justify-center content-center">
          <CircularProgress color="error" />
        </div>
      ) : (
        <Authenticator socialProviders={["google"]} hideSignUp>
          <div className="h-svh">
            <BalanceMonthSelector
              balanceMonthDataDTO={props.balanceMonthDataDTO}
            />
            <BalanceCalendar />
            <div className="relative">
              <div className="z-50 opacity-100 fixed bottom-8 right-8">
                <BalanceCreateButton />
              </div>
            </div>
          </div>
          <BalanceModal />
        </Authenticator>
      )}
    </>
  );
};

export default Balance;
