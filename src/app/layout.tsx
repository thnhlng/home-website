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
  title: "Fürobebier-Girls · 2026",
  description:
    "Ein Beisammensein: sechs Frauen, unzählige Erinnerungen, ein unvergesslicher Abend.",
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
      suppressHydrationWarning
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(sessionStorage.getItem('envelope-intro-seen')!=='1'){document.documentElement.classList.add('intro-pending');}}catch(e){}})();`,
          }}
        />
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
