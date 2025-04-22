"use server";

import { cookies } from "next/headers";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/../amplify/data/resource";
import { getCurrentUser } from "aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { AmplifyServer } from "aws-amplify/adapter-core";
import {
  annuallyBalanceArrayType,
  balanceData,
  balanceDTOType,
  balanceMonthDTOType,
  balanceYearDTOType,
} from "@/const/types";
import { BALANCE_MONTH_FORMAT, BALANCE_YEAR_FORMAT } from "@/const/constants";

import outputs from "@/../amplify_outputs.json";

Amplify.configure(outputs, { ssr: true });

const transformBalanceDataToBalanceDTO: (
  data: balanceData
) => balanceDTOType = (data: balanceData) => {
  return data.map(({ income, expenditure, balanceDate }) => ({
    income,
    expenditure,
    balanceDate,
  }));
};

const transformBalanceDataToBalanceMonthDTO: (
  data: balanceData
) => balanceMonthDTOType = (data: balanceData) => {
  return data
    .map(({ balanceMonth }) => ({ balanceMonth }))
    .filter(
      (balanceData, index, self) =>
        self.findIndex(
          (data) => data.balanceMonth === balanceData.balanceMonth
        ) === index
    )
    .sort(
      (a, b) =>
        Number(b.balanceMonth.replace("-", "")) -
        Number(a.balanceMonth.replace("-", ""))
    );
};

const transformBalanceDataToBalanceYearDTO: (
  data: balanceData
) => balanceYearDTOType = (data: balanceData) => {
  return data
    .map(({ balanceYear }) => ({ balanceYear }))
    .filter(
      (balanceData, index, self) =>
        self.findIndex(
          (data) => data.balanceYear === balanceData.balanceYear
        ) === index
    )
    .sort(
      (a, b) =>
        Number(b.balanceYear.replace("-", "")) -
        Number(a.balanceYear.replace("-", ""))
    );
};

const getAnnuallyBalance: (balanceYear: string) => Promise<number> = async (
  balanceYear: string
) => {
  if (BALANCE_YEAR_FORMAT.test(balanceYear)) {
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
        return NaN;
      }
    } else {
      return NaN;
    }
  } else {
    return NaN;
  }
};

export const getBalanceMonthList: () => Promise<balanceMonthDTOType> =
  async () => {
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
  };

export const getBalanceYearList: () => Promise<balanceYearDTOType> =
  async () => {
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

      return transformBalanceDataToBalanceYearDTO(fetchedBalanceData);
    } else {
      return [];
    }
  };

export const getAllBalanceData: () => Promise<balanceDTOType> = async () => {
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
    const { userId } = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec: AmplifyServer.ContextSpec) =>
        getCurrentUser(contextSpec),
    });

    if (userId != null || userId != undefined || userId != "") {
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
