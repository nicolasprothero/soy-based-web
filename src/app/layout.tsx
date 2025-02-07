"use client";

import { Geist, Geist_Mono } from "next/font/google";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <title>{"Soy Based Web"}</title>
        <meta name="description" content="SOY BASED WEB BY SOY BASED RISO" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <Sidebar />
        <Footer />
        {children}
      </body>
    </html>
  );
}