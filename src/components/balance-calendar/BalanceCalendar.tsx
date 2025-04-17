"use client";

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
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  WEDNESDAY,
} from "@/const/constants";

const BalanceCalendar = () => {
  const isLoading = useLoadingState()[0];
  const monthlyBalanceData = useMonthlyBalanceData()[0];
  const createBalanceStateMutator =
    useCreateBalance()[1].createBalanceStateMutator;
  const balanceModalMutator = useBalanceModal();
  const setIntegerIncome = useBalanceValue()[2].setIntegerIncome;
  const setIntegerExpenditure = useBalanceValue()[2].setIntegerExpenditure;
  const setBalanceDate = useBalanceDate()[1].setBalanceDate;
  const balanceMonth = useBalanceMonth()[0];

  const balanceCalendarArray = createBalanceCalendarArray(
    balanceMonth,
    monthlyBalanceData
  );

  const emptyDateArray = [...Array(getDayFromBalanceMonth(balanceMonth))].map(
    (_, i) => i + 32
  );
  const emptyDate = emptyDateArray.map((data) => {
    return <div key={data} className="h-[70px] w-[50px]"></div>;
  });

  const handleClickBalance = (balanceData: balanceDTOType) => {
    setIntegerIncome(balanceData[0].income);
    setIntegerExpenditure(balanceData[0].expenditure);
    setBalanceDate(balanceData[0].balanceDate);
    createBalanceStateMutator(false);
    balanceModalMutator();
  };

  const monthlyBalance = monthlyBalanceData.reduce((monthlyBalance, data) => {
    return monthlyBalance + data.income - data.expenditure;
  }, 0);

  const balanceCalendar = balanceCalendarArray.map((data, index) => {
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

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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
          <div className="h-[30px] m-7 flex justify-center items-center">
            <div className="bg-[#444444] rounded-[30px]">
              {monthlyBalance >= 0 ? (
                <div className="text-[20px] text-[#009844] p-3">
                  {formatNumberToYen(monthlyBalance)}
                </div>
              ) : (
                <div className="text-[20px] text-[#d32f2f]">
                  {formatNumberToYen(monthlyBalance)}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BalanceCalendar;
