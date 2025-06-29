import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
const hind_siliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
});

import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import "../globals.css";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={hind_siliguri.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
