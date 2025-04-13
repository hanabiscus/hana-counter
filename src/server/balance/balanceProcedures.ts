"use server";

import { cookies } from "next/headers";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/../amplify/data/resource";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";
import { BALANCE_DATE_FORMAT } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

export const updateBalance = async (
  income: number,
  expenditure: number,
  balanceDate: string
): Promise<void> => {
  if (
    BALANCE_DATE_FORMAT.test(balanceDate) &&
    Number.isInteger(income) &&
    Number.isInteger(expenditure) &&
    income >= 0 &&
    expenditure >= 0 &&
    !(income === 0 && expenditure === 0)
  ) {
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });

    if (userId != null || userId != undefined || userId != "") {
      const client = generateClient<Schema>({
        authMode: "identityPool",
      });

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
  }
};
