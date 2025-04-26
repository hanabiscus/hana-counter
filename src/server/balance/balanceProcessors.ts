"use server";

import { cookies } from "next/headers";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/../amplify/data/resource";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/lib/utils/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";
import {
  transformBalanceDataToBalanceDTO,
  transformBalanceDataToBalanceMonthDTO,
  transformBalanceDataToBalanceYearDTO,
} from "@/lib/balance/balanceDataMutators";
import { checkAuthSession } from "../authentication/amplifyAuthSession";
import {
  annuallyBalanceArrayType,
  balanceDTOType,
  balanceMonthDTOType,
  balanceYearDTOType,
} from "@/const/types";
import { BALANCE_MONTH_FORMAT, BALANCE_YEAR_FORMAT } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const getBalanceYearList: () => Promise<balanceYearDTOType> = async () => {
  if (await checkAuthSession()) {
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });

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

    return transformBalanceDataToBalanceYearDTO(fetchedBalanceData);
  } else {
    return [];
  }
};

const getAnnuallyBalance: (balanceYear: string) => Promise<number> = async (
  balanceYear: string
) => {
  if (BALANCE_YEAR_FORMAT.test(balanceYear)) {
    if (await checkAuthSession()) {
      const { userId } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec: AmplifyServer.ContextSpec) =>
          getCurrentUser(contextSpec),
      });

      const client = generateClient<Schema>({
        authMode: "identityPool",
      });

      const { data: fetchedBalanceData } = await client.models.Balance.list({
        filter: {
          and: {
            recordOwner: {
              eq: userId,
            },
            balanceYear: {
              eq: balanceYear,
            },
          },
        },
      });

      if (fetchedBalanceData.length != 0) {
        return fetchedBalanceData.reduce((annuallyBalance, data) => {
          return annuallyBalance + data.income - data.expenditure;
        }, 0);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  } else {
    return 0;
  }
};

export const getBalanceMonthList: () => Promise<balanceMonthDTOType> =
  async () => {
    if (await checkAuthSession()) {
      const { userId } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec: AmplifyServer.ContextSpec) =>
          getCurrentUser(contextSpec),
      });

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
  };

export const getAllBalanceData: () => Promise<balanceDTOType> = async () => {
  if (await checkAuthSession()) {
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });

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

    const balanceDataDTO = transformBalanceDataToBalanceDTO(fetchedBalanceData);

    return balanceDataDTO;
  } else {
    return [];
  }
};

export const getMonthlyBalanceData: (
  balanceMonth: string
) => Promise<balanceDTOType> = async (balanceMonth: string) => {
  if (BALANCE_MONTH_FORMAT.test(balanceMonth)) {
    if (await checkAuthSession()) {
      const { userId } = await runWithAmplifyServerContext({
        nextServerContext: { cookies },
        operation: (contextSpec: AmplifyServer.ContextSpec) =>
          getCurrentUser(contextSpec),
      });

      const client = generateClient<Schema>({
        authMode: "identityPool",
      });

      const { data: fetchedBalanceData } = await client.models.Balance.list({
        filter: {
          and: {
            recordOwner: {
              eq: userId,
            },
            balanceMonth: {
              eq: balanceMonth,
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

export const getAnnuallyBalanceArray: () => Promise<annuallyBalanceArrayType> =
  async () => {
    if (await checkAuthSession()) {
      const balanceYearList = await getBalanceYearList();

      const annuallyBalanceArray = [];

      for (let index = 0; index < balanceYearList.length; index++) {
        annuallyBalanceArray.push({
          balance: await getAnnuallyBalance(balanceYearList[index].balanceYear),
          balanceYear: balanceYearList[index].balanceYear,
        });
      }

      return annuallyBalanceArray;
    } else {
      return [];
    }
  };
