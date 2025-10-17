import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flow Forward Initiative",
  description: "A nonprofit",
  icons: {
    icon: "/images/favicon.ico", // This will set your favicon
    // shortcut: "/images/flowforward-logo.png", // optional
    // apple: "/images/flowforward-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
