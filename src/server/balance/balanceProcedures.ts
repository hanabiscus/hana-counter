"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/../amplify/data/resource";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/lib/utils/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";
import { checkAuthSession } from "../authentication/amplifyAuthSession";
import { BALANCE_DATE_FORMAT, BALANCE_PAGE_PATH } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

export const updateBalance: (
  income: number,
  expenditure: number,
  balanceDate: string
) => Promise<void> = async (
  income: number,
  expenditure: number,
  balanceDate: string
) => {
  if (
    BALANCE_DATE_FORMAT.test(balanceDate) &&
    Number.isInteger(income) &&
    Number.isInteger(expenditure) &&
    income >= 0 &&
    expenditure >= 0 &&
    !(income === 0 && expenditure === 0)
  ) {
    if (await checkAuthSession()) {
      const { userId } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec: AmplifyServer.ContextSpec) =>
          getCurrentUser(contextSpec),
      });

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
        balanceMonth: balanceDate.slice(0, 7),
        balanceYear: balanceDate.slice(0, 4),
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
  revalidatePath(BALANCE_PAGE_PATH);
};

export const deleteBalance: (balanceDate: string) => Promise<void> = async (
  balanceDate: string
) => {
  if (BALANCE_DATE_FORMAT.test(balanceDate)) {
    if (await checkAuthSession()) {
      const { userId } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec: AmplifyServer.ContextSpec) =>
          getCurrentUser(contextSpec),
      });

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

      if (fetchedBalanceData != null) {
        await client.models.Balance.delete(
          { recordId: primaryKey },
          {
            authMode: "identityPool",
          }
        );
      }
    }
  }
  revalidatePath(BALANCE_PAGE_PATH);
};
