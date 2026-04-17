"use client";
import { useRef, useState, useEffect } from "react";
import { projects } from "@/lib/content";

function ProjectEntry({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative py-12 md:py-16 border-b transition-all duration-700 cursor-default"
      style={{
        borderColor: hovered ? "rgba(0,168,255,0.2)" : "rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transitionDelay: `${index * 100}ms`,
      }}
    >
      {/* Hover glow bg */}
      <div
        className="absolute inset-0 -z-10 transition-opacity duration-500 rounded-2xl"
        style={{
          background: "radial-gradient(ellipse at 20% 50%, rgba(0,168,255,0.04) 0%, transparent 70%)",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
        {/* Number */}
        <div
          className="font-black text-white/10 flex-shrink-0 leading-none select-none"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(48px, 6vw, 80px)",
            color: hovered ? "rgba(0,168,255,0.15)" : "rgba(255,255,255,0.07)",
            transition: "color 0.3s",
          }}
        >
          {num}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className="font-black text-white leading-tight mb-3 transition-colors duration-300"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: hovered ? "#ffffff" : "rgba(255,255,255,0.9)",
            }}
          >
            {project.name}
          </h3>

          <p className="text-white/50 text-base md:text-lg mb-5 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          {/* Detail */}
          <p className="text-white/35 text-sm mb-5 max-w-xl leading-relaxed">
            {project.detail}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-medium text-[#00A8FF] transition-all duration-200"
                style={{
                  background: "rgba(0,168,255,0.08)",
                  border: "1px solid rgba(0,168,255,0.25)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Highlight — slides up on hover */}
          <div
            className="overflow-hidden transition-all duration-400"
            style={{
              maxHeight: hovered ? "80px" : "0",
              opacity: hovered ? 1 : 0,
            }}
          >
            <div className="flex items-start gap-2 pt-1">
              <span className="text-[#00A8FF] mt-0.5">✦</span>
              <span className="text-[#00A8FF]/80 text-sm italic leading-relaxed">
                {project.highlight}
              </span>
            </div>
          </div>
        </div>

        {/* Year */}
        <div className="text-white/20 text-sm font-mono flex-shrink-0 mt-1">
          {project.year}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeadingVisible(true); },
      { threshold: 0.3 }
    );
    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 max-w-6xl mx-auto">
      <div
        ref={headingRef}
        className="mb-4 transition-all duration-700"
        style={{ opacity: headingVisible ? 1 : 0, transform: headingVisible ? "translateY(0)" : "translateY(30px)" }}
      >
        <p className="text-[#00A8FF] text-sm tracking-[0.2em] uppercase font-semibold mb-3">
          Projects
        </p>
        <h2
          className="font-black text-white"
          style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          Things I&apos;ve Shipped
        </h2>
      </div>

      <div>
        {projects.map((project, i) => (
          <ProjectEntry key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
