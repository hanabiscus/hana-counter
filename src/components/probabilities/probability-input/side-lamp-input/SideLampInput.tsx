"use client";

import { JSX, useEffect, useState } from "react";
import { getCookiesCounterNumber } from "@/server/cookie/cookies";
import { CircularProgress, ThemeProvider } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useRegularbonusSideLampInput } from "@/hooks/useProbability";
import {
  BLUE_SIDE_COUNTER,
  BONUS_COUNTER_FIELD_SIZE,
  GREEN_SIDE_COUNTER,
  RED_SIDE_COUNTER,
  REGULARBONUS_SIDE_LAMP,
  textFiledTheme,
  YELLOW_SIDE_COUNTER,
} from "@/const/constants";

const SideLampInput: () => JSX.Element = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [
    redSideLampCounterNumber,
    greenSideLampCounterNumber,
    yellowSideLampCounterNumber,
    blueSideLampCounterNumber,
    {
      setAbsoluteRedSideLampCounterNumber,
      setAbsoluteGreenSideLampCounterNumber,
      setAbsoluteYellowSideLampCounterNumber,
      setAbsoluteBlueSideLampCounterNumber,
    },
  ] = useRegularbonusSideLampInput();

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      setAbsoluteRedSideLampCounterNumber(
        await getCookiesCounterNumber(RED_SIDE_COUNTER)
      );
      setAbsoluteGreenSideLampCounterNumber(
        await getCookiesCounterNumber(GREEN_SIDE_COUNTER)
      );

      setAbsoluteYellowSideLampCounterNumber(
        await getCookiesCounterNumber(YELLOW_SIDE_COUNTER)
      );
      setAbsoluteBlueSideLampCounterNumber(
        await getCookiesCounterNumber(BLUE_SIDE_COUNTER)
      );

      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="m-1 mb-[20px]">
      <div>
        <div>{REGULARBONUS_SIDE_LAMP}</div>
        {isLoading ? (
          <div className="h-[140px] flex justify-center items-center">
            <CircularProgress color="secondary" disableShrink={true} />
          </div>
        ) : (
          <div className="h-[140px] m-1 bg-[#555555] rounded-md grid grid-cols-2 place-items-center">
            <div className="flex justify-center items-center">
              <span className="h-[27px] w-[27px] bg-[#f04e58] rounded-full"></span>
              <span className="m-2">
                <ThemeProvider theme={textFiledTheme}>
                  <TextField
                    type="number"
                    value={String(redSideLampCounterNumber)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setAbsoluteRedSideLampCounterNumber(
                        Number(event.target.value)
                      )
                    }
                    size="small"
                    sx={{ maxWidth: BONUS_COUNTER_FIELD_SIZE }}
                  />
                </ThemeProvider>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="h-[27px] w-[27px] bg-[#5b9922] rounded-full"></span>
              <span className="m-2">
                <ThemeProvider theme={textFiledTheme}>
                  <TextField
                    type="number"
                    value={String(greenSideLampCounterNumber)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setAbsoluteGreenSideLampCounterNumber(
                        Number(event.target.value)
                      )
                    }
                    size="small"
                    sx={{ maxWidth: BONUS_COUNTER_FIELD_SIZE }}
                  />
                </ThemeProvider>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="h-[27px] w-[27px] bg-[#fdc11e] rounded-full"></span>
              <span className="m-2">
                <ThemeProvider theme={textFiledTheme}>
                  <TextField
                    type="number"
                    value={String(yellowSideLampCounterNumber)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setAbsoluteYellowSideLampCounterNumber(
                        Number(event.target.value)
                      )
                    }
                    size="small"
                    sx={{ maxWidth: BONUS_COUNTER_FIELD_SIZE }}
                  />
                </ThemeProvider>
              </span>
            </div>
            <div className="flex justify-center items-center">
              <span className="h-[27px] w-[27px] bg-[#659ad2] rounded-full"></span>
              <span className="m-2">
                <ThemeProvider theme={textFiledTheme}>
                  <TextField
                    type="number"
                    value={String(blueSideLampCounterNumber)}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setAbsoluteBlueSideLampCounterNumber(
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
        )}
      </div>
    </div>
  );
};

export default SideLampInput;
