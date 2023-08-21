import { Suspense } from "react";

import type { Metadata } from "next";

import "@/utils/ga";

import NextTopLoader from "nextjs-toploader";

import { suit } from "./fonts";
import WindowSizeHandler from "./WindowSizeHandler";

import styles from "./layout.module.scss";
import "@/styles/global.scss";

export const metadata: Metadata = {
  title: {
    default: "${USER} Server",
    template: "%s | 루프루팡",
  },
  description: "#800a0a",
  viewport: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
  icons: {
    icon: [
      { sizes: "32x32", url: "/favicon-32x32.png" },
      { sizes: "16x16", url: "/favicon-16x16.png" },
    ],
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={suit.className}>
        <NextTopLoader showSpinner={false} height={4} color="#800a0a" crawl />
        <div className={styles.wrapper} id="layout-content">
          {children}
        </div>
        <Suspense fallback={null}>
          <WindowSizeHandler />
        </Suspense>
      </body>
    </html>
  );
}
