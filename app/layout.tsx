import type { Metadata } from "next";
import { Geist, Geist_Mono, Pangolin } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const pangolin = Pangolin({
  subsets: ['latin'],
  weight: ['400'], // Pangolin is a single-weight font, so specify '400'
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Renuka Shrestha",
  description: "A Bsc CSIT student",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` bg-[#0b0416] text-white min-h-screen ${pangolin.className} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
