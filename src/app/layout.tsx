import type { Metadata } from "next";
import { Cormorant_Garamond, Italiana, Manrope } from "next/font/google";
import "./globals.scss";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-caps",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mädels-Treffen · 2026",
  description:
    "Ein intimes Beisammensein — sechs Frauen, unzählige Erinnerungen, ein unvergesslicher Abend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${italiana.variable} ${manrope.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
