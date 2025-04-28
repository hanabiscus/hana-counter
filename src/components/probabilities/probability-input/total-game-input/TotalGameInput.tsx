"use client";

import { JSX } from "react";
import { ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useProbabilityInput } from "@/hooks/useProbability";
import {
  GAME,
  textFiledTheme,
  TOTAL_GAME,
  USUALLY_COUNTER_FIELD_SIZE,
} from "@/const/constants";

const TotalGameInput: () => JSX.Element = () => {
  const totalGameCounterNumber: number = useProbabilityInput()[0];

  const setAbsoluteTotalGameCounterNumber: (counterNumber: number) => void =
    useProbabilityInput()[3].setAbsoluteTotalGameCounterNumber;

  return (
    <div className="m-1 mb-[20px]">
      <div>
        <div>{TOTAL_GAME}</div>
        <div className="h-[70px] m-1 bg-[#555555] rounded-md grid items-center">
          <div className="flex justify-center items-center">
            <span className="m-2">
              <ThemeProvider theme={textFiledTheme}>
                <TextField
                  type="number"
                  value={String(totalGameCounterNumber)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAbsoluteTotalGameCounterNumber(
                      Number(event.target.value)
                    )
                  }
                  size="small"
                  sx={{ maxWidth: USUALLY_COUNTER_FIELD_SIZE }}
                />
              </ThemeProvider>
            </span>
            <span>{GAME}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalGameInput;
