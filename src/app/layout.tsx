import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-zinc-900 h-screen w-screen">
        {children}
      </body>
    </html>
  );
}
