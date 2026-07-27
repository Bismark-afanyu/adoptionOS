import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AdoptionOS | The Operating System for Enterprise Adoption",
  description:
    "AdoptionOS helps transformation teams understand where they are, know what to do next, and build a defensible path from transformation strategy to sustained adoption.",
  openGraph: {
    title: "AdoptionOS | The Operating System for Enterprise Adoption",
    description:
      "The Enterprise Adoption Operating System for Transformation Teams",
    images: ["/app_logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AdoptionOS | The Operating System for Enterprise Adoption",
    description:
      "The Enterprise Adoption Operating System for Transformation Teams",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
