"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import CircularProgress from "@mui/material/CircularProgress";
import { useIsLogoutState } from "@/hooks/useLogout";

import outputs from "@/../amplify_outputs.json";
import Balance from "@/components/page-components/Balance";

Amplify.configure(outputs, { ssr: true });

const BalancePage = () => {
  const logoutState = useIsLogoutState();

  return (
    <>
      {logoutState ? (
        <div className="h-svh grid justify-center content-center">
          <CircularProgress color="error" size={30} />
        </div>
      ) : (
        <Authenticator socialProviders={["google"]} hideSignUp>
          <Balance />
        </Authenticator>
      )}
    </>
  );
};

export default BalancePage;
