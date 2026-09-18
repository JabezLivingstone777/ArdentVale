import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  Workflow,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Bot,
  Lock,
  LineChart,
  Users,
  Activity,
  Award,
  FileText,
  MessageSquare,
  UserCheck,
  CreditCard,
  CalendarCheck,
  Briefcase,
  Target,
  Server,
  X,
  Send,
  GraduationCap,
  Globe,
  Video,
  BookOpen,
  Layers,
  Cpu,
  Flame,
  Check,
  Clock,
  PlayCircle,
  BarChart3,
  Sliders,
  DollarSign,
  Laptop,
  Database,
  Search,
  CheckCircle,
} from "lucide-react";

const OurProductsPage = () => {
  const [activeTab, setActiveTab] = useState("all"); // 'all' | 'synqdoc' | 'hrm' | 'protutors'
  const [activeShowcase, setActiveShowcase] = useState("synqdoc");
  const [openFaq, setOpenFaq] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState("ProTutors LMS");
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50",
    product: "ProTutors LMS",
    message: "",
  });

  // Product 1: SynqDoc
  const synqdoc = {
    id: "synqdoc",
    number: "01",
    name: "SynqDoc™ AI",
    badge: "Enterprise AI & Doc Intelligence",
    tagline: "Autonomous Conversational AI & Neural Document Extraction Pipeline",
    url: "https://synqdoc.com/",
    displayUrl: "synqdoc.com",
    category: "Conversational AI / OCR",
    accentColor: "from-orange-500 to-amber-500",
    glowColor: "rgba(249, 115, 22, 0.25)",
    shortDesc:
      "Transform unstructured contracts, invoices, and multi-turn enterprise queries into automated operational workflows with 99.8% precision neural extraction.",
    stats: [
      { label: "Extraction Precision", value: "99.8%", sub: "OCR & Semantic NLP" },
      { label: "Query Resolution", value: "85%", sub: "Automated by AI" },
      { label: "Processing Speed", value: "10x", sub: "Faster turn-around" },
      { label: "API Integrations", value: "200+", sub: "CRM, ERP & Cloud" },
    ],
    highlights: [
      "Human-Grade Multi-Agent Conversational AI",
      "Instant PDF, Invoice & Legal Contract Parsing",
      "Automated Multi-Step Cross-System Workflows",
      "Bank-Grade AES-256 Encryption & PII Redaction",
      "Real-Time Query Telemetry & Sentiment Scoring",
    ],
    mockupUrl: "app.synqdoc.com/console",
    mockupBadge: "AI Engine Active",
    mockupMetrics: { label1: "Throughput", val1: "2,450 docs/hr", label2: "Latency", val2: "38ms" },
    pricingStarting: "$399/mo",
  };

  // Product 2: HRMS
  const hrm = {
    id: "hrm",
    number: "02",
    name: "HRMS™ Suite",
    badge: "Workforce & Payroll OS",
    tagline: "All-in-One Cloud HRMS, Automated Tax Engine & 360° People Operations",
    url: "https://apt-hrm.vercel.app/",
    displayUrl: "apt-hrm.vercel.app",
    category: "HRTech & Payroll",
    accentColor: "from-orange-600 to-rose-500",
    glowColor: "rgba(234, 88, 12, 0.25)",
    shortDesc:
      "Consolidate your entire employee lifecycle from geofenced attendance and digital KYC onboarding to 100% compliant multi-country payroll calculations and OKR reviews.",
    stats: [
      { label: "Payroll Accuracy", value: "100%", sub: "Automated tax compliance" },
      { label: "Admin Time Saved", value: "70%", sub: "Self-service workflows" },
      { label: "Onboarding Speed", value: "3x", sub: "Paperless KYC setup" },
      { label: "Mobile Engagement", value: "+45%", sub: "Via Employee Portal" },
    ],
    highlights: [
      "One-Click Automated Payroll & Statutory Filing",
      "Biometric & Mobile Geofence Attendance Sync",
      "Full ATS & Talent Acquisition Pipeline",
      "Continuous 360° Appraisals & OKR Tracking",
      "Executive Workforce Budgeting & Attrition AI",
    ],
    mockupUrl: "apt-hrm.vercel.app/dashboard",
    mockupBadge: "Payroll Verified",
    mockupMetrics: { label1: "Disbursed", val1: "$1.8M Run", label2: "Tax Accuracy", val2: "100%" },
    pricingStarting: "$4/user/mo",
  };

  // Product 3: ProTutors
  const protutors = {
    id: "protutors",
    number: "03",
    name: "ProTutors™ LMS",
    badge: "White-Label Academy Infrastructure",
    tagline: "Multi-Tenant LMS, 4K Edge Streaming & Direct 0% Commission Payouts",
    url: "https://www.protutors.cloud/",
    displayUrl: "protutors.cloud",
    category: "EdTech & White-Label LMS",
    accentColor: "from-orange-500 via-amber-500 to-indigo-600",
    glowColor: "rgba(249, 115, 22, 0.3)",
    shortDesc:
      "Launch your independent branded academy under your own custom domain. Deliver 4K video streaming, host interactive live cohort bootcamps, and receive direct Razorpay bank payouts with 0% platform commission.",
    stats: [
      { label: "Platform Fee", value: "0%", sub: "Keep 100% of revenue" },
      { label: "Student Limit", value: "Unlimited", sub: "No attendee cap" },
      { label: "Streaming Latency", value: "< 1s", sub: "Global Edge HLS CDN" },
      { label: "Domain Setup", value: "< 5 Mins", sub: "Auto Edge SSL" },
    ],
    highlights: [
      "100% White-Label (Your Domain, Logo & Theme)",
      "Direct Razorpay Payouts (0% Platform Commission)",
      "4K Adaptive Video Streaming & Live Workshops",
      "Interactive Student Community Feeds & Chats",
      "Automated Quizzes & Branded Certificates",
    ],
    mockupUrl: "academy.yourbrand.dev",
    mockupBadge: "0% Platform Fee",
    mockupMetrics: { label1: "Learners", val1: "8,400+ Active", label2: "Transacted", val2: "₹14.2M" },
    pricingStarting: "₹2,499/mo",
  };

  const allProducts = [synqdoc, hrm, protutors];

  const currentShowcaseProduct = useMemo(() => {
    return allProducts.find((p) => p.id === activeShowcase) || synqdoc;
  }, [activeShowcase]);

  const filteredProducts = useMemo(() => {
    if (activeTab === "all") return allProducts;
    return allProducts.filter((p) => p.id === activeTab);
  }, [activeTab]);

  const faqs = [
    {
      q: "How do these 3 SaaS products complement each other?",
      a: "Each platform solves a mission-critical enterprise domain: SynqDoc automates operational documents and conversational AI; HRMS manages workforce payroll, compliance, and employee operations; while ProTutors provides high-performance educational and training academy infrastructure.",
    },
    {
      q: "Can we test or demo these products live in production?",
      a: "Yes! You can explore SynqDoc directly at https://synqdoc.com/, explore HRMS at https://apt-hrm.vercel.app/, and launch your academy at https://www.protutors.cloud/. We also provide tailored sandboxes for enterprise requirements.",
    },
    {
      q: "How does ProTutors guarantee 0% platform commission?",
      a: "Unlike typical course marketplaces that deduct 5% to 15% plus transaction fees, ProTutors routes payments directly to your connected Razorpay account. You pay only a fixed transparent subscription with zero revenue sharing.",
    },
    {
      q: "What security standards protect enterprise tenant data?",
      a: "All three platforms implement strict PostgreSQL row-level tenant partitioning, 256-bit AES encryption at rest, TLS 1.3 in transit, automated wildcard SSL certificates, and granular Role-Based Access Control (RBAC).",
    },
    {
      q: "Can we request custom enterprise integrations and SLA agreements?",
      a: "Yes. We offer custom dedicated VPC peering, tailored API integrations (SAP, Salesforce, ERPs, Banking APIs), 99.9% uptime SLAs, and dedicated technical account managers.",
    },
  ];

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setDemoSubmitted(true);
    setTimeout(() => {
      setDemoSubmitted(false);
      setDemoModalOpen(false);
      setDemoFormData({
        name: "",
        email: "",
        company: "",
        teamSize: "10-50",
        product: "ProTutors LMS",
        message: "",
      });
    }, 2400);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white pt-16 lg:pt-20">
      {/* ================= HERO SECTION (ORANGE ACCENTS & FLOATING ORBS) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/80 via-white to-white py-16 sm:py-24 border-b border-orange-100/60">
        {/* Animated Background Glowing Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-orange-400/25 via-amber-300/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute top-24 right-10 w-80 h-80 bg-orange-300/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-48 left-8 w-80 h-80 bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-orange-200/80 shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
              Ardent & Vale SaaS Suite
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 mb-6 max-w-4xl mx-auto leading-[1.12]"
          >
            Our Flagship{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              SaaS Products
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Powering enterprise automation with three proprietary platforms:{" "}
            <strong className="text-slate-900 font-semibold">SynqDoc™ AI</strong>,{" "}
            <strong className="text-slate-900 font-semibold">HRMS™ Suite</strong>, and{" "}
            <strong className="text-slate-900 font-semibold">ProTutors™ LMS</strong>.
          </motion.p>

          {/* Quick Launchpad Buttons for all 3 Products */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-14 max-w-4xl mx-auto"
          >
            <a
              href="https://synqdoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center space-x-2 group"
            >
              <Bot className="w-4 h-4 text-white" />
              <span>SynqDoc AI (synqdoc.com)</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://apt-hrm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-orange-50 text-slate-900 hover:text-orange-600 font-bold text-sm border-2 border-slate-200 hover:border-orange-400 shadow-sm transition-all flex items-center space-x-2 group hover:-translate-y-0.5"
            >
              <Users className="w-4 h-4 text-orange-500" />
              <span>HRMS (apt-hrm.vercel.app)</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://www.protutors.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all hover:scale-105 flex items-center space-x-2 group"
            >
              <GraduationCap className="w-4 h-4 text-orange-400" />
              <span>ProTutors (protutors.cloud)</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>

          {/* 3 Metric Banner Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {allProducts.map((p, idx) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * idx }}
                className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300 group text-left relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-orange-500/10 via-amber-400/5 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-orange-600 bg-orange-100 px-2.5 py-1 rounded-full">
                      Product {p.number}
                    </span>
                    <span className="text-xs font-bold text-slate-500 flex items-center gap-1 group-hover:text-orange-600 transition-colors">
                      {p.displayUrl} <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs text-orange-600 font-semibold mb-3">
                    {p.badge}
                  </p>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                    {p.shortDesc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-900">{p.stats[0].value} {p.stats[0].label}</span>
                  <span className="font-bold text-orange-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explore Platform →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3 FLAGSHIP PRODUCTS DETAILED SHOWCASE ================= */}
      <section className="py-20 bg-slate-50/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full mb-3">
              Deep-Dive Platform Overview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Interactive Product Showcase
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Click through each platform to view live interactive metrics, system capabilities, and verified architecture.
            </p>
          </div>

          {/* 3 Interactive Showcase Tabs */}
          <div className="flex justify-center mb-10">
            <div className="bg-white p-2 rounded-2xl shadow-md border border-orange-200 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-4xl w-full">
              {allProducts.map((prod) => {
                const isActive = activeShowcase === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => setActiveShowcase(prod.id)}
                    className={`flex items-center space-x-3 px-5 py-4 rounded-xl font-bold transition-all text-left ${
                      isActive
                        ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                        : "text-slate-700 hover:bg-orange-50/80 hover:text-orange-600"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {prod.id === "synqdoc" ? (
                        <Bot className="w-5 h-5" />
                      ) : prod.id === "hrm" ? (
                        <Users className="w-5 h-5" />
                      ) : (
                        <GraduationCap className="w-5 h-5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm sm:text-base font-extrabold truncate">{prod.name}</div>
                      <div
                        className={`text-xs truncate ${
                          isActive ? "text-orange-100" : "text-slate-500"
                        }`}
                      >
                        {prod.category}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Product Detailed Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentShowcaseProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-orange-100 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Descriptions & Highlights */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{currentShowcaseProduct.badge}</span>
                    </div>

                    <a
                      href={currentShowcaseProduct.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-orange-600 transition"
                    >
                      <span>{currentShowcaseProduct.displayUrl}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {currentShowcaseProduct.name}
                  </h3>

                  <p className="text-lg text-orange-600 font-semibold leading-snug">
                    {currentShowcaseProduct.tagline}
                  </p>

                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {currentShowcaseProduct.shortDesc}
                  </p>

                  {/* 4 Stats Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {currentShowcaseProduct.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-100 text-center"
                      >
                        <div className="text-2xl font-black text-orange-600">{stat.value}</div>
                        <div className="text-xs font-bold text-slate-800">{stat.label}</div>
                        <div className="text-[10px] text-slate-500">{stat.sub}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-2">
                    {currentShowcaseProduct.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <a
                      href={currentShowcaseProduct.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition flex items-center space-x-2 group"
                    >
                      <span>Launch {currentShowcaseProduct.name} Live</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>

                    <button
                      onClick={() => {
                        setSelectedProductForDemo(currentShowcaseProduct.name);
                        setDemoModalOpen(true);
                      }}
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-orange-100/70 text-slate-800 hover:text-orange-700 font-bold transition flex items-center space-x-2"
                    >
                      <span>Book Dedicated Walkthrough</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Live Mockup Console */}
                <div className="lg:col-span-6">
                  <div className="bg-slate-950 rounded-2xl p-5 shadow-2xl border-4 border-slate-800 text-white relative">
                    {/* Console window bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span className="text-xs text-slate-400 font-mono pl-2">
                          {currentShowcaseProduct.mockupUrl}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <span className="text-[11px] font-mono text-emerald-400">
                          {currentShowcaseProduct.mockupBadge}
                        </span>
                      </div>
                    </div>

                    {/* Stats bar */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">
                          {currentShowcaseProduct.mockupMetrics.label1}
                        </div>
                        <div className="text-base font-bold text-orange-400">
                          {currentShowcaseProduct.mockupMetrics.val1}
                        </div>
                      </div>
                      <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                        <div className="text-[10px] text-slate-400 uppercase font-mono">
                          {currentShowcaseProduct.mockupMetrics.label2}
                        </div>
                        <div className="text-base font-bold text-emerald-400">
                          {currentShowcaseProduct.mockupMetrics.val2}
                        </div>
                      </div>
                    </div>

                    {/* Mock telemetry log events */}
                    <div className="space-y-2.5 font-mono text-xs">
                      {currentShowcaseProduct.id === "synqdoc" ? (
                        <>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">Contract #8291 Parsed (99.8% conf)</span>
                            <span className="text-emerald-400 text-[10px]">18ms ago</span>
                          </div>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">AI Agent resolved vendor inquiry #449</span>
                            <span className="text-emerald-400 text-[10px]">42ms ago</span>
                          </div>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">ERP sync: Salesforce & SAP pipeline updated</span>
                            <span className="text-orange-400 text-[10px]">1m ago</span>
                          </div>
                        </>
                      ) : currentShowcaseProduct.id === "hrm" ? (
                        <>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">Monthly Payroll Run (1,250 employees)</span>
                            <span className="text-emerald-400 text-[10px]">Calculated</span>
                          </div>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">Geofence Attendance Sync (Shift A & B)</span>
                            <span className="text-emerald-400 text-[10px]">100% Valid</span>
                          </div>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">Q3 Performance Appraisals Dispatched</span>
                            <span className="text-orange-400 text-[10px]">98% Completed</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">Custom Domain CNAME (`learn.brand.dev`)</span>
                            <span className="text-emerald-400 text-[10px]">SSL Active</span>
                          </div>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">4K HLS Transcoder: Module 04 Transcoded</span>
                            <span className="text-emerald-400 text-[10px]">1080p 60fps</span>
                          </div>
                          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                            <span className="text-slate-300">Razorpay Direct Payout: ₹4,999 Settled (0% Cut)</span>
                            <span className="text-orange-400 text-[10px]">Direct Bank</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>Gateway: Cloudflare Edge SSL / AWS Multi-AZ</span>
                      <span className="text-emerald-400">● Encrypted</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= 3-WAY PRODUCT COMPARISON MATRIX ================= */}
      <section className="py-20 bg-orange-50/50 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full mb-3">
              Capabilities Benchmark
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              SynqDoc™ vs HRMS™ vs ProTutors™
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Side-by-side comparison across deployment focus, target personas, and primary enterprise ROI.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-3xl shadow-xl border border-orange-200">
            <table className="w-full text-left border-collapse min-w-[760px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-5 px-6 font-bold text-sm">Capability / Dimension</th>
                  <th className="py-5 px-6 font-bold text-sm bg-orange-600 text-white">
                    1. SynqDoc™ AI
                  </th>
                  <th className="py-5 px-6 font-bold text-sm text-slate-200">
                    2. HRMS™ Suite
                  </th>
                  <th className="py-5 px-6 font-bold text-sm text-orange-300">
                    3. ProTutors™ LMS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">Core Domain</td>
                  <td className="py-4 px-6 text-slate-700 bg-orange-50/30 font-medium">
                    Conversational AI & Document OCR Pipeline
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    Human Resource Management, Payroll & OKRs
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    White-Label LMS & Video Academy Infrastructure
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">Target Persona</td>
                  <td className="py-4 px-6 text-slate-700 bg-orange-50/30">
                    Support Ops, Legal, Finance & Data Admins
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    HR Directors, Payroll Managers & Employees
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    Educators, Creators, Coaching Hubs & Academies
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">Live Website / Demo</td>
                  <td className="py-4 px-6 text-slate-700 bg-orange-50/30 font-semibold text-orange-600">
                    <a href="https://synqdoc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700">
                      synqdoc.com ↗
                    </a>
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-semibold text-orange-600">
                    <a href="https://apt-hrm.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700">
                      apt-hrm.vercel.app ↗
                    </a>
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-semibold text-orange-600">
                    <a href="https://www.protutors.cloud/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700">
                      protutors.cloud ↗
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">Core Integrations</td>
                  <td className="py-4 px-6 text-slate-700 bg-orange-50/30">
                    Salesforce, SAP, Slack, AWS S3, REST APIs
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    Biometric Devices, Banking APIs, Okta SSO
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    Direct Razorpay, Edge CDN, Custom CNAME
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">Security & Isolation</td>
                  <td className="py-4 px-6 text-slate-700 bg-orange-50/30">
                    SOC 2 Type II, PII Redaction, TLS 1.3
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    Tax Rules Engine, Audit Trails, AES-256
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    Row-Level Postgres Isolation, Edge SSL
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-6 font-bold text-slate-900">Key Business ROI</td>
                  <td className="py-4 px-6 font-bold text-orange-600 bg-orange-50/30">
                    85% Automated Inquiry Resolution & 10x Speed
                  </td>
                  <td className="py-4 px-6 font-bold text-orange-600">
                    70% HR Work Reduced & 100% Tax Accuracy
                  </td>
                  <td className="py-4 px-6 font-bold text-orange-600">
                    0% Platform Commission & 100% Own Brand
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-5 px-6 font-bold text-slate-900">Try Production App</td>
                  <td className="py-5 px-6 bg-orange-100/60">
                    <a
                      href="https://synqdoc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition shadow"
                    >
                      Visit synqdoc.com ↗
                    </a>
                  </td>
                  <td className="py-5 px-6">
                    <a
                      href="https://apt-hrm.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition shadow"
                    >
                      Visit apt-hrm.app ↗
                    </a>
                  </td>
                  <td className="py-5 px-6">
                    <a
                      href="https://www.protutors.cloud/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition shadow"
                    >
                      Visit protutors.cloud ↗
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3.5 py-1 rounded-full mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2">
              Everything you need to know about our 3 enterprise SaaS platforms.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between font-bold text-slate-900 hover:text-orange-600 transition-colors"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ml-4 transition-transform ${
                        isOpen ? "bg-orange-600 text-white rotate-180" : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/80 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= BOTTOM HIGH-IMPACT ORANGE CTA BANNER ================= */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-950 bg-white/80 px-4 py-1.5 rounded-full mb-6">
            Instant Production Access
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight">
            Ready to Launch Your SaaS Infrastructure?
          </h2>

          <p className="text-lg text-orange-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            Experience the future of AI documentation on SynqDoc, automated HR on HRMS, and white-label education on ProTutors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://synqdoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Try SynqDoc AI</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>

            <a
              href="https://apt-hrm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-orange-50 text-orange-600 font-bold text-sm shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Try HRMS Suite</span>
              <ExternalLink className="w-4 h-4 text-orange-600" />
            </a>

            <a
              href="https://www.protutors.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>Try ProTutors LMS</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE DEMO BOOKING MODAL ================= */}
      <AnimatePresence>
        {demoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 border border-orange-100 relative overflow-hidden"
            >
              <button
                onClick={() => setDemoModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Walkthrough</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Experience {selectedProductForDemo}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out your details to get instant access to a customized live demo sandbox.
                </p>
              </div>

              {demoSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Demo Access Scheduled!</h4>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    Thank you, {demoFormData.name || "there"}. A product specialist has emailed your sandbox credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={demoFormData.name}
                      onChange={(e) => setDemoFormData({ ...demoFormData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={demoFormData.email}
                      onChange={(e) => setDemoFormData({ ...demoFormData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Company Inc."
                        value={demoFormData.company}
                        onChange={(e) => setDemoFormData({ ...demoFormData, company: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Product
                      </label>
                      <select
                        value={selectedProductForDemo}
                        onChange={(e) => setSelectedProductForDemo(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                      >
                        <option value="ProTutors LMS">ProTutors™ LMS</option>
                        <option value="HRMS Suite">HRMS™ Suite</option>
                        <option value="SynqDoc AI">SynqDoc™ AI</option>
                        <option value="All 3 Products">All 3 Products</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Requirements / Note
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your team size, workflow requirements, or goals..."
                      value={demoFormData.message}
                      onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold transition shadow-lg shadow-orange-500/25 flex items-center justify-center space-x-2"
                  >
                    <span>Request Demo Sandbox Access</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurProductsPage;
