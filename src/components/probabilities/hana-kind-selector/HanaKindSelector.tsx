import { JSX } from "react";
import HanaKindButton from "./hana-kind-button/HanaKindButton";
import {
  DRAGON_HANAHANA,
  DRAGON_SVG_PATH,
  KING_HANAHANA,
  KING_SVG_PATH,
  STAR_HANAHANA,
  STAR_SVG_PATH,
} from "@/const/constants";

const HanaKindSelector: () => JSX.Element = () => {
  return (
    <div className="m-3 grid grid-cols-3 place-items-center">
      <HanaKindButton hanaKind={DRAGON_HANAHANA} svgPath={DRAGON_SVG_PATH} />
      <HanaKindButton hanaKind={KING_HANAHANA} svgPath={KING_SVG_PATH} />
      <HanaKindButton hanaKind={STAR_HANAHANA} svgPath={STAR_SVG_PATH} />
    </div>
  );
};

export default HanaKindSelector;
