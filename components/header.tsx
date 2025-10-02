"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Company", href: "/company" },
  { name: "Docs", href: "https://www.walkeros.io/docs/" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <Link className="text-lg font-semibold text-white" href="/">
          elbwalker
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              className="transition-colors hover:text-white"
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link
            href="mailto:hello@elbwalker.com"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
          >
            Contact
          </Link>
        </div>
        <button
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
        >
          <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-6 text-sm font-medium text-slate-200">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                className="transition-colors hover:text-white"
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="mailto:hello@elbwalker.com"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
