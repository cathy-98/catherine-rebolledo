import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catherine Rebolledo | UX/UI & Producto Digital",
  description:
    "Portafolio profesional de Catherine Rebolledo, diseñadora UX/UI enfocada en producto digital, diseño web y comunicación visual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
