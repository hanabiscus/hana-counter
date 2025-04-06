import TextField from "@mui/material/TextField";
import { useBalanceValue } from "@/hooks/useBalance";
import {
  BALANCE_FIELD_SIZE,
  EXPENDITURE_LABEL,
  INCOME_LABEL,
} from "@/const/constants";

const BalanceTextFields = () => {
  const [income, expenditure, { setIntegerIncome, setIntegerExpenditure }] =
    useBalanceValue();

  return (
    <>
      <div className="text-[30px] h-[40px] w-full flex justify-center">
        {income - expenditure >= 0 ? (
          <div className="text-[#009844]">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(income - expenditure)}
          </div>
        ) : (
          <div className="text-[#d32f2f]">
            {new Intl.NumberFormat("ja-JP", {
              style: "currency",
              currency: "JPY",
            }).format(income - expenditure)}
          </div>
        )}
      </div>
      <div className="h-[100px] w-full grid grid-cols-2 content-center">
        <div className="m-auto">
          <TextField
            type="number"
            value={expenditure}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setIntegerExpenditure(Number(event.target.value))
            }
            label={EXPENDITURE_LABEL}
            variant="filled"
            color="error"
            sx={{ maxWidth: BALANCE_FIELD_SIZE }}
          />
        </div>
        <div className="m-auto">
          <TextField
            type="number"
            value={income}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setIntegerIncome(Number(event.target.value))
            }
            label={INCOME_LABEL}
            variant="filled"
            color="success"
            sx={{ maxWidth: BALANCE_FIELD_SIZE }}
          />
        </div>
      </div>
    </>
  );
};

export default BalanceTextFields;
