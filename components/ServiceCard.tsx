"use client";
import Link from "next/link";
import { Service } from "@/lib/services";
import { svgMap } from "@/lib/svgs";

interface Props {
  service: Service;
  index: number;
}

// Unique gradient per service
const gradients = [
  "from-[#1a100a] via-[#2d1800] to-[#0e0a04]",
  "from-[#0a0e18] via-[#0e1626] to-[#060a12]",
  "from-[#08100e] via-[#0d1a14] to-[#060e0c]",
  "from-[#100c08] via-[#1e1608] to-[#0c0a04]",
  "from-[#120808] via-[#200e10] to-[#0e0608]",
  "from-[#0a0c10] via-[#12161e] to-[#060810]",
];

const svgKeys = ["tower", "arts", "cultural", "parliament", "waterfront", "residence"];

export function ServiceCard({ service, index }: Props) {
  const SvgComp = svgMap[svgKeys[index % svgKeys.length]];

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden border border-white/[.06] hover:border-accent/40 transition-colors duration-500"
      style={{ minHeight: 420 }}
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]}`} />

      {/* Architectural SVG drawing */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-18 transition-opacity duration-700">
        {SvgComp && (
          <SvgComp className="w-3/4 h-3/4 text-[#f2f0ec] group-hover:text-accent transition-colors duration-700" />
        )}
      </div>

      {/* Hover reveal scanline */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-accent/30 animate-scan-line" />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 pt-6">
        <span className="font-mono text-[.55rem] tracking-[.3em] text-accent">{service.index}</span>
        <span className="font-mono text-[.52rem] tracking-[.22em] uppercase text-dust/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Projects →
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom content */}
      <div className="relative z-10 px-6 pb-7">
        {/* Accent line that extends on hover */}
        <div className="w-8 h-px bg-accent mb-4 group-hover:w-16 transition-all duration-500" />

        <h3 className="font-cormorant text-[clamp(1.6rem,2.6vw,2.4rem)] font-light leading-[1.1] tracking-[-0.01em] mb-3 group-hover:text-warm transition-colors duration-300">
          {service.title}
        </h3>

        <p className="font-mono text-[.56rem] tracking-[.22em] uppercase text-dust mb-4">
          {service.subtitle}
        </p>

        <p className="text-[.82rem] leading-[1.9] text-stone/70 max-w-xs line-clamp-3">
          {service.description}
        </p>

        {/* Tools */}
        <div className="mt-4 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          {service.tools.slice(0, 3).map((t) => (
            <span
              key={t}
              className="font-mono text-[.48rem] tracking-[.18em] uppercase text-dust/60 border border-white/[.08] px-2 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Project count */}
        <div className="mt-5 flex items-center gap-2">
          <span className="font-cormorant text-[1.6rem] font-light text-accent">{service.projects.length}</span>
          <span className="font-mono text-[.52rem] tracking-[.2em] uppercase text-dust">
            {service.projects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>
      </div>
    </Link>
  );
}
