import React, { useState, useMemo } from "react";
// Simple loading spinner
const LoadingSpinner = () => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>
        <svg className="animate-spin h-8 w-8 text-slate-900" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
    </div>
);
import {
    Search,
    Settings,
    LayoutGrid as Layout,
    Repeat,
    Wrench,
    FileCode,
    Monitor,
    ArrowUp,
} from "lucide-react";
import productChainImg from "../assets/product-chain.png";
import softwareEngineerImg from "../assets/softwareengineer.png";
import teamLeaderImg from "../assets/team-leader.png";

import Lottie from "lottie-react";
import webDevAnimation from "../assets/webdev.json";
import goLogo from "../assets/Techeminence/Go-Logo.png";
import reactLogo from "../assets/Techeminence/React.png";
import flutterLogo from "../assets/Techeminence/flutter.png";
import pythonLogo from "../assets/Techeminence/python-logo-master-v3-TM.png";
import djangoLogo from "../assets/Techeminence/django.png";
// import ObjectiveCImg from '../assets/Techeminence/Objective-c.png';
import dotNetLogo from "../assets/Techeminence/NET.png";
import swiftLogo from "../assets/Techeminence/Swift.png";
import nodejsLogo from "../assets/Techeminence/nodejsDark.png";
import kotlinLogo from "../assets/Techeminence/kotlin-logo.png";
import javaLogo from "../assets/Techeminence/Java.png";
import Footer from "./Footer";
import CardsLifecycleSection from "./CardsLifecycleSection";


const WebDesignPage = () => {
    // ...existing code...

    const coreWebData = useMemo(
        () => [
            {
                id: 1,
                title: "Web Application Development",
                content:
                    "Transform your business vision into powerful, feature-rich web applications. We engineer secure, scalable, and responsive solutions tailored to your users and designed to fuel long-term growth.",
                icon: "🖥️",
            },
            {
                id: 2,
                title: "Website Redesign & Modernization",
                content:
                    "Upgrade your digital presence with sleek UI, modern architecture, and enhanced functionality. We breathe new life into outdated platforms—keeping your business relevant and engaging in today’s fast-evolving landscape.",
                icon: "🔄",
            },
            {
                id: 3,
                title: "Website Development",
                content:
                    "From dynamic websites to responsive landing pages, our team delivers clean, user-friendly, and mobile-optimized designs that perform seamlessly across devices and browsers.",
                icon: "💻",
            },
            {
                id: 4,
                title: "UI/UX Design Services",
                content:
                    "Our UI/UX experts create elegant, user-friendly interfaces that reflect your brand identity. We focus on user behavior, conversion strategies, and accessibility to deliver a truly intuitive experience.",
                icon: "🎨",
            },
            {
                id: 5,
                title: "Web Portal Development",
                content:
                    "We specialize in building robust, industry-specific web portals that function as centralized platforms for users to access, manage, and interact with real-time data and services.",
                icon: "🌐",
            },
            {
                id: 6,
                title: "System Integration Services",
                content:
                    "Enhance operational efficiency with seamless integration of your web apps to third-party platforms, APIs, CRMs, ERPs, and internal tools. We ensure full interoperability and data synchronization across systems.",
                icon: "🔌",
            },
            {
                id: 7,
                title: "Maintenance & Support",
                content:
                    "Already have a web app in production? Let us take over the technical upkeep. From bug fixes to performance tuning and feature updates, we provide proactive and reliable support services.",
                icon: "🛠️",
            },
            {
                id: 8,
                title: "Custom CMS Development",
                content:
                    "Gain full control over your web content with a scalable, secure, and easy-to-use Content Management System. We build custom CMS solutions tailored to your industry, content structure, and editorial workflows.",
                icon: "📂",
            },
        ],
        []
    );

    const [selectedCore, setSelectedCore] = useState(coreWebData[0]);

    const lottieOptions = useMemo(
        () => ({
            animationData: webDevAnimation,
            loop: true,
            autoplay: true,
        }),
        []
    );

    return (
        <div className="bg-white min-h-screen flex flex-col justify-between">
            {/* Banner Section */}
            <div
                className="relative py-20 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Web Design & Development
                    </h1>
                    <div className="flex items-center justify-center space-x-2 text-white text-sm sm:text-base">
                        <span className="hover:text-slate-400 transition-colors cursor-pointer">Home</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-white">Web Design & Development</span>
                    </div>
                </div>
            </div>

            {/* Intro Section */}
            <div className="container px-4 py-10 mx-auto lg:w-10/12">
                <section className="py-10 bg-white mb-6">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                                    Web Design & Development
                                </h2>
                                <p className="text-gray-600 text-2xl font-bold  leading-relaxed mb-4"> We craft visually stunning and highly functional websites that deliver seamless
                                    user experiences and empower businesses to thrive online.</p>
                            </div>
                            <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                                <div className="w-full sm:w-[400px] h-auto">
                                    <Lottie {...lottieOptions} style={{ width: "100%" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="py-10 bg-white">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Employee</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Ervinsoft India Pvt Ltd provides talent to small, medium and large-scale businesses as well as Fortune 500 companies on a contract or contract-to-hire basis on short-term or specialized work requirements. We strive to understand our client’s business area and accordingly plan and execute training initiatives to put our resources at par with the business or project requirements. Our contractual staffing solutions are planned and deployed to serve the client long term with the best talent available in the market.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mt-4">
                            Our demand-supply recruitment framework is supported by a robust 24/7 recruitment engine and an extensive database of industry requirements—ensuring you always stay ahead in the job market.
                        </p>
                    </div>
                </section> */}

                {/* Core Web Offerings */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 lg:max-w-[85%]">
                        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-8 sm:mb-12">
                            Our Core Custom Web Development Offerings
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch shadow-lg rounded-3xl overflow-hidden bg-white">

                            {/* LEFT SCROLLABLE LIST */}
                            <div
                                className="bg-slate-900 text-white flex flex-col rounded-t-3xl lg:rounded-l-3xl 
        max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/60 scrollbar-track-slate-600/30">

                                {coreWebData.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`cursor-pointer px-4 sm:px-6 py-4 text-center sm:text-lg font-medium transition-all border-b border-slate-400/50 ${selectedCore.id === item.id
                                            ? "bg-slate-400 font-bold"
                                            : "hover:bg-slate-500"
                                            }`}
                                        onClick={() => setSelectedCore(item)}
                                    >
                                        {item.title}
                                    </div>
                                ))}

                            </div>

                            {/* RIGHT DETAILS PANEL */}
                            <div className="p-6 sm:p-10 flex flex-col justify-center items-center text-center bg-white transition-all duration-500 ease-in-out">
                                <div className="mb-4 text-4xl">{selectedCore.icon}</div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                                    {selectedCore.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                    {selectedCore.content}
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Lifecycle Section */}
                <div className="mb-12">

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center mb-8 sm:mb-12">
                        Full Lifecycle Web Development
                    </h2>

                    {/* Refactored: useState for cards at top level, not inside callback */}
                    <React.Suspense fallback={<LoadingSpinner />}>
                        <CardsLifecycleSection />
                    </React.Suspense>

                </div>


                {/* Tech Logos */}
                <section className="py-10 bg-white">
                    <h2 className="text-slate-900 text-center font-bold mb-10 text-[28px] sm:text-[35px]">
                        Our Tech Eminence
                    </h2>
                    <div className="overflow-hidden relative mb-6">
                        <div className="marquee whitespace-nowrap animate-marquee">
                            {[
                                goLogo,
                                reactLogo,
                                flutterLogo,
                                pythonLogo,
                                djangoLogo,
                                dotNetLogo,
                                swiftLogo,
                                nodejsLogo,
                                kotlinLogo,
                                javaLogo,
                            ].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt="Tech Logo"
                                    className="inline-block mr-4 sm:mr-6 h-12 sm:h-16"
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Engagement Models */}
                <div className="mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6 sm:mb-12">
                        Our Engagement Models
                    </h2>
                    <p className="text-gray-500 text-center mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
                        We offer flexible engagement models tailored to your product lifecycle, resource needs, and budget.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                img: productChainImg,
                                title: "Product Development",
                                desc: "Have a vision but not sure where to begin? Share your ideas and goals, and our team will handle everything right from ideation and design to full-scale development and deployment.",
                            },
                            {
                                img: softwareEngineerImg,
                                title: "Team Extension",
                                desc: "Looking to scale your in-house team with top-tier talent? Augment your existing setup with our vetted developers, designers, and QA engineers who integrate seamlessly with your workflows.",
                            },
                            {
                                img: teamLeaderImg,
                                title: "Dedicated Development Team",
                                desc: "Stay in control of your product’s direction with a handpicked team working exclusively for you - agile, transparent, and fully integrated into your vision.",
                            },
                        ].map((card, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg shadow-lg p-6 sm:p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-slate-700 hover:text-white group transition-all duration-300"
                            >
                                <div className="flex justify-center mb-4 sm:mb-6">
                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-16 sm:w-20 h-16 sm:h-20 object-contain"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-white transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-slate-900 group-hover:text-white text-sm sm:text-base leading-relaxed transition-colors">
                                    {card.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll-to-Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    );
};

export default WebDesignPage;
