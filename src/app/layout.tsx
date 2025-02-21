"use client";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import "./globals.css";

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
      <body>
        <Header />
        <Sidebar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}