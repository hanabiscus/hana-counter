import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { useBalanceDate } from "@/hooks/useBalance";
import {
  BALANCE_MODAL_DATE_PICKER_FLAG,
  DATE_PICKER_FIELD_SIZE,
  DATE_PICKER_FORMAT,
  DATE_PICKER_HEADER_FORMAT,
  DATE_PICKER_YEAR_FORMAT,
} from "@/const/constants";

dayjs.locale("ja");

const BalanceDatePicker = () => {
  const [balanceDate, { setStringBalanceDate }] = useBalanceDate();

  return (
    <div className="h-[70px] w-full grid content-center">
      <div className="m-auto">
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
            onChange={(newDate) => setStringBalanceDate(newDate)}
            sx={{ maxWidth: DATE_PICKER_FIELD_SIZE }}
          />
        </LocalizationProvider>
      </div>
    </div>
  );
};

export default BalanceDatePicker;
