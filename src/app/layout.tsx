import type { Metadata } from "next";
import { Josefin_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/Providers/ThemeProvider";

const JosefinSans = Josefin_Sans({
  weight: ['100', '200','300','400','500','600','700'],
  subsets: ['latin'],
  variable: '--font-barlow',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App with localstorage, Next14.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${JosefinSans.variable} font-sans`}>
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
