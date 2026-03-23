import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 px-8">
      <p className="font-mono text-[.6rem] tracking-[.4em] uppercase text-accent">404</p>
      <h1 className="font-cormorant text-[clamp(3rem,6vw,6rem)] font-light tracking-[-0.02em] text-center">
        Page not found
      </h1>
      <Link
        href="/"
        className="font-mono text-[.6rem] tracking-[.22em] uppercase text-dust border-b border-dust/40 hover:text-[#f2f0ec] hover:border-[#f2f0ec] transition-colors pb-0.5"
      >
        Return home →
      </Link>
    </div>
  );
}
