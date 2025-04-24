"use client";

import { JSX, useEffect, useMemo, useState } from "react";
import {
  getAllBalanceData,
  getAnnuallyBalanceArray,
} from "@/server/balance/balanceProcessors";
import { useLoading } from "@/hooks/useLoading";
import { formatNumberToYen } from "@/utils/numberUtils";
import { useBalanceMonth, useBalanceData } from "@/hooks/useBalance";
import Loading from "@/app/loading";
import UnarchiveRoundedIcon from "@mui/icons-material/UnarchiveRounded";
import ArchiveRoundedIcon from "@mui/icons-material/ArchiveRounded";
import { annuallyBalanceArrayType } from "@/const/types";

const BalanceSummary: () => JSX.Element = () => {
  const [allBalanceData, { setBalanceData }] = useBalanceData();

  const [isLoading, { loadingMutator }] = useLoading();

  const [annuallyBalanceArray, setAnnuallyBalanceArray] =
    useState<annuallyBalanceArrayType>([]);

  const balanceMonth: string = useBalanceMonth()[0];

  useEffect(() => {
    (async () => {
      loadingMutator(true);
      setBalanceData(await getAllBalanceData());
      setAnnuallyBalanceArray(await getAnnuallyBalanceArray());
      loadingMutator(false);
    })();
  }, [balanceMonth]);

  const allBalance: number = useMemo(() => {
    return allBalanceData.reduce((allBalance, data) => {
      return allBalance + data.income - data.expenditure;
    }, 0);
  }, [allBalanceData]);

  const allIncome: number = useMemo(() => {
    return allBalanceData.reduce((allExpenditure, data) => {
      return allExpenditure + data.income;
    }, 0);
  }, [allBalanceData]);

  const allExpenditure: number = useMemo(() => {
    return allBalanceData.reduce((allIncome, data) => {
      return allIncome - data.expenditure;
    }, 0);
  }, [allBalanceData]);

  const annuallyBalance: JSX.Element[] = useMemo(() => {
    return annuallyBalanceArray.map((data, index) => {
      return (
        <div key={index} className="m-3 grid grid-cols-2 place-items-center">
          <div key={data.balanceYear} className="text-lg">
            {data.balanceYear + " " + "年"}
          </div>
          <div className="bg-[#444444] rounded-[30px]">
            {data.balance >= 0 ? (
              <div
                key={data.balance}
                className="text-[20px] text-[#009844] p-3"
              >
                {formatNumberToYen(data.balance)}
              </div>
            ) : (
              <div
                key={data.balance}
                className="text-[20px] text-[#d32f2f] p-3"
              >
                {formatNumberToYen(data.balance)}
              </div>
            )}
          </div>
        </div>
      );
    });
  }, [annuallyBalanceArray]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="h-[30px] m-7 flex justify-center items-center">
            <div className="bg-[#444444] rounded-[30px]">
              {allBalance >= 0 ? (
                <div className="text-[20px] text-[#009844] p-3">
                  {formatNumberToYen(allBalance)}
                </div>
              ) : (
                <div className="text-[20px] text-[#d32f2f] p-3">
                  {formatNumberToYen(allBalance)}
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 place-items-center">
            <div className="m-2 text-[20px] text-[#d32f2f] border-b-[1px] border-[#666666]">
              <span className="m-2">
                <UnarchiveRoundedIcon />
              </span>
              <span className="m-2">{formatNumberToYen(allExpenditure)}</span>
            </div>
            <div className="m-2 text-[20px] text-[#009844] border-b-[1px] border-[#666666]">
              <span className="m-2">
                <ArchiveRoundedIcon />
              </span>
              <span className="m-2">{formatNumberToYen(allIncome)}</span>
            </div>
          </div>
          <div className="border-b-[1px] border-[#444444] m-2"></div>
          {annuallyBalance}
        </>
      )}
    </>
  );
};

export default BalanceSummary;
