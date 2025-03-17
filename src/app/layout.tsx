import ConfigureAmplifyClientSide from "@/components/ConfigureAmplifyClientSide";
import type { Metadata } from "next";
import { fontNotoSansJp } from "@/utils/font";
import Header from "@/components/header/Header";

import "./globals.css";

export const metadata: Metadata = {
  title: "hana-counter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${fontNotoSansJp.variable}`}>
        <ConfigureAmplifyClientSide />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
