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
} from "lucide-react";

const SaasProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState("synqdoc"); // 'synqdoc' | 'hrm' | 'protutors'
  const [openFaq, setOpenFaq] = useState(0);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [selectedProductForDemo, setSelectedProductForDemo] = useState("HRMS Suite");
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "10-50",
    message: "",
  });

  // Product 1: SynqDoc
  const synqdocData = useMemo(
    () => ({
      id: "synqdoc",
      name: "SynqDoc™",
      websiteUrl: "https://synqdoc.com/",
      tagline: "Next-Gen AI Conversational Platform & Smart Document Intelligence for Enterprise",
      badge: "Enterprise AI & Doc Automation",
      shortDesc:
        "Empower your business with SynqDoc. Automate workflows, extract critical document data, resolve customer issues, and engage enterprise stakeholders with human-grade conversational AI and intelligent document pipelines.",
      heroStats: [
        { label: "Document Processing", value: "10x", subtitle: "Faster turn-around" },
        { label: "Query Resolution", value: "85%", subtitle: "Automated with AI" },
        { label: "Data Extraction", value: "99.8%", subtitle: "OCR & NLP precision" },
        { label: "Integration Ready", value: "< 24 hrs", subtitle: "Zero-code setup" },
      ],
      coreFeatures: [
        {
          icon: <MessageSquare className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Human-Grade Conversational AI",
          desc: "Multi-agent conversational engine that understands natural language, context, and multi-turn enterprise conversations to triage inquiries and execute actions.",
        },
        {
          icon: <FileText className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Smart Document Ingestion & Parsing",
          desc: "Instantly parse invoices, legal contracts, purchase orders, medical records, and unstructured PDFs using semantic neural extraction.",
        },
        {
          icon: <Workflow className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Automated Multi-Step Workflows",
          desc: "Trigger approvals, cross-system syncs, notifications, and conditional logic directly from conversational triggers and document uploads.",
        },
        {
          icon: <Lock className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Enterprise Security & Redaction",
          desc: "Automated PII/sensitive data redaction, bank-grade AES-256 encryption at rest, TLS 1.3 in transit, and granular role-based access control.",
        },
        {
          icon: <Activity className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Real-Time Conversation & Doc Telemetry",
          desc: "Comprehensive analytics on query volumes, resolution speed, sentiment scoring, document processing throughput, and bottleneck alerts.",
        },
        {
          icon: <Zap className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "200+ Enterprise Connectors",
          desc: "Seamless integration with CRM, ERP, Slack, Microsoft Teams, Zendesk, Salesforce, Google Drive, AWS S3, and custom RESTful APIs.",
        },
      ],
      mockupMetrics: {
        activePipelines: "2,450 Docs / hr",
        automationHealth: "99.8% Accuracy",
        tasksHandled: "1.2M Queries / mo",
        avgResponseTime: "38ms Latency",
      },
      mockupSteps: [
        { title: "Incoming Multi-Page Contract & Invoices", status: "Ingested", time: "Just now", badge: "Auto-Parsed" },
        { title: "Semantic Entity & Clause Extraction", status: "Processed", time: "18ms ago", badge: "Confidence 99.8%" },
        { title: "Conversational Agent Inquiry Resolution", status: "Answered", time: "34ms ago", badge: "AI Agent active" },
        { title: "ERP & Cloud Archive Synchronization", status: "Synced", time: "42ms ago", badge: "Completed" },
      ],
      useCases: [
        "Automated Legal Contract & Clause Review",
        "Accounts Payable & Invoice Reconciliation",
        "24/7 Enterprise Customer Support AI Agents",
        "HR Document Verification & Onboarding Automation",
      ],
      plans: [
        {
          name: "Growth Tier",
          price: "$399",
          period: "per month",
          desc: "Ideal for growing businesses scaling AI conversational & document workloads.",
          features: [
            "Up to 25,000 AI conversational interactions/mo",
            "5,000 Smart Document Parsing pages/mo",
            "50+ Pre-built Integrations & Webhooks",
            "Standard OCR & Entity Extraction models",
            "99.9% Uptime SLA with Email & Chat Support",
          ],
          popular: false,
        },
        {
          name: "Enterprise Suite",
          price: "$999",
          period: "per month",
          desc: "Dedicated enterprise pipeline with custom LLM fine-tuning & unlimited throughput.",
          features: [
            "Unlimited Conversational AI Interactions",
            "50,000+ Document Pages with Custom OCR Training",
            "Full 200+ Connectors + Custom Webhooks & API",
            "Dedicated VPC Peering & Private Cloud options",
            "24/7 Dedicated Solutions Architect & Support",
            "SOC 2 Type II & Custom Compliance SLAs",
          ],
          popular: true,
        },
      ],
    }),
    []
  );

  // Product 2: HRM Tool
  const hrmData = useMemo(
    () => ({
      id: "hrm",
      name: "HRMS™ Suite",
      websiteUrl: "https://apt-hrm.vercel.app/",
      tagline: "All-in-One Enterprise Human Resource Management & Workforce Intelligence Platform",
      badge: "Flagship HRMS & Payroll Suite",
      shortDesc:
        "A modern, intuitive, and cloud-native Human Resource Management platform that consolidates hiring, onboarding, payroll compliance, attendance tracking, 360° performance reviews, and employee lifecycle management.",
      heroStats: [
        { label: "Payroll Accuracy", value: "100%", subtitle: "Automated tax compliance" },
        { label: "Onboarding Speed", value: "3x", subtitle: "Faster paperless setup" },
        { label: "HR Admin Time Saved", value: "70%", subtitle: "Self-service automation" },
        { label: "Employee Engagement", value: "+45%", subtitle: "Via mobile portal" },
      ],
      coreFeatures: [
        {
          icon: <CreditCard className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Automated Global & Local Payroll",
          desc: "One-click payroll processing with statutory deductions, tax withholdings, custom salary structures, bonus disbursals, and automated payslip generation.",
        },
        {
          icon: <CalendarCheck className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Smart Attendance & Leave Management",
          desc: "Geofencing mobile check-in, biometric device integration, customizable leave policies, shift scheduling, and overtime tracking.",
        },
        {
          icon: <UserCheck className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Complete Employee Lifecycle Hub",
          desc: "Centralized employee database from digital onboarding and document verification to role promotions, asset management, and smooth exit management.",
        },
        {
          icon: <Target className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Performance, OKRs & 360° Appraisals",
          desc: "Continuous feedback cycles, goal tracking with OKRs/KPIs, customizable review matrices, and automated appraisal workflows.",
        },
        {
          icon: <Briefcase className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Integrated ATS & Recruitment Pipeline",
          desc: "Job requisition approvals, branded careers portal, resume parsing, interview scheduling, and instant offer letter generation.",
        },
        {
          icon: <LineChart className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "People Analytics & Workforce Insights",
          desc: "Attrition forecasting, headcount budgeting, department compensation benchmarks, and executive diversity & retention dashboards.",
        },
      ],
      mockupMetrics: {
        activePipelines: "1,250 Employees",
        automationHealth: "100% Tax Compliant",
        tasksHandled: "$1.8M Disbursed",
        avgResponseTime: "0 Errors Recorded",
      },
      mockupSteps: [
        { title: "Monthly Payroll Run & Tax Calculations", status: "Calculated", time: "Just now", badge: "100% Verified" },
        { title: "Leave & Biometric Attendance Sync", status: "Synced", time: "5m ago", badge: "All Shifts Valid" },
        { title: "New Hire Digital Onboarding & KYC", status: "Active", time: "22m ago", badge: "3 Candidates" },
        { title: "Q3 Performance Review Notifications", status: "Dispatched", time: "1h ago", badge: "98% Completion" },
      ],
      useCases: [
        "End-to-End Automated Monthly Payroll Processing",
        "Remote & Hybrid Workforce Attendance Geofencing",
        "Structured 360-Degree Annual & Quarterly Reviews",
        "Seamless Paperless Employee Onboarding & Compliance",
      ],
      plans: [
        {
          name: "Standard HRMS",
          price: "$4 / user",
          period: "per month (min 20 users)",
          desc: "Ideal for growing organizations looking to streamline essential HR & payroll operations.",
          features: [
            "Complete Core Employee Database",
            "Automated Payroll & Payslips Generator",
            "Leave & Attendance Tracking System",
            "Employee Self-Service (ESS) Web & Mobile App",
            "Email & Helpdesk Support",
          ],
          popular: false,
        },
        {
          name: "Enterprise PeopleOS",
          price: "$8 / user",
          period: "per month (volume discounts)",
          desc: "Comprehensive workforce intelligence suite with ATS, OKRs, and advanced analytics.",
          features: [
            "Everything in Standard HRMS",
            "Full ATS & Talent Acquisition Pipeline",
            "360° Performance Management & OKR Tracker",
            "Custom Multi-Country Tax & Statutory Compliance",
            "Dedicated HR Tech Account Manager",
            "Custom ERP & Active Directory (SSO) Integration",
          ],
          popular: true,
        },
      ],
    }),
    []
  );

  // Product 3: ProTutors LMS
  const protutorsData = useMemo(
    () => ({
      id: "protutors",
      name: "ProTutors™",
      websiteUrl: "https://www.protutors.cloud/",
      tagline: "The Modern Multi-Tenant Platform & White-Label LMS for Professional Tutors, Creators & Online Academies",
      badge: "Flagship White-Label LMS & EdTech Suite",
      shortDesc:
        "Empower your education business with ProTutors. Sell courses, launch live cohort workshops, stream 4K video with zero lag, build vibrant learner communities, and collect direct bank payments with 0% platform commission under your own brand and custom domain.",
      heroStats: [
        { label: "Platform Commission", value: "0%", subtitle: "Keep 100% course revenue" },
        { label: "Student Capacity", value: "Unlimited", subtitle: "Zero tier restrictions" },
        { label: "Video Delivery", value: "4K Edge", subtitle: "Low-latency global HLS" },
        { label: "Domain Setup", value: "< 5 Mins", subtitle: "Automated Edge SSL" },
      ],
      coreFeatures: [
        {
          icon: <GraduationCap className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "100% White-Labeled Academy",
          desc: "Your colors, logo, typography, and custom domain (academy.yourbrand.com). Zero third-party platform watermarks or branding shown to students.",
        },
        {
          icon: <Globe className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Instant Custom Domains & Edge SSL",
          desc: "Seamless CNAME routing with automated Let's Encrypt Wildcard SSL certificates provisioned and renewed automatically at the global edge.",
        },
        {
          icon: <CreditCard className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Direct Gateway Payouts (0% Cut)",
          desc: "Connect your Razorpay credentials directly. Instant settlement into your bank account via UPI, NetBanking, credit/debit cards, and EMIs.",
        },
        {
          icon: <Video className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "4K Video Streaming & Live Cohorts",
          desc: "Ultra-fast global edge video CDN with adaptive HLS transcoding, copy protection, live interactive workshops, and real-time student chats.",
        },
        {
          icon: <Users className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Interactive Community Feeds",
          desc: "Engage students beyond video lessons. Publish announcements, facilitate rich discussions, host Q&As, and celebrate learner wins.",
        },
        {
          icon: <ShieldCheck className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />,
          title: "Enterprise Multi-Tenant Isolation",
          desc: "PostgreSQL row-level tenant security, encrypted API credentials at rest, JWT token rotation, and robust DDoS protection.",
        },
      ],
      mockupMetrics: {
        activePipelines: "8,400+ Students",
        automationHealth: "0% Platform Fee",
        tasksHandled: "₹14.2M Transacted",
        avgResponseTime: "18ms Edge Latency",
      },
      mockupSteps: [
        { title: "Custom Domain DNS & Edge SSL Provisioning", status: "Active", time: "Just now", badge: "learn.brand.dev" },
        { title: "4K Adaptive HLS Video Transcoder Pipeline", status: "Rendered", time: "2m ago", badge: "1080p 60fps" },
        { title: "Direct Razorpay Payout to Institute Account", status: "Settled", time: "11m ago", badge: "0% Commission" },
        { title: "Live Cohort Interactive Workshop Broadcast", status: "Streaming", time: "25m ago", badge: "184 Students Live" },
      ],
      useCases: [
        "Independent Creator Academies & Video Courses",
        "Live Cohort Bootcamps & Interactive Q&A Workshops",
        "Corporate Employee Onboarding & Certification Hubs",
        "Multi-Instructor Coaching Centers & EdTech Startups",
      ],
      plans: [
        {
          name: "Starter Academy",
          price: "₹2,499",
          period: "per month",
          desc: "For independent educators building their first audience and course catalog.",
          features: [
            "Unlimited Registered Students",
            "Up to 5 Active Courses & Digital Products",
            "25 GB Asset Storage & 50 GB/mo Video Streaming",
            "Direct Razorpay Gateway (0% Platform Fee)",
            "Community Feeds & Student Discussions",
          ],
          popular: false,
        },
        {
          name: "Pro Educator",
          price: "₹5,999",
          period: "per month",
          desc: "For growing institutes seeking full custom branding, custom domains, and HD video streaming.",
          features: [
            "Everything in Starter Academy",
            "Unlimited Courses & Interactive Workshops",
            "Your Own Custom Domain (`learn.brand.com`) with Edge SSL",
            "150 GB Asset Storage & 300 GB/mo 4K Streaming",
            "100% White-Labeling (Zero Platform Watermarks)",
            "Automated Quizzes & Branded Completion Certificates",
          ],
          popular: true,
        },
        {
          name: "Enterprise Academy",
          price: "₹14,999",
          period: "per month",
          desc: "Dedicated learning infrastructure for large organizations, coaching networks, and universities.",
          features: [
            "Everything in Pro Educator",
            "Dedicated High-Capacity Video Bandwidth",
            "Multi-Instructor Management & Custom RBAC",
            "Single Sign-On (SSO) & REST API Access",
            "Dedicated Account Manager & 99.9% Uptime SLA",
          ],
          popular: false,
        },
      ],
    }),
    []
  );

  const currentProduct = useMemo(() => {
    if (activeProduct === "synqdoc") return synqdocData;
    if (activeProduct === "hrm") return hrmData;
    return protutorsData;
  }, [activeProduct, synqdocData, hrmData, protutorsData]);

  const faqs = [
    {
      q: "What is SynqDoc and how does it benefit our organization?",
      a: "SynqDoc (https://synqdoc.com/) is our enterprise conversational AI and smart document intelligence platform. It automates repetitive customer inquiries, parses documents (invoices, contracts, statements) with 99.8% accuracy, and executes multi-step business workflows without manual intervention.",
    },
    {
      q: "How does HRMS handle payroll compliance and tax regulations?",
      a: "HRMS features an automated rules engine tailored for both local and international tax frameworks, handling statutory deductions (PF, ESI, TDS, Gratuity), overtime calculations, bonus disbursements, and generating bank-ready salary files and automated digital payslips.",
    },
    {
      q: "What is ProTutors and how does the 0% commission model work?",
      a: "ProTutors (https://www.protutors.cloud/) is our multi-tenant white-label LMS and academy platform. Unlike course marketplaces that take 5-15% of your revenue, ProTutors connects directly to your Razorpay credentials with 0% platform commission, full custom domain mapping (`academy.yourbrand.com`), and edge SSL.",
    },
    {
      q: "Can SynqDoc, HRMS, and ProTutors integrate with our existing software stack?",
      a: "Yes! All three platforms provide REST APIs, webhooks, and pre-built connectors. SynqDoc connects with CRM/ERP tools and cloud drives, HRMS connects with biometric hardware and accounting software, and ProTutors connects with payment gateways and CDN video pipelines.",
    },
    {
      q: "Are live sandbox trials available for all 3 products?",
      a: "Yes. You can visit https://synqdoc.com/, explore https://apt-hrm.vercel.app/ for HRMS, and launch your academy directly at https://www.protutors.cloud/. We also offer tailored live sandbox setups for enterprise testing.",
    },
    {
      q: "What security and data privacy safeguards are in place?",
      a: "Our entire SaaS ecosystem is built with AES-256 encryption at rest, TLS 1.3 in transit, PostgreSQL row-level tenant isolation, automated edge SSL certificates, and role-based access controls (RBAC).",
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
        message: "",
      });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500 selection:text-white pt-16 lg:pt-20">
      {/* ================= HERO SECTION (ORANGE & WHITE) ================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-white to-white py-16 lg:py-24 border-b border-orange-100/70">
        {/* Decorative Glowing Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-tr from-orange-400/20 via-amber-300/20 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-300/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Breadcrumb */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white border border-orange-200 shadow-sm mb-6">
            <Link to="/" className="text-xs font-semibold text-slate-500 hover:text-orange-600 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-xs font-semibold text-orange-600">SaaS Products</span>
          </div>

          {/* Heading with Orange & Slate Contrast */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 mb-6 max-w-4xl mx-auto leading-tight">
            Enterprise{" "}
            <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              SaaS Products
            </span>{" "}
            Built for High-Growth Teams
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Supercharge operations with our dual flagship SaaS platforms and digital academy infrastructure:{" "}
            <strong className="text-slate-900 font-semibold">SynqDoc™</strong> (AI Conversational & Document Automation),{" "}
            <strong className="text-slate-900 font-semibold">HRMS™</strong> (Workforce & Payroll Suite), and{" "}
            <strong className="text-slate-900 font-semibold">ProTutors™</strong> (White-Label LMS Platform).
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-16 max-w-4xl mx-auto">
            {/* Direct Demo Link to synqdoc.com */}
            <a
              href="https://synqdoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 transition-all flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>SynqDoc AI Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>

            <a
              href="https://apt-hrm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-orange-50 text-slate-900 hover:text-orange-600 font-bold text-sm border-2 border-slate-200 hover:border-orange-400 shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <Users className="w-4 h-4 text-orange-500" />
              <span>HRMS Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange-500" />
            </a>

            <a
              href="https://www.protutors.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <GraduationCap className="w-4 h-4 text-orange-400" />
              <span>Launch ProTutors LMS</span>
              <ExternalLink className="w-3.5 h-3.5 text-orange-400" />
            </a>
          </div>

          {/* Hero Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <a
              href="https://synqdoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-sm hover:border-orange-400 hover:shadow-md transition block group text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-1 group-hover:scale-105 transition-transform">SynqDoc</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">AI Document & Chat</div>
              <div className="text-xs text-orange-600 font-semibold mt-1">synqdoc.com ↗</div>
            </a>
            <a
              href="https://apt-hrm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-sm hover:border-orange-400 hover:shadow-md transition block group text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-1 group-hover:scale-105 transition-transform">HRMS</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Enterprise HR & Payroll</div>
              <div className="text-xs text-orange-600 font-semibold mt-1">apt-hrm.vercel.app ↗</div>
            </a>
            <a
              href="https://www.protutors.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-sm hover:border-orange-400 hover:shadow-md transition block group text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-1 group-hover:scale-105 transition-transform">ProTutors</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">White-Label LMS Suite</div>
              <div className="text-xs text-orange-600 font-semibold mt-1">protutors.cloud ↗</div>
            </a>
            <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-sm hover:border-orange-300 hover:shadow-md transition text-left">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-600 mb-1">0% / SOC 2</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Platform Security SLA</div>
              <div className="text-xs text-slate-500 mt-1">Edge SSL & Privacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SELECTOR / 3-PRODUCT SHOWCASE ================= */}
      <section id="products-breakdown" className="py-16 bg-slate-50/70 border-b border-gray-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100/80 px-3 py-1 rounded-full mb-3">
              Explore Our 3 Flagship SaaS Products
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Select a SaaS Platform to Inspect
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Switch between our 3 enterprise platforms to view dedicated architectures, live metrics, and tiered editions.
            </p>
          </div>

          {/* Interactive 3-Product Toggle Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-2 rounded-2xl shadow-md border border-orange-200 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-4xl w-full">
              {/* Product 1 Tab: SynqDoc */}
              <button
                onClick={() => setActiveProduct("synqdoc")}
                className={`flex items-center space-x-3 px-5 py-4 rounded-xl font-bold transition-all text-left ${
                  activeProduct === "synqdoc"
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "text-slate-700 hover:bg-orange-50/80 hover:text-orange-600"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    activeProduct === "synqdoc" ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600"
                  }`}
                >
                  <Bot className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-extrabold truncate">1. SynqDoc™ AI</div>
                  <div
                    className={`text-xs truncate ${
                      activeProduct === "synqdoc" ? "text-orange-100" : "text-slate-500"
                    }`}
                  >
                    AI Conversational & Docs
                  </div>
                </div>
              </button>

              {/* Product 2 Tab: HRM Tool */}
              <button
                onClick={() => setActiveProduct("hrm")}
                className={`flex items-center space-x-3 px-5 py-4 rounded-xl font-bold transition-all text-left ${
                  activeProduct === "hrm"
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "text-slate-700 hover:bg-orange-50/80 hover:text-orange-600"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    activeProduct === "hrm" ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600"
                  }`}
                >
                  <Users className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-extrabold truncate">2. HRMS™ Suite</div>
                  <div
                    className={`text-xs truncate ${
                      activeProduct === "hrm" ? "text-orange-100" : "text-slate-500"
                    }`}
                  >
                    Payroll & Workforce Ops
                  </div>
                </div>
              </button>

              {/* Product 3 Tab: ProTutors LMS */}
              <button
                onClick={() => setActiveProduct("protutors")}
                className={`flex items-center space-x-3 px-5 py-4 rounded-xl font-bold transition-all text-left ${
                  activeProduct === "protutors"
                    ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "text-slate-700 hover:bg-orange-50/80 hover:text-orange-600"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                    activeProduct === "protutors" ? "bg-white/20 text-white" : "bg-orange-100 text-orange-600"
                  }`}
                >
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm sm:text-base font-extrabold truncate">3. ProTutors™ LMS</div>
                  <div
                    className={`text-xs truncate ${
                      activeProduct === "protutors" ? "text-orange-100" : "text-slate-500"
                    }`}
                  >
                    White-Label LMS & EdTech
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* ================= ACTIVE PRODUCT OVERVIEW CARD ================= */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-orange-100 relative overflow-hidden">
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-orange-500/10 via-amber-300/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Product Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2">
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-extrabold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{currentProduct.badge}</span>
                  </div>
                  {currentProduct.websiteUrl && (
                    <a
                      href={currentProduct.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-orange-600 transition"
                    >
                      <span>
                        {currentProduct.id === "synqdoc"
                          ? "synqdoc.com"
                          : currentProduct.id === "hrm"
                          ? "apt-hrm.vercel.app"
                          : "protutors.cloud"}
                      </span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {currentProduct.name}
                </h3>

                <p className="text-lg text-orange-600 font-semibold leading-snug">
                  {currentProduct.tagline}
                </p>

                <p className="text-slate-600 leading-relaxed">
                  {currentProduct.shortDesc}
                </p>

                {/* Key Stat Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {currentProduct.heroStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-orange-50/70 border border-orange-100 text-center"
                    >
                      <div className="text-2xl font-black text-orange-600">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-800">{stat.label}</div>
                      <div className="text-[11px] text-slate-500">{stat.subtitle}</div>
                    </div>
                  ))}
                </div>

                {/* Key Use Cases List */}
                <div className="pt-2">
                  <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                    Key Enterprise Applications:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentProduct.useCases.map((useCase, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                        <span>{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {currentProduct.websiteUrl ? (
                    <a
                      href="https://synqdoc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition flex items-center space-x-2"
                    >
                      <span>Try SynqDoc Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        setSelectedProductForDemo(currentProduct.name);
                        setDemoModalOpen(true);
                      }}
                      className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20 hover:shadow-orange-500/30 transition flex items-center space-x-2"
                    >
                      <span>Request Demo for {currentProduct.name}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}

                  {currentProduct.websiteUrl ? (
                    <a
                      href={currentProduct.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-orange-100/70 text-slate-800 hover:text-orange-700 font-bold transition flex items-center space-x-2"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <a
                      href="#comparison-matrix"
                      className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-orange-100/70 text-slate-800 hover:text-orange-700 font-bold transition flex items-center space-x-2"
                    >
                      <span>Compare Both Products</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Live Interactive Dashboard Mockup */}
              <div className="lg:col-span-6">
                <div className="bg-slate-950 rounded-2xl p-5 shadow-2xl border-4 border-slate-800 text-white relative">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-xs text-slate-400 font-mono pl-2">
                        {currentProduct.id === "synqdoc"
                          ? "app.synqdoc.com/console"
                          : currentProduct.id === "hrm"
                          ? "apt-hrm.vercel.app"
                          : "academy.protutors.cloud"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400">Live Telemetry</span>
                    </div>
                  </div>

                  {/* Top Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Throughput</div>
                      <div className="text-sm font-bold text-orange-400">{currentProduct.mockupMetrics.activePipelines}</div>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Accuracy</div>
                      <div className="text-sm font-bold text-emerald-400">{currentProduct.mockupMetrics.automationHealth}</div>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Processed</div>
                      <div className="text-sm font-bold text-white">{currentProduct.mockupMetrics.tasksHandled}</div>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Response</div>
                      <div className="text-sm font-bold text-amber-400">{currentProduct.mockupMetrics.avgResponseTime}</div>
                    </div>
                  </div>

                  {/* Live Process Feed */}
                  <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 mb-4">
                    <div className="flex items-center justify-between mb-3 text-xs text-slate-400 font-mono">
                      <span>AUTOMATED EVENT LOG</span>
                      <span className="text-orange-400">Auto-sync: Active</span>
                    </div>
                    <div className="space-y-2.5">
                      {currentProduct.mockupSteps.map((step, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-orange-500/50 transition text-xs"
                        >
                          <div className="flex items-center space-x-2.5">
                            <div className="w-2 h-2 rounded-full bg-orange-500" />
                            <span className="text-slate-200 font-medium">{step.title}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-400 font-mono text-[10px] border border-orange-800/60">
                              {step.badge}
                            </span>
                            <span className="text-[10px] text-slate-500 font-mono">{step.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mini Interactive Control Bar */}
                  <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <div className="flex items-center space-x-2">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-slate-300">SOC2 & 256-bit AES Certified Environment</span>
                    </div>
                    <span className="text-orange-400 font-semibold">Production Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DETAILED FEATURE GRID (ORANGE ACCENTS) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-3">
              Deep-Dive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Everything Inside {currentProduct.name}
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Architected with microservices, scalable cloud database engines, and seamless enterprise integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProduct.coreFeatures.map((feat, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center mb-6 transition-colors duration-300 border border-orange-200 group-hover:border-orange-500 shadow-sm group-hover:shadow-md">
                    {feat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feat.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform">
                  <span>Explore Module Specs</span>
                  <ChevronRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIDE-BY-SIDE PRODUCT COMPARISON MATRIX ================= */}
      <section id="comparison-matrix" className="py-20 bg-orange-50/50 border-y border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-3">
              Side-by-Side Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              SynqDoc™ vs HRMS™ vs ProTutors™
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Compare core domains, deployment architecture, and direct business ROI across our 3 enterprise platforms.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-orange-200">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="py-5 px-5 font-bold text-sm">Dimension / Capability</th>
                  <th className="py-5 px-5 font-bold text-sm bg-orange-600 text-white">
                    1. SynqDoc™ AI
                  </th>
                  <th className="py-5 px-5 font-bold text-sm text-slate-200">
                    2. HRMS™ Suite
                  </th>
                  <th className="py-5 px-5 font-bold text-sm text-orange-300">
                    3. ProTutors™ LMS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Core Domain</td>
                  <td className="py-4 px-5 text-slate-700 bg-orange-50/30 font-medium">
                    AI Conversational Platform & Smart Document Automation
                  </td>
                  <td className="py-4 px-5 text-slate-700 font-medium">
                    Human Resource Management, Payroll, Attendance & OKRs
                  </td>
                  <td className="py-4 px-5 text-slate-700 font-medium">
                    White-Label LMS, Video Streaming & Academy Monetization
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Target Audience</td>
                  <td className="py-4 px-5 text-slate-700 bg-orange-50/30">
                    Customer Support, Operations, Legal, Finance & Enterprise Admins
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    HR Directors, People Ops, Finance, Managers & Employees
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    Educators, Creators, Coaching Academies & Corporate Training
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Key Automation Engine</td>
                  <td className="py-4 px-5 text-slate-700 bg-orange-50/30">
                    Multi-Agent LLMs, Smart Document OCR, NLP Entity Extraction
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    Automated Payroll Tax Engine, Geofence Attendance, ATS Pipeline
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    4K Edge CDN Streaming, Multi-Tenant Custom DNS, Zero-Fee Gateway
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Live Website / Demo</td>
                  <td className="py-4 px-5 text-slate-700 bg-orange-50/30 font-semibold text-orange-600">
                    <a href="https://synqdoc.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700">
                      synqdoc.com ↗
                    </a>
                  </td>
                  <td className="py-4 px-5 text-slate-700 font-semibold text-orange-600">
                    <a href="https://apt-hrm.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700">
                      apt-hrm.vercel.app ↗
                    </a>
                  </td>
                  <td className="py-4 px-5 text-slate-700 font-semibold text-orange-600">
                    <a href="https://www.protutors.cloud/" target="_blank" rel="noopener noreferrer" className="underline hover:text-orange-700">
                      protutors.cloud ↗
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Integration Ecosystem</td>
                  <td className="py-4 px-5 text-slate-700 bg-orange-50/30">
                    Salesforce, SAP, Zendesk, Slack, AWS S3, REST & Webhooks
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    Biometric Devices, Banking APIs, Accounting software, Okta SSO
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    Razorpay Payouts, Custom CNAME, Video CDN, WebSocket Chat
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Security & Governance</td>
                  <td className="py-4 px-5 text-slate-700 bg-orange-50/30">
                    SOC 2 Type II, HIPAA Ready, PII Redaction, TLS 1.3
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    Statutory Tax Compliance, Role-based Audit Trails, 256-bit AES
                  </td>
                  <td className="py-4 px-5 text-slate-700">
                    PostgreSQL Row-Level Isolation, Free Edge Wildcard SSL, RBAC
                  </td>
                </tr>
                <tr className="hover:bg-orange-50/50 transition">
                  <td className="py-4 px-5 font-semibold text-slate-900">Primary Business ROI</td>
                  <td className="py-4 px-5 font-bold text-orange-600 bg-orange-50/30">
                    85% Automated Inquiry Resolution & 10x Faster Doc Parsing
                  </td>
                  <td className="py-4 px-5 font-bold text-orange-600">
                    70% Reduction in HR Admin Work & 100% Payroll Accuracy
                  </td>
                  <td className="py-4 px-5 font-bold text-orange-600">
                    0% Platform Commission & 100% Independent Brand Control
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="py-5 px-5 font-bold text-slate-900">Get Started</td>
                  <td className="py-5 px-5 bg-orange-100/60">
                    <a
                      href="https://synqdoc.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition shadow"
                    >
                      Try SynqDoc Live ↗
                    </a>
                  </td>
                  <td className="py-5 px-5">
                    <a
                      href="https://apt-hrm.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition shadow"
                    >
                      Try HRMS Live ↗
                    </a>
                  </td>
                  <td className="py-5 px-5">
                    <a
                      href="https://www.protutors.cloud/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg text-xs font-bold transition shadow"
                    >
                      Try ProTutors Live ↗
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= TRANSPARENT PRICING TIERS ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-3">
              Subscription Plans
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Transparent Editions for {currentProduct.name}
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
              Predictable pricing designed to scale with your transaction volume and team size.
            </p>
          </div>

          <div className={`grid grid-cols-1 ${currentProduct.plans.length === 3 ? "md:grid-cols-3 max-w-6xl" : "md:grid-cols-2 max-w-4xl"} gap-8 mx-auto`}>
            {currentProduct.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 transition-all relative flex flex-col justify-between ${
                  plan.popular
                    ? "bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-2xl shadow-orange-500/30 ring-4 ring-orange-400/40"
                    : "bg-white text-slate-900 border-2 border-slate-200 shadow-md hover:border-orange-300"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 right-6 px-3 py-1 bg-white text-orange-600 font-extrabold text-xs rounded-full shadow">
                    RECOMMENDED FOR ENTERPRISE
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`text-2xl font-black ${plan.popular ? "text-white" : "text-slate-900"}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`text-sm mb-6 ${plan.popular ? "text-orange-100" : "text-slate-600"}`}>
                    {plan.desc}
                  </p>

                  <div className="flex items-baseline space-x-2 mb-6">
                    <span className="text-4xl font-black">{plan.price}</span>
                    <span className={`text-xs ${plan.popular ? "text-orange-100" : "text-slate-500"}`}>
                      {plan.period}
                    </span>
                  </div>

                  <div className={`border-t pt-6 mb-6 ${plan.popular ? "border-orange-400/60" : "border-slate-100"}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider mb-4 ${plan.popular ? "text-orange-100" : "text-slate-800"}`}>
                      What's Included:
                    </div>
                    <ul className="space-y-3 text-sm">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start space-x-2.5">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              plan.popular ? "text-white" : "text-orange-500"
                            }`}
                          />
                          <span className={plan.popular ? "text-orange-50" : "text-slate-700"}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {currentProduct.websiteUrl ? (
                  <a
                    href={currentProduct.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold transition shadow-sm flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? "bg-white text-orange-600 hover:bg-orange-50 hover:shadow-lg"
                        : "bg-slate-900 text-white hover:bg-orange-600"
                    }`}
                  >
                    <span>
                      Get Started on {currentProduct.id === "synqdoc" ? "SynqDoc.com" : currentProduct.id === "hrm" ? "HRMS Suite" : "ProTutors.cloud"}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedProductForDemo(`${currentProduct.name} (${plan.name} Plan)`);
                      setDemoModalOpen(true);
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold transition shadow-sm ${
                      plan.popular
                        ? "bg-white text-orange-600 hover:bg-orange-50 hover:shadow-lg"
                        : "bg-slate-900 text-white hover:bg-orange-600"
                    }`}
                  >
                    Get Started with {plan.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE & SECURITY HIGHLIGHT ================= */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-400 bg-orange-950/80 border border-orange-800/60 px-3 py-1 rounded-full">
                Zero Friction SaaS Foundation
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Enterprise Cloud Architecture & Data Isolation
              </h2>

              <p className="text-slate-300 leading-relaxed">
                Whether deploying conversational AI on <strong>SynqDoc</strong>, payroll compliance on <strong>HRMS</strong>, or online academy infrastructure on <strong>ProTutors</strong>, our platforms maintain the highest privacy and regulatory standards.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">SOC 2 Type II & HIPAA Aligned</div>
                    <div className="text-xs text-slate-400">Regular independent 3rd-party vulnerability assessments and continuous compliance monitoring.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Row-Level Tenant Partitioning</div>
                    <div className="text-xs text-slate-400">Strict database segregation ensures enterprise customer data is strictly segregated and never co-mingled.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">99.9% High-Availability SLA</div>
                    <div className="text-xs text-slate-400">Global multi-region failover, automated data replication, and sub-millisecond response latency.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl relative">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>Architecture Telemetry</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Operational
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Encryption Standard</div>
                      <div className="text-base font-bold text-white">AES-256 (Rest) / TLS 1.3 (Transit)</div>
                    </div>
                    <Lock className="w-5 h-5 text-orange-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Infrastructure Cloud</div>
                      <div className="text-base font-bold text-white">AWS / Cloudflare Edge Network</div>
                    </div>
                    <Server className="w-5 h-5 text-orange-400" />
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Global CDN & DNS</div>
                      <div className="text-base font-bold text-white">HTTP/3 with Automated Wildcard SSL</div>
                    </div>
                    <Activity className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-600 bg-orange-100 px-3 py-1 rounded-full mb-3">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2">
              Everything you need to know about SynqDoc, HRMS, and ProTutors platform onboarding and pricing.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
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
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
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

      {/* ================= HIGH-IMPACT ORANGE BOTTOM CTA BANNER ================= */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block text-xs uppercase tracking-widest font-extrabold text-orange-950 bg-white/80 px-4 py-1.5 rounded-full mb-6">
            Accelerate Your Digital Evolution
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight">
            Ready to Experience SynqDoc™, HRMS™, or ProTutors™?
          </h2>

          <p className="text-lg text-orange-50 max-w-3xl mx-auto mb-10 leading-relaxed">
            Schedule a personalized session with our solutions team or explore our live production platforms directly online. We'll show you how to streamline documents, automate HR, and launch your academy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://synqdoc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Try SynqDoc Live Demo</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>

            <a
              href="https://apt-hrm.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-orange-50 text-orange-600 font-bold text-sm shadow-lg transition-all hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Try HRMS Live Demo</span>
              <ExternalLink className="w-4 h-4 text-orange-600" />
            </a>

            <a
              href="https://www.protutors.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-sm shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2 border border-white/20"
            >
              <span>Launch ProTutors LMS</span>
              <ExternalLink className="w-4 h-4 text-orange-400" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE DEMO BOOKING MODAL (FOR ALL PRODUCTS) ================= */}
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
                  <span>Interactive Demonstration</span>
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
                    Thank you, {demoFormData.name || "there"}. A product specialist has emailed your sandbox credentials and invitation.
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
                        Product of Interest
                      </label>
                      <select
                        value={selectedProductForDemo}
                        onChange={(e) => setSelectedProductForDemo(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm bg-white"
                      >
                        <option value="ProTutors LMS">ProTutors™ (protutors.cloud)</option>
                        <option value="HRMS Suite">HRMS™ Suite (apt-hrm.vercel.app)</option>
                        <option value="SynqDoc AI">SynqDoc™ (synqdoc.com)</option>
                        <option value="All SaaS Products">All 3 SaaS Platforms</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Primary Goal / Note (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your document workflows, HR & payroll, or academy requirements..."
                      value={demoFormData.message}
                      onChange={(e) => setDemoFormData({ ...demoFormData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Live Demo Request</span>
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

export default SaasProductsPage;
