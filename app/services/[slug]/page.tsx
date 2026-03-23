import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES, getService } from "@/lib/services";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { svgMap } from "@/lib/svgs";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: `${service.title} — Anietie Ekong Studio`,
    description: service.description,
  };
}

const heroBgs: Record<string, string> = {
  "3d-modeling":           "from-[#1a100a] via-[#2d1800] to-[#0e0a04]",
  "3d-visualization":      "from-[#0a0e18] via-[#0e1626] to-[#060a12]",
  "animation":             "from-[#08100e] via-[#0d1a14] to-[#060e0c]",
  "construction-drawings": "from-[#100c08] via-[#1e1608] to-[#0c0a04]",
  "presentation-drawings": "from-[#120808] via-[#200e10] to-[#0e0608]",
  "interior-design":       "from-[#0a0c10] via-[#12161e] to-[#060810]",
};

const heroSvgKeys: Record<string, string> = {
  "3d-modeling":           "tower",
  "3d-visualization":      "arts",
  "animation":             "cultural",
  "construction-drawings": "parliament",
  "presentation-drawings": "waterfront",
  "interior-design":       "residence",
};

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug);
  if (!service) notFound();

  const HeroSvg = svgMap[heroSvgKeys[service.slug] ?? "tower"];
  const bgGradient = heroBgs[service.slug] ?? "from-ink to-charcoal";

  const currentIdx = SERVICES.findIndex((s) => s.slug === service.slug);
  const prevService = currentIdx > 0 ? SERVICES[currentIdx - 1] : null;
  const nextService = currentIdx < SERVICES.length - 1 ? SERVICES[currentIdx + 1] : null;

  return (
    <>
      {/* ── HERO ── */}
      <section className={`relative min-h-screen flex items-end overflow-hidden bg-gradient-to-br ${bgGradient}`}>
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[.035]"
          style={{
            backgroundImage:
              "linear-gradient(#f2f0ec 1px,transparent 1px),linear-gradient(90deg,#f2f0ec 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Large architectural SVG */}
        <div className="absolute right-[-4%] top-0 bottom-0 w-[55%] opacity-[.1] flex items-center justify-center pointer-events-none">
          {HeroSvg && <HeroSvg className="w-full h-full text-[#f2f0ec]" />}
        </div>
        {/* Gradient fades */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/96 via-ink/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />

        <div className="relative z-10 px-8 md:px-14 pb-20 pt-28">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mb-12">
            <Link href="/" className="font-mono text-[.56rem] tracking-[.28em] uppercase text-dust hover:text-[#f2f0ec] transition-colors">
              Home
            </Link>
            <span className="text-dust/30 font-mono text-[.56rem]">/</span>
            <span className="font-mono text-[.56rem] tracking-[.28em] uppercase text-accent">
              {service.title}
            </span>
          </nav>

          <p className="font-mono text-[.58rem] tracking-[.42em] uppercase text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            {service.index} / 06
          </p>

          <h1 className="font-cormorant text-[clamp(3.5rem,8vw,8rem)] font-light leading-[.97] tracking-[-0.02em] mb-6">
            {service.title}
          </h1>

          <p className="font-mono text-[.6rem] tracking-[.28em] uppercase text-stone/70 mb-8">
            {service.subtitle}
          </p>

          <p className="text-[.92rem] leading-[2] text-stone/60 max-w-[540px] mb-10">
            {service.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {service.tools.map((t) => (
              <span
                key={t}
                className="font-mono text-[.52rem] tracking-[.2em] uppercase text-dust/60 border border-white/[.1] px-3 py-1.5 bg-white/[.02]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-12 flex flex-col items-center gap-3">
          <div className="w-px h-14 bg-gradient-to-b from-dust to-transparent" />
          <span className="font-mono text-[.46rem] tracking-[.45em] uppercase text-dust [writing-mode:vertical-rl]">
            Projects
          </span>
        </div>
      </section>

      {/* ── PROJECTS COUNT BAR ── */}
      <div className="border-t border-b border-white/[.07] px-8 md:px-14 py-4 flex items-center justify-between bg-white/[.015]">
        <div className="flex items-center gap-5">
          <span className="font-cormorant text-[2rem] font-light text-accent">{service.projects.length}</span>
          <span className="font-mono text-[.56rem] tracking-[.3em] uppercase text-dust">
            {service.projects.length === 1 ? "Project" : "Projects"} — click any card to explore
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`font-mono text-[.52rem] tracking-[.22em] uppercase transition-colors ${
                s.slug === service.slug ? "text-accent" : "text-dust/50 hover:text-dust"
              }`}
            >
              {s.index}
            </Link>
          ))}
        </div>
      </div>

      {/* ── PROJECTS GRID (client, manages modal) ── */}
      <section className="px-8 md:px-14 py-24 max-w-[1500px] mx-auto">
        <RevealOnScroll>
          <h2 className="font-cormorant text-[clamp(2rem,4vw,4rem)] font-light tracking-[-0.02em] mb-4">
            Selected <em className="text-warm">Projects</em>
          </h2>
          <p className="font-mono text-[.55rem] tracking-[.3em] uppercase text-dust/50 mb-16 flex items-center gap-3">
            <span className="w-5 h-px bg-dust/30" />
            Click a project card to view images & details
          </p>
        </RevealOnScroll>

        <ProjectsGrid service={service} />
      </section>

      {/* ── PROCESS ── */}
      <section className="border-t border-white/[.07] px-8 md:px-14 py-24 bg-charcoal">
        <div className="max-w-[1500px] mx-auto">
          <RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-12 md:gap-20 mb-16">
              <div>
                <p className="font-mono text-[.56rem] tracking-[.42em] uppercase text-accent mb-5 flex items-center gap-3">
                  <span className="w-5 h-px bg-accent" />
                  Our Approach
                </p>
                <h2 className="font-cormorant text-[clamp(2rem,3.5vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em]">
                  How we<br /><em className="text-warm">work</em>
                </h2>
              </div>
              <div className="md:col-span-2 text-[.88rem] leading-[2] text-stone/60 flex items-center">
                <p>
                  Every project in our {service.title.toLowerCase()} practice follows a disciplined process — from deep understanding of brief and context through to final delivery. We believe rigour and creativity are not in tension; each makes the other stronger.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[.06]">
            {[
              { n: "01", title: "Brief & Context", desc: "Site visit, programme analysis, cultural and climatic context study before any drawing begins." },
              { n: "02", title: "Concept Development", desc: `Early ${service.title.toLowerCase()} exploration — iterating rapidly until the design idea is right, not just adequate.` },
              { n: "03", title: "Refinement", desc: "Detailed development, resolving every technical and aesthetic question with the same level of care." },
              { n: "04", title: "Delivery", desc: "Final deliverables produced to our exacting standards, on programme, with full client review." },
            ].map((step, i) => (
              <RevealOnScroll key={step.n} delay={i * 80}>
                <div className="bg-charcoal p-7 border-t-2 border-transparent hover:border-accent transition-colors duration-300 cursor-none group h-full">
                  <p className="font-mono text-[.55rem] tracking-[.3em] text-accent mb-5">{step.n}</p>
                  <h3 className="font-cormorant text-[1.2rem] font-light mb-3 group-hover:text-warm transition-colors">{step.title}</h3>
                  <p className="text-[.78rem] leading-[1.85] text-dust/70">{step.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE NAV ── */}
      <div className="border-t border-white/[.07] grid md:grid-cols-2">
        {prevService ? (
          <Link
            href={`/services/${prevService.slug}`}
            className="group flex items-center gap-6 px-10 py-10 border-r border-white/[.07] hover:bg-white/[.015] transition-colors"
          >
            <div className="w-8 h-px bg-dust group-hover:bg-accent group-hover:w-14 transition-all duration-400" />
            <div>
              <p className="font-mono text-[.52rem] tracking-[.3em] uppercase text-dust mb-1">Previous Service</p>
              <p className="font-cormorant text-[1.4rem] font-light group-hover:text-warm transition-colors">{prevService.title}</p>
            </div>
          </Link>
        ) : <div />}

        {nextService ? (
          <Link
            href={`/services/${nextService.slug}`}
            className="group flex items-center justify-end gap-6 px-10 py-10 hover:bg-white/[.015] transition-colors"
          >
            <div className="text-right">
              <p className="font-mono text-[.52rem] tracking-[.3em] uppercase text-dust mb-1">Next Service</p>
              <p className="font-cormorant text-[1.4rem] font-light group-hover:text-warm transition-colors">{nextService.title}</p>
            </div>
            <div className="w-8 h-px bg-dust group-hover:bg-accent group-hover:w-14 transition-all duration-400" />
          </Link>
        ) : <div />}
      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[.07] px-8 md:px-14 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <Link href="/" className="font-cormorant text-[.95rem] font-light tracking-[.12em] text-stone/50 hover:text-[#f2f0ec] transition-colors">
          Anietie <span className="text-accent">Ekong</span> Studio
        </Link>
        <p className="font-mono text-[.52rem] tracking-[.18em] uppercase text-dust/40">
          © 2009–2024 · All Services
        </p>
        <Link href="/#contact" className="font-mono text-[.54rem] tracking-[.22em] uppercase text-accent hover:text-warm transition-colors">
          Start a Project →
        </Link>
      </footer>
    </>
  );
}
