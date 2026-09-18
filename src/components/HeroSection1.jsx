import React from "react";
import { Link } from "react-router-dom";
import GhostFibers from "./GhostFibers";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection1 = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#03111f] pt-24 pb-16 px-4"
    >
      {/* 🔹 Background GhostFibers WebGL Shader Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <GhostFibers
          lineColor="#042642"
          glowColor="#065089"
          speed={0.2}
          scale={2}
          rotation={0}
          rotationSpeed={0.25}
          layers={4}
          waveAmplitude={0.015}
          waveFrequency={3}
          waveSpeed={0.15}
          layerSpeed={0.08}
          twist={0.1}
          twistFrequency={5}
          twistSpeed={1.2}
          lineFrequency={5}
          lineSpacing={2}
          lineSharpness={16}
          glowFalloff={10}
          glowIntensity={1.8}
          brightness={2.2}
          blueBoost={1.3}
          vignette={0.8}
          grain={0}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
        />
      </div>

      {/* Subtle radial center glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] sm:h-[450px] bg-gradient-to-r from-[#065089]/30 via-sky-600/20 to-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🔹 Hero Content based on Ardent & Vale Consultants */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        
        {/* Top Pill Badge: NEW SaaS & Digital Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a233d]/80 backdrop-blur-xl border border-sky-400/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-6 sm:mb-8 hover:border-sky-400/40 transition-all cursor-pointer group"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-white text-slate-950 font-extrabold text-[11px] tracking-wider uppercase shadow-sm">
            NEW
          </span>
          <span className="text-slate-300 group-hover:text-white font-medium text-xs sm:text-sm tracking-tight transition-colors flex items-center gap-1">
            Enterprise SaaS & IT Consulting Solutions
          </span>
        </motion.div>

        {/* Centered Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-5xl mx-auto leading-[1.12] mb-6 drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
        >
          Architecting The Digital Change.{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-200">
            Engineered For Scale.
          </span>
        </motion.h1>

        {/* Subtitle / Company Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="text-slate-300/90 text-sm sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10 drop-shadow-sm font-normal"
        >
          At Ardent & Vale Consultants, we empower organizations with cutting-edge software engineering, intelligent SaaS platforms, and future-ready digital transformation.
        </motion.p>

        {/* Dual Pill CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto"
        >
          <Link
            to="/saas-products"
            className="w-full sm:w-auto min-w-[160px] px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-sm sm:text-base hover:bg-slate-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow-xl"
          >
            Explore SaaS Products
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto min-w-[160px] px-8 py-3.5 rounded-full bg-[#065089]/30 hover:bg-[#065089]/60 text-sky-200 hover:text-white border border-sky-400/30 hover:border-sky-400/60 font-semibold text-sm sm:text-base backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow-lg"
          >
            Learn more
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection1;