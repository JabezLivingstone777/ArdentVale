import React from 'react';
import servicesShowcaseImg from '../assets/services-showcase.jpg';
import googleMap from '../assets/google-map.png';
import { ChevronRight } from 'lucide-react';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Section */}
            <div className="relative py-20 bg-gradient-to-r from-slate-900 via-[#0a192f] to-slate-900 overflow-hidden">
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
                    <div className="flex items-center justify-center text-white">
                        <Link to="/" className="hover:text-slate-300 transition-colors">
                            <span>Home</span>
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                        <span className="text-orange-400 font-medium">Services</span>
                    </div>
                </div>
            </div>

            {/* Hero Section with Services Showcase Image */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center relative">
                    {/* World Map Background */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
                        <img
                            src={googleMap}
                            alt="World map background"
                            className="w-full max-w-3xl mx-auto opacity-40"
                            loading="lazy"
                        />
                    </div>
                    <div className="relative z-10 mb-8">
                        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                            Engineering Tomorrow's Tech - Today!
                        </h2>
                        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
                            Custom mobile engineering, full-stack web platforms, autonomous conversational AI, and scalable SaaS solutions.
                        </p>
                    </div>

                    {/* All Services Integrated Showcase */}
                    <div className="relative mb-14">
                        <img
                            src={servicesShowcaseImg}
                            alt="Mobile App Development, Web Development & SaaS Products Showcase"
                            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-slate-100 hover:scale-[1.01] transition-transform duration-300"
                            loading="eager"
                        />
                    </div>

                    {/* Services Section Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
                        {/* Mobile App Development */}
                        <div className="bg-white rounded-xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:bg-slate-800 hover:text-white flex flex-col justify-between border border-slate-100">
                            <div>
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <img src={appDevelopmentImg} alt="Mobile App Development" className="w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white text-center">
                                    Mobile App Development
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-slate-300">
                                    We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership.
                                </p>
                            </div>
                            <Link
                                to="/mobile"
                                className="inline-block w-full text-center bg-slate-900 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-xs uppercase tracking-wider"
                            >
                                Read More
                            </Link>
                        </div>

                        {/* Web Development */}
                        <div className="bg-white rounded-xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:bg-slate-800 hover:text-white flex flex-col justify-between border border-slate-100">
                            <div>
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <img src={webDevelopmentImg} alt="Web Development" className="w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white text-center">
                                    Web Design & Dev
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-slate-300">
                                    We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth.
                                </p>
                            </div>
                            <Link
                                to="/webdesign"
                                className="inline-block w-full text-center bg-slate-900 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-xs uppercase tracking-wider"
                            >
                                Read More
                            </Link>
                        </div>

                        {/* SaaS Products */}
                        <div className="bg-white rounded-xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:bg-slate-800 hover:text-white flex flex-col justify-between border border-slate-100">
                            <div>
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <img src={staffManagementImg} alt="SaaS Products" className="w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white text-center">
                                    SaaS Products
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-slate-300">
                                    Accelerate your enterprise with our flagship SaaS suite: SynqDoc™ for AI document intelligence, HRMS™ for payroll, and ProTutors™ for white-label academies.
                                </p>
                            </div>
                            <Link
                                to="/saas-products"
                                className="inline-block w-full text-center bg-slate-900 hover:bg-slate-700 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-xs uppercase tracking-wider"
                            >
                                Read More
                            </Link>
                        </div>

                        {/* AI & Chatbot Development */}
                        <div className="bg-gradient-to-b from-orange-50/70 to-white rounded-xl p-6 sm:p-7 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:bg-slate-900 hover:text-white flex flex-col justify-between border-2 border-orange-400/40 relative overflow-hidden">
                            <div className="absolute -top-1 -right-1">
                                <span className="bg-orange-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-bl-lg shadow-sm">
                                    AI Powered
                                </span>
                            </div>
                            <div>
                                <div className="flex justify-center mb-6">
                                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 text-orange-600 group-hover:text-orange-400 transition-colors shadow-inner">
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-white text-center">
                                    AI & Chatbot Dev
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed group-hover:text-slate-300">
                                    Deploy autonomous multi-channel AI agents, WhatsApp bots, and custom LLM RAG pipelines engineered with 24/7 intelligent resolution.
                                </p>
                            </div>
                            <Link
                                to="/chatbot-development"
                                className="inline-block w-full text-center bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-lg transition-colors font-semibold text-xs uppercase tracking-wider shadow-md shadow-orange-500/20"
                            >
                                Explore AI Bots →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <TestimonialSection />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50 cursor-pointer"
                aria-label="Scroll to top"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    );
};

export default Services;
