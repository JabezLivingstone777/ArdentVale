import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImg1 from '../assets/about-img21.png';

// Expertise images
import appDevelopmentImg from "../assets/Techeminence/app-development.png";
import webDevelopmentImg from "../assets/Techeminence/development.svg";
import staffManagementImg from "../assets/Techeminence/staff-management.svg";

// Client logos from /successclients
const allLogos = [
    { name: "Schengen Visa Itinerary", src: "/successclients/logo1.webp" },
    { name: "Apvision", src: "/successclients/logo2.png" },
    { name: "Nano Space", src: "/successclients/Logo3.png" },
    { name: "Pyramid IT Solutions", src: "/successclients/logo4.png" },
    { name: "Saffron Vacations", src: "/successclients/logo5.png" },
    { name: "Pixel Media", src: "/successclients/logo6.png" },
    { name: "Plan At", src: "/successclients/logo7.png" },
    { name: "Quadrant Neotech", src: "/successclients/logo8.png" },
    { name: "Aarna", src: "/successclients/logo9.png" },
    { name: "Powerlifting Association", src: "/successclients/logo10.png" },
    { name: "Venetia", src: "/successclients/logo12.jpg" },
    { name: "Talent Sync", src: "/successclients/logo13.png" },
    { name: "Dhruva Publications", src: "/successclients/logo14.png" },
    { name: "e-lead", src: "/successclients/logo16.webp" },
    { name: "Sastra Herbals", src: "/successclients/logo17.png" },
    { name: "NP Pesto", src: "/successclients/logo18.webp" },
    { name: "Busy Bees", src: "/successclients/logo19.png" },
];

const PortfolioPage = () => {
    const [currentSet, setCurrentSet] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prev) => (prev + 1) % Math.ceil(allLogos.length / 6));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const startIndex = currentSet * 6;
    const visibleLogos = allLogos.slice(startIndex, startIndex + 6);

    return (
        <div className="min-h-screen bg-white">
            {/* Banner with image */}
            <div
                className="relative bg-cover bg-center py-20"
                style={{ backgroundImage: `url(${aboutImg1})` }}
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
                        Portfolio
                    </h1>
                    <div className="flex items-center justify-center text-white">
                        <span className="hover:text-slate-400 transition-colors cursor-pointer">
                            Home
                        </span>
                        <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                        <span className="text-white font-semibold">Portfolio</span>
                    </div>
                </div>
            </div>

            {/* OUR EXPERTISE Section */}
            <section className="pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-8 tracking-wider text-slate-900">
                        OUR EXPERTISE
                    </h1>
                    <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto text-lg">
                        Ardent and Vale Consultants Pvt. Ltd. is a strategic digital solutions partner specializing in innovative technology services. From custom mobile applications to enterprise-grade web platforms and scalable cloud systems, we empower businesses to streamline operations, enhance customer experience, and achieve digital growth.
                        We specialize in cutting-edge
                        mobile app development, custom web solutions, cloud infrastructure,
                        and IT consulting services designed to optimize operations and
                        accelerate growth.
                    </p>
                    <div className="mt-8 w-32 h-1 bg-slate-900 mx-auto"></div>
                </div>

                {/* Expertise Cards */}
                <div className="max-w-6xl mx-auto mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Mobile App Development */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img
                                        src={appDevelopmentImg}
                                        alt="Mobile App Development"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white">
                                Mobile App Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We engineer high-performance, custom mobile apps that drive
                                massive user acquisition and ensure long-term market
                                leadership.
                            </p>
                            <button className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/mobile">Read More</Link>
                            </button>
                        </div>

                        {/* Web Development */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img
                                        src={webDevelopmentImg}
                                        alt="Web Development"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Web Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We build intuitive, scalable web platforms designed to convert
                                visitors into loyal customers and accelerate your business
                                growth.
                            </p>
                            <button className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/webdesign">Read More</Link>
                            </button>
                        </div>

                        {/* SaaS Products */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img
                                        src={staffManagementImg}
                                        alt="SaaS Products"
                                        className="w-8 h-8"
                                    />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                SaaS Products
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                Next-gen SaaS product suite featuring SynqDoc™ (AI document automation), HRMS™ (workforce & payroll), and ProTutors™ (white-label LMS).
                            </p>
                            <button className="bg-slate-900 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/saas-products">Read More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Authorised Partners */}
            <h2 className="text-4xl font-bold text-center mb-8 tracking-wider text-slate-900">
                AUTHORISED PARTNERS
            </h2>
            <p className="text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-16 text-lg">
                Ardent and Vale Consultants collaborates with leading global technology platforms to deliver secure, scalable, and high-performance solutions. Our partnerships strengthen our capabilities across custom mobile application development, enterprise web engineering, cloud infrastructure, and proprietary SaaS platforms.
            </p>

            {/* About Us */}
            <div className="mt-16 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 tracking-wider  text-slate-900">
                    ABOUT US
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Ardent and Vale Consultants Pvt. Ltd. is a full-stack technology and software engineering company. Headquartered in Hyderabad, India with global delivery capabilities, we focus on engineering high-impact mobile applications, modern web platforms, and intelligent SaaS ecosystems through cutting-edge architecture, agile development, and performance excellence.
                </p>
            </div>
            {/* Consultation Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900  tracking-wide">
                        Let’s Transform Your Ideas Into Reality
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">
                        At Ardent and Vale Consultants, we help organizations navigate digital transformation with expert guidance and scalable solutions.
                        Feel free to contact us for expert consultation and guidance tailored to your business needs.
                    </p>
                    <Link
                        to="/contact-us"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-colors"
                    >
                        Free Consultation Now
                    </Link>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16 tracking-wider text-slate-900">
                        OUR CLIENTS
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center transition-all duration-500">
                        {visibleLogos.map((logo, index) => (
                            <div key={index} className="flex justify-center">
                                <div className="h-24 w-48 bg-white rounded-2xl border border-gray-200/80 shadow-xs flex items-center justify-center p-4 hover:shadow-md hover:border-orange-500/40 transition-all duration-300">
                                    <img
                                        src={logo.src}
                                        alt={logo.name || `Client ${index + 1}`}
                                        className="max-h-14 max-w-[140px] w-auto h-auto object-contain transition-transform duration-300 hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 text-gray-500 text-sm italic">
                        Showing {startIndex + 1}–
                        {Math.min(startIndex + 6, allLogos.length)} of {allLogos.length} clients
                    </div>
                </div>
            </section>
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

export default PortfolioPage;
