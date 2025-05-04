"use client";

import { JSX } from "react";
import { ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useBonusInput } from "@/hooks/useProbability";
import {
  BIGBONUS,
  BONUS,
  BONUS_COUNTER_FIELD_SIZE,
  REGULARBONUS,
  textFiledTheme,
} from "@/const/constants";

const BonusInput: () => JSX.Element = () => {
  const [
    bigbonusCounterNumber,
    regularbonusCounterNumber,
    { setAbsoluteBigbonusCounterNumber, setAbsoluteRegularbonusCounterNumber },
  ] = useBonusInput();

  return (
    <div className="m-1 mb-[20px]">
      <div>
        <div>{BONUS}</div>
        <div className="h-[70px] m-1 bg-[#555555] rounded-md grid grid-cols-2 place-items-center">
          <div className="flex justify-center items-center">
            <span>{BIGBONUS}</span>
            <span className="m-2">
              <ThemeProvider theme={textFiledTheme}>
                <TextField
                  type="number"
                  value={String(bigbonusCounterNumber)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAbsoluteBigbonusCounterNumber(Number(event.target.value))
                  }
                  size="small"
                  sx={{ maxWidth: BONUS_COUNTER_FIELD_SIZE }}
                />
              </ThemeProvider>
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span>{REGULARBONUS}</span>
            <span className="m-2">
              <ThemeProvider theme={textFiledTheme}>
                <TextField
                  type="number"
                  value={String(regularbonusCounterNumber)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAbsoluteRegularbonusCounterNumber(
                      Number(event.target.value)
                    )
                  }
                  size="small"
                  sx={{ maxWidth: BONUS_COUNTER_FIELD_SIZE }}
                />
              </ThemeProvider>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BonusInput;
