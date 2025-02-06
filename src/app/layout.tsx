"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import Cookie from "../components/Cookie/Cookie";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// function shiftTitleBackwards(title: string): string {
//   if (title.length === 0) return title;
//   return title[title.length - 1] + title.slice(0, -1);
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [title, setTitle] = useState("SOY BASED WEB");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTitle((prevTitle) => shiftTitleBackwards(prevTitle));
  //   }, 360);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content="SOY BASED WEB BY SOY BASED RISO" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Sidebar />
        <Footer />
        {/* <Cookie /> */}
        {children}
      </body>
    </html>
  );
}