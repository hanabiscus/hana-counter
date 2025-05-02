"use client";

import { JSX, useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useProbabilityOutput } from "@/hooks/useProbability";
import { formatNumberToPercent } from "@/lib/utils/numberUtils";
import { ThemeProvider } from "@mui/material";
import {
  darkTheme,
  PERCENT,
  PROBABILITY_GRAPH_HIGHT,
  PROBABILITY_GRAPH_LABEL_WIDTH,
  SETTEI_FIVE,
  SETTEI_FOUR,
  SETTEI_ONE,
  SETTEI_SIX,
  SETTEI_THREE,
  SETTEI_TWO,
} from "@/const/constants";

const ProbabilityResultGraph: () => JSX.Element = () => {
  const probabilityOutput: number[] = useProbabilityOutput()[0];

  const graphColors: string[] = useMemo(() => {
    const result: string[] = new Array(6);

    for (let index = 0; index < probabilityOutput.length; index++) {
      if (probabilityOutput[index] === Math.max(...probabilityOutput)) {
        result[index] = "#f04e58";
      } else {
        result[index] = "#666666";
      }
    }

    return result;
  }, [probabilityOutput]);

  return (
    <ThemeProvider theme={darkTheme}>
      <BarChart
        xAxis={[
          {
            colorMap: {
              type: "ordinal",
              colors: graphColors,
            },
            data: [
              SETTEI_ONE,
              SETTEI_TWO,
              SETTEI_THREE,
              SETTEI_FOUR,
              SETTEI_FIVE,
              SETTEI_SIX,
            ],
            tickPlacement: "middle",
            tickLabelPlacement: "middle",
          },
        ]}
        yAxis={[
          {
            label: PERCENT,
            width: PROBABILITY_GRAPH_LABEL_WIDTH,
          },
        ]}
        series={[
          {
            data: [
              formatNumberToPercent(probabilityOutput[0]),
              formatNumberToPercent(probabilityOutput[1]),
              formatNumberToPercent(probabilityOutput[2]),
              formatNumberToPercent(probabilityOutput[3]),
              formatNumberToPercent(probabilityOutput[4]),
              formatNumberToPercent(probabilityOutput[5]),
            ],
          },
        ]}
        barLabel={(item) => {
          if ((item.value ?? 0) >= 5) {
            return String(item.value);
          } else {
            return "";
          }
        }}
        height={PROBABILITY_GRAPH_HIGHT}
      />
    </ThemeProvider>
  );
};

export default ProbabilityResultGraph;
