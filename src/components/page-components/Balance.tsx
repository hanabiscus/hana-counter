"use client";

import { JSX } from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import CircularProgress from "@mui/material/CircularProgress";
import { useIsLogoutState } from "@/hooks/useLogout";
import BalanceCalendar from "../balances/balance-calendar/BalanceCalendar";
import BalanceCreateButton from "../balances/balance-create-button/BalanceCreateButton";
import BalanceModal from "../balances/balance-modal/BalanceModal";
import { useBalanceMonth } from "@/hooks/useBalance";
import BalanceMonthSelector from "../balances/balance-month-selector/BalanceMonthSelector";
import { balanceProps } from "@/const/types";
import { ALL_BALANCE_MONTH } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";
import BalanceSummary from "../balances/balance-summary/BalanceSummary";

Amplify.configure(outputs, { ssr: true });

const Balance: (props: balanceProps) => JSX.Element = (props: balanceProps) => {
  const logoutState: boolean = useIsLogoutState();
  const balanceMonth: string = useBalanceMonth()[0];

  return (
    <>
      {logoutState ? (
        <div className="h-svh grid justify-center content-center">
          <CircularProgress color="error" disableShrink={true} />
        </div>
      ) : (
        <Authenticator socialProviders={["google"]} hideSignUp>
          <div className="h-svh">
            <BalanceMonthSelector
              balanceMonthDataDTO={props.balanceMonthDataDTO}
            />
            {balanceMonth === ALL_BALANCE_MONTH ? (
              <BalanceSummary />
            ) : (
              <BalanceCalendar />
            )}
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
