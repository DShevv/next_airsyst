import Header from "@/components/Header";

import "./globals.css";
import "./bootstrap-reboot.min.css";
import type { Metadata } from "next";
import { Rubik, Raleway } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });
const raleway = Raleway({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title:
    "nextПроизводитель промышленного оборудования AIRSYST в Казахстане | ТОО “Энерготех”",
  description:
    "ТОО “Энерготех” является официальным представителем промышленного оборудования группы компаний AIRSYST в Казахстане.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
