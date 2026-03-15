/**
 * ClawPool — AN OPENCLAW AI-DOCK
 * Design: Deep Space Hardware Showcase
 * Theme: Dark (#0D1B2A base), Claw Red (#E8341A accent), Signal Blue (#4FC3F7 highlight)
 * Typography: Syne (display) + Space Mono (data/specs) + Inter (body)
 * Layout: Asymmetric split-screen, full-bleed imagery, editorial rhythm
 * Bilingual: Chinese / English toggle
 */

import { useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663430257498/jfDsKVzTVmzoN4bJ42z8Cq";

const IMGS = {
  hero: `${CDN}/clawpool_front_ports_only_1(1)_ff8f79f1.webp`,
  frontFlat: `${CDN}/render_v2_04_front_flat_f6d94ecf.webp`,
  topView: `${CDN}/render_v2_05_top_view_b70bba83.webp`,
  verticalShowcase: `${CDN}/clawpool_vertical_showcase_no_glow_1_9526b701.webp`,
  coding: `${CDN}/clawpool_coding_final_corrected_1_e2b35fc1.webp`,
  research: `${CDN}/clawpool_research_helper_mini_size_1_f336e519.webp`,
  sceneBoot: `${CDN}/scene_D_boot_11e12620.webp`,
  studioScene: `${CDN}/clawpool_studio_scene_no_glow_1_6396fe9d.webp`,
  workstation: `${CDN}/scene_E_workstation_ai_34641bb1.webp`,
  logoLight: `${CDN}/logo_dark_bg_cd6e8d3d.webp`,
  logoIcon: `${CDN}/logo_icon_only_b0267a9f.png`,
  logoDark: `${CDN}/logo_horizontal_dark_e9f8c65d.webp`,
  socialPost: `${CDN}/social_post_4568c578.png`,
  knobHD: `${CDN}/pasted_file_1f52up_clawpool_knob_two_contacts_hd_1_34947723.webp`,
};

// Bilingual content
const T = {
  zh: {
    nav: ["功能", "规格", "使用场景", "定价"],
    navEn: ["Features", "Specs", "Use Cases", "Pricing"],
    cta: "支持众筹 →",
    badge: "全球首款 OpenClaw AI 扩展坞 · 即将登陆 Kickstarter",
    heroTitle1: "首款内置",
    heroTitle2: "OpenClaw AI",
    heroTitle3: "的扩展坞。",
    heroSub: "AN OPENCLAW AI-DOCK — The World's First OpenClaw Hardware",
    heroTagline: "完整版 OpenClaw · AI 安全隔离 · 语音直接操控电脑 · 内置音箱 — 像有个朋友坐在你旁边帮你工作。",
    heroDesc: "ClawPool 内置完整版 OpenClaw AI，开箱即用，专为 Mac Mini 设计。AI 与你的主硬盘物理隔离，只能操作扩展坞专属硬盘——你决定让 AI 看什么。语音唤醒、自然对话、内置音箱，真正的 AI 工作伙伴。",
    heroDescEn: "The world's first dock with a full OpenClaw AI built in. Physical AI isolation, voice control, and built-in speaker — your AI companion, right on your desk.",
    learnMore: "了解功能",
    stat1: ["4TB", "最大存储", "MAX STORAGE"],
    stat2: ["9+", "I/O 接口", "I/O PORTS"],
    stat3: ["140W", "GaN 供电", "GAN POWER"],
    stat4: ["3m", "拾音距离", "VOICE RANGE"],
    whyTitle1: "三大核心，",
    whyTitle2: "一个底座。",
    whySub: "Three Pillars. One Dock.",
    whyDesc: "ClawPool 是全球首款内置完整版 OpenClaw AI 的扩展坞。它不只是扩展坞——它是一个真正懂你的 AI 工作伙伴：用声音操控电脑、AI 数据与主硬盘物理隔离、全接口扩展一步到位。",
    p1Title: "完整版 OpenClaw AI",
    p1TitleEn: "Full OpenClaw AI Built-in",
    p1Desc: "ClawPool 内置完整版 OpenClaw AI——说「Hey Claw」，用自然语言直接操控你的 Mac：启动应用、管理文件、自动化工作流。旋钮麦克风拾音，本体音箱回应，像和朋友说话一样自然。所有推理本地完成，数据不离桌面。",
    p1Spec: "唤醒延迟 < 300ms · 6 麦环形阵列 · 3m 拾音 · 本地推理 · 内置音箱",
    p2Title: "AI 安全隔离存储",
    p2TitleEn: "AI Physical Isolation",
    p2Desc: "这是 ClawPool 最重要的设计：OpenClaw AI 默认只能操作扩展坞内置硬盘，与你的 Mac 主硬盘完全物理隔离。你把需要让 AI 处理的文件放进来，AI 才能看到——你的系统文件、个人文档永远不会被 AI 触碰。",
    p2Spec: "PCIe 4.0 · 7,000 MB/s · AES-256 · 最高 4TB · 物理隔离",
    p3Title: "全接口扩展 + 内置音箱",
    p3TitleEn: "Full I/O Hub + Speaker",
    p3Desc: "2× Thunderbolt 4、2× HDMI 2.1 4K@120Hz、2.5GbE 网口、4× USB-A 3.2、SD 卡槽——一根线接入 Mac Mini，所有设备全部就位。内置音箱让 AI 直接开口回应你，真正的语音对话体验。",
    p3Spec: "TB4 40Gbps · HDMI 2.1 · 内置音箱 · 2.5GbE · SD UHS-II",
    secLabel: "AI 安全隔离 · 最重要的设计",
    secTitle1: "你决定让",
    secTitle2: "AI 看什么。",
    secDesc: "ClawPool 最核心的安全设计：OpenClaw AI 默认只能操作扩展坞内置硬盘（AI HUB 资料库），与你的 Mac 主硬盘完全物理隔离。你把需要 AI 处理的文件放进来，AI 才能读取——你的 macOS 系统、个人文档、桌面文件，AI 永远无法触碰。",
    secDescEn: "ClawPool's most critical design: OpenClaw AI can only access the dock's built-in drive by default — physically isolated from your Mac's main disk. You decide what AI can see. Your system files are permanently off-limits.",
    secF1: "AI 默认只能读写扩展坞硬盘，主硬盘物理隔离",
    secF2: "你主动放入的文件，AI 才能处理——完全由你掌控",
    secF3: "AES-256 硬件加密，密钥存储于独立安全芯片",
    secF4: "所有 AI 推理本地完成，数据永不上传云端",
    voiceLabel: "AI 情感伙伴 · Magnetic Knob",
    voiceTitle1: "像朋友一样，",
    voiceTitle2: "就在你身边。",
    voiceDesc: "磁吸旋钮不只是麦克风——它是 ClawPool 的 AI 情感模块。屏幕上实时显示 AI 的情感状态，让你感受到它在认真听、在思考、在回应。内置麦克风拾音，底座音箱开口说话，就像真的有一个朋友坐在你旁边协助你工作。从底座取下后，通过 WiFi 继续与你的 Mac 通信，放在家中任意位置都能用。",
    voiceDescEn: "The magnetic knob is ClawPool's AI emotion module — its screen shows real-time emotional states so you feel it listening, thinking, and responding. Mic in the knob, speaker in the dock. Like having a friend right beside you at work. Detach anywhere, connects via WiFi.",
    ioLabel: "全接口扩展 · I/O Hub",
    ioTitle1: "一根线，",
    ioTitle2: "搞定一切。",
    ioDesc: "一根 Thunderbolt 4 接入 Mac Mini，所有外设全部就位——显示器、硬盘、网络、读卡器、音频，一步到位。内置音箱让 AI 直接开口回应，旋钮麦克风随时拾音，ClawPool 是你的 AI 对话终端，也是你的全能扩展坞。",
    usecaseLabel: "使用场景 · Use Cases",
    usecaseTitle1: "为每一位",
    usecaseTitle2: "创作者而生。",
    usecaseSub: "Built for Every Creator.",
    uc1Label: "开发者 / 工程师",
    uc1Title: "语音驱动的开发工作流",
    uc1Desc: "用语音启动服务、切换分支、运行测试。双 HDMI 2.1 支持多显示器，专注模式一句话触发。",
    uc2Label: "设计师 / 创意工作者",
    uc2Title: "创意工作室的 AI 搭档",
    uc2Desc: "Wacom 绘板、摄影机、调色设备全部接入。语音指令切换工作流，AI 自动整理素材到专属存储库。",
    uc3Label: "开发者 / Vibe Coder",
    uc3Title: "语音驱动 Vibe Coding",
    uc3Desc: "说出你的想法，ClawPool 自动调用 AI 生成代码、运行测试、提交 PR。双手不离键盘，思路不被打断。",
    uc4Label: "研究员 / 数据科学家",
    uc4Title: "AI 辅助科研分析",
    uc4Desc: "本地 AI 处理基因组数据、实验结果与论文摘要。数据不上云，隐私完全受保护，分析结果秒级呈现。",
    specLabel: "技术规格 · Specifications",
    specTitle1: "硬件规格",
    specTitle2: "一览。",
    specSub: "Hardware at a Glance",
    pricingLabel: "产品配置 · Product SKU",
    pricingTitle1: "配置你的",
    pricingTitle2: "ClawPool。",
    pricingDesc: "一款硬件，支持 Mac 和 Windows。选择你的系统和存储容量，价格将在 Kickstarter 众筹时公布。",
    skuCta: "Kickstarter 早鸟支持",
    osLabel: "选择系统",
    storageLabel: "选择容量",
    osMac: "Mac",
    osWin: "Windows",
    storageNote: "AI HUB 专属存储，与主硬盘物理隔离",
    configSummary: "你的配置",
    priceTBA: "价格待定",
    priceTBANote: "将在 Kickstarter 众筹时公布",
    included: "所有配置均包含",
    includedFeatures: ["完整 I/O 扩展坞", "OpenClaw AI（完整版）", "磁吸旋钮 AI 情感模块", "内置音箱", "AES-256 加密存储", "配套 App"],
    ctaTitle1: "一个真正懂你",
    ctaTitle2: "的 AI 工作伙伴。",
    ctaSub: "The First OpenClaw AI Dock. Secure by Design.",
    ctaDesc: "ClawPool 是全球首款内置完整版 OpenClaw AI 的扩展坞。AI 与主硬盘物理隔离，语音操控，内置音箱——就像有个朋友坐在你旁边。即将登陆 Kickstarter，成为早期支持者享最优惠早鸟价格。",
    backCta: "支持众筹 — Back on Kickstarter →",
    compatLabel: "兼容性 · Compatibility",
    recommended: "推荐",
    emotionLabel: "8 种情感状态：",
    waitlistTitle: "加入 Kickstarter 等待列表",
    waitlistDesc: "第一时间获取早鸟价格通知，限量 500 名早鸟支持者享受最高折扣。",
    waitlistPlaceholder: "输入你的邮箱地址",
    waitlistCta: "加入等待列表",
    waitlistNote: "我们不会发送垃圾邮件，随时可以退订。",
    waitlistSuccess: "已加入等待列表！我们会在 Kickstarter 上线时第一时间通知你。",
    faqLabel: "常见问题 · FAQ",
    faqTitle1: "你想知道的",
    faqTitle2: "都在这里。",
    faqs: [
      { q: "ClawPool 内置的是完整版 OpenClaw AI 吗？", a: "是的。ClawPool 内置完整版 OpenClaw AI，不是简化版或云端转发。语音指令直接在本地处理，你可以用自然语言操控 Mac、管理文件、自动化工作流——所有推理在本地完成，数据不离桌面。" },
      { q: "AI 安全隔离是如何工作的？", a: "OpenClaw AI 默认只能操作扩展坞内置硬盘（AI HUB 资料库），与你的 Mac 主硬盘完全物理隔离。你把需要 AI 处理的文件放进扩展坞硬盘，AI 才能读取。你的 macOS 系统文件、个人文档、桌面文件，AI 永远无法触碰。这是硬件级的物理隔离，不是软件权限控制。" },
      { q: "磁吸旋钮离开底座后还能用吗？", a: "可以。AI 情感模块是完全独立的 WiFi 设备，内置 400mAh 电池，续航 6-8 小时。从底座取下后，它通过局域网继续与你的 Mac 通信，放在家中任意位置都能用。归位底座后通过 Pogo Pin 自动充电。" },
      { q: "ClawPool 内置音箱吗？效果怎么样？", a: "是的，ClawPool 底座内置音箱。磁吸旋钮有麦克风拾音，底座音箱回应——你可以直接对着 ClawPool 说话，OpenClaw 会开口回应你，实现真正的语音对话体验。就像真的有一个朋友坐在你旁边协助你工作。" },
      { q: "Kickstarter 众筹什么时候开始？", a: "我们计划在 2025 年内发起 Kickstarter 众筹。加入等待列表，你将在众筹上线第一时间收到通知，并享有限量早鸟价格。" },
      { q: "旗舰版的声源定位功能是什么？", a: "旗舰版 AI 模块搭载 2.8 英寸 AMOLED 屏幕和双轴舵机，支持声源定位转头功能——当你说话时，模块会自动转向声音来源方向，提供更自然的交互体验。" },
    ],
  },
  en: {
    nav: ["Features", "Specs", "Use Cases", "Pricing"],
    navEn: ["功能", "规格", "使用场景", "定价"],
    cta: "Back on Kickstarter →",
    badge: "World's First OpenClaw AI Dock · Coming to Kickstarter",
    heroTitle1: "The First Dock",
    heroTitle2: "with Full OpenClaw",
    heroTitle3: "AI Built In.",
    heroSub: "AN OPENCLAW AI-DOCK — 全球首款 OpenClaw AI 扩展坞",
    heroTagline: "Full OpenClaw AI · Physical AI Isolation · Voice Control · Built-in Speaker — Like having a friend beside you at work.",
    heroDesc: "ClawPool has a full OpenClaw AI built in, designed for Mac Mini. AI is physically isolated from your main drive — it can only access the dock's dedicated storage. Voice wake, natural conversation, built-in speaker. A true AI companion.",
    heroDescEn: "首款内置完整版 OpenClaw AI 的扩展坞。AI 与主硬盘物理隔离，语音操控，内置音箱——真正的 AI 工作伙伴。",
    learnMore: "Explore Features",
    stat1: ["4TB", "Max Storage", "最大存储"],
    stat2: ["9+", "I/O Ports", "I/O 接口"],
    stat3: ["140W", "GaN Power", "GaN 供电"],
    stat4: ["3m", "Voice Range", "拾音距离"],
    whyTitle1: "Three Pillars,",
    whyTitle2: "One Dock.",
    whySub: "三大核心，一个底座。",
    whyDesc: "ClawPool is the world's first dock with a full OpenClaw AI built in. It's not just a hub — it's a true AI companion: voice-control your Mac, keep AI data physically isolated from your main drive, and connect everything with one cable.",
    p1Title: "Full OpenClaw AI Built-in",
    p1TitleEn: "完整版 OpenClaw AI",
    p1Desc: "ClawPool has a full OpenClaw AI inside — say \"Hey Claw\" and control your Mac with natural language: launch apps, manage files, automate workflows. Mic in the knob picks up your voice, speaker in the dock responds. Like talking to a friend. All inference runs locally.",
    p1Spec: "Wake < 300ms · 6-mic ring · 3m pickup · Local inference · Built-in speaker",
    p2Title: "Physical AI Isolation",
    p2TitleEn: "AI 安全隔离存储",
    p2Desc: "ClawPool's most important design: OpenClaw AI can only access the dock's built-in drive by default — physically isolated from your Mac's main disk. You put the files you want AI to process in. Your system files, personal documents, and desktop are permanently off-limits to AI.",
    p2Spec: "PCIe 4.0 · 7,000 MB/s · AES-256 · Up to 4TB · Physical isolation",
    p3Title: "Full I/O Hub + Speaker",
    p3TitleEn: "全接口扩展 + 内置音箱",
    p3Desc: "2× Thunderbolt 4, 2× HDMI 2.1 4K@120Hz, 2.5GbE, 4× USB-A 3.2, SD slot — one cable, everything connected. Built-in speaker lets AI talk back to you. The dock is your AI conversation terminal and your complete I/O hub.",
    p3Spec: "TB4 40Gbps · HDMI 2.1 · Built-in Speaker · 2.5GbE · SD UHS-II",
    secLabel: "Physical AI Isolation · Most Critical Design",
    secTitle1: "You Decide What",
    secTitle2: "AI Can See.",
    secDesc: "ClawPool's most critical design: OpenClaw AI can only access the dock's built-in drive (AI HUB Library) by default — physically isolated from your Mac's main disk. You put files in, AI can read them. Your macOS system, personal documents, and desktop are permanently off-limits.",
    secDescEn: "你决定让 AI 看什么。AI 默认只能操作扩展坞硬盘，与 Mac 主硬盘物理隔离。你的系统文件永远安全。",
    secF1: "AI can only access the dock's drive by default — main disk physically isolated",
    secF2: "Only files you put in are accessible to AI — you're always in control",
    secF3: "AES-256 hardware encryption with keys in a dedicated security chip",
    secF4: "All AI inference runs locally — data never leaves your desk",
    voiceLabel: "AI Companion · Magnetic Knob",
    voiceTitle1: "Like a Friend,",
    voiceTitle2: "Right Beside You.",
    voiceDesc: "The magnetic knob is ClawPool's AI emotion module — its screen shows real-time emotional states so you feel it listening, thinking, and responding. Mic in the knob picks up your voice, speaker in the dock talks back. It feels like a real friend sitting beside you, helping you work. Detach from the dock, and it keeps talking to your Mac over WiFi from anywhere in your home.",
    voiceDescEn: "磁吸旋钮是 ClawPool 的 AI 情感模块，屏幕实时显示情感状态。旋钮麦克风拾音，底座音箱回应，像期朋友坐在身边。",
    ioLabel: "Full I/O Hub · 全接口扩展",
    ioTitle1: "One Cable,",
    ioTitle2: "Everything Connected.",
    ioDesc: "One Thunderbolt 4 cable into Mac Mini, and every peripheral is ready — displays, drives, network, card reader, audio, all in one step. Built-in speaker lets AI talk back, knob mic picks up your voice anytime. ClawPool is your AI conversation terminal and your complete I/O hub.",
    usecaseLabel: "Use Cases · 使用场景",
    usecaseTitle1: "Built for Every",
    usecaseTitle2: "Creator.",
    usecaseSub: "为每一位创作者而生。",
    uc1Label: "Developer / Engineer",
    uc1Title: "Voice-Driven Dev Workflow",
    uc1Desc: "Start services, switch branches, run tests — all by voice. Dual HDMI 2.1 for multi-monitor setups. Focus mode triggered with a single phrase.",
    uc2Label: "Designer / Creative",
    uc2Title: "AI Partner for Your Studio",
    uc2Desc: "Connect Wacom tablets, cameras, and color tools. Voice commands switch workflows, AI auto-organizes assets into your dedicated storage library.",
    uc3Label: "Developer / Vibe Coder",
    uc3Title: "Voice-Driven Vibe Coding",
    uc3Desc: "Speak your intent — ClawPool calls AI to generate code, run tests, and commit PRs. Hands stay on the keyboard, flow state unbroken.",
    uc4Label: "Researcher / Data Scientist",
    uc4Title: "AI-Assisted Research",
    uc4Desc: "Process genomic data, experimental results, and paper summaries with local AI. Data never leaves your desk — privacy protected, results in seconds.",
    specLabel: "Specifications · 技术规格",
    specTitle1: "Hardware",
    specTitle2: "at a Glance.",
    specSub: "硬件规格一览",
    pricingLabel: "Product SKU · 产品配置",
    pricingTitle1: "Configure Your",
    pricingTitle2: "ClawPool.",
    pricingDesc: "One hardware, supports Mac and Windows. Choose your OS and storage capacity. Pricing will be announced at Kickstarter launch.",
    skuCta: "Back on Kickstarter",
    osLabel: "Choose OS",
    storageLabel: "Choose Storage",
    osMac: "Mac",
    osWin: "Windows",
    storageNote: "AI HUB dedicated storage, physically isolated from main drive",
    configSummary: "Your Configuration",
    priceTBA: "Price TBA",
    priceTBANote: "Will be announced at Kickstarter launch",
    included: "All configurations include",
    includedFeatures: ["Full I/O Hub", "Full OpenClaw AI", "Magnetic Knob AI Module", "Built-in Speaker", "AES-256 Encrypted Storage", "Companion App"],
    ctaTitle1: "A True AI Companion",
    ctaTitle2: "That Understands You.",
    ctaSub: "一个真正懂你的 AI 工作伙伴。",
    ctaDesc: "ClawPool is the world's first dock with a full OpenClaw AI built in. Physical AI isolation, voice control, built-in speaker — like having a friend beside you at work. Coming to Kickstarter. Be an early backer and get the best price.",
    backCta: "Back on Kickstarter — 支持众筹 →",
    compatLabel: "Compatibility · 兼容性",
    recommended: "Recommended",
    emotionLabel: "8 Emotion States: ",
    waitlistTitle: "Join the Kickstarter Waitlist",
    waitlistDesc: "Be the first to know when we launch. Limited early-bird slots available at the best price.",
    waitlistPlaceholder: "Enter your email address",
    waitlistCta: "Join Waitlist",
    waitlistNote: "No spam, ever. Unsubscribe anytime.",
    waitlistSuccess: "You're on the list! We'll notify you the moment we go live on Kickstarter.",
    faqLabel: "FAQ · 常见问题",
    faqTitle1: "Everything You",
    faqTitle2: "Want to Know.",
    faqs: [
      { q: "Does ClawPool have a full OpenClaw AI built in?", a: "Yes. ClawPool has a complete, full version of OpenClaw AI built in — not a lite version or cloud relay. Voice commands are processed locally. You can control your Mac, manage files, and automate workflows with natural language. All inference runs on-device, data never leaves your desk." },
      { q: "How does the physical AI isolation work?", a: "OpenClaw AI can only access the dock's built-in drive (AI HUB Library) by default — physically isolated from your Mac's main disk. You put the files you want AI to process into the dock's drive, and only then can AI read them. Your macOS system files, personal documents, and desktop are permanently off-limits. This is hardware-level physical isolation, not software permission control." },
      { q: "Can the magnetic knob work when detached from the dock?", a: "Yes. The AI emotion module is a fully standalone WiFi device with a built-in 400mAh battery lasting 6-8 hours. After detaching, it keeps communicating with your Mac via LAN and can be placed anywhere in your home. It charges automatically via Pogo Pin when docked." },
      { q: "Does ClawPool have a built-in speaker?", a: "Yes. The dock has a built-in speaker. The magnetic knob has a mic that picks up your voice, and the dock's speaker responds — you can talk directly to ClawPool, and OpenClaw talks back. A real voice conversation experience. Like having a friend right beside you at work." },
      { q: "When does the Kickstarter campaign launch?", a: "We plan to launch on Kickstarter in 2025. Join the waitlist to be notified the moment we go live and secure limited early-bird pricing." },
      { q: "What is the voice-tracking feature in the Flagship edition?", a: "The Flagship AI module features a 2.8-inch AMOLED display and dual-axis servo motors, enabling voice-source tracking — the module automatically turns toward the direction of your voice for a more natural interaction experience." },
    ],
  },
};

export default function Home() {
  const [lang, setLang] = useState<"zh" | "en">("zh");
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedOS, setSelectedOS] = useState<"mac" | "windows">("mac");
  const [selectedStorage, setSelectedStorage] = useState<"512GB" | "1TB" | "2TB">("1TB");
  const t = T[lang];

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (waitlistEmail.trim()) {
      setWaitlistSubmitted(true);
    }
  };

  const navLinks = [
    { href: "#features", label: t.nav[0] },
    { href: "#specs", label: t.nav[1] },
    { href: "#usecases", label: t.nav[2] },
    { href: "#pricing", label: t.nav[3] },
  ];

  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-20 bg-[#0a1218]/95 backdrop-blur-md border-b border-white/10">
        {/* Logo — icon + text */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          {/* Pure icon — graphic only, no text */}
          <img
            src={IMGS.logoIcon}
            alt="ClawPool"
            className="h-12 md:h-14 w-auto object-contain"
            style={{ filter: "drop-shadow(0 0 8px rgba(232,52,26,0.35))" }}
          />
          {/* Text lockup */}
          <div className="flex flex-col leading-none">
            <span
              className="font-display font-black tracking-tight"
              style={{ fontSize: "1.35rem", lineHeight: 1.1 }}
            >
              <span className="text-white">Claw</span><span style={{ color: "#E8341A" }}>Pool</span>
            </span>
            <span
              className="font-mono text-white/55 tracking-[0.12em] uppercase"
              style={{ fontSize: "0.6rem", marginTop: "3px" }}
            >
              AN OPENCLAW AI-DOCK
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right: lang toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 rounded-sm text-xs font-mono text-white/50 hover:text-white hover:border-white/40 transition-all"
          >
            <span className={lang === "zh" ? "text-white" : "text-white/40"}>中</span>
            <span className="text-white/20">/</span>
            <span className={lang === "en" ? "text-white" : "text-white/40"}>EN</span>
          </button>
          <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 bg-[#E8341A] text-white text-sm font-semibold rounded-sm hover:bg-[#c42a14] transition-colors tracking-wide">
            {t.cta}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="px-2 py-1 border border-white/20 rounded text-xs font-mono text-white/60"
          >
            {lang === "zh" ? "EN" : "中"}
          </button>
          <button className="text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-[#0a1218]/98 border-b border-white/10 px-6 py-4 flex flex-col gap-4 md:hidden">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-white/70 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
              className="mt-2 px-5 py-3 bg-[#E8341A] text-white text-sm font-semibold rounded-sm text-center">
              {t.cta}
            </a>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A] via-[#0D1B2A] to-[#0a1520]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(#4FC3F7 1px, transparent 1px), linear-gradient(90deg, #4FC3F7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-[calc(100vh-5rem)]">

            {/* Left — copy */}
            <div className="flex flex-col justify-center py-16 lg:py-0 lg:pr-12">
              {/* Badge — First OpenClaw Hardware */}
              <div className="inline-flex items-center gap-2 mb-5 self-start bg-[#E8341A]/10 border border-[#E8341A]/30 px-4 py-2 rounded-sm">
                <span className="w-2 h-2 rounded-full bg-[#E8341A] animate-pulse shrink-0" />
                <span className="text-xs font-mono text-[#E8341A] tracking-[0.15em] uppercase">{t.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-[clamp(2.6rem,6vw,5rem)] font-black leading-[1.0] tracking-tight mb-4">
                <span className="block text-white">{t.heroTitle1}</span>
                <span className="block text-[#E8341A]">{t.heroTitle2}</span>
                <span className="block text-white">{t.heroTitle3}</span>
              </h1>
              <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.15em] uppercase mb-5">
                {t.heroSub}
              </p>

              {/* Tagline — core value proposition */}
              <p className="text-base md:text-lg font-medium text-white/90 leading-snug max-w-lg mb-4 border-l-2 border-[#E8341A] pl-4">
                {t.heroTagline}
              </p>

              {/* Description — show only current language */}
              <p className="text-sm text-white/50 leading-relaxed max-w-lg mb-8">
                {t.heroDesc}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-14">
                <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-[#E8341A] text-white font-semibold text-sm rounded-sm hover:bg-[#c42a14] transition-all">
                  <span>{t.cta}</span>
                </a>
                <a href="#features"
                  className="px-7 py-3.5 border border-white/25 text-white/70 font-medium text-sm rounded-sm hover:border-white/50 hover:text-white transition-all">
                  {t.learnMore}
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 border-t border-white/10 pt-8">
                {[t.stat1, t.stat2, t.stat3, t.stat4].map((s) => (
                  <div key={s[0]} className="flex flex-col">
                    <span className="font-display font-black text-2xl md:text-3xl text-white">{s[0]}</span>
                    <span className="text-[10px] font-mono text-[#4FC3F7] tracking-widest mt-1">{s[2]}</span>
                    <span className="text-xs text-white/40 mt-0.5">{s[1]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="absolute w-[500px] h-[500px] rounded-full bg-[#E8341A]/10 blur-[100px] pointer-events-none" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-[#4FC3F7]/8 blur-[80px] pointer-events-none translate-x-20" />
              <div className="relative z-10 w-full max-w-[640px]">
                <img src={IMGS.hero} alt="ClawPool AI Dock"
                  className="w-full h-auto object-contain"
                  style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.6)) drop-shadow(0 0 40px rgba(232,52,26,0.15))" }} />
                <div className="absolute top-[15%] left-0 md:-left-8 bg-[#0a1218]/95 border border-[#E8341A]/40 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono">
                  <div className="text-[#E8341A] font-bold">HEY CLAW</div>
                  <div className="text-white/50">{lang === "zh" ? "语音已激活" : "Voice Activated"}</div>
                </div>
                <div className="absolute bottom-[20%] right-0 md:-right-4 bg-[#0a1218]/95 border border-[#4FC3F7]/40 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono">
                  <div className="text-[#4FC3F7] font-bold">PCIe 4.0 NVMe</div>
                  <div className="text-white/50">7,000 MB/s {lang === "zh" ? "读取" : "Read"}</div>
                </div>
                <div className="absolute top-[45%] right-0 md:-right-6 bg-[#0a1218]/95 border border-white/20 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono">
                  <div className="text-white font-bold">{lang === "zh" ? "AI 安全边界" : "AI Sandbox"}</div>
                  <div className="text-white/50">{lang === "zh" ? "物理隔离保护" : "Physical isolation"}</div>
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

      {/* ─── WAITLIST BANNER ─── */}
      <section className="bg-[#0a1218] border-y border-white/8 py-10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E8341A] animate-pulse" />
                <span className="text-xs font-mono text-[#E8341A] tracking-[0.15em] uppercase">
                  {lang === "zh" ? "即将登陆 Kickstarter" : "Coming to Kickstarter"}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-black text-white mb-2">
                {t.waitlistTitle}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{t.waitlistDesc}</p>
            </div>
            <div className="flex-1 max-w-md w-full">
              {waitlistSubmitted ? (
                <div className="flex items-center gap-3 bg-[#4FC3F7]/10 border border-[#4FC3F7]/30 rounded-sm px-5 py-4">
                  <span className="text-[#4FC3F7] text-xl">&#10003;</span>
                  <p className="text-[#4FC3F7] text-sm font-medium">{t.waitlistSuccess}</p>
                </div>
              ) : (
                <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder={t.waitlistPlaceholder}
                    className="flex-1 bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#E8341A]/60 transition-colors"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-6 py-3 bg-[#E8341A] text-white text-sm font-semibold rounded-sm hover:bg-[#c42a14] transition-colors whitespace-nowrap"
                  >
                    {t.waitlistCta}
                  </button>
                </form>
              )}
              {!waitlistSubmitted && (
                <p className="text-xs text-white/25 mt-2 font-mono">{t.waitlistNote}</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ─── */}
      <section className="py-24 md:py-32 bg-[#0a1520]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">
              {lang === "zh" ? "为什么是 ClawPool" : "Why ClawPool"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-3">
              {t.whyTitle1}<br />
              <span className="text-[#E8341A]">{t.whyTitle2}</span>
            </h2>
            <p className="text-white/40 text-lg mb-4">{t.whySub}</p>
            <p className="text-white/50 text-base leading-relaxed max-w-2xl">{t.whyDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: "01", icon: "🎙", title: t.p1Title, titleEn: t.p1TitleEn, desc: t.p1Desc, spec: t.p1Spec, color: "#E8341A" },
              { num: "02", icon: "⚡", title: t.p2Title, titleEn: t.p2TitleEn, desc: t.p2Desc, spec: t.p2Spec, color: "#4FC3F7" },
              { num: "03", icon: "🔒", title: t.p3Title, titleEn: t.p3TitleEn, desc: t.p3Desc, spec: t.p3Spec, color: "#E8341A" },
            ].map((p) => (
              <div key={p.num}
                className="group relative bg-[#0D1B2A] border border-white/8 hover:border-white/20 rounded-sm p-8 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: p.color }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="font-mono text-4xl font-bold opacity-20">{p.num}</span>
                    <span className="text-3xl">{p.icon}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-1">{p.title}</h3>
                  <p className="text-xs font-mono text-white/30 mb-4">{p.titleEn}</p>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">{p.desc}</p>
                  <p className="text-xs font-mono text-white/30 leading-relaxed">{p.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VIDEO SHOWCASE ─── */}
      <section className="relative py-24 md:py-32 bg-[#060e18] overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "linear-gradient(#4FC3F7 1px, transparent 1px), linear-gradient(90deg, #4FC3F7 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Red glow top-left */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#E8341A]/10 blur-[100px] pointer-events-none" />
        {/* Blue glow bottom-right */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#4FC3F7]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12">
          {/* Section label */}
          <div className="text-center mb-12">
            <p className="text-xs font-mono text-[#E8341A] tracking-[0.25em] uppercase mb-4">
              {lang === "zh" ? "产品演示 · PRODUCT DEMO" : "PRODUCT DEMO · 产品演示"}
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4">
              {lang === "zh" ? (
                <>{"看它如何"}<br /><span className="text-[#E8341A]">{'改变你的工作台。'}</span></>
              ) : (
                <>{"See How It"}<br /><span className="text-[#E8341A]">{"Transforms Your Desk."}</span></>
              )}
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">
              {lang === "zh"
                ? "一根线、一句话、一个底座——ClawPool 重新定义 Mac Mini 的使用方式。"
                : "One cable, one voice, one dock — ClawPool redefines how you use Mac Mini."}
            </p>
          </div>

          {/* Video player container */}
          <div className="relative group rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            style={{ boxShadow: "0 0 80px rgba(232,52,26,0.12), 0 0 40px rgba(0,0,0,0.6)" }}>

            {/* Aspect ratio wrapper 16:9 */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>

              {/* Placeholder background — product image */}
              <div className="absolute inset-0 bg-[#0D1B2A]">
                <img
                  src={IMGS.workstation}
                  alt="ClawPool Product Demo"
                  className="w-full h-full object-cover opacity-60"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/80 via-[#0D1B2A]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8341A]/5 to-[#4FC3F7]/5" />
              </div>

              {/* HUD corner decorations */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#E8341A]/60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#E8341A]/60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#E8341A]/60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#E8341A]/60" />

              {/* Top-left badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8341A] animate-pulse" />
                <span className="text-xs font-mono text-white/60 tracking-widest uppercase">
                  {lang === "zh" ? "产品宣传片" : "PRODUCT FILM"}
                </span>
              </div>

              {/* Duration badge */}
              <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-sm">
                <span className="text-xs font-mono text-white/50">02:30</span>
              </div>

              {/* Center play button */}
              {!videoPlaying && (
                <button
                  onClick={() => setVideoPlaying(true)}
                  className="absolute inset-0 flex flex-col items-center justify-center gap-5 group/play"
                  aria-label="Play video"
                >
                  {/* Outer ring */}
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-[#E8341A]/20 scale-150 group-hover/play:scale-[1.8] transition-transform duration-500" />
                    <div className="absolute inset-0 rounded-full bg-[#E8341A]/10 scale-[2.2] group-hover/play:scale-[2.6] transition-transform duration-700" />
                    {/* Play circle */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E8341A] flex items-center justify-center shadow-lg group-hover/play:bg-[#c42a14] transition-colors duration-200"
                      style={{ boxShadow: "0 0 40px rgba(232,52,26,0.5)" }}>
                      {/* Play triangle */}
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="ml-1.5">
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  {/* Label */}
                  <div className="text-center">
                    <p className="text-white font-display font-bold text-lg md:text-xl tracking-wide">
                      {lang === "zh" ? "观看产品演示" : "Watch Product Demo"}
                    </p>
                    <p className="text-white/40 text-sm font-mono mt-1">
                      {lang === "zh" ? "视频即将上线" : "Video coming soon"}
                    </p>
                  </div>
                </button>
              )}

              {/* Coming soon overlay (shown after click) */}
              {videoPlaying && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D1B2A]/95 gap-4">
                  <div className="w-16 h-16 rounded-full border-2 border-[#E8341A]/40 flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E8341A" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <p className="font-display font-bold text-xl text-white">
                    {lang === "zh" ? "视频即将上线" : "Video Coming Soon"}
                  </p>
                  <p className="text-white/40 text-sm text-center max-w-xs">
                    {lang === "zh"
                      ? "我们正在制作产品宣传片，敬请期待。关注 Kickstarter 获取第一手资讯。"
                      : "Our product film is in production. Follow our Kickstarter to be the first to watch."}
                  </p>
                  <button
                    onClick={() => setVideoPlaying(false)}
                    className="mt-2 px-5 py-2 border border-white/20 text-white/50 text-xs font-mono rounded-sm hover:border-white/40 hover:text-white transition-all">
                    {lang === "zh" ? "返回" : "Go Back"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bottom feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {(lang === "zh"
              ? ["语音唤醒演示", "安全边界展示", "一根线连接", "磁吸旋钮拆装", "AI 工作流"]
              : ["Voice Wake Demo", "Security Sandbox", "Single Cable Setup", "Magnetic Knob", "AI Workflow"]
            ).map((tag) => (
              <span key={tag}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-sm text-xs font-mono text-white/40 tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE 1: SECURITY (full-bleed split) ─── */}
      <section id="features" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
          <div className="relative h-[400px] lg:h-auto overflow-hidden">
            <img src={IMGS.verticalShowcase} alt="ClawPool Vertical Showcase"
              className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1B2A] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent lg:hidden" />
          </div>
          <div className="bg-[#0D1B2A] flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-24">
            <div className="max-w-xl">
              <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">{t.secLabel}</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                {t.secTitle1}<br />
                <span className="text-[#E8341A]">{t.secTitle2}</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-3">{t.secDesc}</p>
              <p className="text-white/35 text-sm leading-relaxed mb-8">{t.secDescEn}</p>
              <div className="space-y-4">
                {[
                  { icon: "🛡", text: t.secF1, en: "AI-only storage sandbox" },
                  { icon: "🔑", text: t.secF2, en: "AES-256 hardware encryption" },
                  { icon: "📥", text: t.secF3, en: "Auto-sandboxed file import" },
                  { icon: "🏠", text: t.secF4, en: "100% local NLP inference" },
                ].map((f) => (
                  <div key={f.en} className="flex items-start gap-3">
                    <span className="text-lg mt-0.5 shrink-0">{f.icon}</span>
                    <div>
                      <p className="text-sm text-white/70">{f.text}</p>
                      <p className="text-xs font-mono text-white/25">{f.en}</p>
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
          <div className="flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
            <div className="max-w-xl">
              <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">{t.voiceLabel}</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6">
                {t.voiceTitle1}<br />
                <span className="text-[#4FC3F7]">{t.voiceTitle2}</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-3">{t.voiceDesc}</p>
              <p className="text-white/35 text-sm leading-relaxed mb-8">{t.voiceDescEn}</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: "< 300ms", label: lang === "zh" ? "唤醒延迟" : "Wake latency", sub: lang === "zh" ? "Wake latency" : "唤醒延迟" },
                  { val: lang === "zh" ? "6 麦" : "6 Mics", label: lang === "zh" ? "环形阵列" : "Ring array", sub: lang === "zh" ? "Mic ring array" : "麦克风阵列" },
                  { val: lang === "zh" ? "3 米" : "3m", label: lang === "zh" ? "拾音距离" : "Pickup range", sub: lang === "zh" ? "Pickup range" : "拾音距离" },
                  { val: "6–8h", label: lang === "zh" ? "独立续航" : "Battery life", sub: lang === "zh" ? "Battery life" : "独立续航" },
                ].map((s) => (
                  <div key={s.val} className="bg-white/5 border border-white/8 rounded-sm p-4">
                    <div className="font-display font-black text-xl text-white">{s.val}</div>
                    <div className="text-xs text-white/50 mt-1">{s.label}</div>
                    <div className="text-xs font-mono text-white/25">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-white/30 font-mono mr-1">{t.emotionLabel}</span>
                {["😴", "👂", "🤔", "⚡", "✅", "😵", "🔔", "🎵"].map((e) => (
                  <span key={e} className="text-base bg-white/5 border border-white/10 px-2 py-1 rounded">{e}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2">
            <img src={IMGS.knobHD} alt="ClawPool Magnetic Knob"
              className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#060e18] hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e18] to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* ─── FEATURE 3: I/O HUB — with front-flat product image ─── */}
      <section id="io" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[680px]">
            {/* Left: scene_D_boot full-bleed image */}
            <div className="relative h-[420px] lg:h-auto overflow-hidden order-2 lg:order-1">
              <img
                src={IMGS.sceneBoot}
                alt="ClawPool One Cable Setup"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0D1B2A] hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] to-transparent lg:hidden" />
            </div>

            {/* Right: I/O specs */}
            <div className="bg-[#0D1B2A] flex items-center px-8 md:px-12 lg:px-16 py-16 lg:py-24 order-1 lg:order-2">
              <div className="max-w-xl w-full">
              <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">{t.ioLabel}</p>
              <h2 className="font-display text-3xl md:text-4xl font-black leading-tight mb-6">
                {t.ioTitle1}<br />
                <span className="text-[#4FC3F7]">{t.ioTitle2}</span>
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{t.ioDesc}</p>
              <div className="space-y-3">
                {[
                  { port: "Thunderbolt 4", spec: "40 Gbps × 2", note: lang === "zh" ? "单线供电 + 数据" : "Power + Data" },
                  { port: "HDMI 2.1", spec: "4K@120Hz × 2", note: lang === "zh" ? "双显示器支持" : "Dual monitor" },
                  { port: "USB-A 3.2 Gen2", spec: "10 Gbps × 4", note: lang === "zh" ? "常用设备连接" : "Peripheral hub" },
                  { port: "USB-C 3.2", spec: "10 Gbps × 2", note: lang === "zh" ? "通用扩展" : "Universal" },
                  { port: "DisplayPort 1.4", spec: "4K@144Hz × 1", note: lang === "zh" ? "高刷新率显示器" : "High-refresh display" },
                  { port: lang === "zh" ? "SD 卡槽" : "SD Card Slot", spec: "UHS-II 312 MB/s", note: lang === "zh" ? "摄影师必备" : "Photographer essential" },
                  { port: lang === "zh" ? "RJ45 以太网" : "RJ45 Ethernet", spec: "2.5 Gbps", note: lang === "zh" ? "有线网络" : "Wired network" },
                  { port: lang === "zh" ? "3.5mm 音频" : "3.5mm Audio", spec: lang === "zh" ? "麦克风 + 耳机" : "Mic + Headphone", note: lang === "zh" ? "二合一接口" : "Combo jack" },
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
      {/* ─── USE CASES ─── */}
      <section id="usecases" className="relative py-24 md:py-32 overflow-hidden bg-[#060e18]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16">
            <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">{t.usecaseLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t.usecaseTitle1}<br />
              <span className="text-[#E8341A]">{t.usecaseTitle2}</span>
            </h2>
            <p className="text-white/40 text-lg mt-3">{t.usecaseSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use case 1: Developer — workstation scene */}
            <div className="rounded-sm overflow-hidden group bg-[#0a1628] border border-white/8">
              <div className="overflow-hidden">
                <img src={IMGS.workstation} alt="Developer workstation"
                  className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs font-mono text-[#E8341A] tracking-widest uppercase mb-2">{t.uc1Label}</p>
                <h3 className="font-display text-xl font-black text-white mb-2">{t.uc1Title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{t.uc1Desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(lang === "zh"
                    ? ["4TB 安全存储", "语音触发构建", "双显示器", "本地 AI 推理"]
                    : ["4TB Secure Storage", "Voice-triggered builds", "Dual monitors", "Local AI inference"]
                  ).map(tag => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/15 px-2.5 py-1 rounded text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Use case 2: Designer / Creative — studio scene */}
            <div className="rounded-sm overflow-hidden group bg-[#0a1628] border border-white/8">
              <div className="overflow-hidden">
                <img src={IMGS.studioScene} alt="Creative studio"
                  className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs font-mono text-[#4FC3F7] tracking-widest uppercase mb-2">{t.uc2Label}</p>
                <h3 className="font-display text-xl font-black text-white mb-2">{t.uc2Title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{t.uc2Desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(lang === "zh"
                    ? ["Wacom 全接口", "语音切换工作流", "素材自动归档", "4TB 创意存储"]
                    : ["Wacom full I/O", "Voice workflow switch", "Auto asset archiving", "4TB creative storage"]
                  ).map(tag => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/15 px-2.5 py-1 rounded text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Use case 3: Vibe Coding — coding image */}
            <div className="rounded-sm overflow-hidden group bg-[#0a1628] border border-white/8">
              <div className="overflow-hidden">
                <img src={IMGS.coding} alt="Voice-driven Vibe Coding"
                  className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs font-mono text-[#E8341A] tracking-widest uppercase mb-2">{t.uc3Label}</p>
                <h3 className="font-display text-xl font-black text-white mb-2">{t.uc3Title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{t.uc3Desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(lang === "zh"
                    ? ["语音生成代码", "自动运行测试", "AI 提交 PR", "本地 NLP"]
                    : ["Voice-to-code", "Auto-run tests", "AI commits PR", "Local NLP"]
                  ).map(tag => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/15 px-2.5 py-1 rounded text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Use case 4: Research — research helper image */}
            <div className="rounded-sm overflow-hidden group bg-[#0a1628] border border-white/8">
              <div className="overflow-hidden">
                <img src={IMGS.research} alt="AI Research Assistant"
                  className="w-full h-[300px] object-cover object-center group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs font-mono text-[#4FC3F7] tracking-widest uppercase mb-2">{t.uc4Label}</p>
                <h3 className="font-display text-xl font-black text-white mb-2">{t.uc4Title}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">{t.uc4Desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(lang === "zh"
                    ? ["本地 AI 推理", "数据不上云", "隐私保护", "秒级分析"]
                    : ["Local AI inference", "Data never leaves", "Privacy protected", "Instant analysis"]
                  ).map(tag => (
                    <span key={tag} className="text-xs bg-white/10 border border-white/15 px-2.5 py-1 rounded text-white/60">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECS ─── */}
      <section id="specs" className="py-24 md:py-32 bg-[#0D1B2A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16">
            <p className="text-xs font-mono text-[#4FC3F7] tracking-[0.2em] uppercase mb-4">{t.specLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
              {t.specTitle1}<br />
              <span className="text-[#4FC3F7]">{t.specTitle2}</span>
            </h2>
            <p className="text-white/40 text-lg mt-3">{t.specSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: lang === "zh" ? "AI 情感模块" : "AI Module",
                titleEn: lang === "zh" ? "AI Module" : "AI 情感模块",
                color: "#E8341A",
                specs: [
                  [lang === "zh" ? "主控芯片" : "MCU", "ESP32-S3 240MHz"],
                  [lang === "zh" ? "屏幕" : "Display", "2.4\" OLED 480×480"],
                  [lang === "zh" ? "麦克风" : "Microphone", lang === "zh" ? "6 麦阵列 3m" : "6-mic array 3m"],
                  [lang === "zh" ? "电池" : "Battery", "400mAh 6–8h"],
                  [lang === "zh" ? "无线" : "Wireless", "WiFi 2.4GHz"],
                  [lang === "zh" ? "磁吸力" : "Magnetic", "≥ 12N"],
                ],
              },
              {
                title: lang === "zh" ? "存储" : "Storage",
                titleEn: lang === "zh" ? "Storage" : "存储",
                color: "#4FC3F7",
                specs: [
                  [lang === "zh" ? "接口" : "Interface", "M.2 NVMe PCIe 4.0"],
                  [lang === "zh" ? "读取" : "Read", "≥ 7,000 MB/s"],
                  [lang === "zh" ? "写入" : "Write", "≥ 5,000 MB/s"],
                  [lang === "zh" ? "加密" : "Encryption", "AES-256"],
                  [lang === "zh" ? "容量" : "Capacity", "1 / 2 / 4 TB"],
                  [lang === "zh" ? "文件系统" : "Filesystem", "APFS / exFAT"],
                ],
              },
              {
                title: lang === "zh" ? "接口" : "Connectivity",
                titleEn: lang === "zh" ? "Connectivity" : "接口",
                color: "#E8341A",
                specs: [
                  ["Thunderbolt 4", "40Gbps × 2"],
                  ["USB-A 3.2 Gen2", "10Gbps × 4"],
                  ["HDMI 2.1", "4K@120Hz × 2"],
                  ["DisplayPort 1.4", "4K@144Hz × 1"],
                  [lang === "zh" ? "以太网" : "Ethernet", "2.5GbE"],
                  ["SD", "UHS-II 312MB/s"],
                ],
              },
              {
                title: lang === "zh" ? "供电与散热" : "Power & Thermal",
                titleEn: lang === "zh" ? "Power & Thermal" : "供电与散热",
                color: "#4FC3F7",
                specs: [
                  [lang === "zh" ? "电源" : "Power", "140W GaN"],
                  [lang === "zh" ? "散热" : "Cooling", lang === "zh" ? "单涡轮风扇" : "Single turbine fan"],
                  [lang === "zh" ? "噪音" : "Noise", "< 25dB @1m"],
                  [lang === "zh" ? "工作温度" : "Temp", "0°C ~ 40°C"],
                  [lang === "zh" ? "兼容性" : "Compatible", "Mac Mini M2/M4"],
                  [lang === "zh" ? "磁吸充电" : "Charging", "Pogo Pin 4-pin"],
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
            <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{t.compatLabel}</p>
            <div className="mb-4">
              <p className="text-xs text-white/30 font-mono mb-3">macOS</p>
              <div className="flex flex-wrap gap-3 mb-5">
                {[
                  { model: "Mac Mini M4 (2024)", recommended: true },
                  { model: "Mac Mini M4 Pro (2024)", recommended: true },
                  { model: "Mac Mini M2 (2023)", recommended: false },
                  { model: "Mac Mini M2 Pro (2023)", recommended: false },
                ].map(m => (
                  <div key={m.model} className={`flex items-center gap-2 px-4 py-2 rounded-sm border text-sm ${m.recommended ? "border-[#E8341A]/40 bg-[#E8341A]/5" : "border-white/10"}`}>
                    <span className="text-green-400 text-xs">✓</span>
                    <span className="text-white/70">{m.model}</span>
                    {m.recommended && <span className="text-xs font-mono text-[#E8341A] ml-1">{t.recommended}</span>}
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 font-mono mb-3">Windows</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { model: "Windows 11 (x64)", recommended: true },
                  { model: "Windows 10 (x64)", recommended: false },
                ].map(m => (
                  <div key={m.model} className={`flex items-center gap-2 px-4 py-2 rounded-sm border text-sm ${m.recommended ? "border-[#4FC3F7]/40 bg-[#4FC3F7]/5" : "border-white/10"}`}>
                    <span className="text-green-400 text-xs">✓</span>
                    <span className="text-white/70">{m.model}</span>
                    {m.recommended && <span className="text-xs font-mono text-[#4FC3F7] ml-1">{t.recommended}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING / SKU ─── */}
      <section id="pricing" className="py-24 md:py-32 bg-[#060e18]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="mb-16 text-center">
            <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">{t.pricingLabel}</p>
            <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4">
              {t.pricingTitle1}<br />
              <span className="text-[#E8341A]">{t.pricingTitle2}</span>
            </h2>
            <p className="text-white/40 text-base max-w-xl mx-auto">{t.pricingDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
            {/* Left: Configurator */}
            <div className="space-y-8">
              {/* OS Selection */}
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{t.osLabel}</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["mac", "windows"] as const).map((os) => (
                    <button
                      key={os}
                      onClick={() => setSelectedOS(os)}
                      className={`relative flex flex-col items-center gap-3 p-5 rounded-sm border transition-all ${
                        selectedOS === os
                          ? "border-[#E8341A] bg-[#E8341A]/8"
                          : "border-white/10 bg-[#0D1B2A] hover:border-white/30"
                      }`}
                    >
                      {selectedOS === os && (
                        <span className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#E8341A]" />
                      )}
                      <span className="text-2xl">{os === "mac" ? "🍎" : "🪟"}</span>
                      <span className={`text-sm font-semibold ${selectedOS === os ? "text-white" : "text-white/50"}`}>
                        {os === "mac" ? t.osMac : t.osWin}
                      </span>
                      <span className="text-xs font-mono text-white/30">
                        {os === "mac" ? "macOS 14+" : "Windows 11"}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Selection */}
              <div>
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{t.storageLabel}</p>
                <div className="grid grid-cols-3 gap-3">
                  {(["512GB", "1TB", "2TB"] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedStorage(size)}
                      className={`relative flex flex-col items-center gap-2 p-4 rounded-sm border transition-all ${
                        selectedStorage === size
                          ? "border-[#E8341A] bg-[#E8341A]/8"
                          : "border-white/10 bg-[#0D1B2A] hover:border-white/30"
                      }`}
                    >
                      {selectedStorage === size && (
                        <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#E8341A]" />
                      )}
                      <span className={`text-lg font-display font-black ${selectedStorage === size ? "text-white" : "text-white/50"}`}>
                        {size}
                      </span>
                      <span className="text-xs font-mono text-white/30">NVMe</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-white/25 mt-3 font-mono">{t.storageNote}</p>
              </div>
            </div>

            {/* Right: Summary */}
            <div className="bg-[#0D1B2A] border border-white/10 rounded-sm p-8">
              <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6">{t.configSummary}</p>

              {/* Selected config display */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/8">
                <div className="w-12 h-12 rounded-sm bg-[#060e18] border border-white/10 flex items-center justify-center text-2xl">
                  {selectedOS === "mac" ? "🍎" : "🪟"}
                </div>
                <div>
                  <p className="text-white font-semibold">
                    ClawPool · {selectedOS === "mac" ? t.osMac : t.osWin}
                  </p>
                  <p className="text-sm font-mono text-[#E8341A]">{selectedStorage} NVMe</p>
                </div>
              </div>

              {/* Price TBA */}
              <div className="mb-6 pb-6 border-b border-white/8">
                <p className="text-3xl font-display font-black text-white/30">{t.priceTBA}</p>
                <p className="text-xs font-mono text-white/25 mt-1">{t.priceTBANote}</p>
              </div>

              {/* Included features */}
              <div className="mb-8">
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">{t.included}</p>
                <div className="space-y-2">
                  {t.includedFeatures.map((f: string) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/60">
                      <span className="text-[#4FC3F7] text-xs">✓</span>
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
                className="block w-full text-center py-3 text-sm font-semibold rounded-sm bg-[#E8341A] text-white hover:bg-[#c42a14] transition-colors">
                {t.skuCta}
              </a>
            </div>
          </div>
        </div>
      </section>

            {/* ─── FAQ ─── */}
      <section className="py-24 md:py-32 bg-[#0D1B2A]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: heading */}
            <div className="lg:sticky lg:top-28">
              <p className="text-xs font-mono text-[#E8341A] tracking-[0.2em] uppercase mb-4">{t.faqLabel}</p>
              <h2 className="font-display text-4xl md:text-5xl font-black leading-tight mb-6">
                {t.faqTitle1}<br />
                <span className="text-[#E8341A]">{t.faqTitle2}</span>
              </h2>
              <p className="text-white/40 text-base leading-relaxed mb-8">
                {lang === "zh"
                  ? "如果你有其他问题，欢迎通过 Kickstarter 页面联系我们。"
                  : "Have more questions? Reach out to us on our Kickstarter page."}
              </p>
              <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/60 text-sm font-medium rounded-sm hover:border-white/50 hover:text-white transition-all">
                {lang === "zh" ? "前往 Kickstarter" : "Visit Kickstarter"} →
              </a>
            </div>

            {/* Right: accordion */}
            <div className="space-y-2">
              {t.faqs.map((faq, i) => (
                <div key={i}
                  className={`border rounded-sm overflow-hidden transition-colors ${
                    openFaq === i ? "border-[#E8341A]/40 bg-[#E8341A]/5" : "border-white/8 bg-white/2 hover:border-white/15"
                  }`}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                  >
                    <span className="font-medium text-white/80 text-sm pr-4">{faq.q}</span>
                    <span className={`shrink-0 w-5 h-5 flex items-center justify-center rounded-full border transition-all ${
                      openFaq === i
                        ? "border-[#E8341A] text-[#E8341A] rotate-45"
                        : "border-white/20 text-white/40"
                    }`}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <line x1="5" y1="0" x2="5" y2="10" stroke="currentColor" strokeWidth="1.5" />
                        <line x1="0" y1="5" x2="10" y2="5" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5">
                      <p className="text-white/55 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-32 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0">
          <img src={IMGS.socialPost} alt="" className="w-full h-full object-cover object-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/80 to-[#0D1B2A]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <img src={IMGS.logoLight} alt="ClawPool" className="h-14 md:h-18 w-auto object-contain mx-auto mb-10"
            style={{ filter: "drop-shadow(0 0 12px rgba(232,52,26,0.4))" }} />
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight mb-6">
            {t.ctaTitle1}<br />
            <span className="text-[#E8341A]">{t.ctaTitle2}</span>
          </h2>
          <p className="text-white/40 text-base md:text-lg leading-relaxed mb-3">{t.ctaSub}</p>
          <p className="text-white/35 text-sm leading-relaxed mb-10 max-w-xl mx-auto">{t.ctaDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="https://kickstarter.com" target="_blank" rel="noopener noreferrer"
              className="px-10 py-4 bg-[#E8341A] text-white font-bold text-base rounded-sm hover:bg-[#c42a14] transition-colors">
              {t.backCta}
            </a>
          </div>
          <div className="flex justify-center gap-10 flex-wrap">
            {[
              { val: "$150K", label: lang === "zh" ? "众筹目标" : "Funding Goal" },
              { val: "30" + (lang === "zh" ? "天" : " Days"), label: lang === "zh" ? "众筹周期" : "Campaign Duration" },
              { val: "5,000+", label: lang === "zh" ? "目标支持者" : "Target Backers" },
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
            <img src={IMGS.logoLight} alt="ClawPool" className="h-8 w-auto object-contain" />
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
