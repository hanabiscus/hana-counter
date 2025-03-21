import HanaCounter from "@/components/pageComponents/HanaCounter";
import { getCookiesAllCounterNumber } from "@/server/cookie/coookies";

const Home = async () => {
  const allCookies: any = await getCookiesAllCounterNumber();

  return (
    <HanaCounter
      bellCounterNumber={Number(allCookies.bellCounterNumber)}
      watermelonCounterNumber={Number(allCookies.watermelonCounterNumber)}
      redFeatherCounterNumber={Number(allCookies.redFeatherCounterNumber)}
      greenFeatherCounterNumber={Number(allCookies.greenFeatherCounterNumber)}
      yellowFeatherCounterNumber={Number(allCookies.yellowFeatherCounterNumber)}
      blueFeatherCounterNumber={Number(allCookies.blueFeatherCounterNumber)}
      redSideCounterNumber={Number(allCookies.redSideCounterNumber)}
      greenSideCounterNumber={Number(allCookies.greenSideCounterNumber)}
      yellowSideCounterNumber={Number(allCookies.yellowSideCounterNumber)}
      blueSideCounterNumber={Number(allCookies.blueSideCounterNumber)}
    />
  );
};

export default Home;
