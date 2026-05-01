import type { Metadata } from "next";
import { Outfit, Sora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
    <html lang="en" className={`${outfit.variable} ${sora.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#06060a] text-[#e8e4df] font-sans">
        {children}
      </body>
    </html>
  );
}
