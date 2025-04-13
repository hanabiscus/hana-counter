"use server";

import { cookies } from "next/headers";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/../amplify/data/resource";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";
import {
  balanceData,
  balanceDTOType,
  balanceMonthDTOType,
} from "@/const/types";
import { BALANCE_MONTH_FORMAT } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const transformBalanceDataToBalanceDTO = (
  data: balanceData
): balanceDTOType => {
  return data.map(({ income, expenditure, balanceDate }) => ({
    income,
    expenditure,
    balanceDate,
  }));
};

const transformBalanceDataToBalanceMonthDTO = (
  data: balanceData
): balanceMonthDTOType => {
  const balanceDates = data.map(({ balanceDate }) => ({ balanceDate }));

  const duplicatedBalanceMonths = balanceDates.map((data) =>
    data.balanceDate.slice(0, -3)
  );

  // 正規表現チェック

  return Array.from(
    new Map(duplicatedBalanceMonths.map((data) => [data, data])).values()
  );
};

export const getBalanceMonth = async (
  balanceMonth: string
): Promise<balanceMonthDTOType> => {
  if (BALANCE_MONTH_FORMAT.test(balanceMonth)) {
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });

    if (userId != null || userId != undefined || userId != "") {
      const client = generateClient<Schema>({
        authMode: "identityPool",
      });

      const { data: fetchedBalanceData } = await client.models.Balance.list({
        filter: {
          recordOwner: {
            eq: userId,
          },
        },
      });

      return transformBalanceDataToBalanceMonthDTO(fetchedBalanceData);
    } else {
      return [];
    }
  } else {
    return [];
  }
};

export const getMonthlyBalanceData = async (
  balanceMonth: string
): Promise<balanceDTOType> => {
  if (BALANCE_MONTH_FORMAT.test(balanceMonth)) {
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });

    if (userId != null || userId != undefined || userId != "") {
      const client = generateClient<Schema>({
        authMode: "identityPool",
      });

      const { data: fetchedBalanceData } = await client.models.Balance.list({
        filter: {
          and: {
            recordOwner: {
              eq: userId,
            },
            balanceDate: {
              beginsWith: balanceMonth,
            },
          },
        },
      });

      const balanceDataDTO =
        transformBalanceDataToBalanceDTO(fetchedBalanceData);

      return balanceDataDTO;
    } else {
      return [];
    }
  } else {
    return [];
  }
};
