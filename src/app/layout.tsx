import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aniket Tiwari | Full-Stack Developer",
  description: "Full Stack Developer with 4+ years of experience in C#, .NET, Angular, React, Python & GenAI — building scalable micro-frontends, distributed APIs, and AI-powered tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-[#e0e0e8] font-sans">
        {children}
      </body>
    </html>
  );
}
