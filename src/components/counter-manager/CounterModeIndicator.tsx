import { Box, ThemeProvider } from "@mui/material";
import { counterModeIndicatorProps } from "@/const/types";
import {
  decrementModeIndicatorBoxTheme,
  decrementModeIndicatorTheme,
  incrementModeIndicatorBoxTheme,
  incrementModeIndicatorTheme,
} from "@/const/constants";

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
      <Box sx={incrementModeIndicatorTheme}>
        <div className="flex justify-center">+ increment mode +</div>
      </Box>
    </ThemeProvider>
  );
};

const DecrementModeIndicator = () => {
  return (
    <ThemeProvider theme={decrementModeIndicatorBoxTheme}>
      <Box sx={decrementModeIndicatorTheme}>
        <div className="flex justify-center">- decrement mode -</div>
      </Box>
    </ThemeProvider>
  );
};

export default CounterModeIndicator;
