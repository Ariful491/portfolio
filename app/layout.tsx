import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Personal portfolio of Ariful Hoque",
  description: "Welcome to the personal portfolio of Ariful Hoque, a passionate web developer and designer. Explore my projects, skills, and experiences in the world of web development.",
};
import { IconoirProvider } from "iconoir-react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
          className={`  h-lvh  ${geistSans.variable} ${geistMono.variable} antialiased`}

      >
      <IconoirProvider>
        {children}
      </IconoirProvider>

      </body>
    </html>
  );
}
