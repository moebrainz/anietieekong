"use client";
import { useEffect, useState, useCallback } from "react";
import { Project } from "@/lib/services";
import { svgMap } from "@/lib/svgs";

interface Props {
  project: Project | null;
  serviceTitle: string;
  onClose: () => void;
}

export function ProjectModal({ project, serviceTitle, onClose }: Props) {
  const [activeImg, setActiveImg] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [panel, setPanel] = useState<"overview" | "detail">("overview");

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setActiveImg(0);
      setImgLoaded(false);
      setPanel("overview");
    }
  }, [project?.id]);

  // Keyboard controls
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImg((i) => (i + 1) % project.images.length);
      if (e.key === "ArrowLeft") setActiveImg((i) => (i - 1 + project.images.length) % project.images.length);
    },
    [project, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  // Body scroll lock
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [project]);

  if (!project) return null;

  const SvgComp = svgMap[project.svgKey];
  const currentImage = project.images[activeImg];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[700] bg-ink/80 backdrop-blur-md"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel — slides up */}
      <div
        className="fixed inset-x-0 bottom-0 top-[3%] md:top-[4%] z-[800] flex flex-col overflow-hidden"
        style={{ borderRadius: "16px 16px 0 0" }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
      >
        {/* ── MODAL INNER ── */}
        <div className="relative flex flex-col h-full bg-[#111009] overflow-hidden">

          {/* Top close bar */}
          <div className="flex-shrink-0 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/[.07] bg-[#111009]/95 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[.52rem] tracking-[.35em] uppercase text-accent">{serviceTitle}</span>
              <span className="text-white/20 font-mono text-[.5rem]">/</span>
              <span className="font-mono text-[.52rem] tracking-[.2em] text-dust truncate max-w-[180px] md:max-w-none">
                {project.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="flex items-center gap-2 font-mono text-[.55rem] tracking-[.25em] uppercase text-dust hover:text-[#f2f0ec] transition-colors group"
            >
              <span className="hidden md:inline">Close</span>
              <div className="w-7 h-7 border border-white/[.15] group-hover:border-white/30 flex items-center justify-center transition-colors">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
            </button>
          </div>

          {/* Main content — split layout */}
          <div className="flex-1 flex flex-col md:grid md:grid-cols-[1fr_420px] lg:grid-cols-[1fr_480px] overflow-hidden min-h-0">

            {/* LEFT: Image gallery */}
            <div className="relative flex flex-col h-[45dvh] min-h-[250px] md:h-auto md:min-h-0 border-b md:border-b-0 md:border-r border-white/[.07] shrink-0">
              {/* Main image */}
              <div className="relative flex-1 overflow-hidden bg-charcoal min-h-0">
                {/* SVG architectural drawing — subtle overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[.06] pointer-events-none z-0">
                  {SvgComp && <SvgComp className="w-1/2 h-1/2 text-[#f2f0ec]" />}
                </div>

                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-60`} />

                {/* Media */}
                {currentImage.url.endsWith('.mp4') ? (
                  <video
                    key={currentImage.url}
                    src={currentImage.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoadedData={() => setImgLoaded(true)}
                    onError={() => setImgLoaded(true)}
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={currentImage.url}
                    src={currentImage.url}
                    alt={currentImage.caption}
                    className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-700 ${imgLoaded ? "opacity-100" : "opacity-0"}`}
                    onLoad={() => setImgLoaded(true)}
                    onError={() => setImgLoaded(true)}
                  />
                )}

                {/* Loading shimmer */}
                {!imgLoaded && (
                  <div className="absolute inset-0 z-20 bg-gradient-to-r from-white/[.03] via-white/[.06] to-white/[.03] animate-pulse" />
                )}

                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 z-20 px-6 py-4 bg-gradient-to-t from-ink/80 to-transparent">
                  <p className="font-mono text-[.54rem] tracking-[.2em] uppercase text-stone/80">
                    {currentImage.caption}
                  </p>
                </div>

                {/* Arrow nav — desktop */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => { setImgLoaded(false); setActiveImg((i) => (i - 1 + project.images.length) % project.images.length); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 border border-white/[.15] bg-ink/50 backdrop-blur-sm flex items-center justify-center hover:border-accent hover:bg-accent/20 transition-all group"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-accent transition-colors">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => { setImgLoaded(false); setActiveImg((i) => (i + 1) % project.images.length); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 border border-white/[.15] bg-ink/50 backdrop-blur-sm flex items-center justify-center hover:border-accent hover:bg-accent/20 transition-all group"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:stroke-accent transition-colors">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip */}
              <div className="flex-shrink-0 flex gap-1.5 p-3 bg-[#0e0c0a] border-t border-white/[.06] overflow-x-auto scrollbar-none">
                {project.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => { setImgLoaded(false); setActiveImg(i); }}
                    className={`flex-shrink-0 w-16 h-12 relative overflow-hidden border transition-all duration-200 ${i === activeImg
                        ? "border-accent opacity-100"
                        : "border-white/[.08] opacity-50 hover:opacity-80 hover:border-white/20"
                      }`}
                  >
                    {img.url.endsWith('.mp4') ? (
                      <video
                        src={img.url}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {/* Active indicator */}
                    {i === activeImg && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent" />
                    )}
                  </button>
                ))}
                {/* Image counter */}
                <div className="flex-shrink-0 flex items-center px-3 font-mono text-[.5rem] tracking-[.2em] text-dust/50 whitespace-nowrap">
                  {String(activeImg + 1).padStart(2, "0")} / {String(project.images.length).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* RIGHT: Project info */}
            <div className="flex-1 flex flex-col overflow-hidden min-h-0">
              {/* Panel tabs */}
              <div className="flex-shrink-0 flex border-b border-white/[.07]">
                {(["overview", "detail"] as const).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPanel(p)}
                    className={`flex-1 py-3 font-mono text-[.54rem] tracking-[.28em] uppercase transition-colors ${panel === p
                        ? "text-accent border-b border-accent"
                        : "text-dust/50 hover:text-dust"
                      }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Scrollable info area */}
              <div className="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8 space-y-8">

                {panel === "overview" ? (
                  <>
                    {/* Header */}
                    <div>
                      <p className="font-mono text-[.52rem] tracking-[.35em] uppercase text-accent mb-3">
                        {project.id ?? "—"}
                      </p>
                      <h2 className="font-cormorant text-[clamp(1.6rem,3vw,2.6rem)] font-light leading-[1.1] tracking-[-0.02em] mb-3">
                        {project.title}
                      </h2>
                      <p className="font-mono text-[.56rem] tracking-[.2em] uppercase text-stone/60">
                        {project.category}
                      </p>
                    </div>

                    {/* Meta grid */}
                    <div className="grid grid-cols-2 gap-px bg-white/[.06]">
                      {[
                        { label: "Location", value: project.location },
                        { label: "Year", value: project.year },
                        { label: "Area", value: project.area },
                        { label: "Client", value: project.client },
                        { label: "Status", value: project.status },
                        { label: "Category", value: project.category },
                      ].map((m) => (
                        <div key={m.label} className="bg-[#111009] p-4">
                          <p className="font-mono text-[.49rem] tracking-[.28em] uppercase text-dust/50 mb-1">{m.label}</p>
                          <p className="font-mono text-[.6rem] tracking-[.1em] text-stone/80">{m.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <div>
                      <p className="font-mono text-[.5rem] tracking-[.35em] uppercase text-accent mb-3 flex items-center gap-2">
                        <span className="w-5 h-px bg-accent" />
                        About
                      </p>
                      <p className="text-[.85rem] leading-[2] text-stone/70">{project.description}</p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[.5rem] tracking-[.2em] uppercase text-dust/60 border border-white/[.1] px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Challenge */}
                    <div>
                      <p className="font-mono text-[.5rem] tracking-[.35em] uppercase text-accent mb-3 flex items-center gap-2">
                        <span className="w-5 h-px bg-accent" />
                        The Challenge
                      </p>
                      <p className="text-[.85rem] leading-[2] text-stone/70">{project.challenge}</p>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-white/[.07]" />

                    {/* Solution */}
                    <div>
                      <p className="font-mono text-[.5rem] tracking-[.35em] uppercase text-accent mb-3 flex items-center gap-2">
                        <span className="w-5 h-px bg-accent" />
                        The Solution
                      </p>
                      <p className="text-[.85rem] leading-[2] text-stone/70">{project.solution}</p>
                    </div>

                    {/* Tools used */}
                    <div>
                      <p className="font-mono text-[.5rem] tracking-[.35em] uppercase text-dust/50 mb-3">
                        Disciplines
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[.5rem] tracking-[.2em] uppercase text-dust/60 border border-white/[.1] px-3 py-1.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom CTA */}
              <div className="flex-shrink-0 border-t border-white/[.07] p-5 md:p-6 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${project.status === "Completed" || project.status === "Delivered" || project.status === "Published" || project.status === "Approved" || project.status === "Competition Winner" || project.status === "Award-winning" || project.status === "Exhibited" ? "bg-emerald-500" : "bg-amber-500"}`} />
                  <span className="font-mono text-[.52rem] tracking-[.22em] uppercase text-dust">{project.status}</span>
                </div>
                <a
                  href="/#contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 font-mono text-[.54rem] tracking-[.2em] uppercase bg-accent text-white px-5 py-2.5 hover:bg-warm transition-colors"
                  style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                >
                  Discuss this project
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Keyboard hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-3 pointer-events-none">
            <div className="flex items-center gap-1.5 font-mono text-[.45rem] tracking-[.2em] uppercase text-white/20">
              <kbd className="border border-white/10 px-1.5 py-0.5 font-mono">←</kbd>
              <kbd className="border border-white/10 px-1.5 py-0.5 font-mono">→</kbd>
              <span>navigate images</span>
              <span className="mx-2 text-white/10">|</span>
              <kbd className="border border-white/10 px-1.5 py-0.5 font-mono">esc</kbd>
              <span>close</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
