/**
 * ClawPool — AN OPENCLAW AI-DOCK
 * Design: Deep Space Hardware Showcase
 * Theme: Dark (#0D1B2A base), Claw Red (#E8341A accent), Signal Blue (#4FC3F7 highlight)
 * Typography: Syne (display) + Space Mono (data/specs) + Inter (body)
 * Layout: Asymmetric split-screen, full-bleed imagery, editorial rhythm
 * Bilingual: Chinese primary, English secondary
 */

import { useEffect, useRef, useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430257498/jfDsKVzTVmzoN4bJ42z8Cq";

const IMGS = {
  hero: `${CDN}/render_v2_01_hero_noled(1)_ceafca18.webp`,
  frontFlat: `${CDN}/render_v2_04_front_flat_f6d94ecf.webp`,
  topView: `${CDN}/render_v2_05_top_view_b70bba83.webp`,
  verticalShowcase: `${CDN}/clawpool_vertical_showcase_no_glow_1_9526b701.webp`,
  coding: `${CDN}/clawpool_coding_final_corrected_1_e2b35fc1.webp`,
  research: `${CDN}/clawpool_research_helper_mini_size_1_91436768.webp`,
  sceneBoot: `${CDN}/scene_D_boot_c864eea1.webp`,
  logoLight: `${CDN}/logo_horizontal_light_v2_192c83f9.webp`,
  logoDark: `${CDN}/logo_horizontal_dark_e9f8c65d.webp`,
  logoVerticalDark: `${CDN}/logo_vertical_dark_07d2b9f4.webp`,
  socialPost: `${CDN}/social_post_4568c578.png`,
};

// Animated counter hook
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// Intersection observer hook
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const statsRef = useInView(0.3);

  const navLinks = [
    { href: "#features", label: "功能", en: "Features" },
    { href: "#specs", label: "规格", en: "Specs" },
    { href: "#usecases", label: "使用场景", en: "Use Cases" },
    { href: "#pricing", label: "定价", en: "Pricing" },
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-20 bg-[#0D1B2A]/90 backdrop-blur-md border-b border-white/5">
        {/* Logo — enlarged */}
        <a href="#" className="flex items-center shrink-0">
          <img src={IMGS.logoLight} alt="ClawPool" className="h-10 md:h-14 w-auto object-contain" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 bg-[#E8341A] text-white text-sm font-semibold rounded-sm hover:bg-[#c42a14] transition-colors tracking-wide">
            支持众筹 →
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#0D1B2A] border-b border-white/10 px-6 py-4 flex flex-col gap-4 md:hidden">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white transition-colors">
                {l.label} <span className="text-white/30 text-sm ml-1">{l.en}</span>
              </a>
            ))}
            <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
              className="mt-2 px-5 py-3 bg-[#E8341A] text-white text-sm font-semibold rounded-sm text-center">
              支持众筹 →
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#0D1B2A] to-[#0a1520]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#4FC3F7 1px, transparent 1px), linear-gradient(90deg, #4FC3F7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-4rem)]">

            {/* Left — copy */}
            <div className="flex flex-col justify-center py-16 lg:py-0 lg:pr-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 self-start">
                <span className="w-2 h-2 rounded-full bg-[#E8341A] animate-pulse" />
                <span className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase">即将登陆 Kickstarter</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] font-black leading-[0.92] tracking-tight mb-6">
                <span className="block text-white">你的 AI</span>
                <span className="block text-white">助手，</span>
                <span className="block text-[#E8341A]">真正安全。</span>
              </h1>
              <p className="text-sm font-mono text-[#4FC3F7] tracking-[0.15em] uppercase mb-6">
                Your AI Agent. Secured. — AN OPENCLAW AI-DOCK
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg mb-3">
                ClawPool 是专为 Mac Mini 设计的 AI 底座。它将 AI 的访问权限严格限制在内置 SSD 内，无法触碰你的系统文件——让 AI 真正强大，同时真正安全。
              </p>
              <p className="text-sm text-white/40 leading-relaxed max-w-lg mb-10">
                Secure AI storage, full I/O expansion, and OpenClaw voice control — all in one precision-crafted enclosure.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-14">
                <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-[#E8341A] text-white font-semibold text-sm rounded-sm hover:bg-[#c42a14] transition-all">
                  <span>支持众筹</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a href="#features"
                  className="px-7 py-3.5 border border-white/20 text-white/70 font-medium text-sm rounded-sm hover:border-white/50 hover:text-white transition-all">
                  了解功能
                </a>
              </div>

              {/* Stats */}
              <div ref={statsRef.ref} className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8">
                {[
                  { val: "4TB", sub: "最大存储", en: "MAX STORAGE" },
                  { val: "9+", sub: "I/O 接口", en: "I/O PORTS" },
                  { val: "140W", sub: "GaN 供电", en: "GAN POWER" },
                  { val: "3m", sub: "拾音距离", en: "VOICE RANGE" },
                ].map((s) => (
                  <div key={s.val} className="flex flex-col">
                    <span className="font-display font-black text-2xl md:text-3xl text-white">{s.val}</span>
                    <span className="text-[10px] font-mono text-[#4FC3F7] tracking-widest mt-1">{s.en}</span>
                    <span className="text-xs text-white/40 mt-0.5">{s.sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Glow */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-[#E8341A]/10 blur-[100px] pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-[#4FC3F7]/8 blur-[80px] pointer-events-none translate-x-20" />

              {/* Main product image */}
              <div className="relative z-10 w-full max-w-[560px]">
                <img src={IMGS.hero} alt="ClawPool AI Dock"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 40px 80px rgba(232,52,26,0.25))" }} />

                {/* Floating badges */}
                <div className="absolute top-[15%] left-0 md:-left-8 bg-[#0D1B2A]/90 border border-[#E8341A]/40 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono">
                  <div className="text-[#E8341A] font-bold">HEY CLAW</div>
                  <div className="text-white/50">语音已激活</div>
                </div>
                <div className="absolute bottom-[20%] right-0 md:-right-4 bg-[#0D1B2A]/90 border border-[#4FC3F7]/40 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono">
                  <div className="text-[#4FC3F7] font-bold">PCIe 4.0 NVMe</div>
                  <div className="text-white/50">7,000 MB/s 读取</div>
                </div>
                <div className="absolute top-[45%] right-0 md:-right-6 bg-[#0D1B2A]/90 border border-white/20 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono">
                  <div className="text-white font-bold">AI 安全边界</div>
                  <div className="text-white/50">物理隔离保护</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs font-mono tracking-widest text-white/50">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ─── */}
      <section className="py-24 md:py-32 bg-[#0a1520]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          {/* Section header */}
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">为什么是 ClawPool</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
              三大能力，<br />
              <span className="text-[#E8341A]">一个底座。</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Three Capabilities. One Enclosure.
            </p>
            <p className="text-white/40 text-base leading-relaxed mt-3 max-w-2xl">
              Mac Mini 是世界上性能最强的紧凑型电脑。ClawPool 让它成为真正的 AI 工作站——安全的 AI 专属存储、消除桌面杂乱的全接口扩展坞，以及懂你的语音 AI 助手。
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                icon: "🎙",
                title: "OpenClaw 语音 AI",
                titleEn: "OpenClaw Voice AI",
                desc: "说「Hey Claw」唤醒你的 Mac Mini，用自然语言启动应用、管理文件、自动化工作流。所有 NLP 推理在本地完成——你的声音数据永远不会离开桌面。",
                descEn: "Wake latency < 300ms · 6-mic ring array · 3m pickup · Local NLP",
                color: "#E8341A",
              },
              {
                num: "02",
                icon: "⚡",
                title: "全接口扩展坞",
                titleEn: "Full I/O Hub",
                desc: "2× Thunderbolt 4、2× HDMI 2.1 4K@120Hz、2.5GbE 网口、4× USB-A 3.2、DisplayPort 1.4、UHS-II SD 卡槽——一根线连接 Mac Mini，140W GaN 同时供电。",
                descEn: "TB4 40Gbps · HDMI 2.1 · 140W GaN · 2.5GbE · SD UHS-II",
                color: "#4FC3F7",
              },
              {
                num: "03",
                icon: "🔒",
                title: "AI 安全专属存储",
                titleEn: "Secure AI Storage",
                desc: "PCIe 4.0 NVMe（最高 4TB），AES-256 硬件加密。AI 的访问权限被严格限制在这块 SSD 内——无法访问你的 Mac 系统文件，物理隔离，真正安全。",
                descEn: "PCIe 4.0 · 7,000 MB/s · AES-256 · Up to 4TB · Physical isolation",
                color: "#E8341A",
              },
            ].map((p) => (
              <div key={p.num}
                className="group relative bg-[#0D1B2A] border border-white/8 hover:border-white/20 rounded-sm p-8 transition-all duration-300 overflow-hidden">
                {/* Background accent */}
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: p.color }} />
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-5 transition-opacity"
                  style={{ backgroundColor: p.color, filter: "blur(40px)" }} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-4xl font-bold opacity-20">{p.num}</span>
                    <span className="text-3xl">{p.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-xs font-mono text-white/30 mb-4">{p.titleEn}</p>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{p.desc}</p>
                  <p className="text-xs font-mono text-white/30 leading-relaxed">{p.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE 1: SECURITY (full-bleed split) ─── */}
      <section id="features" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
          {/* Image side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img src={IMGS.verticalShowcase} alt="ClawPool Vertical Showcase"
              className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1B2A] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent lg:hidden" />
          </div>

          {/* Content side */}
          <div className="bg-[#0D1B2A] flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-24">
            <div className="max-w-xl">
              <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">核心安全机制 · Security</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                AI 只能访问<br />
                <span className="text-[#E8341A]">它自己的空间。</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                ClawPool 采用「物理隔离 + 权限收敛」的安全架构。OpenClaw AI 的所有操作权限被严格限制在内置 NVMe SSD（AI HUB 资料库）内——它无法访问你的 macOS 系统目录、个人文档或桌面。
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                Physical isolation + permission convergence. AI operations are strictly sandboxed to the dedicated NVMe SSD. Your Mac system files are physically inaccessible to AI agents.
              </p>

              {/* Security features list */}
              <div className="space-y-4">
                {[
                  { icon: "🛡", text: "AI 只能读写 AI HUB 资料库，无法触碰系统文件", en: "AI-only storage sandbox" },
                  { icon: "🔑", text: "AES-256 硬件加密，密钥存储于独立安全芯片", en: "AES-256 hardware encryption" },
                  { icon: "📥", text: "插入 SD 卡自动触发导入流程，文件先进沙箱再处理", en: "Auto-sandboxed file import" },
                  { icon: "🏠", text: "所有 NLP 推理本地完成，数据不上传云端", en: "100% local NLP inference" },
                ].map((f) => (
                  <div key={f.en} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 shrink-0">{f.icon}</span>
                    <div>
                      <p className="text-sm text-white/70">{f.text}</p>
                      <p className="text-xs font-mono text-white/30">{f.en}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURE 2: VOICE AI (reversed split) ─── */}
      <section className="relative overflow-hidden bg-[#060e18]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
          {/* Content side */}
          <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
            <div className="max-w-xl">
              <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">语音 AI · Voice Control</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                磁吸旋钮，<br />
                <span className="text-[#4FC3F7]">随处可用。</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-4">
                AI 情感模块是一个完全独立的 WiFi 设备——从底座取下后，它通过局域网继续与你的 Mac 通信。放在书桌上、床头柜上，或者客厅里，都能唤醒你的 Mac，执行指令。归位底座自动充电，无需额外线缆。
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-8">
                The AI module is a standalone WiFi device. Detach it anywhere in your home — it keeps communicating with your Mac via LAN. Dock to charge automatically.
              </p>

              {/* Voice specs */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "< 300ms", label: "唤醒延迟", en: "Wake latency" },
                  { val: "6 麦", label: "环形阵列", en: "Mic ring array" },
                  { val: "3 米", label: "拾音距离", en: "Pickup range" },
                  { val: "6–8h", label: "独立续航", en: "Battery life" },
                ].map((s) => (
                  <div key={s.en} className="bg-white/5 border border-white/8 rounded-sm p-4">
                    <div className="font-display font-black text-xl text-white">{s.val}</div>
                    <div className="text-xs text-white/50 mt-1">{s.label}</div>
                    <div className="text-xs font-mono text-white/25">{s.en}</div>
                  </div>
                ))}
              </div>

              {/* Emotion states preview */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-white/30 font-mono mr-1">8 种情感状态：</span>
                {["😴 待机", "👂 聆听", "🤔 思考", "⚡ 执行", "✅ 完成", "😵 出错", "🔔 通知", "🎵 音乐"].map((e) => (
                  <span key={e} className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-white/50">{e}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2">
            <img src={IMGS.sceneBoot} alt="ClawPool Boot Scene"
              className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#060e18] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e18] to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* ─── FEATURE 3: I/O HUB (dark card grid) ─── */}
      <section className="py-24 md:py-32 bg-[#0D1B2A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#4FC3F7]/5 blur-[60px] rounded-full" />
              <img src={IMGS.topView} alt="ClawPool Top View"
                className="relative z-10 w-full max-w-[500px] mx-auto h-auto object-contain rounded-sm"
                style={{ filter: "drop-shadow(0 20px 60px rgba(79,195,247,0.2))" }} />
            </div>

            {/* Right: I/O specs */}
            <div>
              <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">接口扩展 · I/O Hub</p>
              <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-6">
                一根线，<br />
                <span className="text-[#4FC3F7]">搞定一切。</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                One cable. Everything connected. 内置 140W GaN 电源，通过 Thunderbolt 4 同时为 Mac Mini 供电并传输数据，桌面零散线缆。
              </p>

              {/* Port list */}
              <div className="space-y-3">
                {[
                  { port: "Thunderbolt 4", spec: "40 Gbps × 2", note: "单线供电 + 数据" },
                  { port: "HDMI 2.1", spec: "4K@120Hz × 2", note: "双显示器支持" },
                  { port: "USB-A 3.2 Gen2", spec: "10 Gbps × 4", note: "常用设备连接" },
                  { port: "USB-C 3.2", spec: "10 Gbps × 2", note: "通用扩展" },
                  { port: "DisplayPort 1.4", spec: "4K@144Hz × 1", note: "高刷新率显示器" },
                  { port: "SD 卡槽", spec: "UHS-II 312 MB/s", note: "摄影师必备" },
                  { port: "RJ45 以太网", spec: "2.5 Gbps", note: "有线网络" },
                  { port: "3.5mm 音频", spec: "麦克风 + 耳机", note: "二合一接口" },
                ].map((p) => (
                  <div key={p.port} className="flex items-center justify-between py-2.5 border-b border-white/5 group hover:border-white/15 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4FC3F7] opacity-50 group-hover:opacity-100 transition-opacity" />
                      <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{p.port}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-[#4FC3F7]">{p.spec}</div>
                      <div className="text-xs text-white/30">{p.note}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES (full-bleed image + overlay cards) ─── */}
      <section id="usecases" className="relative py-24 md:py-32 overflow-hidden bg-[#060e18]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16">
            <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">使用场景 · Use Cases</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              为每一位<br />
              <span className="text-[#E8341A]">创作者而生。</span>
            </h2>
            <p className="text-white/40 text-lg mt-3">Built for Every Creator.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use case 1: Developer */}
            <div className="relative rounded-sm overflow-hidden group">
              <img src={IMGS.coding} alt="Developer use case"
                className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-mono text-[#E8341A] tracking-widest uppercase mb-2">开发者 / 工程师</p>
                <h3 className="font-display text-2xl font-black text-white mb-2">语音驱动的开发工作流</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  用语音启动服务、切换分支、运行测试。双 HDMI 2.1 支持多显示器，专注模式一句话触发。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["4TB 安全存储", "语音触发构建", "双显示器", "本地 AI 推理"].map(t => (
                    <span key={t} className="text-xs bg-white/10 border border-white/15 px-2.5 py-1 rounded text-white/60">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Use case 2: Researcher */}
            <div className="relative rounded-sm overflow-hidden group">
              <img src={IMGS.research} alt="Researcher use case"
                className="w-full h-[360px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-mono text-[#4FC3F7] tracking-widest uppercase mb-2">研究员 / 知识工作者</p>
                <h3 className="font-display text-2xl font-black text-white mb-2">AI 辅助知识管理</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  将论文、数据集、笔记安全存入 AI HUB 资料库。用语音讨论框架、口述草稿，不打断思维流。
                </p>
                <div className="flex flex-wrap gap-2">
                  {["4TB 研究数据库", "语音文献检索", "离线 AI 处理", "可拆卸模块"].map(t => (
                    <span key={t} className="text-xs bg-white/10 border border-white/15 px-2.5 py-1 rounded text-white/60">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Use case 3: Creator */}
            <div className="relative rounded-sm overflow-hidden group">
              <img src={IMGS.frontFlat} alt="Creator use case"
                className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-xs font-mono text-[#E8341A] tracking-widest uppercase mb-2">视频剪辑师 / 摄影师</p>
                <h3 className="font-display text-2xl font-black text-white mb-2">高速存储 + 快速导入</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  UHS-II SD 卡槽，插卡自动触发 AI 导入流程。PCIe 4.0 NVMe 7,000 MB/s，4K 素材秒级传输。
                </p>
              </div>
            </div>

            {/* Use case 4: Efficiency */}
            <div className="relative rounded-sm overflow-hidden group bg-[#0D1B2A] border border-white/8 p-8 flex flex-col justify-between">
              <div>
                <p className="text-xs font-mono text-[#4FC3F7] tracking-widest uppercase mb-4">效率极客 / 家庭用户</p>
                <h3 className="font-display text-2xl font-black text-white mb-4">桌面极简，能力极强</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  140W GaN 内置电源，一根线消灭所有散线。旗舰版机器人模块会跟着你说话的方向转头——冷冰冰的硬件，有了温度。
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "🤖", text: "声源定位转头（旗舰版）" },
                  { icon: "🔌", text: "140W GaN 零散线" },
                  { icon: "📱", text: "配套 App 一键配网" },
                  { icon: "🔄", text: "OTA 持续功能更新" },
                ].map(f => (
                  <div key={f.text} className="flex items-start gap-2">
                    <span className="text-base shrink-0">{f.icon}</span>
                    <span className="text-xs text-white/50 leading-relaxed">{f.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECS ─── */}
      <section id="specs" className="py-24 md:py-32 bg-[#0D1B2A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16">
            <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">技术规格 · Specifications</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              硬件规格<br />
              <span className="text-[#4FC3F7]">一览。</span>
            </h2>
            <p className="text-white/40 text-lg mt-3">Hardware at a Glance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "AI 情感模块",
                titleEn: "AI Module",
                color: "#E8341A",
                specs: [
                  ["主控芯片", "ESP32-S3 双核 240MHz"],
                  ["屏幕", "2.4\" 圆形 OLED 480×480"],
                  ["麦克风", "6 麦环形阵列 3m 拾音"],
                  ["电池", "400mAh Li-Po 6–8h"],
                  ["无线", "WiFi 2.4GHz 独立设备"],
                  ["磁吸力", "≥ 12N 钕磁铁阵列"],
                ],
              },
              {
                title: "存储",
                titleEn: "Storage",
                color: "#4FC3F7",
                specs: [
                  ["接口", "M.2 2280 NVMe PCIe 4.0"],
                  ["读取速度", "≥ 7,000 MB/s"],
                  ["写入速度", "≥ 5,000 MB/s"],
                  ["加密", "AES-256 硬件加密"],
                  ["容量", "1TB / 2TB / 4TB"],
                  ["文件系统", "APFS / exFAT"],
                ],
              },
              {
                title: "接口",
                titleEn: "Connectivity",
                color: "#E8341A",
                specs: [
                  ["Thunderbolt 4", "40Gbps × 2"],
                  ["USB-A 3.2 Gen2", "10Gbps × 4"],
                  ["HDMI 2.1", "4K@120Hz × 2"],
                  ["DisplayPort 1.4", "4K@144Hz × 1"],
                  ["以太网", "2.5GbE RJ45"],
                  ["SD 卡槽", "UHS-II 312MB/s"],
                ],
              },
              {
                title: "供电与散热",
                titleEn: "Power & Thermal",
                color: "#4FC3F7",
                specs: [
                  ["电源", "140W GaN 内置"],
                  ["散热", "单涡轮风扇主动散热"],
                  ["噪音", "< 25dB @1m"],
                  ["工作温度", "0°C ~ 40°C"],
                  ["兼容性", "Mac Mini M2/M4/M4 Pro"],
                  ["磁吸充电", "Pogo Pin 4 触点"],
                ],
              },
            ].map((group) => (
              <div key={group.title} className="bg-[#060e18] border border-white/8 rounded-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-white/8" style={{ borderLeftColor: group.color, borderLeftWidth: "3px" }}>
                  <div className="font-display font-bold text-white">{group.title}</div>
                  <div className="text-xs font-mono text-white/30">{group.titleEn}</div>
                </div>
                <div className="p-5 space-y-3">
                  {group.specs.map(([label, val]) => (
                    <div key={label} className="flex items-start justify-between gap-2">
                      <span className="text-xs text-white/40 shrink-0">{label}</span>
                      <span className="text-xs font-mono text-white/80 text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Compatibility */}
          <div className="mt-10 p-6 bg-[#060e18] border border-white/8 rounded-sm">
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">兼容性 · Compatibility</p>
            <div className="flex flex-wrap gap-3">
              {[
                { model: "Mac Mini M4 (2024)", status: "完整支持", recommended: true },
                { model: "Mac Mini M4 Pro (2024)", status: "完整支持", recommended: true },
                { model: "Mac Mini M2 (2023)", status: "完整支持", recommended: false },
                { model: "Mac Mini M2 Pro (2023)", status: "完整支持", recommended: false },
              ].map(m => (
                <div key={m.model} className={`flex items-center gap-2 px-4 py-2 rounded-sm border text-sm ${m.recommended ? "border-[#E8341A]/40 bg-[#E8341A]/5" : "border-white/10"}`}>
                  <span className="text-green-400 text-xs">✓</span>
                  <span className="text-white/70">{m.model}</span>
                  {m.recommended && <span className="text-xs font-mono text-[#E8341A] ml-1">推荐</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING / SKU ─── */}
      <section id="pricing" className="py-24 md:py-32 bg-[#060e18]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16 text-center">
            <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">产品配置 · Product SKU</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4">
              选择你的<br />
              <span className="text-[#E8341A]">ClawPool。</span>
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              所有版本均包含完整 I/O 扩展坞、140W GaN 供电和 OpenClaw AI 语音控制。按需选择存储容量和 AI 模块形态。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "标准版",
                nameEn: "Standard",
                storage: "1 TB NVMe",
                module: "磁吸旋钮（2.4\" OLED）",
                highlight: false,
                tag: null,
                features: ["完整 I/O 扩展坞", "140W GaN 供电", "OpenClaw 语音 AI", "AES-256 加密存储", "磁吸旋钮模块", "配套 App"],
              },
              {
                name: "进阶版",
                nameEn: "Advanced",
                storage: "2 TB NVMe",
                module: "磁吸旋钮（2.4\" OLED）",
                highlight: true,
                tag: "最受欢迎",
                features: ["完整 I/O 扩展坞", "140W GaN 供电", "OpenClaw 语音 AI", "AES-256 加密存储", "磁吸旋钮模块", "配套 App", "2TB 大容量存储"],
              },
              {
                name: "旗舰版",
                nameEn: "Flagship",
                storage: "4 TB NVMe",
                module: "机器人版（2.8\" AMOLED + 双轴舵机）",
                highlight: false,
                tag: "旗舰",
                features: ["完整 I/O 扩展坞", "140W GaN 供电", "OpenClaw 语音 AI", "AES-256 加密存储", "机器人 AI 模块", "声源定位转头", "4TB 旗舰存储"],
              },
            ].map((sku) => (
              <div key={sku.name}
                className={`relative rounded-sm overflow-hidden border transition-all ${sku.highlight ? "border-[#E8341A] bg-[#E8341A]/5" : "border-white/10 bg-[#0D1B2A]"}`}>
                {sku.tag && (
                  <div className={`absolute top-4 right-4 text-xs font-mono px-2 py-1 rounded ${sku.highlight ? "bg-[#E8341A] text-white" : "bg-white/10 text-white/60"}`}>
                    {sku.tag}
                  </div>
                )}
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-black text-white">{sku.name}</h3>
                    <p className="text-xs font-mono text-white/30 mt-1">{sku.nameEn}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40 w-16 shrink-0">存储</span>
                      <span className="text-sm font-mono text-white/80">{sku.storage}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-xs text-white/40 w-16 shrink-0">AI 模块</span>
                      <span className="text-sm text-white/80 leading-relaxed">{sku.module}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-8">
                    {sku.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <span className="text-[#4FC3F7] text-xs">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>

                  <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
                    className={`block w-full text-center py-3 text-sm font-semibold rounded-sm transition-colors ${sku.highlight ? "bg-[#E8341A] text-white hover:bg-[#c42a14]" : "border border-white/20 text-white/70 hover:border-white/50 hover:text-white"}`}>
                    Kickstarter 早鸟支持
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FOOTER ─── */}
      <section className="relative py-32 overflow-hidden bg-[#0D1B2A]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={IMGS.socialPost} alt="" className="w-full h-full object-cover object-center opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/80 to-[#0D1B2A]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Logo */}
          <img src={IMGS.logoLight} alt="ClawPool" className="h-16 md:h-20 w-auto object-contain mx-auto mb-10" />

          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight mb-6">
            你的 AI 助手<br />
            <span className="text-[#E8341A]">安全的家。</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg leading-relaxed mb-4">
            The Secure Habitat for Your AI Agent.
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-xl mx-auto">
            ClawPool 即将登陆 Kickstarter。成为早期支持者，以最优惠的价格获得这台将 Mac Mini 变为真正 AI 工作站的设备。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 bg-[#E8341A] text-white font-bold text-base rounded-sm hover:bg-[#c42a14] transition-colors">
              支持众筹 — Back on Kickstarter →
            </a>
          </div>

          {/* Final stats */}
          <div className="flex justify-center gap-10 flex-wrap">
            {[
              { val: "$150K", label: "众筹目标" },
              { val: "30天", label: "众筹周期" },
              { val: "5,000+", label: "目标支持者" },
            ].map(s => (
              <div key={s.val} className="text-center">
                <div className="font-display font-black text-2xl text-white">{s.val}</div>
                <div className="text-xs font-mono text-white/30 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#060e18] border-t border-white/5 py-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={IMGS.logoLight} alt="ClawPool" className="h-10 w-auto object-contain" />
            <div className="flex gap-8">
              {navLinks.map(l => (
                <a key={l.href} href={l.href} className="text-xs text-white/30 hover:text-white/60 transition-colors font-mono">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-xs font-mono text-white/20">
              © 2025 OpenClaw Tech Limited · clawpool.shop
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
