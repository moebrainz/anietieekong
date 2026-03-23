"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { SERVICES } from "@/lib/services";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-[500] h-14 flex items-center justify-between px-8 transition-all duration-500 ${
          scrolled ? "bg-ink/90 backdrop-blur-md border-b border-white/[0.06]" : ""
        }`}
      >
        <Link href="/" className="font-cormorant text-[1rem] font-light tracking-[.14em] text-[#f2f0ec]">
          Anietie <span className="text-accent">Ekong</span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="font-mono text-[.58rem] tracking-[.28em] uppercase text-dust hover:text-[#f2f0ec] transition-colors duration-200"
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <Link
            href="/#contact"
            className="hidden md:block font-mono text-[.58rem] tracking-[.22em] uppercase text-charcoal bg-[#f2f0ec] px-4 py-2 hover:bg-accent hover:text-white transition-colors duration-200"
            style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
          >
            Start a Project
          </Link>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex flex-col gap-[5px] p-1"
          >
            <span className={`block h-px w-5 bg-[#f2f0ec] transition-all duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-[#f2f0ec] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-[#f2f0ec] transition-all duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <div
        className={`fixed inset-0 z-[490] bg-charcoal transition-all duration-500 flex ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Left: numbered links */}
        <div className="w-full md:w-[380px] border-r border-white/[.07] p-12 pt-20 flex flex-col justify-between">
          <div>
            {/* Studio group */}
            <div className="mb-8">
              <p className="font-mono text-[.52rem] tracking-[.45em] uppercase text-dust mb-4 flex items-center gap-2">
                <span className="text-accent">(1)</span> Studio
              </p>
              {[
                { n: "1.1", label: "Home", href: "/" },
                { n: "1.2", label: "About", href: "/#about" },
              ].map((l) => (
                <Link
                  key={l.n}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2 font-mono text-[.6rem] tracking-[.22em] uppercase text-dust hover:text-[#f2f0ec] transition-colors"
                >
                  <span className="text-accent text-[.5rem]">{l.n}</span>
                  {l.label}
                </Link>
              ))}
            </div>
            {/* Services group */}
            <div className="mb-8">
              <p className="font-mono text-[.52rem] tracking-[.45em] uppercase text-dust mb-4 flex items-center gap-2">
                <span className="text-accent">(2)</span> Services
              </p>
              {SERVICES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 py-2 font-mono text-[.6rem] tracking-[.22em] uppercase text-dust hover:text-[#f2f0ec] transition-colors"
                >
                  <span className="text-accent text-[.5rem]">2.{i + 1}</span>
                  {s.label}
                </Link>
              ))}
            </div>
            {/* Contact */}
            <div>
              <p className="font-mono text-[.52rem] tracking-[.45em] uppercase text-dust mb-4 flex items-center gap-2">
                <span className="text-accent">(3)</span> Contact
              </p>
              <Link
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-2 font-mono text-[.6rem] tracking-[.22em] uppercase text-dust hover:text-[#f2f0ec] transition-colors"
              >
                <span className="text-accent text-[.5rem]">3.1</span>
                Start a Project
              </Link>
            </div>
          </div>

          {/* Contact info */}
          <div className="font-mono text-[.6rem] leading-loose text-dust">
            <p className="text-[#f2f0ec]/40 text-[.5rem] tracking-[.35em] uppercase mb-2">E:</p>
            <a href="mailto:studio@anietieekong.com" className="hover:text-[#f2f0ec] transition-colors block">studio@anietieekong.com</a>
            <p className="text-[#f2f0ec]/40 text-[.5rem] tracking-[.35em] uppercase mt-3 mb-2">T:</p>
            <span>+234 (0)801 234 5678</span>
          </div>
        </div>

        {/* Right: ghost manifesto */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <p
            className="font-cormorant text-[clamp(3rem,6vw,6rem)] font-light italic leading-[1.1] text-center select-none pointer-events-none"
            style={{ color: "rgba(242,240,236,.045)" }}
          >
            We Art<br />the <span style={{ color: "rgba(200,135,74,.08)" }}>World</span><br />of Africa
          </p>
        </div>

        {/* Bottom copyright */}
        <p className="absolute bottom-6 left-12 font-mono text-[.52rem] tracking-[.25em] uppercase text-dust/40">
          Anietie Ekong Studio © 2009–2024
        </p>
      </div>

      {/* Scroll progress bar */}
      <ScrollProgress />
    </>
  );
}

function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[501] h-px bg-accent transition-none"
      style={{ width: `${pct}%` }}
    />
  );
}
