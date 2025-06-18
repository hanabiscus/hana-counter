import { JSX } from "react";
import type { Metadata } from "next";
import { fontNotoSansJp } from "@/lib/utils/font";
import ConfigureAmplifyClientSide from "@/components/configure-amplify-client-side/ConfigureAmplifyClientSide";
import SuperHeaderMenu from "@/components/headers/super-header-menu/SuperHeaderMenu";
import Header from "@/components/headers/header/Header";
import {
  OGP_IMAGE_HEIGHT,
  OGP_IMAGE_PATH,
  OGP_IMAGE_WIDTH,
  WEB_SITE_DESCRIPTION,
  WEB_SITE_ICON_PATH,
  WEB_SITE_TITLE,
  WEB_SITE_URL,
} from "@/const/constants";

import "./globals.css";

export const metadata: Metadata = {
  alternates: {
    canonical: WEB_SITE_URL,
  },
  metadataBase: new URL(WEB_SITE_URL),
  title: WEB_SITE_TITLE,
  description: WEB_SITE_DESCRIPTION,
  icons: {
    icon: WEB_SITE_ICON_PATH,
  },
  openGraph: {
    type: "website",
    title: WEB_SITE_TITLE,
    description: WEB_SITE_DESCRIPTION,
    url: WEB_SITE_URL,
    siteName: WEB_SITE_TITLE,
    images: {
      url: OGP_IMAGE_PATH,
      type: "image/png",
      width: OGP_IMAGE_WIDTH,
      height: OGP_IMAGE_HEIGHT,
    },
  },
  twitter: {
    title: WEB_SITE_TITLE,
    description: WEB_SITE_DESCRIPTION,
    images: {
      url: OGP_IMAGE_PATH,
      type: "image/png",
      width: OGP_IMAGE_WIDTH,
      height: OGP_IMAGE_HEIGHT,
    },
    card: "summary",
  },
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
