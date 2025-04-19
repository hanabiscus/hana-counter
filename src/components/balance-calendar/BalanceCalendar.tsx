"use client";

import { JSX, useMemo } from "react";
import {
  useBalanceDate,
  useBalanceMonth,
  useBalanceValue,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import { useLoadingState } from "@/hooks/useLoading";
import { createBalanceCalendarArray } from "@/utils/balanceDataUtils";
import Loading from "@/app/loading";
import { useBalanceModal, useCreateBalance } from "@/hooks/useBalanceModal";
import {
  formatBalanceToCurrency,
  formatBalanceToSmallDigit,
  formatNumberToYen,
} from "@/utils/balanceUtils";
import { getDayFromBalanceMonth } from "@/utils/dateUtils";
import { balanceDTOType } from "@/const/types";
import {
  BALANCE_CALENDAR_NO_DATA_MESSAGE,
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  WEDNESDAY,
} from "@/const/constants";

const BalanceCalendar = (): JSX.Element => {
  const isLoading: boolean = useLoadingState()[0];

  const monthlyBalanceData: balanceDTOType = useMonthlyBalanceData()[0];

  const balanceMonth: string = useBalanceMonth()[0];

  const createBalanceMutator: (isCreate: boolean) => void =
    useCreateBalance()[1].createBalanceMutator;

  const setIntegerIncome: (income: number) => void =
    useBalanceValue()[2].setIntegerIncome;

  const setIntegerExpenditure: (expenditure: number) => void =
    useBalanceValue()[2].setIntegerExpenditure;

  const setBalanceDate: (balanceDate: string) => void =
    useBalanceDate()[1].setBalanceDate;

  const balanceModalMutator: () => void = useBalanceModal();

  const emptyDateArray: number[] = useMemo(() => {
    return [...Array(getDayFromBalanceMonth(balanceMonth))].map(
      (_, i) => i + 32
    );
  }, [balanceMonth, monthlyBalanceData]);

  const emptyDate: JSX.Element[] = useMemo(() => {
    return emptyDateArray.map((data) => {
      return <div key={data} className="h-[70px] w-[50px]"></div>;
    });
  }, [emptyDateArray]);

  const balanceCalendarArray: balanceDTOType = useMemo(() => {
    return createBalanceCalendarArray(balanceMonth, monthlyBalanceData);
  }, [balanceMonth, monthlyBalanceData]);

  const monthlyBalance: number = useMemo(() => {
    return monthlyBalanceData.reduce((monthlyBalance, data) => {
      return monthlyBalance + data.income - data.expenditure;
    }, 0);
  }, [monthlyBalanceData]);

  const balanceCalendar: JSX.Element[] = useMemo(() => {
    return balanceCalendarArray.map((data, index) => {
      if (data === undefined) {
        return (
          <div key={index} className="h-[70px] w-[50px] text-center">
            <div>{index + 1}</div>
          </div>
        );
      } else {
        const balance = data.income - data.expenditure;
        return (
          <button
            key={data.balanceDate}
            onClick={() =>
              handleClickBalance([
                {
                  income: data.income,
                  expenditure: data.expenditure,
                  balanceDate: data.balanceDate,
                },
              ])
            }
          >
            <div className="h-[70px] w-[50px] text-center">
              <div>{index + 1}</div>
              {balance >= 0 ? (
                <div className="text-[#009844]">
                  <div className="text-[12px]">
                    {String(balance).length <= 6
                      ? formatBalanceToCurrency(balance)
                      : formatBalanceToSmallDigit(balance)}
                  </div>
                </div>
              ) : (
                <div className="text-[#d32f2f]">
                  <div className="text-[12px]">
                    {String(balance).length <= 6
                      ? formatBalanceToCurrency(balance)
                      : formatBalanceToSmallDigit(balance)}
                  </div>
                </div>
              )}
            </div>
          </button>
        );
      }
    });
  }, [balanceCalendarArray]);

  const handleClickBalance: (balanceData: balanceDTOType) => void = (
    balanceData: balanceDTOType
  ) => {
    setIntegerIncome(balanceData[0].income);
    setIntegerExpenditure(balanceData[0].expenditure);
    setBalanceDate(balanceData[0].balanceDate);
    createBalanceMutator(false);
    balanceModalMutator();
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {balanceCalendarArray.length === 0 ||
          balanceCalendarArray.every((data) => data === undefined) ? (
            <div className="m-3">{BALANCE_CALENDAR_NO_DATA_MESSAGE}</div>
          ) : (
            <>
              <div className="h-[30px] m-7 flex justify-center items-center">
                <div className="bg-[#444444] rounded-[30px]">
                  {monthlyBalance >= 0 ? (
                    <div className="text-[20px] text-[#009844] p-3">
                      {formatNumberToYen(monthlyBalance)}
                    </div>
                  ) : (
                    <div className="text-[20px] text-[#d32f2f] p-3">
                      {formatNumberToYen(monthlyBalance)}
                    </div>
                  )}
                </div>
              </div>
              <div className="m-1 bg-[#444444] rounded-md">
                <div className="grid grid-cols-7 place-items-center">
                  <div className="text-[#999999]">{SUNDAY}</div>
                  <div className="text-[#999999]">{MONDAY}</div>
                  <div className="text-[#999999]">{TUESDAY}</div>
                  <div className="text-[#999999]">{WEDNESDAY}</div>
                  <div className="text-[#999999]">{THURSDAY}</div>
                  <div className="text-[#999999]">{FRIDAY}</div>
                  <div className="text-[#999999]">{SATURDAY}</div>
                  {emptyDate}
                  {balanceCalendar}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default BalanceCalendar;
