"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const BalancePage = () => {
  return (
    <Authenticator socialProviders={["google"]} hideSignUp></Authenticator>
  );
};

export default BalancePage;
