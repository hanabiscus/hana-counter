import { createTheme } from "@mui/material";
import dayjs from "dayjs";

export const HANA_IMAGE_PATH = "/hana.svg";

export const INTERNAL_SERVER_ERROR = "500";
export const NOT_FOUND = "404";

export const HOME_PAGE_PATH = "/";
export const BALANCE_PAGE_PATH = "/balance";

export const COOKIES_AGE = 60 * 60 * 24;

export const HEADER_ICON_SIZE = 40;

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

export const SHM_NAVIGATION_NAME_COUNTER = "カウンタ";
export const SHM_NAVIGATION_NAME_MONTHLY_BALANCE = "収支";

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
