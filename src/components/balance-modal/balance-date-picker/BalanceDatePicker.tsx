import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useBalanceDate } from "@/hooks/useBalance";
import { useCreateBalance } from "@/hooks/useBalanceModal";
import {
  BALANCE_MODAL_DATE_PICKER_FLAG,
  darkTheme,
  DATE_PICKER_FIELD_SIZE,
  DATE_PICKER_FORMAT,
  DATE_PICKER_HEADER_FORMAT,
  DATE_PICKER_YEAR_FORMAT,
} from "@/const/constants";
import { ThemeProvider } from "@mui/material";

const BalanceDatePicker = () => {
  const [balanceDate, { setStringBalanceDate }] = useBalanceDate();
  const createBalanceStateMutator =
    useCreateBalance()[1].createBalanceStateMutator;

  const handleChangeBalanceDate = (newDate: dayjs.Dayjs | null) => {
    setStringBalanceDate(newDate);
    createBalanceStateMutator(true);
  };

  return (
    <div className="h-[70px] w-full grid content-center">
      <div className="m-auto">
        <ThemeProvider theme={darkTheme}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            dateFormats={{ year: DATE_PICKER_YEAR_FORMAT }}
          >
            <MobileDatePicker
              label={BALANCE_MODAL_DATE_PICKER_FLAG}
              format={DATE_PICKER_FORMAT}
              slotProps={{
                calendarHeader: { format: DATE_PICKER_HEADER_FORMAT },
              }}
              defaultValue={dayjs(balanceDate)}
              onChange={(newDate) => handleChangeBalanceDate(newDate)}
              sx={{ maxWidth: DATE_PICKER_FIELD_SIZE }}
            />
          </LocalizationProvider>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default BalanceDatePicker;
