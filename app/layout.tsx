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
  title: "Sajan Amatya",
  description: "Software Developer",
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
        <div className='bg-linear-to-t from-[#800000]/30 vai-[#6d28d9]/30  pointer-events-none h-[200px]  w-screen  -inset-12 rounded-2xl  to-transparent  blur-sm   '></div>

      </body>
    </html>
  );
}
