import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { EnvelopeIntroGate } from "@/components/sections/EnvelopeIntro";
import "./globals.scss";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  style: ["normal", "italic"],
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
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body>
        {children}
        <EnvelopeIntroGate
          monogram="Q"
          addressLine="An meine liebsten sechs"
          letterPreview={
            <>
              Mädels-Treffen
              <br />
              <em>17 · Oktober · 2026</em>
            </>
          }
          openLabel="Einladung öffnen"
          skipLabel="Überspringen"
          hint="Antippen zum Öffnen"
        />
      </body>
    </html>
  );
}
