"use client";

import {
  useBalanceDate,
  useBalanceValue,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import { useLoadingState } from "@/hooks/useLoading";
import { createBalanceCalendarArray } from "@/utils/balanceDataUtils";
import Loading from "@/app/loading";
import { useBalanceModal, useCreateBalance } from "@/hooks/useBalanceModal";
import { balanceDTOType, balanceProps } from "@/const/types";
import {
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  WEDNESDAY,
} from "@/const/constants";

const BalanceCalendar = (props: balanceProps) => {
  const isLoading = useLoadingState()[0];
  const [monthlyBalanceData] = useMonthlyBalanceData();
  const { setFetchedMonthlyBalanceData } = useMonthlyBalanceData()[1];
  const { createBalanceStateMutator } = useCreateBalance()[1];
  const balanceModalMutator = useBalanceModal();
  const setIntegerIncome = useBalanceValue()[2].setIntegerIncome;
  const setIntegerExpenditure = useBalanceValue()[2].setIntegerExpenditure;
  const setBalanceDate = useBalanceDate()[1].setBalanceDate;

  setFetchedMonthlyBalanceData(props.balanceDataDTO);

  const balanceCalendarArray = createBalanceCalendarArray(
    "2025-04",
    monthlyBalanceData
  );

  const emptyDateArray = [...Array(new Date(2025, 3, 1).getDay())].map(
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

  const balanceCalendar = balanceCalendarArray.map((data, i) => {
    if (data === undefined) {
      return (
        <div key={i} className="h-[70px] w-[50px] text-center">
          <div>{i + 1}</div>
        </div>
      );
    } else {
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
            <div>{i + 1}</div>
            <div>{data.income - data.expenditure}</div>
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
        <div className="m-1 bg-[#555555] rounded-md">
          <div className="grid grid-cols-7 place-items-center">
            <div>{SUNDAY}</div>
            <div>{MONDAY}</div>
            <div>{TUESDAY}</div>
            <div>{WEDNESDAY}</div>
            <div>{THURSDAY}</div>
            <div>{FRIDAY}</div>
            <div>{SATURDAY}</div>
            {emptyDate}
            {balanceCalendar}
          </div>
        </div>
      )}
    </>
  );
};

export default BalanceCalendar;
