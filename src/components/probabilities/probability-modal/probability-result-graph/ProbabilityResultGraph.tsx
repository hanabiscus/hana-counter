"use client";

import { JSX, useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useProbabilityOutput } from "@/hooks/useProbability";
import { formatNumberToPercent } from "@/lib/utils/numberUtils";
import { ThemeProvider } from "@mui/material";
import {
  darkTheme,
  NUM_OF_SETTEI,
  PERCENT,
  PROBABILITY_GRAPH_HIGHT,
  PROBABILITY_GRAPH_LABEL_WIDTH,
  SETTEI_NUMBERS,
} from "@/const/constants";

const ProbabilityResultGraph: () => JSX.Element = () => {
  const probabilityOutput: number[] = useProbabilityOutput()[0];

  const graphColors: string[] = useMemo(() => {
    const result: string[] = new Array(NUM_OF_SETTEI);

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
            data: SETTEI_NUMBERS,
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
            data: probabilityOutput.map((value) =>
              formatNumberToPercent(value)
            ),
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
