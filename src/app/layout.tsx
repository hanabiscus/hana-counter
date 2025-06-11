import { JSX } from "react";
import type { Metadata } from "next";
import { fontNotoSansJp } from "@/lib/utils/font";
import ConfigureAmplifyClientSide from "@/components/configure-amplify-client-side/ConfigureAmplifyClientSide";
import SuperHeaderMenu from "@/components/headers/super-header-menu/SuperHeaderMenu";
import Header from "@/components/headers/header/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "はなカウンタ",
  description: "パチスロ用データ統合管理アプリ",
  keywords: [
    "はなかうんた",
    "ハナカウンタ",
    "hana-counter",
    "ハナカウンター",
    "はなはな",
    "ハナハナ",
    "スロット",
    "パチンコ",
    "華",
    "ハイビスカス",
  ],
};

const RootLayout: ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => JSX.Element = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={`${fontNotoSansJp.variable}`}>
        <ConfigureAmplifyClientSide />
        <div className="z-50 opacity-100 sticky top-0">
          <SuperHeaderMenu />
          <Header />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
