import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [ "200", "400", "600", "800", "900"]
})

export const metadata: Metadata = {
  title: "Mazza Fashion",
  description: "Representação Marcas Calvin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={
          `${poppins.className} 
          antialiased bg-zinc-900 text-white h-screen w-screen
        `}>
          <Navbar />
        {children}
      </body>
    </html>
  );
}
