import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catherine Rebolledo | Diseñadora UX/UI",
  description:
    "Portfolio de Catherine Rebolledo, diseñadora UX/UI y comunicadora digital enfocada en productos digitales, diseño web, identidad visual y experiencias claras.",
  openGraph: {
    title: "Catherine Rebolledo | Diseñadora UX/UI",
    description:
      "Portfolio de Catherine Rebolledo, diseñadora UX/UI y comunicadora digital enfocada en productos digitales, diseño web, identidad visual y experiencias claras.",
    type: "website",
    locale: "es_CL",
  },
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
