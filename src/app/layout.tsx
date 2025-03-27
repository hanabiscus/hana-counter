import type { Metadata } from "next";
import { fontNotoSansJp } from "@/utils/font";
import SuperHeaderMenu from "@/components/super-header-menu/SuperHeaderMenu";
import Header from "@/components/header/Header";
import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";

import "./globals.css";

export const metadata: Metadata = {
  title: "はなカウンター | hana-counter",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={`${fontNotoSansJp.variable}`}>
        <SuperHeaderMenu />
        <Header />
        <ConfigureAmplifyClientSide />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
