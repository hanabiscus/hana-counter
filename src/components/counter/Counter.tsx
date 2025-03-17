"use client";

import { counterProps } from "@/const/types";
import UseCounter from "@/hooks/UseCounter";
import { TextField, Box } from "@mui/material";

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
      <Box
        onClick={props.incrementFlag ? increment : decrement}
        sx={{
          borderRadius: "5px",
          border: "1px solid #333333",
          m: 0.3,
        }}
      >
        <img src={props.imagePath} className={styles.imageIcon} />
      </Box>
    </div>
  );
};

export default Counter;
