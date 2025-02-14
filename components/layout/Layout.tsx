import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const NotoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${NotoSans.variable} font-sans text-base`}
    >
      <div className="min-h-screen bg-white">{children}</div>
    </div>
  );
};
