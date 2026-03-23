"use client";
import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: 0, y: 0 });
  const ring    = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const onEnter = () => {
      ringRef.current?.classList.add("scale-[2]", "border-accent");
      dotRef.current?.classList.add("bg-accent");
    };
    const onLeave = () => {
      ringRef.current?.classList.remove("scale-[2]", "border-accent");
      dotRef.current?.classList.remove("bg-accent");
    };

    window.addEventListener("mousemove", onMove);

    const addHoverListeners = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    addHoverListeners();

    let raf: number;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x - 3}px, ${pos.current.y - 3}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x - 18}px, ${ring.current.y - 18}px)`;
      }
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-1.5 h-1.5 rounded-full bg-[#f2f0ec] pointer-events-none mix-blend-difference transition-colors duration-200 will-change-transform"
        style={{ transform: "translate(-100px,-100px)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full border border-[rgba(242,240,236,0.35)] pointer-events-none transition-all duration-300 will-change-transform"
        style={{ transform: "translate(-100px,-100px)" }}
      />
    </>
  );
}
