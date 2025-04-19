"use client";

import { JSX } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material";
import { getMonthlyBalanceData } from "@/server/balance/balanceProcessors";
import {
  useBalanceMonth,
  useBalanceMonthData,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import { balanceDTOType, balanceMonthSelectorProps } from "@/const/types";
import {
  ALL_BALANCE_MONTH,
  BALANCE_MONTH_SELECTOR_LABEL,
  BALANCE_MONTH_SELECTOR_MARGIN,
  BALANCE_MONTH_SELECTOR_MIN_WIDTH,
  BALANCE_SUM_LABEL,
  darkTheme,
} from "@/const/constants";

const BalanceMonthSelector: (
  props: balanceMonthSelectorProps
) => JSX.Element = (props: balanceMonthSelectorProps) => {
  const [balanceMonthData, { setFetchedBalanceMonthData }] =
    useBalanceMonthData();

  const [balanceMonth, { setBalanceMonth }] = useBalanceMonth();

  const setFetchedMonthlyBalanceData: (balanceData: balanceDTOType) => void =
    useMonthlyBalanceData()[1].setFetchedMonthlyBalanceData;

  const handleChangeBalanceMonth: (
    event: SelectChangeEvent
  ) => Promise<void> = async (event: SelectChangeEvent) => {
    setFetchedMonthlyBalanceData(
      await getMonthlyBalanceData(String(event.target.value))
    );
    setBalanceMonth(String(event.target.value));
  };

  setFetchedBalanceMonthData(props.balanceMonthDataDTO);

  const balanceMonthList: JSX.Element[] = balanceMonthData.map((data) => {
    return (
      <MenuItem key={data.balanceMonth} value={data.balanceMonth}>
        {data.balanceMonth}
      </MenuItem>
    );
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <FormControl
        variant="standard"
        sx={{
          m: BALANCE_MONTH_SELECTOR_MARGIN,
          minWidth: BALANCE_MONTH_SELECTOR_MIN_WIDTH,
        }}
      >
        <InputLabel>{BALANCE_MONTH_SELECTOR_LABEL}</InputLabel>
        <Select
          value={balanceMonth}
          onChange={handleChangeBalanceMonth}
          label={BALANCE_MONTH_SELECTOR_LABEL}
          defaultValue={ALL_BALANCE_MONTH}
        >
          <MenuItem value={ALL_BALANCE_MONTH}>{BALANCE_SUM_LABEL}</MenuItem>
          {balanceMonthList}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default BalanceMonthSelector;
