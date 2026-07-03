import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "../globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DrAA Training & Consultancy",
  description: "Bilingual platform for training and consultancy",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<any>;
}>) {
  const { locale } = await params;

  return (
    <html
      lang={locale || "en"}
      className={`${lexend.variable} h-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
