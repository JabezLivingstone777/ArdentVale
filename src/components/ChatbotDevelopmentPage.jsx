import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  Zap,
  MessageSquare,
  Cpu,
  Workflow,
  Send,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Headphones,
  Globe,
  Database,
  Layers,
  ArrowRight,
  TrendingUp,
  Clock,
  Share2,
  Sparkle,
  PhoneCall,
  Terminal,
  Activity,
} from "lucide-react";
import chatbotHeroImg from "../assets/chatbot-hero.jpg";
import chatbotOmnichannelImg from "../assets/chatbot-omnichannel.jpg";
import TestimonialSection from "./TestimonialSection";

const ChatbotDevelopmentPage = () => {
  // Simulator State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! 👋 I'm Ardent AI Assistant. How can I accelerate your business operations today?",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);

  const quickPrompts = [
    "How does RAG enterprise search work?",
    "Can you integrate with WhatsApp & CRM?",
    "What is the average query resolution rate?",
    "Book an AI Consultation",
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: query,
      time: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      let reply =
        "Our conversational AI models process live multi-lingual requests with sub-200ms latency, integrating seamlessly with your backend databases and CRMs.";
      const qLower = query.toLowerCase();

      if (qLower.includes("rag") || qLower.includes("search")) {
        reply =
          "Our RAG (Retrieval-Augmented Generation) pipeline connects directly to your private enterprise docs, PDFs, and SQL tables using Vector Embeddings (Pinecone/Milvus), giving 100% accurate, hallucination-free answers!";
      } else if (qLower.includes("whatsapp") || qLower.includes("crm")) {
        reply =
          "Yes! We support bi-directional real-time sync with WhatsApp Business API, Telegram, Slack, Salesforce, HubSpot, and custom REST APIs.";
      } else if (qLower.includes("rate") || qLower.includes("resolution")) {
        reply =
          "Our intelligent AI bots typically automate 85% to 95% of tier-1 customer inquiries without requiring human intervention, slashing support overhead by 60%.";
      } else if (qLower.includes("consultation") || qLower.includes("book")) {
        reply =
          "Great! You can connect directly with our AI Solutions Architects by clicking the 'Build Your Custom AI Chatbot' button.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: reply,
          time: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 850);
  };

  const industries = [
    {
      title: "E-Commerce & Retail",
      icon: "🛍️",
      desc: "Instant product recommendations, personalized discounts, order tracking, and abandoned cart recovery via AI chat.",
      metrics: "3.4x Higher Conversion Rate",
    },
    {
      title: "Healthcare & Telehealth",
      icon: "🏥",
      desc: "HIPAA-compliant appointment booking, triage symptom checkers, patient intake questionnaires, and 24/7 prescription FAQ assistance.",
      metrics: "70% Shorter Waiting Times",
    },
    {
      title: "Banking & FinTech",
      icon: "💳",
      desc: "Secure transaction summaries, fraud alert notifications, credit card eligibility checks, and multilingual loan advisory bots.",
      metrics: "Bank-Grade SOC2 Security",
    },
    {
      title: "Real Estate & PropTech",
      icon: "🏢",
      desc: "Automated buyer qualification, instant property tour scheduling, neighborhood insights, and 24/7 lead capture.",
      metrics: "80% Increase in Qualified Leads",
    },
    {
      title: "SaaS & Enterprise IT",
      icon: "⚡",
      desc: "Automated IT helpdesk, employee onboarding, password resets, JIRA/Slack ticket creation, and code-base documentation query bots.",
      metrics: "90% First-Contact Resolution",
    },
  ];

  const features = [
    {
      title: "Generative AI & LLM Fine-Tuning",
      desc: "Custom-trained LLMs built on OpenAI GPT-4o, Anthropic Claude 3.5, and Llama 3, fine-tuned on your exact brand voice and proprietary knowledge.",
      icon: <Sparkles className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Enterprise RAG & Knowledge Bases",
      desc: "Retrieval-Augmented Generation that connects your unstructured data, manuals, and internal documentation with zero hallucinations.",
      icon: <Database className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Omnichannel Multi-Platform Sync",
      desc: "Deploy a single intelligent core that synchronizes simultaneously across Web, WhatsApp Business, Telegram, Slack, MS Teams, and Mobile Apps.",
      icon: <Globe className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Conversational Sales & Lead Scoring",
      desc: "Qualify high-intent prospects, calculate instant quotes, capture verified emails, and automatically book calendar meetings into your CRM.",
      icon: <TrendingUp className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Multilingual Natural Language (NLP)",
      desc: "Communicate fluently across 95+ languages with automated sentiment analysis, intent classification, and dialect recognition.",
      icon: <MessageSquare className="w-6 h-6 text-orange-600" />,
    },
    {
      title: "Enterprise Security & Data Privacy",
      desc: "End-to-end data encryption, role-based access control, GDPR/HIPAA compliance, and on-premises or private cloud deployment options.",
      icon: <ShieldCheck className="w-6 h-6 text-orange-600" />,
    },
  ];

  const techStack = [
    { name: "Python", cat: "Core AI Backend" },
    { name: "LangChain", cat: "AI Agent Orchestration" },
    { name: "LlamaIndex", cat: "RAG & Vector Search" },
    { name: "OpenAI GPT-4o", cat: "Foundation LLMs" },
    { name: "Claude 3.5 Sonnet", cat: "Reasoning Models" },
    { name: "Pinecone / Milvus", cat: "Vector Database" },
    { name: "Node.js & WebSockets", cat: "Real-time Gateway" },
    { name: "WhatsApp Cloud API", cat: "Omnichannel Connectors" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white">
      {/* 🔹 Breadcrumb Bar */}
      <div className="pt-24 pb-6 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center text-xs sm:text-sm text-slate-600">
          <Link to="/" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <Link to="/services" className="hover:text-orange-600 transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-slate-400" />
          <span className="text-orange-600 font-semibold">AI & Chatbot Development</span>
        </div>
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-orange-50/40 via-white to-white">
        {/* Ambient Subtle Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-200/40 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-14">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-orange-100/80 border border-orange-300 text-orange-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Next-Gen Enterprise Conversational AI & Chatbots</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
            >
              Intelligent AI Chatbots.{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500">
                Engineered For Scale & Growth.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-slate-600 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 font-normal"
            >
              We engineer state-of-the-art conversational AI agents, smart customer support chatbots, and enterprise RAG systems that automate workflows, convert leads, and delight users 24/7.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact-us"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Build Your Custom AI Chatbot</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>
              
            </motion.div>
          </div>

          {/* 🔹 Hero Graphic: Generated 3D AI Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 sm:p-3"
          >
            <img
              src={chatbotHeroImg}
              alt="AI Chatbot Development Architecture"
              className="w-full h-[260px] sm:h-[360px] md:h-[420px] rounded-2xl object-cover object-center"
            />
          </motion.div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
            {[
              { label: "Query Resolution Rate", value: "95%+", desc: "Zero human intervention" },
              { label: "Average Response Time", value: "< 250ms", desc: "Real-time streaming" },
              { label: "Support Cost Reduction", value: "60%", desc: "Immediate ROI impact" },
              { label: "Language Support", value: "95+ Langs", desc: "Native NLP understanding" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 text-center hover:border-orange-400 hover:shadow-lg transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-800 font-semibold text-sm sm:text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Core Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Comprehensive AI Chatbot Engineering Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              From intelligent standalone widgets to enterprise-wide conversational automation, we deliver secure, production-ready AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Interactive Live AI Chatbot Simulator */}
      <section id="demo-simulator" className="py-20 px-4 sm:px-6 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="px-3.5 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-300 text-xs font-bold uppercase tracking-wider">
              Live Interactive Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-3">
              Test Our Conversational AI Simulator
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Try asking a question below to experience the natural tone, instant responses, and contextual precision of our bots.
            </p>
          </div>

          {/* Chat Window Card */}
          <div className="rounded-3xl border border-slate-300 bg-white shadow-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold shadow-md">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-slate-900 rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base">
                    Ardent Enterprise AI Bot
                  </h4>
                  <p className="text-xs text-emerald-300 font-medium flex items-center gap-1">
                    <Activity className="w-3 h-3" /> Online & Ready
                  </p>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-white/10 text-orange-300 border border-white/20 font-semibold">
                GPT-4o + RAG
              </span>
            </div>

            {/* Chat Messages Log */}
            <div className="p-6 h-80 overflow-y-auto space-y-4 bg-slate-50 flex flex-col">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-3 max-w-[85%] ${
                    m.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  {m.sender === "bot" && (
                    <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-300">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <div
                      className={`p-4 rounded-2xl text-sm leading-relaxed ${
                        m.sender === "user"
                          ? "bg-orange-600 text-white font-medium rounded-tr-none shadow-md"
                          : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1 block px-1">
                      {m.time}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 mr-auto items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-300">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="px-4 py-3 bg-white text-slate-500 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-1.5 text-xs shadow-sm">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggested Quick Prompts */}
            <div className="px-6 py-3 bg-slate-100 border-t border-slate-200 flex flex-wrap gap-2 items-center">
              <span className="text-xs font-medium text-slate-500">Try prompt:</span>
              {quickPrompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => handleSend(prompt)}
                  className="text-xs px-3 py-1.5 rounded-full bg-white hover:bg-orange-50 hover:text-orange-600 hover:border-orange-400 text-slate-700 border border-slate-300 transition-all cursor-pointer shadow-xs"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-4 bg-white border-t border-slate-200 flex items-center gap-3"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Ask about AI chatbots, integration, or capabilities..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm transition-all shadow-md flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🔹 Omnichannel Integration Graphic & Architecture */}
      <section className="py-20 px-4 sm:px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 border border-orange-300 text-xs font-bold uppercase tracking-wider">
              Omnichannel Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
              Connect One AI Brain To Every Channel Your Customers Use
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Our chatbot engines don't exist in silos. We deploy unified conversational pipelines that instantly sync across WhatsApp, Slack, Telegram, Web Widgets, and your core enterprise backend.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "WhatsApp Business & Messaging API",
                  desc: "Automate customer support and sales directly on messaging apps.",
                },
                {
                  title: "Custom Web & Mobile Embeds",
                  desc: "Lightweight, ultra-fast JavaScript & React SDKs with zero site slowdown.",
                },
                {
                  title: "CRM & Database Synchronization",
                  desc: "Bi-directional live updates to Salesforce, HubSpot, Zendesk, and PostgreSQL.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="p-1 rounded-full bg-orange-100 text-orange-600 mt-0.5 shrink-0 border border-orange-200">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 font-semibold text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              <span>Explore Custom Integrations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2 sm:p-3">
            <img
              src={chatbotOmnichannelImg}
              alt="Omnichannel AI Chatbot Integration Architecture"
              className="w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 🔹 Industry Solutions Tabs */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              AI Chatbots Tailored For Every Industry
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Explore how our domain-specific conversational models solve challenges across vertical markets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Tabs List */}
            <div className="space-y-3">
              {industries.map((ind, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustry(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                    activeIndustry === idx
                      ? "bg-orange-50 border-orange-500 text-orange-950 shadow-md font-semibold"
                      : "bg-white border-slate-200 text-slate-700 hover:border-orange-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{ind.icon}</span>
                    <span className="text-sm sm:text-base">{ind.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      activeIndustry === idx ? "text-orange-600 translate-x-1" : "text-slate-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Right Details Card */}
            <div className="lg:col-span-2 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{industries[activeIndustry].icon}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {industries[activeIndustry].title}
                  </h3>
                </div>

                <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                  {industries[activeIndustry].desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <span className="text-xs text-orange-700 uppercase tracking-wider font-bold block">
                    Proven Impact
                  </span>
                  <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                    {industries[activeIndustry].metrics}
                  </span>
                </div>

                <Link
                  to="/contact-us"
                  className="px-6 py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  Request Industry Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Tech Stack Showcase */}
      <section className="py-16 px-4 sm:px-6 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-lg font-bold text-slate-700 mb-8 tracking-wider uppercase">
            Powered By Leading AI & LLM Frameworks
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-md transition-all text-center"
              >
                <div className="text-slate-900 font-bold text-base mb-1">{tech.name}</div>
                <div className="text-orange-600 text-xs font-medium">{tech.cat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Bottom CTA Banner */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center relative z-10 p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl">
          <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-wider inline-block mb-6 border border-orange-500/30">
            Get Started In Days, Not Months
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready To Launch Your Enterprise AI Chatbot?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Schedule a free discovery call with our AI engineers to discuss your use case, test our custom models, and receive a tailored implementation roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact-us"
              className="w-full sm:w-auto px-9 py-4 rounded-full bg-orange-600 hover:bg-orange-500 text-white font-extrabold text-base shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Discovery Call
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/20 transition-all duration-300 hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />
    </div>
  );
};

export default ChatbotDevelopmentPage;
