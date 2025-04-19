import { JSX } from "react";
import { getCookiesAllCounterNumber } from "@/server/cookie/cookies";
import HanaCounter from "@/components/page-components/HanaCounter";

const Home = async (): Promise<JSX.Element> => {
  const allCookies: {
    bellCounterNumber: number;
    watermelonCounterNumber: number;
    redFeatherCounterNumber: number;
    greenFeatherCounterNumber: number;
    yellowFeatherCounterNumber: number;
    blueFeatherCounterNumber: number;
    redSideCounterNumber: number;
    greenSideCounterNumber: number;
    yellowSideCounterNumber: number;
    blueSideCounterNumber: number;
  } = await getCookiesAllCounterNumber();

  return (
    <HanaCounter
      allCounterNumbers={{
        usuallyCounterNumber: {
          bellCounterNumber: allCookies.bellCounterNumber,
        },
        bigbonusCounterNumbers: {
          watermelonCounterNumber: allCookies.watermelonCounterNumber,
          redFeatherCounterNumber: allCookies.redFeatherCounterNumber,
          greenFeatherCounterNumber: allCookies.greenFeatherCounterNumber,
          yellowFeatherCounterNumber: allCookies.yellowFeatherCounterNumber,
          blueFeatherCounterNumber: allCookies.blueFeatherCounterNumber,
        },
        regularbonusCounterNumbers: {
          redSideCounterNumber: allCookies.redSideCounterNumber,
          greenSideCounterNumber: allCookies.greenSideCounterNumber,
          yellowSideCounterNumber: allCookies.yellowSideCounterNumber,
          blueSideCounterNumber: allCookies.blueSideCounterNumber,
        },
      }}
    />
  );
};

export default Home;
