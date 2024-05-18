import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amaan Bhati Web Dev CV Portfolio",
  description: "I'm Amaan Bhati, a highly skilled Web Developer with experience in Front-End/Back-End Development. I'm also proficient in various programming languages and technologies used in software engineering. This website showcases my comprehensive CV and a curated selection of my best projects demonstrating my abilities in both web development and broader software engineering domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
