import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./_components/templates";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sound Wave",
  description: "Sound Wave Generator",
  openGraph: {
    title: "Sound Wave",
    description: "Generate your own sound waves",
    siteName: "Sound Wave Generator",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
