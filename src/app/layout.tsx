import type { Metadata } from "next";
import "@/app/styles/global.scss";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Portfolio - Ewa Szymanska",
  description: "I’m a front-end developer and UI designer with over a decade of professional experience ranging from small, digital agencies to big software companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-7SB8P32Z7X" />
    </html>
  );
}
