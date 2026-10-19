import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ysurtod",
  description: "Artist, Designer And Developer",
};

// Sub-komponen Navbar
function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-neutral-900 border-b border-neutral-800 text-white">
      <Link href="/" className="hover:text-blue-400 transition">
        Projects
      </Link>
      <Link href="/about" className="hover:text-blue-400 transition">
        About Me
      </Link>
      <Link href="/order" className="hover:text-blue-400 transition">
        Order Commission
      </Link>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        {/* Render Navbar di paling atas agar muncul di semua halaman */}
        <Navbar />
        
        {/* Halaman utama (Page content) */}
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}