import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vincent Esomchi | Software Engineer",
  description: "Minimalist portfolio of Vincent Esomchi, specializing in scalable backend systems and high-performance applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ background: '#000' }}>
      <body>
        <div className="main-layout">
          <Navbar />
          <main className="content-area">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
