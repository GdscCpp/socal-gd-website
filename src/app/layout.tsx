import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FirebaseProvider from "@/firebase/loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CPP DevFest",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark-400 w-full min-h-screen`}>
        <div className="h-screen bg-dark-400 px-[70px] py-[18px]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
