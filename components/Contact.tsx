"use client";
import { useRef, useState, useEffect } from "react";
import { personal } from "@/lib/content";

function ContactLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between w-full max-w-md px-7 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,168,255,0.2)]"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,168,255,0.35)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <span className="font-semibold text-white group-hover:text-[#00A8FF] transition-colors duration-200">
        {label}
      </span>
      <svg
        className="w-5 h-5 text-white/30 group-hover:text-[#00A8FF] transition-all duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-36 px-6 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(0,168,255,0.06) 0%, transparent 65%)",
        }}
      />

      {/* Floating particles (CSS only) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: "#00A8FF",
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 20}%`,
            animation: `drift ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.2}s`,
          }}
        />
      ))}

      <div
        className="text-center mb-16 transition-all duration-700 max-w-4xl mx-auto"
        style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
      >
        <p className="text-[#00A8FF] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
          Contact
        </p>
        <h2
          className="font-black text-white leading-none mb-6"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(40px, 7vw, 88px)",
            letterSpacing: "-0.02em",
          }}
        >
          LET&apos;S BUILD
          <br />
          <span className="text-[#00A8FF]">SOMETHING.</span>
        </h2>
        <p className="text-white/40 text-base md:text-lg max-w-lg mx-auto">
          I&apos;m always open to interesting problems, ambitious projects, and people who ship.
        </p>
      </div>

      <div
        className="flex flex-col items-center gap-4 w-full transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transitionDelay: "150ms",
        }}
      >
        <ContactLink href={`mailto:${personal.email}`} label={personal.email} />
        <ContactLink href={personal.linkedinUrl} label={personal.linkedin} external />
        <ContactLink href={personal.githubUrl} label={personal.github} external />
      </div>

      {/* Footer */}
      <div
        className="absolute bottom-8 text-white/20 text-xs tracking-widest transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transitionDelay: "300ms" }}
      >
        {personal.location} · Built with Next.js
      </div>
    </section>
  );
}
