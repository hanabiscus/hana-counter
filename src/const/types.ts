import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

export type navigationItemProps = {
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
  href: string;
  name: string;
};

export type hooksCounterProps = {
  counterKind: string;
  counterNumber: number;
};

export type hooksReturnCounterProps = [
  number,
  {
    increment: () => void;
    decrement: () => void;
    setCounterNumber: (counterNumber: number) => void;
  },
];

export type counterProps = {
  counterKind: string;
  counterNumber: number;
  decrementFlag: boolean;
  imagePath: string;
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
