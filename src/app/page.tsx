import { getCookiesAllCounterNumber } from "@/server/cookie/cookies";
import HanaCounter from "@/components/page-components/HanaCounter";

const Home = async () => {
  const allCookies = await getCookiesAllCounterNumber();

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
