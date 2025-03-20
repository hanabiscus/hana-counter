"use client";

import { counterProps } from "@/const/types";
import UseCounter from "@/hooks/UseCounter";
import { TextField, Box, ThemeProvider } from "@mui/material";
import { counterBoxTheme, counterIconTheme } from "@/const/types";

import styles from "./counter.module.css";

const Counter = (props: counterProps) => {
  const [counterNumber, { increment, decrement, setCounterNumber }] =
    UseCounter({
      counterKind: props.counterKind,
      counterNumber: props.counterNumber,
    });

  return (
    <div className={styles.counter}>
      <TextField
        type="number"
        value={counterNumber}
        onChange={(event: { target: { value: any } }) =>
          setCounterNumber(Number(event.target.value))
        }
        size="small"
        sx={{ maxWidth: props.textFieldWidth }}
      />
      <ThemeProvider theme={counterBoxTheme}>
        <Box
          onClick={props.incrementFlag ? increment : decrement}
          sx={counterIconTheme}
        >
          <img src={props.imagePath} className={styles.imageIcon} />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Counter;
