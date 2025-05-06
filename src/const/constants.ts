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

export const COUNTER_NUMBER_MAX_VALUE = 9999;

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

export const BALANCE_MAX_VALUE = 999999;

export const BONUS = "ボーナス";
export const BIGBONUS = "BB";
export const REGULARBONUS = "RB";

export const BIGBONUS_WATERMELON = "BBスイカ";

export const REGULARBONUS_SIDE_LAMP = "RBサイド";

export const CALCULATE = "設定判別";

export const PERCENT = "%";
export const NUM_OF_SETTEI = 6;

export const SETTEI_ONE = "設定 1";
export const SETTEI_TWO = "設定 2";
export const SETTEI_THREE = "設定 3";
export const SETTEI_FOUR = "設定 4";
export const SETTEI_FIVE = "設定 5";
export const SETTEI_SIX = "設定 6";
export const SETTEI_NUMBERS = [
  SETTEI_ONE,
  SETTEI_TWO,
  SETTEI_THREE,
  SETTEI_FOUR,
  SETTEI_FIVE,
  SETTEI_SIX,
];

export const PROBABILITY_GRAPH_HIGHT = 280;
export const PROBABILITY_GRAPH_LABEL_WIDTH = 30;

export const NUM_OF_BB_GAME = 21;
export const PROBABILITY_OF_WM_ONE = BigNumber(1.0).div(BigNumber(42.0));
export const PROBABILITY_OF_WM_TWO = BigNumber(1.0).div(BigNumber(38.0));
export const PROBABILITY_OF_WM_THREE = BigNumber(1.0).div(BigNumber(36.0));
export const PROBABILITY_OF_WM_FOUR = BigNumber(1.0).div(BigNumber(32.0));
export const PROBABILITY_OF_WM_FIVE = BigNumber(1.0).div(BigNumber(30.0));
export const PROBABILITY_OF_WM_SIX = BigNumber(1.0).div(BigNumber(28.0));
export const PROBABILITIES_OF_WM = [
  PROBABILITY_OF_WM_ONE,
  PROBABILITY_OF_WM_TWO,
  PROBABILITY_OF_WM_THREE,
  PROBABILITY_OF_WM_FOUR,
  PROBABILITY_OF_WM_FIVE,
  PROBABILITY_OF_WM_SIX,
];

export const PROBABILITY_OF_RB_SR_ONE = BigNumber(1.0).div(BigNumber(6.249));
export const PROBABILITY_OF_RB_SR_TWO = BigNumber(1.0).div(BigNumber(3.97));
export const PROBABILITY_OF_RB_SR_THREE = BigNumber(1.0).div(BigNumber(5.688));
export const PROBABILITY_OF_RB_SR_FOUR = BigNumber(1.0).div(BigNumber(3.63));
export const PROBABILITY_OF_RB_SR_FIVE = BigNumber(1.0).div(BigNumber(5.229));
export const PROBABILITY_OF_RB_SR_SIX = BigNumber(1.0).div(BigNumber(4.031));

export const PROBABILITY_OF_RB_SG_ONE = BigNumber(1.0).div(BigNumber(4.168));
export const PROBABILITY_OF_RB_SG_TWO = BigNumber(1.0).div(BigNumber(5.956));
export const PROBABILITY_OF_RB_SG_THREE = BigNumber(1.0).div(BigNumber(3.792));
export const PROBABILITY_OF_RB_SG_FOUR = BigNumber(1.0).div(BigNumber(5.445));
export const PROBABILITY_OF_RB_SG_FIVE = BigNumber(1.0).div(BigNumber(3.485));
export const PROBABILITY_OF_RB_SG_SIX = BigNumber(1.0).div(BigNumber(4.031));

export const PROBABILITY_OF_RB_SY_ONE = BigNumber(1.0).div(BigNumber(4.168));
export const PROBABILITY_OF_RB_SY_TWO = BigNumber(1.0).div(BigNumber(2.875));
export const PROBABILITY_OF_RB_SY_THREE = BigNumber(1.0).div(BigNumber(4.468));
export const PROBABILITY_OF_RB_SY_FOUR = BigNumber(1.0).div(BigNumber(3.092));
export const PROBABILITY_OF_RB_SY_FIVE = BigNumber(1.0).div(BigNumber(4.827));
export const PROBABILITY_OF_RB_SY_SIX = BigNumber(1.0).div(BigNumber(4.031));

export const PROBABILITY_OF_RB_SB_ONE = BigNumber(1.0).div(BigNumber(2.778));
export const PROBABILITY_OF_RB_SB_TWO = BigNumber(1.0).div(BigNumber(4.312));
export const PROBABILITY_OF_RB_SB_THREE = BigNumber(1.0).div(BigNumber(2.979));
export const PROBABILITY_OF_RB_SB_FOUR = BigNumber(1.0).div(BigNumber(4.639));
export const PROBABILITY_OF_RB_SB_FIVE = BigNumber(1.0).div(BigNumber(3.218));
export const PROBABILITY_OF_RB_SB_SIX = BigNumber(1.0).div(BigNumber(4.031));

export const PROBABILITIES_OF_RB_SIDE_ONE = [
  PROBABILITY_OF_RB_SR_ONE,
  PROBABILITY_OF_RB_SG_ONE,
  PROBABILITY_OF_RB_SY_ONE,
  PROBABILITY_OF_RB_SB_ONE,
];

export const PROBABILITIES_OF_RB_SIDE_TWO = [
  PROBABILITY_OF_RB_SR_TWO,
  PROBABILITY_OF_RB_SG_TWO,
  PROBABILITY_OF_RB_SY_TWO,
  PROBABILITY_OF_RB_SB_TWO,
];

export const PROBABILITIES_OF_RB_SIDE_THREE = [
  PROBABILITY_OF_RB_SR_THREE,
  PROBABILITY_OF_RB_SG_THREE,
  PROBABILITY_OF_RB_SY_THREE,
  PROBABILITY_OF_RB_SB_THREE,
];

export const PROBABILITIES_OF_RB_SIDE_FOUR = [
  PROBABILITY_OF_RB_SR_FOUR,
  PROBABILITY_OF_RB_SG_FOUR,
  PROBABILITY_OF_RB_SY_FOUR,
  PROBABILITY_OF_RB_SB_FOUR,
];

export const PROBABILITIES_OF_RB_SIDE_FIVE = [
  PROBABILITY_OF_RB_SR_FIVE,
  PROBABILITY_OF_RB_SG_FIVE,
  PROBABILITY_OF_RB_SY_FIVE,
  PROBABILITY_OF_RB_SB_FIVE,
];

export const PROBABILITIES_OF_RB_SIDE_SIX = [
  PROBABILITY_OF_RB_SR_SIX,
  PROBABILITY_OF_RB_SG_SIX,
  PROBABILITY_OF_RB_SY_SIX,
  PROBABILITY_OF_RB_SB_SIX,
];

export const PROBABILITIES_OF_RB_SIDE = [
  PROBABILITIES_OF_RB_SIDE_ONE,
  PROBABILITIES_OF_RB_SIDE_TWO,
  PROBABILITIES_OF_RB_SIDE_THREE,
  PROBABILITIES_OF_RB_SIDE_FOUR,
  PROBABILITIES_OF_RB_SIDE_FIVE,
  PROBABILITIES_OF_RB_SIDE_SIX,
];

export const PROBABILITY_WEIGHT_OF_BB_WATERMELON = BigNumber(0.4);
export const PROBABILITY_WEIGHT_OF_RB_SIDE = BigNumber(0.6);
