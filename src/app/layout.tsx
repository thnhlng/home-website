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
  metadataBase: new URL("https://quyen.chillwithtlq.ch"),
  title: "Fürobebier-Girls · 2026",
  description:
    "Ein intimes Beisammensein: sechs Frauen, unzählige Erinnerungen, ein unvergesslicher Abend.",
  openGraph: {
    title: "Fürobebier-Girls · 2026",
    description: "Ein Wiedersehen · 20. JUNI 2026",
    url: "https://quyen.chillwithtlq.ch",
    siteName: "Fürobebier-Girls",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 848,
        height: 506,
        alt: "Einladung zu den Fürobebier-Girls 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fürobebier-Girls · 2026",
    description: "Fürobebier-Girls · 2026",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        {children}
        <EnvelopeIntroGate
          monogram="Q"
          addressLine="An meine friends"
          letterPreview={
            <>
              Fürobebier-Girls
              <br />
              <em>20 · Juni · 2026</em>
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
