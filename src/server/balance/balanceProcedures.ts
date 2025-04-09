"use server";

import { cookies } from "next/headers";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/../amplify/data/resource";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const client = generateClient<Schema>({
  authMode: "identityPool",
});

export const updateBalance = async (
  income: number,
  expenditure: number,
  balanceDate: string
): Promise<void> => {
  const { userId } = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => getCurrentUser(contextSpec),
  });

  if (userId != undefined) {
    const primaryKey = userId + balanceDate;

    const { data: fetchedBalanceData } = await client.models.Balance.get(
      { recordId: primaryKey },
      {
        authMode: "identityPool",
      }
    );

    const newBalanceData = {
      recordId: primaryKey,
      income: income,
      expenditure: expenditure,
      balanceDate: balanceDate,
      recordOwner: userId,
    };

    if (fetchedBalanceData === null) {
      await client.models.Balance.create(newBalanceData, {
        authMode: "identityPool",
      });
    } else {
      await client.models.Balance.update(newBalanceData, {
        authMode: "identityPool",
      });
    }
  }
};
