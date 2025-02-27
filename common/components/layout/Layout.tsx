import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/common/components/layout/footer/Footer";
import { Header } from "@/common/components/layout/header/Header";

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
      className={`${geistSans.variable} ${geistMono.variable} ${NotoSans.variable} font-sans text-base text-foreground`}
    >
      <div className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};
