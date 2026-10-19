"use client"; // Wajib ditambahkan agar bisa mendeteksi menu aktif & toggle buka-tutup
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Daftar menu untuk mempermudah render & deteksi aktif
  const navLinks = [
    { name: "Projects", path: "/" },
    { name: "About Me", path: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-base font-bold tracking-wider text-white transition hover:text-pink-400"
        >
          SURYAKUL<span className="text-pink-500">.</span>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              // Jika URL saat ini sama dengan path menu, teks jadi pink, jika tidak netral
              className={`text-sm font-medium transition ${
                pathname === link.path 
                  ? "text-pink-400" 
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/order" 
            className="rounded-full bg-pink-600 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-pink-600/20 transition hover:bg-pink-500 active:scale-95"
          >
            Order Commission
          </Link>
        </nav>

        {/* --- MOBILE MENU BUTTON (HAMBURGER) --- */}
        <button 
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-900/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsOpen(false)} // Tutup menu saat diklik
              className={`text-sm font-medium transition ${
                pathname === link.path ? "text-pink-400" : "text-neutral-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setIsOpen(false)}
            className="w-full text-center rounded-lg bg-pink-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-pink-500"
          >
            Order Commission
          </Link>
        </div>
      )}
    </header>
  );
}