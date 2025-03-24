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
  }
];

export type counterProps = {
  counterKind: string;
  counterNumber: number;
  decrementFlag: boolean;
  imagePath: string;
  textFieldWidth: number;
};

export type usuallyCounterProps = {
  decrementFlag: boolean;
  bellCounterNumber: number;
};

export type bigbonusCounterProps = {
  decrementFlag: boolean;
  watermelonCounterNumber: number;
  redFeatherCounterNumber: number;
  greenFeatherCounterNumber: number;
  yellowFeatherCounterNumber: number;
  blueFeatherCounterNumber: number;
};

export type regularbonusCounterProps = {
  decrementFlag: boolean;
  redSideCounterNumber: number;
  greenSideCounterNumber: number;
  yellowSideCounterNumber: number;
  blueSideCounterNumber: number;
};

export type hanaCounterProps = {
  bellCounterNumber: number;
  watermelonCounterNumber: number;
  redFeatherCounterNumber: number;
  greenFeatherCounterNumber: number;
  yellowFeatherCounterNumber: number;
  blueFeatherCounterNumber: number;
  redSideCounterNumber: number;
  greenSideCounterNumber: number;
  yellowSideCounterNumber: number;
  blueSideCounterNumber: number;
};

export type counterModeIndicatorProps = {
  decrementFlag: boolean;
};
