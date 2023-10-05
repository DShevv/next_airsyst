import Header from "@/components/Header";

import "./globals.css";
import "./bootstrap-reboot.min.css";
import type { Metadata } from "next";
import { Rubik, Raleway } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });
const raleway = Raleway({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title:
    "nextПроизводитель промышленного оборудования AIRSYST в Казахстане | ТОО “Энерготех”",
  description:
    "ТОО “Энерготех” является официальным представителем промышленного оборудования группы компаний AIRSYST в Казахстане.",
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
        ></link>
      </head>
      <body>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
