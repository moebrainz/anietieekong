import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Cursor } from "@/components/Cursor";
import { Navbar } from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Anietie Ekong Studio — Architecture & Design",
  description:
    "Architecture and design studio based in Lagos, Nigeria. 3D Modeling, Visualization, Animation, Construction Drawings, Presentation Drawings, Interior Design.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${syne.variable} ${ibmMono.variable}`}>
      <body>
        <Cursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
