import React from "react";
import { Link } from "react-router-dom";
import GhostFibers from "./GhostFibers";
import { motion } from "framer-motion";

const HeroSection1 = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#070614] pt-24 pb-16 px-4"
    >
      {/* 🔹 Background GhostFibers WebGL Shader Canvas */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <GhostFibers
          lineColor="#140E35"
          glowColor="#3437A0"
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
          glowIntensity={1.6}
          brightness={2}
          blueBoost={1.25}
          vignette={0.8}
          grain={0.05}
          dpr={1}
          lightMode={false}
          fps={60}
          paused={false}
        />
      </div>

      {/* Subtle radial center glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-gradient-to-r from-blue-600/20 via-indigo-500/25 to-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 🔹 Hero Content matching reference layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center px-4 sm:px-6">
        
        {/* Top Pill Badge: NEW Creative Components */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#181534]/80 backdrop-blur-xl border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.3)] mb-8 sm:mb-10 hover:border-white/30 transition-all cursor-pointer group"
        >
          <span className="px-2.5 py-0.5 rounded-full bg-white text-slate-950 font-extrabold text-[11px] tracking-wider uppercase shadow-sm">
            NEW
          </span>
          <span className="text-slate-300 group-hover:text-white font-medium text-xs sm:text-sm tracking-tight transition-colors">
            Creative Components
          </span>
        </motion.div>

        {/* Centered Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-10 drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
        >
          Light woven from the quiet parts of the spectrum.
        </motion.h1>

        {/* Dual Pill CTA Buttons: Get started + Learn more */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-md mx-auto"
        >
          <Link
            to="/saas-products"
            className="w-full sm:w-auto min-w-[150px] px-8 py-3.5 rounded-full bg-white text-slate-950 font-bold text-sm sm:text-base hover:bg-slate-100 hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow-xl"
          >
            Get started
          </Link>

          <Link
            to="/about"
            className="w-full sm:w-auto min-w-[150px] px-8 py-3.5 rounded-full bg-[#24214f]/70 hover:bg-[#2f2b66] text-[#b8b3f8] hover:text-white border border-indigo-400/25 hover:border-indigo-400/50 font-semibold text-sm sm:text-base backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 text-center shadow-lg"
          >
            Learn more
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection1;