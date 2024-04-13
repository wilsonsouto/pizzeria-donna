import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pizzeria Donna",
  description:
    "A landing page designed to resemble a pizzeria, but in reality, it serves as a domestic violence hotline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./img/favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
