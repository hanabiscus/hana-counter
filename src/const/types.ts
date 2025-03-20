export const COOKIES_AGE = 60 * 60 * 24;

export const CARD_MARGIN = 1;
export const CARD_BACKGROUND = "#C0C0C0";

export const USUALLY_COUNTER_FIELD_SIZE = 65;
export const BIGBONUS_COUNTER_FIELD_SIZE = 45;

export const BELL_COUNTER = "bellCounter";

export const WATERMELON_COUNTER = "watermelonCounter";

export const RED_FEATHER_COUNTER = "redFeatherCounter";
export const GREEN_FEATHER_COUNTER = "greenFeatherCounter";
export const YELLOW_FEATHER_COUNTER = "yellowFeatherCounter";
export const BLUE_FEATHER_COUNTER = "blueFeatherCounter";

export const RED_SIDE_COUNTER = "redSideCounter";
export const GREEN_SIDE_COUNTER = "greenSideCounter";
export const YELLOW_SIDE_COUNTER = "yellowSideCounter";
export const BLUE_SIDE_COUNTER = "blueSideCounter";

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
  incrementFlag: boolean;
  imagePath: string;
  textFieldWidth: number;
};

export type usuallyCounterProps = {
  incrementFlag: boolean;
  bellCounterNumber: number;
};

export type bigbonusCounterProps = {
  incrementFlag: boolean;
  watermelonCounterNumber: number;
  redFeatherCounterNumber: number;
  greenFeatherCounterNumber: number;
  yellowFeatherCounterNumber: number;
  blueFeatherCounterNumber: number;
};

export type regularbonusCounterProps = {
  incrementFlag: boolean;
  redSideCounterNumber: number;
  greenSideCounterNumber: number;
  yellowSideCounterNumber: number;
  blueSideCounterNumber: number;
};

export type hanaCounterProps = {
  incrementFlag: boolean;
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
