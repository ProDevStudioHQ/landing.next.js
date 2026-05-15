import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Tracker } from "@/components/Tracker";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Digital Studio LF — Premium Websites, Dashboards, CRM & Login Systems",
  description:
    "Digital Studio LF builds premium websites, admin dashboards, CRM systems, and login pages that help businesses grow. Modern design, powerful integrations, and conversion-focused solutions.",
  keywords: [
    "website development",
    "admin dashboard",
    "CRM system",
    "login page",
    "digital services",
    "web design",
    "SaaS",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black text-white font-sans">
        <Tracker />
        {children}
      </body>
    </html>
  );
}
