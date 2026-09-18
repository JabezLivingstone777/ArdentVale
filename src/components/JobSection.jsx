import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import techServicesCtaBanner from '../assets/tech-services-cta-banner.jpg';

const JobSection = () => {
    return (
        <section
            className="relative py-24 sm:py-28 text-white bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `url(${techServicesCtaBanner})`
            }}
        >
            {/* Ambient Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#090b14]/90 via-[#070913]/80 to-[#090b14]/92 backdrop-blur-[1.5px]"></div>

            {/* Glowing Accent Orbs */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-center">
                    <main className="w-full max-w-4xl">
                        <div className="text-center">

                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                                <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
                                <span>Enterprise Engineering & Cloud SaaS</span>
                            </div>

                            {/* Main Title */}
                            <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight text-white">
                                Ready to build your next{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                                    Mobile App, Web Platform, or SaaS?
                                </span>
                            </h2>

                            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                                Turn your visionary concepts into high-performance, enterprise-grade digital realities with our specialized engineering team.
                            </p>

                            {/* CTA Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Link to="/our-products">
                                    <button className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-orange-500/30 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer">
                                        <span>Explore Our Products</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </Link>

                                <Link to="/contact-us">
                                    <button className="w-full sm:w-auto border border-white/30 bg-white/10 hover:bg-white text-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-md cursor-pointer hover:shadow-xl hover:scale-105">
                                        Contact Our Team
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </section>
    );
};

export default JobSection;
