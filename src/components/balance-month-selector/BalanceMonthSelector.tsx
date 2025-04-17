"use client";

import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { ThemeProvider } from "@mui/material";
import {
  useBalanceMonth,
  useBalanceMonthData,
  useMonthlyBalanceData,
} from "@/hooks/useBalance";
import {
  getBalanceMonthList,
  getMonthlyBalanceData,
} from "@/server/balance/balanceProcessors";
import { getCurrentBalanceMonth } from "@/utils/dateUtils";
import { useIsBalanceOpenState } from "@/hooks/useBalanceModal";
import { balanceMonthSelectorProps } from "@/const/types";
import {
  BALANCE_MONTH_SELECTOR_MARGIN,
  BALANCE_MONTH_SELECTOR_MIN_WIDTH,
  darkTheme,
} from "@/const/constants";

const BalanceMonthSelector = (props: balanceMonthSelectorProps) => {
  const [balanceMonthData, { setFetchedBalanceMonthData }] =
    useBalanceMonthData();
  const [balanceMonth, { setBalanceMonth }] = useBalanceMonth();
  const setFetchedMonthlyBalanceData =
    useMonthlyBalanceData()[1].setFetchedMonthlyBalanceData;

  const [selectedBalanceMonth, setSelectedBalanceMonth] = useState(
    getCurrentBalanceMonth()
  );

  const isBalanceModalOpen = useIsBalanceOpenState();

  useEffect(() => {
    (async () => {
      setFetchedMonthlyBalanceData(await getMonthlyBalanceData(balanceMonth));
      setFetchedBalanceMonthData(await getBalanceMonthList());
    })();
  }, [balanceMonth, isBalanceModalOpen]);

  setFetchedBalanceMonthData(props.balanceMonthDataDTO);

  const handleChangeBalanceMonth = (event: SelectChangeEvent) => {
    setSelectedBalanceMonth(event.target.value);
    setBalanceMonth(event.target.value);
  };

  const balanceMonthList = balanceMonthData.map((data) => {
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
        <InputLabel>{"実践月"}</InputLabel>
        <Select
          value={selectedBalanceMonth}
          onChange={handleChangeBalanceMonth}
          label="実践月"
        >
          {balanceMonthList}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default BalanceMonthSelector;
