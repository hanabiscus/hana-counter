import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";
import dayjs from "dayjs";

export type navigationItemProps = {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  href: string;
  name: string;
};

export type hooksCounterProps = {
  counterKind: string;
  counterNumber: number;
};

export type hooksCounterReturn = [
  number,
  {
    increment: () => void;
    decrement: () => void;
    setCounterNumber: (counterNumber: number) => void;
  },
];

export type hooksLoadingReturn = [
  boolean,
  {
    loadingMutator: (isLoading: boolean) => void;
  },
];

export type hooksSuperHeaderMenuReturn = [
  boolean,
  {
    superHeaderMenuMutator: () => void;
  },
];

export type hooksBalanceValueReturn = [
  number,
  number,
  {
    setIntegerIncome: (income: number) => void;
    setIntegerExpenditure: (expenditure: number) => void;
  },
];

export type hooksBalanceDateReturn = [
  string,
  {
    setBalanceDate: (balanceDate: string) => void;
    setStringBalanceDate: (balanceDate: dayjs.Dayjs | null) => void;
  },
];

export type hooksBalanceMonthReturn = [
  string,
  {
    setBalanceMonth: (balanceMonth: string) => void;
  },
];

export type hooksBalanceDataReturn = [
  balanceDTOType,
  { setBalanceData: (balanceData: balanceDTOType) => void },
];

export type hooksBalanceMonthDataReturn = [
  balanceMonthDTOType,
  { setBalanceMonthData: (balanceData: balanceMonthDTOType) => void },
];

export type hooksIsCreateBalanceReturn = [
  boolean,
  {
    createBalanceMutator: (isCreate: boolean) => void;
  },
];

export type hooksBonusInputReturn = [
  number,
  number,
  {
    setAbsoluteBigbonusCounterNumber: (counterNumber: number) => void;
    setAbsoluteRegularbonusCounterNumber: (counterNumber: number) => void;
  },
];

export type hooksBigbonusWatermelonInputReturn = [
  number,
  {
    setAbsoluteBigbonusWatermelonCounterNumber: (counterNumber: number) => void;
  },
];

export type hooksRegularbonusSideLampReturn = [
  number,
  number,
  number,
  number,
  {
    setAbsoluteRedSideLampCounterNumber: (counterNumber: number) => void;
    setAbsoluteGreenSideLampCounterNumber: (counterNumber: number) => void;
    setAbsoluteYellowSideLampCounterNumber: (counterNumber: number) => void;
    setAbsoluteBlueSideLampCounterNumber: (counterNumber: number) => void;
  },
];

export type hooksProbabilityOutputReturn = [
  number[],
  {
    setProbabilityOutput: (probabilityOutput: number[]) => void;
  },
];

export type counterProps = {
  counterKind: string;
  counterNumber: number;
  decrementFlag: boolean;
  textFieldWidth: number;
};

export type usuallyCounterNumber = {
  bellCounterNumber: number;
};

export type bigbonusCounterNumbers = {
  watermelonCounterNumber: number;
  redFeatherCounterNumber: number;
  greenFeatherCounterNumber: number;
  yellowFeatherCounterNumber: number;
  blueFeatherCounterNumber: number;
};

export type regularbonusCounterNumbers = {
  redSideCounterNumber: number;
  greenSideCounterNumber: number;
  yellowSideCounterNumber: number;
  blueSideCounterNumber: number;
};

export type allCounterNumbers = {
  usuallyCounterNumber: usuallyCounterNumber;
  bigbonusCounterNumbers: bigbonusCounterNumbers;
  regularbonusCounterNumbers: regularbonusCounterNumbers;
};

export type usuallyCounterProps = {
  decrementFlag: boolean;
  usuallyCounterNumber: usuallyCounterNumber;
};

export type bigbonusCounterProps = {
  decrementFlag: boolean;
  bigbonusCounterNumbers: bigbonusCounterNumbers;
};

export type regularbonusCounterProps = {
  decrementFlag: boolean;
  regularbonusCounterNumbers: regularbonusCounterNumbers;
};

export type hanaCounterProps = {
  allCounterNumbers: allCounterNumbers;
};

export type counterModeIndicatorProps = {
  decrementFlag: boolean;
};

export type balanceData = {
  recordId: string;
  income: number;
  expenditure: number;
  balanceDate: string;
  balanceMonth: string;
  balanceYear: string;
  recordOwner: string;
  readonly createdAt: string;
  readonly updatedAt: string;
}[];

export type balanceDTOType = {
  income: number;
  expenditure: number;
  balanceDate: string;
}[];

export type balanceMonthDTOType = {
  balanceMonth: string;
}[];

export type balanceYearDTOType = {
  balanceYear: string;
}[];

export type annuallyBalanceArrayType = {
  balance: number;
  balanceYear: string;
}[];

export type balanceMonthSelectorProps = {
  balanceMonthDataDTO: balanceMonthDTOType;
};

export type balanceProps = {
  balanceMonthDataDTO: balanceMonthDTOType;
};

export type conditionalProbabilityOfBigbonusWatermelonInput = {
  bigbonusCounterNumber: number;
  bigbonusWatermelonCounterNumber: number;
};

export type conditionalProbabilitiesOfRegularbonusSideLampInput = {
  regularbonusCounterNumber: number;
  redSideLampCounterNumber: number;
  greenSideLampCounterNumber: number;
  yellowSideLampCounterNumber: number;
  blueSideLampCounterNumber: number;
};

export type calculateProbabilitiesOfHanaInput = {
  bigbonusCounterNumber: number;
  regularbonusCounterNumber: number;
  bigbonusWatermelonCounterNumber: number;
  redSideLampCounterNumber: number;
  greenSideLampCounterNumber: number;
  yellowSideLampCounterNumber: number;
  blueSideLampCounterNumber: number;
};
