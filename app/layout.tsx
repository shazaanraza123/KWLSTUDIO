import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KWL Studio — Drop 001",
  description: "001 / 100",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
