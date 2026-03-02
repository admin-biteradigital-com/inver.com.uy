import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
// 1. COMENTA O BORRA ESTA IMPORTACIÓN:
// import { cookies } from "next/headers"; 
import { I18nProvider } from "@/lib/i18n";
import type { Lang } from "@/lib/i18n";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "INVER | Turismo en Uruguay",
  description: "Tours, transfers y experiencias únicas en Uruguay. 15 años conectando viajeros. Discover Uruguay with experts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 2. COMENTA O BORRA TODA ESTA LÓGICA DE COOKIES:
  /*
  const cookieStore = cookies();
  const langCookie = cookieStore.get("inver_lang");
  const initialLang = (langCookie?.value as Lang) || "es";
  */

  // 3. DEFINE EL IDIOMA FIJO PARA LA VERSIÓN ESTÁTICA:
  const initialLang: Lang = "es"; 

  return (
    <html lang={initialLang} className={`${dmSans.variable} ${playfair.variable}`}>
      <body>
        <I18nProvider initialLang={initialLang}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
