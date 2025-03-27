"use client";

import Image from "next/image";
import { counterProps } from "@/const/types";
import useCounter from "@/hooks/useCounter";
import { TextField, Box, ThemeProvider } from "@mui/material";
import {
  COUNTER_ICON_SIZE,
  counterBoxTheme,
  counterIconTheme,
} from "@/const/constants";

const Counter = (props: counterProps) => {
  const [counterNumber, { increment, decrement, setCounterNumber }] =
    useCounter({
      counterKind: props.counterKind,
      counterNumber: props.counterNumber,
    });

  return (
    <div className="m-1 flex items-center justify-center">
      <TextField
        type="number"
        value={counterNumber}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCounterNumber(Number(event.target.value))
        }
        size="small"
        sx={{ maxWidth: props.textFieldWidth }}
      />
      <ThemeProvider theme={counterBoxTheme}>
        <Box
          onClick={props.decrementFlag ? decrement : increment}
          sx={counterIconTheme}
        >
          <div className="m-1">
            <Image
              src={props.imagePath}
              alt="counterIcon"
              width={COUNTER_ICON_SIZE}
              height={COUNTER_ICON_SIZE}
            />
          </div>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Counter;
