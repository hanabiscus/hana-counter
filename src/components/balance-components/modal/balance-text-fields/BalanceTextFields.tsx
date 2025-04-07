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
      <div className="text-[25px] h-[60px] w-full flex justify-center items-center">
        <div className="border-b-[1px] border-[#333333]">
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
      </div>
      <div className="h-[90px] w-full grid grid-cols-2 content-center">
        <div className="m-auto">
          <TextField
            type="number"
            value={String(expenditure).replace(/^0+/, "")}
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
            value={String(income).replace(/^0+/, "")}
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
