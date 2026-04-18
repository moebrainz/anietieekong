"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export function Loader() {
  const [pct, setPct]  = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 14 + 3;
      if (p > 100) p = 100;
      setPct(Math.floor(p));
      if (p >= 100) {
        clearInterval(iv);
        setTimeout(() => setDone(true), 380);
      }
    }, 70);
    return () => clearInterval(iv);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[8000] bg-ink flex flex-col items-center justify-center gap-10 transition-opacity duration-700 ${
        pct >= 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center gap-4">
        <Image src="/anietie-logo-bg.png" alt="Anietie Ekong Logo" width={48} height={48} className="object-contain" priority />
        <p className="font-cormorant text-[clamp(1.4rem,3vw,2.2rem)] font-light tracking-[.2em] text-[#f2f0ec]">
          Anietie <span className="text-accent">Ekong</span>
        </p>
      </div>
      <div className="w-48 h-px bg-white/10 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-accent transition-none"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="font-mono text-[.6rem] tracking-[.38em] text-dust">{pct}%</p>
      <p className="absolute bottom-8 font-mono text-[.52rem] tracking-[.5em] uppercase text-white/15">
        Anietecture
      </p>
    </div>
  );
}
