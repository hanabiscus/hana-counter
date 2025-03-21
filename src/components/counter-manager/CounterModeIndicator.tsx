import {
  counterModeIndicatorProps,
  incrementModeIndicatorBoxTheme,
  decrementModeIndicatorBoxTheme,
  incrementModeIndicatorTheme,
  decrementModeIndicatorTheme,
} from "@/const/types";
import { Box, ThemeProvider } from "@mui/material";

const CounterModeIndicator = (props: counterModeIndicatorProps) => {
  return (
    <>
      {props.decrementFlag
        ? DecrementModeIndicator()
        : IncrementModeIndicator()}
    </>
  );
};

const IncrementModeIndicator = () => {
  return (
    <ThemeProvider theme={incrementModeIndicatorBoxTheme}>
      <Box sx={incrementModeIndicatorTheme}>+</Box>
    </ThemeProvider>
  );
};

const DecrementModeIndicator = () => {
  return (
    <ThemeProvider theme={decrementModeIndicatorBoxTheme}>
      <Box sx={decrementModeIndicatorTheme}>-</Box>
    </ThemeProvider>
  );
};

export default CounterModeIndicator;
