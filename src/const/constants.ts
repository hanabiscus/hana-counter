import { createTheme } from "@mui/material";
import dayjs from "dayjs";
import BigNumber from "bignumber.js";

export const INTERNAL_SERVER_ERROR = "500";
export const NOT_FOUND = "404";

export const HOME_PAGE_PATH = "/";
export const BALANCE_PAGE_PATH = "/balance";
export const PROBABILITY_PAGE_PATH = "/probability";

export const HANA_SVG_PATH = "/hana.svg";
export const HANA_SIZE = 45;
export const HANA_TITLE = "HANA";

export const KING_SVG_PATH = "/king.svg";

export const DRAGON_SVG_PATH = "/dragon.svg";

export const STAR_SVG_PATH = "/star.svg";

export const COOKIES_AGE = 60 * 60 * 24;

export const USUALLY_COUNTER_FIELD_SIZE = 75;
export const BONUS_COUNTER_FIELD_SIZE = 55;

export const PLUS = "+";
export const MINUS = "-";

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

export const ALL_COUNTER_KIND_SET = [
  BELL_COUNTER,
  WATERMELON_COUNTER,
  RED_FEATHER_COUNTER,
  GREEN_FEATHER_COUNTER,
  YELLOW_FEATHER_COUNTER,
  BLUE_FEATHER_COUNTER,
  RED_SIDE_COUNTER,
  GREEN_SIDE_COUNTER,
  YELLOW_SIDE_COUNTER,
  BLUE_SIDE_COUNTER,
];

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const textFiledTheme = createTheme({
  palette: {
    text: {
      primary: "#ffffff",
    },
  },
});

export const incomeTextFiledTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#009844",
    },
  },
});

export const expenditureTextFiledTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "#d32f2f",
    },
  },
});

export const BALANCE_MONTH_SELECTOR_MIN_WIDTH = 90;
export const BALANCE_MONTH_SELECTOR_MARGIN = 2;

export const LOGOUT = "ログアウト";

export const SHM_NAVIGATION_NAME_COUNTER = "カウンタ";
export const SHM_NAVIGATION_NAME_BALANCE = "収支";
export const SHM_NAVIGATION_NAME_SETTEI_HAMBETSU = "設定判別";

export const EXPENDITURE_LABEL = "投資";
export const INCOME_LABEL = "回収";

export const SUBMIT = "登録";

export const BALANCE_FIELD_SIZE = 130;
export const DATE_PICKER_FIELD_SIZE = 150;

export const BALANCE_MODAL_DATE_PICKER_FLAG = "実践日";
export const DATE_PICKER_YEAR_FORMAT = "YYYY";
export const DATE_PICKER_HEADER_FORMAT = "YYYY-MM";
export const DATE_PICKER_FORMAT = "YYYY-MM-DD";
export const DATE_PICKER_MAX_DATE = dayjs("2030-03-31");
export const DATE_PICKER_MIN_DATE = dayjs("2023-04-01");

export const BALANCE_MONTH_SELECTOR_LABEL = "期間";
export const BALANCE_SUM_LABEL = "全期間";
export const ALL_BALANCE_MONTH = "allBalanceMonth";
export const BALANCE_CALENDAR_NO_DATA_MESSAGE = "データが存在しません";

export const SUNDAY = "日";
export const MONDAY = "月";
export const TUESDAY = "火";
export const WEDNESDAY = "水";
export const THURSDAY = "木";
export const FRIDAY = "金";
export const SATURDAY = "土";

export const BALANCE_DATE_FORMAT =
  /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

export const BALANCE_MONTH_FORMAT = /^[0-9]{4}-(0[1-9]|1[0-2])$/;

export const BALANCE_YEAR_FORMAT = /^[0-9]{4}$/;

export const KING_HANAHANA = "kingHanahana";
export const DRAGON_HANAHANA = "dragonHanahana";
export const STAR_HANAHANA = "starHanahana";
export const HANA_KINDS = [KING_HANAHANA, DRAGON_HANAHANA, STAR_HANAHANA];

export const TOTAL_GAME = "総ゲーム数";
export const GAME = "G";
export const BONUS = "ボーナス";
export const BIGBONUS = "BB";
export const REGULARBONUS = "RB";
export const CALCULATE = "設定判別";
export const PERCENT = "%";

export const SETTEI_ONE = "設定 1";
export const SETTEI_TWO = "設定 2";
export const SETTEI_THREE = "設定 3";
export const SETTEI_FOUR = "設定 4";
export const SETTEI_FIVE = "設定 5";
export const SETTEI_SIX = "設定 6";

export const PROBABILITY_GRAPH_HIGHT = 280;
export const PROBABILITY_GRAPH_LABEL_WIDTH = 30;

export const PROBABILITY_OF_BB_KING_ONE = BigNumber(1.0).div(BigNumber(292.0));
export const PROBABILITY_OF_BB_KING_TWO = BigNumber(1.0).div(BigNumber(280.0));
export const PROBABILITY_OF_BB_KING_THREE = BigNumber(1.0).div(
  BigNumber(268.0)
);
export const PROBABILITY_OF_BB_KING_FOUR = BigNumber(1.0).div(BigNumber(257.0));
export const PROBABILITY_OF_BB_KING_FIVE = BigNumber(1.0).div(BigNumber(244.0));
export const PROBABILITY_OF_BB_KING_SIX = BigNumber(1.0).div(BigNumber(232.0));
export const PROBABILITIES_OF_BB_KING = [
  PROBABILITY_OF_BB_KING_ONE,
  PROBABILITY_OF_BB_KING_TWO,
  PROBABILITY_OF_BB_KING_THREE,
  PROBABILITY_OF_BB_KING_FOUR,
  PROBABILITY_OF_BB_KING_FIVE,
  PROBABILITY_OF_BB_KING_SIX,
];

export const PROBABILITY_OF_RB_KING_ONE = BigNumber(1.0).div(BigNumber(489.0));
export const PROBABILITY_OF_RB_KING_TWO = BigNumber(1.0).div(BigNumber(452.0));
export const PROBABILITY_OF_RB_KING_THREE = BigNumber(1.0).div(
  BigNumber(420.0)
);
export const PROBABILITY_OF_RB_KING_FOUR = BigNumber(1.0).div(BigNumber(390.0));
export const PROBABILITY_OF_RB_KING_FIVE = BigNumber(1.0).div(BigNumber(360.0));
export const PROBABILITY_OF_RB_KING_SIX = BigNumber(1.0).div(BigNumber(332.0));
export const PROBABILITIES_OF_RB_KING = [
  PROBABILITY_OF_RB_KING_ONE,
  PROBABILITY_OF_RB_KING_TWO,
  PROBABILITY_OF_RB_KING_THREE,
  PROBABILITY_OF_RB_KING_FOUR,
  PROBABILITY_OF_RB_KING_FIVE,
  PROBABILITY_OF_RB_KING_SIX,
];

export const PROBABILITY_WEIGHT_OF_BB = BigNumber(0.5);
export const PROBABILITY_WEIGHT_OF_RB = BigNumber(0.5);

// export const PROBABILITY_OF_WM_ONE = Number((1 / 48).toFixed(2));
// export const PROBABILITY_OF_WM_TWO = Number((1 / 44).toFixed(2));
// export const PROBABILITY_OF_WM_THREE = Number((1 / 42).toFixed(2));
// export const PROBABILITY_OF_WM_FOUR = Number((1 / 40).toFixed(2));
// export const PROBABILITY_OF_WM_FIVE = Number((1 / 35).toFixed(2));
// export const PROBABILITY_OF_WM_SIX = Number((1 / 32).toFixed(2));

// export const PROBABILITY_OF_RB_SR_ONE = Number((16 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SR_TWO = Number((25 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SR_THREE = Number((18 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SR_FOUR = Number((28 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SR_FIVE = Number((19 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SR_SIX = Number((25 / 100).toFixed(2));

// export const PROBABILITY_OF_RB_SG_ONE = Number((24 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SG_TWO = Number((17 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SG_THREE = Number((27 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SG_FOUR = Number((18 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SG_FIVE = Number((29 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SG_SIX = Number((25 / 100).toFixed(2));

// export const PROBABILITY_OF_RB_SY_ONE = Number((24 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SY_TWO = Number((35 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SY_THREE = Number((22 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SY_FOUR = Number((32 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SY_FIVE = Number((21 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SY_SIX = Number((25 / 100).toFixed(2));

// export const PROBABILITY_OF_RB_SB_ONE = Number((36 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SB_TWO = Number((23 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SB_THREE = Number((33 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SB_FOUR = Number((22 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SB_FIVE = Number((31 / 100).toFixed(2));
// export const PROBABILITY_OF_RB_SB_SIX = Number((25 / 100).toFixed(2));
