import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { fontNotoSansJp } from "@/utils/font";

import "./globals.css";

const ConfigureAmplifyClientSide = dynamic(
  () => import("@/components/amplify-outputs-import/ConfigureAmplifyClientSide")
);

const SuperHeaderMenu = dynamic(
  () => import("@/components/super-header-menu/SuperHeaderMenu")
);

const Header = dynamic(() => import("@/components/header/Header"));

export const metadata: Metadata = {
  title: "はなカウンタ | hana-counter",
};

const RootLayout = ({
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
