"use server";

import { cookies } from "next/headers";
import { Amplify } from "aws-amplify";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

export const checkAuthSession: () => Promise<boolean> = async () => {
  try {
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });
    if (userId != null || userId != undefined || userId != "") {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
