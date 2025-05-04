"use client";

import { JSX, useEffect } from "react";
import { getCookiesCounterNumber } from "@/server/cookie/cookies";
import { ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useBigbonusWatermelonInput } from "@/hooks/useProbability";
import {
  BIGBONUS_WATERMELON,
  BONUS_COUNTER_FIELD_SIZE,
  textFiledTheme,
  WATERMELON_COUNTER,
} from "@/const/constants";

const WaterMelonInput: () => JSX.Element = () => {
  const [
    bigbonusWatermelonCounterNumber,
    { setAbsoluteBigbonusWatermelonCounterNumber },
  ] = useBigbonusWatermelonInput();

  useEffect(() => {
    (async () => {
      setAbsoluteBigbonusWatermelonCounterNumber(
        await getCookiesCounterNumber(WATERMELON_COUNTER)
      );
    })();
  }, []);

  return (
    <div className="m-1 mb-[20px]">
      <div>
        <div>{BIGBONUS_WATERMELON}</div>
        <div className="h-[70px] m-1 bg-[#555555] rounded-md grid items-center">
          <div className="flex justify-center items-center">
            <span className="h-[27px] w-[27px] bg-[#f04e58] border-solid border-[5px] border-[#5b9922] rounded-full"></span>
            <span className="m-2">
              <ThemeProvider theme={textFiledTheme}>
                <TextField
                  type="number"
                  value={String(bigbonusWatermelonCounterNumber)}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setAbsoluteBigbonusWatermelonCounterNumber(
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

export default WaterMelonInput;
