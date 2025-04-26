import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Noto_Sans_JP, Noto_Color_Emoji } from "next/font/google";

export const fontNotoSansJp: NextFontWithVariable = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-Noto-Sans-JP",
  display: "swap",
});

export const fontNotoColorEmoji: NextFontWithVariable = Noto_Color_Emoji({
  weight: ["400"],
  subsets: ["emoji"],
  variable: "--font-Noto-Color-Emoji",
  display: "swap",
});
