import { Loader } from "@/components/Loader";
import { ServiceCard } from "@/components/ServiceCard";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SERVICES } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <Loader />

      {/* ── HERO ── */}
      <section className="relative h-screen w-full flex items-end overflow-hidden">
        {/* Background: architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#f2f0ec 1px, transparent 1px), linear-gradient(90deg, #f2f0ec 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Diagonal accent lines */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #c8874a 1px, transparent 1px), linear-gradient(-45deg, #c8874a 1px, transparent 1px)",
            backgroundSize: "160px 160px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_70%,rgba(200,135,74,.07)_0%,transparent_70%)]" />
        {/* Right-side architectural drawing */}
        <div className="absolute right-0 top-0 bottom-0 w-[52%] opacity-[.09] flex items-center justify-center pointer-events-none">
          <svg viewBox="0 0 600 700" fill="none" className="w-full h-full text-[#f2f0ec]" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="140" width="440" height="500" stroke="currentColor" strokeWidth="0.5"/>
            <rect x="200" y="40" width="200" height="100" stroke="currentColor" strokeWidth="0.5"/>
            <polygon points="200,40 300,0 400,40" stroke="#c8874a" strokeWidth="0.7" fill="none"/>
            <line x1="80" y1="240" x2="520" y2="240" stroke="currentColor" strokeWidth="0.3"/>
            <line x1="80" y1="340" x2="520" y2="340" stroke="currentColor" strokeWidth="0.3"/>
            <line x1="80" y1="440" x2="520" y2="440" stroke="currentColor" strokeWidth="0.3"/>
            <line x1="80" y1="540" x2="520" y2="540" stroke="currentColor" strokeWidth="0.3"/>
            <line x1="200" y1="140" x2="200" y2="640" stroke="currentColor" strokeWidth="0.25"/>
            <line x1="400" y1="140" x2="400" y2="640" stroke="currentColor" strokeWidth="0.25"/>
            <rect x="100" y="160" width="80" height="60" stroke="#c8874a" strokeWidth="0.4"/>
            <rect x="220" y="160" width="160" height="60" stroke="#c8874a" strokeWidth="0.4"/>
            <rect x="420" y="160" width="60" height="60" stroke="#c8874a" strokeWidth="0.4"/>
            <rect x="100" y="260" width="80" height="60" stroke="currentColor" strokeWidth="0.35"/>
            <rect x="220" y="260" width="160" height="60" stroke="currentColor" strokeWidth="0.35"/>
            <rect x="420" y="260" width="60" height="60" stroke="currentColor" strokeWidth="0.35"/>
            <rect x="100" y="360" width="80" height="60" stroke="currentColor" strokeWidth="0.35"/>
            <rect x="420" y="360" width="60" height="60" stroke="currentColor" strokeWidth="0.35"/>
            <rect x="200" y="550" width="160" height="90" stroke="currentColor" strokeWidth="0.5"/>
            <line x1="40" y1="640" x2="560" y2="640" stroke="currentColor" strokeWidth="0.7"/>
            <line x1="40" y1="140" x2="40" y2="640" stroke="#c8874a" strokeWidth="0.3" strokeDasharray="5 5"/>
          </svg>
        </div>
        {/* Fade right edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/60 to-transparent pointer-events-none" />

        {/* Hero text */}
        <div className="relative z-10 px-8 md:px-14 pb-20 max-w-[820px]">
          <div
            className="flex items-center gap-4 mb-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards" }}
          >
            <span className="w-10 h-px bg-accent" />
            <span className="font-mono text-[.58rem] tracking-[.42em] uppercase text-accent">
              Architecture & Design Studio · Lagos, Nigeria
            </span>
          </div>

          <h1
            className="font-cormorant text-[clamp(3.8rem,8vw,8.5rem)] font-light leading-[.97] tracking-[-0.02em] mb-7 opacity-0 animate-fade-up"
            style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
          >
            Where form<br />
            finds its<br />
            <em className="not-italic text-warm">true ground</em>
          </h1>

          <p
            className="text-[.92rem] leading-[1.95] text-stone/70 max-w-[480px] mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
          >
            Anietie Ekong Studio delivers 3D modeling, visualization, animation, construction drawings, presentation drawings, and interior design — all shaped by the land, culture, and light of West Africa.
          </p>

          <div
            className="flex items-center gap-8 opacity-0 animate-fade-up"
            style={{ animationDelay: "1000ms", animationFillMode: "forwards" }}
          >
            <a
              href="#services"
              className="inline-flex items-center gap-3 font-mono text-[.6rem] tracking-[.22em] uppercase bg-accent text-white px-7 py-3.5 hover:bg-warm transition-colors duration-300"
              style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
            >
              View Services
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="font-mono text-[.6rem] tracking-[.22em] uppercase text-dust hover:text-[#f2f0ec] border-b border-transparent hover:border-white/30 pb-0.5 transition-all duration-300"
            >
              Start a conversation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-12 flex flex-col items-center gap-3 opacity-0 animate-fade-in"
          style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-dust to-transparent animate-pulse" />
          <span className="font-mono text-[.48rem] tracking-[.45em] uppercase text-dust [writing-mode:vertical-rl]">
            Scroll
          </span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="border-t border-b border-white/[.07] overflow-hidden h-12 flex items-center bg-white/[.015]">
        <div className="flex whitespace-nowrap animate-ticker">
          {[1, 2].map((n) => (
            <span key={n} className="inline-flex items-center gap-8 px-8 font-mono text-[.58rem] tracking-[.25em] uppercase text-dust">
              {["3D Modeling", "3D Visualization", "Animation", "Construction Drawings", "Presentation Drawings", "Interior Design"].map((s, i) => (
                <span key={i} className="inline-flex items-center gap-8">
                  <span className="text-gold">{s}</span>
                  <span className="w-1 h-1 rounded-full bg-accent/80 flex-shrink-0" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section id="services" className="py-32 px-8 md:px-14 max-w-[1500px] mx-auto">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="font-mono text-[.58rem] tracking-[.42em] uppercase text-accent mb-5 flex items-center gap-3">
                <span className="w-6 h-px bg-accent" />
                Services
              </p>
              <h2 className="font-cormorant text-[clamp(2.8rem,5vw,5.5rem)] font-light leading-[1] tracking-[-0.02em]">
                Six disciplines.<br /><em className="text-warm">One vision.</em>
              </h2>
            </div>
            <p className="text-[.88rem] leading-[2] text-stone/60 max-w-[420px] md:pb-1">
              End-to-end architectural services — from the first digital model to the final construction detail — all executed in-house by a single creative team.
            </p>
          </div>
        </RevealOnScroll>

        {/* 2×3 service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[.05]">
          {SERVICES.map((service, i) => (
            <RevealOnScroll key={service.slug} delay={i * 80}>
              <ServiceCard service={service} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* ── QUOTE BREAK ── */}
      <div className="relative border-t border-b border-white/[.07] py-24 px-8 md:px-14 bg-charcoal overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <RevealOnScroll>
          <div className="max-w-[1000px] mx-auto flex gap-12 items-start">
            <span className="font-cormorant text-[5rem] leading-[.7] text-accent/40 flex-shrink-0 hidden md:block">&ldquo;</span>
            <div>
              <blockquote className="font-cormorant text-[clamp(1.6rem,2.8vw,2.6rem)] font-light italic leading-[1.55] tracking-[-0.01em]">
                Architecture in Nigeria is not a luxury — it is a declaration that this land, these people, and this moment in history{" "}
                <em className="not-italic text-warm">deserve beauty</em>.
              </blockquote>
              <p className="font-mono text-[.6rem] tracking-[.3em] uppercase text-dust mt-6">
                — Anietie Ekong · Architect
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* ── ABOUT STRIP ── */}
      <section id="about" className="py-32 px-8 md:px-14 max-w-[1500px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <RevealOnScroll>
            <p className="font-mono text-[.58rem] tracking-[.42em] uppercase text-accent mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              The Studio
            </p>
            <h2 className="font-cormorant text-[clamp(2.4rem,4vw,4.2rem)] font-light leading-[1.08] tracking-[-0.02em] mb-8">
              Rooted in the<br />
              <em className="text-warm">Niger Delta.</em><br />
              Building everywhere.
            </h2>
            <div className="space-y-4 text-[.88rem] leading-[2] text-stone/60 mb-10">
              <p>
                Anietie Ekong was born in Akwa Ibom State and trained at the University of Lagos School of Architecture, before completing postgraduate work in London. He returned with one ambition: to build an architecture that is unmistakably, proudly Nigerian.
              </p>
              <p>
                His studio delivers all six disciplines in-house — ensuring that the vision from the first sketch carries through without compromise to the last construction detail.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-mono text-[.6rem] tracking-[.22em] uppercase text-accent border border-accent/40 px-6 py-3 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
            >
              Work with us
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </RevealOnScroll>

          {/* Stats grid */}
          <RevealOnScroll delay={200}>
            <div className="grid grid-cols-2 gap-px bg-white/[.07]">
              {[
                { n: "50+", label: "Projects Completed" },
                { n: "8",   label: "Countries" },
                { n: "12",  label: "Awards Won" },
                { n: "15",  label: "Years of Practice" },
              ].map((s) => (
                <div key={s.label} className="bg-ink p-8">
                  <p className="font-cormorant text-[3.2rem] font-light text-accent leading-none mb-2">{s.n}</p>
                  <p className="font-mono text-[.55rem] tracking-[.25em] uppercase text-dust">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Tools strip */}
            <div className="mt-px bg-charcoal p-5 grid grid-cols-3 gap-2">
              {["Revit", "Rhino", "V-Ray", "AutoCAD", "Lumion", "3ds Max"].map((t) => (
                <span key={t} className="font-mono text-[.5rem] tracking-[.18em] uppercase text-dust/50 border border-white/[.06] px-3 py-2 text-center">
                  {t}
                </span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-32 px-8 md:px-14 border-t border-white/[.06]">
        <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-16">
          <RevealOnScroll>
            <p className="font-mono text-[.58rem] tracking-[.42em] uppercase text-accent mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-accent" />
              Start a Project
            </p>
            <h2 className="font-cormorant text-[clamp(2.4rem,4.5vw,5rem)] font-light leading-[1.05] tracking-[-0.02em] mb-12">
              Let&apos;s build<br />
              something<br />
              <em className="text-warm">remarkable</em>
            </h2>

            <div className="space-y-7 font-mono text-[.62rem]">
              {[
                { label: "E:", value: "aniekongg@gmail.com" },
                { label: "T:", value: "+234 (0)802 522 4893 · Lagos" },
                { label: "Studio:", value: "1c Alexander drive crown estate, Lagos" },
              ].map((item) => (
                <div key={item.label} className="flex gap-5">
                  <span className="tracking-[.35em] text-dust/50 uppercase w-14 flex-shrink-0">{item.label}</span>
                  <span className="tracking-[.1em] text-stone/70">{item.value}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={150}>
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[.54rem] tracking-[.28em] uppercase text-dust">Name</label>
                  <input type="text" placeholder="Your name" className="bg-transparent border-b border-white/[.12] text-[.88rem] text-[#f2f0ec] py-2.5 outline-none placeholder-dust/40 focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[.54rem] tracking-[.28em] uppercase text-dust">Email</label>
                  <input type="email" placeholder="email@example.com" className="bg-transparent border-b border-white/[.12] text-[.88rem] text-[#f2f0ec] py-2.5 outline-none placeholder-dust/40 focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[.54rem] tracking-[.28em] uppercase text-dust">Service needed</label>
                <select className="bg-transparent border-b border-white/[.12] text-[.88rem] text-stone/70 py-2.5 outline-none focus:border-accent transition-colors">
                  <option value="" className="bg-charcoal">Select a service…</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.slug} className="bg-charcoal">{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[.54rem] tracking-[.28em] uppercase text-dust">Project brief</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project — location, scale, timeline…"
                  className="bg-transparent border-b border-white/[.12] text-[.88rem] text-[#f2f0ec] py-2.5 outline-none placeholder-dust/40 focus:border-accent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-3 font-mono text-[.6rem] tracking-[.22em] uppercase bg-accent text-white px-8 py-3.5 hover:bg-warm transition-colors duration-300 mt-3"
                style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
              >
                Send Enquiry
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
              </button>
            </form>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[.07] px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-[.54rem] tracking-[.2em] uppercase text-dust/50">
          Anietie Ekong Studio © 2009–2026
        </p>
        <p className="font-cormorant text-[.95rem] font-light tracking-[.1em] text-stone/50">
          Architecture & Design Studio
          <span className="mx-3 text-dust/30">·</span>
          Lagos · Abuja · London
        </p>
        <div className="flex gap-6">
          {[
            { name: "Instagram", url: "https://www.instagram.com/anietecture?igsh=anZ3cTl0OG80MDE5" },
            { name: "Behance", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "Archinect", url: "#" }
          ].map((s) => (
            <a 
              key={s.name} 
              href={s.url} 
              target={s.url !== "#" ? "_blank" : undefined}
              rel={s.url !== "#" ? "noopener noreferrer" : undefined}
              className="font-mono text-[.52rem] tracking-[.2em] uppercase text-dust/40 hover:text-accent transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
