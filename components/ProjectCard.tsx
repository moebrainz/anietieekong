"use client";
import { Project } from "@/lib/services";
import { svgMap } from "@/lib/svgs";

interface Props {
  project: Project;
  index: number;
  onClick: () => void;
}

export function ProjectCard({ project, index, onClick }: Props) {
  const SvgComp = svgMap[project.svgKey];

  return (
    <article
      className={`group relative overflow-hidden border border-white/[.06] hover:border-accent/40 transition-colors duration-500 cursor-none ${
        index === 0 ? "md:col-span-2" : ""
      }`}
      style={{ minHeight: index === 0 ? 520 : 420 }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      aria-label={`View ${project.title} project details`}
    >
      {/* BG gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor}`} />

      {/* SVG architectural drawing */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[.12] group-hover:opacity-[.22] transition-opacity duration-700">
        {SvgComp && (
          <SvgComp className="w-2/3 h-2/3 text-[#f2f0ec] group-hover:text-accent transition-colors duration-700" />
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />

      {/* Category badge — top right */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <span className="font-mono text-[.48rem] tracking-[.2em] uppercase text-stone/70 bg-ink/70 backdrop-blur-sm border border-white/[.08] px-2 py-1">
          {project.category}
        </span>
      </div>

      {/* "View project" hint — appears on hover, top left */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-1.5 font-mono text-[.48rem] tracking-[.2em] uppercase text-accent bg-ink/70 backdrop-blur-sm border border-accent/30 px-2 py-1">
          <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="6" cy="6" r="4"/><path d="M6 4v4M4 6h4"/>
          </svg>
          View project
        </div>
      </div>

      {/* Content bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
        {/* Index number */}
        <p className="font-mono text-[.5rem] tracking-[.35em] text-accent mb-3">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h3 className="font-cormorant text-[clamp(1.4rem,2.4vw,2.1rem)] font-light leading-[1.15] tracking-[-0.01em] mb-2 group-hover:text-warm transition-colors duration-300">
          {project.title}
        </h3>

        <div className="flex items-center gap-2 flex-wrap font-mono text-[.52rem] tracking-[.15em] uppercase text-dust mb-4">
          <span>{project.location}</span>
          <span className="text-white/20">·</span>
          <span>{project.year}</span>
          <span className="text-white/20">·</span>
          <span>{project.area}</span>
        </div>

        {/* Description — fades in on hover */}
        <p className="text-[.8rem] leading-[1.9] text-stone/60 max-w-lg opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400 line-clamp-2">
          {project.description}
        </p>

        {/* Tags — slide up on hover */}
        <div className="mt-4 flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[.47rem] tracking-[.18em] uppercase text-dust/60 border border-white/[.08] px-2 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom row: image count pill */}
        <div className="mt-4 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <div className="flex items-center gap-1.5 font-mono text-[.48rem] tracking-[.18em] uppercase text-dust/50">
            <svg width="9" height="9" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="1" y="3" width="12" height="9" rx="1"/>
              <path d="M4 3V2a1 1 0 011-1h4a1 1 0 011 1v1"/>
              <circle cx="7" cy="7.5" r="2"/>
            </svg>
            {project.images.length} images
          </div>
          <span className="text-white/15">·</span>
          <span className="font-mono text-[.48rem] tracking-[.18em] uppercase text-dust/50">
            {project.client}
          </span>
        </div>
      </div>

      {/* Hover border glow at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </article>
  );
}
