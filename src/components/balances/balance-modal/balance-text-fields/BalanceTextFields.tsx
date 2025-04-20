import { JSX } from "react";
import TextField from "@mui/material/TextField";
import { useBalanceValue } from "@/hooks/useBalance";
import { ThemeProvider } from "@mui/material";
import { formatNumberToYen } from "@/utils/balanceUtils";
import {
  BALANCE_FIELD_SIZE,
  EXPENDITURE_LABEL,
  expenditureTextFiledTheme,
  INCOME_LABEL,
  incomeTextFiledTheme,
} from "@/const/constants";

const BalanceTextFields: () => JSX.Element = () => {
  const [income, expenditure, { setIntegerIncome, setIntegerExpenditure }] =
    useBalanceValue();

  return (
    <>
      <div className="text-[25px] h-[60px] w-full flex justify-center items-center">
        <div className="border-b-[1px] border-[#666666]">
          {income - expenditure >= 0 ? (
            <div className="text-[#009844]">
              {formatNumberToYen(income - expenditure)}
            </div>
          ) : (
            <div className="text-[#d32f2f]">
              {formatNumberToYen(income - expenditure)}
            </div>
          )}
        </div>
      </div>
      <div className="h-[90px] w-full grid grid-cols-2 content-center">
        <div className="m-auto">
          <ThemeProvider theme={expenditureTextFiledTheme}>
            <TextField
              type="number"
              value={String(expenditure)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIntegerExpenditure(Number(event.target.value))
              }
              label={EXPENDITURE_LABEL}
              variant="filled"
              color="error"
              sx={{ maxWidth: BALANCE_FIELD_SIZE }}
            />
          </ThemeProvider>
        </div>
        <div className="m-auto">
          <ThemeProvider theme={incomeTextFiledTheme}>
            <TextField
              type="number"
              value={String(income)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIntegerIncome(Number(event.target.value))
              }
              label={INCOME_LABEL}
              variant="filled"
              color="success"
              sx={{ maxWidth: BALANCE_FIELD_SIZE }}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default BalanceTextFields;
