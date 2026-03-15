/**
 * ClawPool Website - Home Page
 * Design: Cyberpunk Hardware Showcase - Deep Space Edition
 * Colors: Deep Ocean #0D1B2A | Claw Red #E8341A | Signal Blue #4FC3F7
 * Fonts: Syne (display) | Space Mono (specs) | Inter (body)
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

// ── CDN Asset URLs ──────────────────────────────────────────────────────────
const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430257498/jfDsKVzTVmzoN4bJ42z8Cq";
const ASSETS = {
  logoDark: `${CDN}/logo_horizontal_dark_cd3091a8.webp`,
  logoVertical: `${CDN}/logo_vertical_dark_d502191b.webp`,
  heroSide: `${CDN}/render_v2_01_hero_noled(1)_1efe91ac.webp`,
  heroFront: `${CDN}/render_v2_04_front_flat_adb8c20c.webp`,
  heroTop: `${CDN}/render_v2_05_top_view_b28e6f38.webp`,
  sceneBoot: `${CDN}/scene_D_boot_d2f5257d.webp`,
  sceneCoding: `${CDN}/clawpool_coding_final_corrected_1_53e5dac8.webp`,
  sceneResearch: `${CDN}/clawpool_research_helper_mini_size_1_96b61861.webp`,
  verticalShowcase: `${CDN}/clawpool_vertical_showcase_no_glow_1_df4850e2.webp`,
  socialPost: `${CDN}/social_post_727901aa.png`,
};

// ── Reusable Reveal Animation ───────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Navigation ──────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "#features" },
    { label: "Specs", href: "#specs" },
    { label: "Use Cases", href: "#usecases" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,27,42,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center">
          <img src={ASSETS.logoDark} alt="ClawPool" className="h-8" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#pricing"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all"
          style={{
            background: "#E8341A",
            color: "#fff",
            fontFamily: "Syne, sans-serif",
          }}
        >
          Back on Kickstarter
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(13,27,42,0.98)" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-white py-2 border-b border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            className="mt-2 text-center px-5 py-3 rounded-full text-sm font-semibold"
            style={{ background: "#E8341A", color: "#fff" }}
          >
            Back on Kickstarter
          </a>
        </div>
      )}
    </nav>
  );
}

// ── Hero Section ────────────────────────────────────────────────────────────
function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 80]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0D1B2A" }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,195,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(232,52,26,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 50% 90%, rgba(79,195,247,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
                style={{
                  background: "rgba(79,195,247,0.1)",
                  border: "1px solid rgba(79,195,247,0.25)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "#4FC3F7" }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "#4FC3F7", fontFamily: "Space Mono, monospace" }}
                >
                  Coming to Kickstarter
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 leading-none tracking-tight"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(42px, 6vw, 72px)",
                color: "#fff",
              }}
            >
              Your AI Agent.
              <br />
              <span style={{ color: "#E8341A" }}>Secured.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base leading-relaxed mb-4"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 600,
                color: "#4FC3F7",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontSize: "11px",
              }}
            >
              AN OPENCLAW AI-DOCK
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(255,255,255,0.62)", fontFamily: "Inter, sans-serif" }}
            >
              ClawPool is the AI-Dock built for Mac Mini. Secure AI storage, full I/O expansion, and OpenClaw voice control — all in one elegant enclosure that sits perfectly beneath your Mac Mini.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:scale-105"
                style={{
                  background: "#E8341A",
                  color: "#fff",
                  fontFamily: "Syne, sans-serif",
                  boxShadow: "0 0 30px rgba(232,52,26,0.35)",
                }}
              >
                Back on Kickstarter
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm transition-all hover:bg-white/10"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                Explore Features
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex gap-8 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            >
              {[
                { value: "4TB", label: "Max Storage" },
                { value: "9+", label: "I/O Ports" },
                { value: "140W", label: "GaN Power" },
                { value: "3m", label: "Voice Range" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-black leading-none mb-1"
                    style={{
                      fontFamily: "Syne, sans-serif",
                      fontSize: "24px",
                      color: "#fff",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      color: "rgba(255,255,255,0.38)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Product Image */}
          <motion.div
            style={{ y, opacity }}
            className="relative flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Glow behind product */}
              <div
                className="absolute inset-0 rounded-3xl blur-3xl"
                style={{
                  background: "radial-gradient(ellipse, rgba(79,195,247,0.2) 0%, transparent 70%)",
                  transform: "scale(1.2)",
                }}
              />
              <img
                src={ASSETS.heroSide}
                alt="ClawPool AI-Dock"
                className="relative w-full max-w-md mx-auto"
                style={{ filter: "drop-shadow(0 30px 80px rgba(79,195,247,0.2))" }}
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute top-8 right-0 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(13,27,42,0.85)",
                border: "1px solid rgba(79,195,247,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="text-xs font-bold mb-1"
                style={{ fontFamily: "Space Mono, monospace", color: "#4FC3F7" }}
              >
                HEY CLAW
              </div>
              <div className="text-xs text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
                Voice activated
              </div>
            </motion.div>

            {/* Floating spec badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="absolute bottom-12 left-0 px-4 py-3 rounded-xl"
              style={{
                background: "rgba(13,27,42,0.85)",
                border: "1px solid rgba(232,52,26,0.25)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="text-xs font-bold mb-1"
                style={{ fontFamily: "Space Mono, monospace", color: "#E8341A" }}
              >
                PCIe 4.0 NVMe
              </div>
              <div className="text-xs text-white/60" style={{ fontFamily: "Inter, sans-serif" }}>
                7,000 MB/s read
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: "Space Mono, monospace", color: "rgba(255,255,255,0.3)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

// ── Three Pillars Section ───────────────────────────────────────────────────
function PillarsSection() {
  const pillars = [
    {
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#4FC3F7" strokeWidth="1.5">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      tag: "01 / AI CONTROL",
      title: "OpenClaw Voice AI",
      desc: "Say \"Hey Claw\" to wake your Mac Mini, launch apps, run scripts, and automate workflows — all without touching a keyboard. Local NLP keeps your data private.",
      color: "#4FC3F7",
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#E8341A" strokeWidth="1.5">
          <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      tag: "02 / CONNECTIVITY",
      title: "Full I/O Hub",
      desc: "Thunderbolt 4, HDMI 2.1, 2.5GbE, SD card reader, and more — 9+ ports in a single enclosure. One cable powers your Mac Mini with 140W GaN.",
      color: "#E8341A",
    },
    {
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="#4FC3F7" strokeWidth="1.5">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      tag: "03 / SECURITY",
      title: "Secure AI Storage",
      desc: "A dedicated NVMe SSD (up to 4TB) with AES-256 hardware encryption. AI operations are sandboxed — your system files are never accessible.",
      color: "#4FC3F7",
    },
  ];

  return (
    <section className="py-24" style={{ background: "#F8FAFC" }}>
      <div className="container">
        <Reveal>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "Space Mono, monospace", color: "#E8341A" }}
          >
            Why ClawPool
          </p>
          <h2
            className="mb-4 leading-tight tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#0D1B2A",
            }}
          >
            Three Capabilities.
            <br />
            <span style={{ color: "#E8341A" }}>One Enclosure.</span>
          </h2>
          <p
            className="max-w-xl mb-16 text-base leading-relaxed"
            style={{ color: "#475569", fontFamily: "Inter, sans-serif" }}
          >
            ClawPool integrates everything your Mac Mini needs to become a true AI workstation — without the cable chaos.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.12}>
              <div
                className="group relative rounded-2xl p-8 h-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "#fff",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: "#0D1B2A" }}
                >
                  {p.icon}
                </div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ fontFamily: "Space Mono, monospace", color: p.color }}
                >
                  {p.tag}
                </p>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ fontFamily: "Syne, sans-serif", color: "#0D1B2A" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#64748B", fontFamily: "Inter, sans-serif" }}
                >
                  {p.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(to right, ${p.color}, transparent)` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features Section ────────────────────────────────────────────────────────
function FeaturesSection() {
  const features = [
    {
      num: "01",
      title: "OpenClaw AI Voice Control",
      subtitle: "Your AI. Your Commands.",
      desc: "Wake your Mac Mini with a voice command, then use natural language to launch apps, manage files, and automate complex workflows. All NLP inference runs locally — your data never leaves your desk.",
      specs: ["Wake latency < 300ms", "6-mic ring array", "3m pickup range", "Local NLP inference"],
      image: ASSETS.heroFront,
      accent: "#E8341A",
    },
    {
      num: "02",
      title: "Full-Featured I/O Hub",
      subtitle: "Every Port You Need.",
      desc: "Thunderbolt 4, HDMI 2.1, 2.5GbE Ethernet, UHS-II SD card reader, and more — all in one enclosure. The built-in 140W GaN power supply delivers unified power to your Mac Mini through a single cable.",
      specs: ["2x Thunderbolt 4 40Gbps", "2x HDMI 2.1 4K@120Hz", "2.5GbE Ethernet", "140W GaN power"],
      image: ASSETS.sceneBoot,
      accent: "#4FC3F7",
    },
    {
      num: "03",
      title: "Secure AI Storage",
      subtitle: "Isolated. Encrypted. Fast.",
      desc: "A dedicated M.2 NVMe SSD (PCIe 4.0) with sequential read speeds up to 7,000 MB/s. AI operations are strictly sandboxed to this dedicated storage — your Mac Mini system files are physically inaccessible.",
      specs: ["PCIe 4.0 NVMe", "7,000 MB/s read", "AES-256 encryption", "Up to 4TB"],
      image: ASSETS.heroTop,
      accent: "#E8341A",
    },
    {
      num: "04",
      title: "Magnetic Detachable AI Module",
      subtitle: "Snap. Go. Control.",
      desc: "The AI emotion module magnetically attaches to the dock with a holding force of 12N+. Detach it and carry it anywhere in your home to voice-control your Mac via WiFi. Dock it back to charge automatically.",
      specs: ["Magnetic hold >= 12N", "WiFi LAN control", "6-8h battery life", "2.4\" round OLED"],
      image: ASSETS.verticalShowcase,
      accent: "#4FC3F7",
    },
  ];

  return (
    <section id="features" className="py-24" style={{ background: "#0D1B2A" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(79,195,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container relative">
        <Reveal>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "Space Mono, monospace", color: "#4FC3F7" }}
          >
            Core Features
          </p>
          <h2
            className="mb-16 leading-tight tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#fff",
            }}
          >
            Built for the
            <br />
            <span style={{ color: "#E8341A" }}>AI Era.</span>
          </h2>
        </Reveal>

        <div className="space-y-24">
          {features.map((f, i) => (
            <Reveal key={f.num} delay={0.1}>
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Text */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-4"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      color: f.accent,
                    }}
                  >
                    FEATURE {f.num}
                  </p>
                  <h3
                    className="text-3xl font-black mb-2 leading-tight"
                    style={{ fontFamily: "Syne, sans-serif", color: "#fff" }}
                  >
                    {f.title}
                  </h3>
                  <p
                    className="text-sm font-semibold mb-5 tracking-wide"
                    style={{
                      fontFamily: "Space Mono, monospace",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {f.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-8"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    {f.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {f.specs.map((s) => (
                      <span
                        key={s}
                        className="px-3 py-1.5 rounded text-xs font-bold"
                        style={{
                          fontFamily: "Space Mono, monospace",
                          background: `${f.accent}18`,
                          border: `1px solid ${f.accent}30`,
                          color: f.accent,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="w-full object-cover"
                      style={{
                        height: "360px",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: "16px",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(to top, rgba(13,27,42,0.5) 0%, transparent 50%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Emotion System Section ──────────────────────────────────────────────────
function EmotionSection() {
  const emotions = [
    { emoji: "😴", name: "Standby", desc: "Idle & ready" },
    { emoji: "👂", name: "Listening", desc: "Capturing voice" },
    { emoji: "🤔", name: "Thinking", desc: "Processing NLP" },
    { emoji: "⚡", name: "Executing", desc: "Running task" },
    { emoji: "✅", name: "Done", desc: "Task complete" },
    { emoji: "❌", name: "Error", desc: "Needs attention" },
    { emoji: "🔔", name: "Notify", desc: "Alert triggered" },
    { emoji: "🎵", name: "Music", desc: "Audio playing" },
  ];

  return (
    <section className="py-24" style={{ background: "#1E293B" }}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: "Space Mono, monospace", color: "#4FC3F7" }}
            >
              AI Emotion System
            </p>
            <h2
              className="mb-6 leading-tight tracking-tight"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(28px, 3.5vw, 42px)",
                color: "#fff",
              }}
            >
              8 Expressive AI
              <br />
              <span style={{ color: "#E8341A" }}>Emotion States</span>
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
            >
              The 2.4" round OLED display shows real-time AI status through 8 distinct emotional expressions. Know exactly what your AI is doing at a glance — giving cold hardware a warm, human-like personality.
            </p>
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: "rgba(79,195,247,0.1)",
                border: "1px solid rgba(79,195,247,0.2)",
              }}
            >
              <div className="text-2xl">🎭</div>
              <div>
                <div
                  className="text-sm font-bold text-white"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  2.4" Round OLED
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "Space Mono, monospace" }}
                >
                  480 x 480 px
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="grid grid-cols-4 gap-3">
              {emotions.map((e, i) => (
                <motion.div
                  key={e.name}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="rounded-xl p-4 text-center cursor-default"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="text-2xl mb-2">{e.emoji}</div>
                  <div
                    className="text-xs font-bold text-white mb-1"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {e.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Inter, sans-serif" }}
                  >
                    {e.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ── Specs Section ───────────────────────────────────────────────────────────
function SpecsSection() {
  const specs = [
    { category: "AI Module", items: [
      ["Processor", "ESP32-S3 Dual-core 240MHz"],
      ["Display", "2.4\" Round OLED 480×480"],
      ["Microphone", "6-mic ring array, 3m pickup"],
      ["Battery", "400mAh Li-Po, 6-8h life"],
      ["Connectivity", "WiFi 2.4GHz"],
    ]},
    { category: "Storage", items: [
      ["Form Factor", "M.2 2280 NVMe PCIe 4.0"],
      ["Read Speed", ">= 7,000 MB/s"],
      ["Write Speed", ">= 5,000 MB/s"],
      ["Encryption", "AES-256 hardware"],
      ["Capacity", "1TB / 2TB / 4TB"],
    ]},
    { category: "Connectivity", items: [
      ["Thunderbolt 4", "2x 40Gbps"],
      ["USB-A 3.2 Gen2", "4x 10Gbps"],
      ["USB-C 3.2", "2x 10Gbps"],
      ["HDMI", "2x HDMI 2.1 4K@120Hz"],
      ["Network", "2.5GbE RJ45"],
    ]},
    { category: "Power & Physical", items: [
      ["Power Supply", "140W GaN built-in"],
      ["Cooling", "Single turbofan active"],
      ["Noise Level", "< 25dB @ 1m"],
      ["Compatibility", "Mac Mini M2 / M4 / M4 Pro"],
      ["Magnetic Hold", ">= 12N"],
    ]},
  ];

  return (
    <section id="specs" className="py-24" style={{ background: "#F8FAFC" }}>
      <div className="container">
        <Reveal>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "Space Mono, monospace", color: "#E8341A" }}
          >
            Technical Specifications
          </p>
          <h2
            className="mb-16 leading-tight tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#0D1B2A",
            }}
          >
            Hardware Specs
            <br />
            <span style={{ color: "#E8341A" }}>at a Glance</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {specs.map((group, gi) => (
            <Reveal key={group.category} delay={gi * 0.1}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <div
                  className="px-5 py-4"
                  style={{ background: "#0D1B2A" }}
                >
                  <h3
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {group.category}
                  </h3>
                </div>
                <div className="bg-white">
                  {group.items.map(([label, value], i) => (
                    <div
                      key={label}
                      className="px-5 py-3 flex flex-col gap-0.5"
                      style={{
                        borderBottom: i < group.items.length - 1 ? "1px solid #F1F5F9" : "none",
                      }}
                    >
                      <span
                        className="text-xs"
                        style={{ color: "#94A3B8", fontFamily: "Space Mono, monospace" }}
                      >
                        {label}
                      </span>
                      <span
                        className="text-sm font-semibold"
                        style={{ color: "#0D1B2A", fontFamily: "Inter, sans-serif" }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Product image showcase */}
        <Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {[ASSETS.heroFront, ASSETS.heroTop, ASSETS.heroSide].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid #E2E8F0" }}
              >
                <img
                  src={img}
                  alt="ClawPool"
                  className="w-full object-cover"
                  style={{ height: "220px" }}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Use Cases Section ───────────────────────────────────────────────────────
function UseCasesSection() {
  const cases = [
    {
      tag: "Developer / Engineer",
      title: "Voice-Driven Dev Workflow",
      desc: "Launch services, switch branches, and run tests with voice commands. Keep your hands on the keyboard and your mind in flow.",
      image: ASSETS.sceneCoding,
    },
    {
      tag: "Researcher / Knowledge Worker",
      title: "AI-Assisted Knowledge Management",
      desc: "Store papers, datasets, and notes securely in the AI HUB. Use voice to organize thoughts, generate summaries, and surface insights.",
      image: ASSETS.sceneResearch,
    },
  ];

  return (
    <section id="usecases" className="py-24" style={{ background: "#0D1B2A" }}>
      <div className="container">
        <Reveal>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "Space Mono, monospace", color: "#4FC3F7" }}
          >
            Use Cases
          </p>
          <h2
            className="mb-16 leading-tight tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#fff",
            }}
          >
            Built for Every
            <br />
            <span style={{ color: "#E8341A" }}>Creator.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.15}>
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="relative">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full object-cover"
                    style={{ height: "240px" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(13,27,42,0.7) 0%, transparent 60%)",
                    }}
                  />
                </div>
                <div className="p-8">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                    style={{
                      background: "rgba(232,52,26,0.15)",
                      color: "#E8341A",
                      fontFamily: "Space Mono, monospace",
                    }}
                  >
                    {c.tag}
                  </span>
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Pricing / SKU Section ───────────────────────────────────────────────────
function PricingSection() {
  const skus = [
    {
      name: "Standard",
      storage: "1 TB",
      module: "Magnetic Knob (2.4\" OLED)",
      badge: null,
      highlight: false,
    },
    {
      name: "Advanced",
      storage: "2 TB",
      module: "Magnetic Knob (2.4\" OLED)",
      badge: "Most Popular",
      highlight: true,
    },
    {
      name: "Flagship",
      storage: "4 TB",
      module: "Robot Arm (2.8\" AMOLED + Dual Servo)",
      badge: "Ultimate",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24" style={{ background: "#1E293B" }}>
      <div className="container">
        <Reveal>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "Space Mono, monospace", color: "#E8341A" }}
          >
            Product SKU
          </p>
          <h2
            className="mb-4 leading-tight tracking-tight"
            style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(32px, 4vw, 48px)",
              color: "#fff",
            }}
          >
            Choose Your
            <br />
            <span style={{ color: "#E8341A" }}>ClawPool.</span>
          </h2>
          <p
            className="max-w-lg mb-16 text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
          >
            All versions include the full I/O hub, 140W GaN power, and OpenClaw AI voice control. Choose the storage and AI module that fits your workflow.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skus.map((sku, i) => (
            <Reveal key={sku.name} delay={i * 0.12}>
              <div
                className="relative rounded-2xl p-8 h-full flex flex-col"
                style={{
                  background: sku.highlight ? "rgba(232,52,26,0.08)" : "rgba(255,255,255,0.04)",
                  border: sku.highlight
                    ? "1px solid rgba(232,52,26,0.35)"
                    : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {sku.badge && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                    style={{
                      background: "#E8341A",
                      color: "#fff",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    {sku.badge}
                  </div>
                )}

                <h3
                  className="text-2xl font-black text-white mb-6"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {sku.name}
                </h3>

                <div className="space-y-4 flex-1">
                  <div
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="text-xl">💾</div>
                    <div>
                      <div
                        className="text-xs mb-0.5"
                        style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Space Mono, monospace" }}
                      >
                        NVMe Storage
                      </div>
                      <div
                        className="text-lg font-black"
                        style={{ fontFamily: "Syne, sans-serif", color: "#4FC3F7" }}
                      >
                        {sku.storage}
                      </div>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="text-xl mt-0.5">🤖</div>
                    <div>
                      <div
                        className="text-xs mb-0.5"
                        style={{ color: "rgba(255,255,255,0.38)", fontFamily: "Space Mono, monospace" }}
                      >
                        AI Module
                      </div>
                      <div
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {sku.module}
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://clawpool.shop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 w-full py-3 rounded-xl text-sm font-bold text-center block transition-all"
                  style={{
                    background: sku.highlight ? "#E8341A" : "rgba(255,255,255,0.08)",
                    color: "#fff",
                    fontFamily: "Syne, sans-serif",
                  }}
                >
                  {sku.highlight ? "Back This on Kickstarter" : "Learn More"}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Kickstarter CTA */}
        <Reveal>
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(232,52,26,0.15) 0%, rgba(79,195,247,0.08) 100%)",
              border: "1px solid rgba(232,52,26,0.25)",
            }}
          >
            <img
              src={ASSETS.logoVertical}
              alt="ClawPool"
              className="w-24 mx-auto mb-6"
            />
            <h3
              className="text-3xl font-black text-white mb-4"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              The Secure Habitat for Your{" "}
              <span style={{ color: "#E8341A" }}>AI Agent.</span>
            </h3>
            <p
              className="text-sm leading-relaxed max-w-lg mx-auto mb-8"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "Inter, sans-serif" }}
            >
              ClawPool is coming to Kickstarter. Be an early backer and get the best price on the device that transforms your Mac Mini into a true AI workstation.
            </p>
            <a
              href="https://clawpool.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105"
              style={{
                background: "#E8341A",
                color: "#fff",
                fontFamily: "Syne, sans-serif",
                boxShadow: "0 0 40px rgba(232,52,26,0.4)",
              }}
            >
              Visit clawpool.shop
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{
        background: "#0D1B2A",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={ASSETS.logoDark} alt="ClawPool" className="h-7" />
          </div>
          <div className="flex gap-6">
            {["Features", "Specs", "Use Cases", "Pricing"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "")}`}
                className="text-sm transition-colors"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {l}
              </a>
            ))}
          </div>
          <div
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Space Mono, monospace" }}
          >
            © 2025 ClawPool · clawpool.shop
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── Main Export ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#0D1B2A" }}>
      <Nav />
      <HeroSection />
      <PillarsSection />
      <FeaturesSection />
      <EmotionSection />
      <SpecsSection />
      <UseCasesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
