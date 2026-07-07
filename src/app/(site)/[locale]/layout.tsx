import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "../globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DrAA Training & Consultancy",
  description: "Training and consultancy provider",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
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
