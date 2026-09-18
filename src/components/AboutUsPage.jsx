import React from "react";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";

import appDevelopmentImg from "../assets/Techeminence/app-development.png";
import webDevelopmentImg from "../assets/Techeminence/development.svg";
import staffManagementImg from "../assets/Techeminence/staff-management.svg";

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 font-sans">

            {/* Hero Section */}
            <div
                className="relative py-20 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1521790361543-f645cf042ec4?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
                    <div className="flex items-center justify-center text-white text-sm sm:text-base">
                        <Link to="/" className="hover:text-white transition">
                            <span className="hover:text-slate-400 transition-colors cursor-pointer">
                                Home
                            </span>
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                        <span className="text-white">About Us</span>
                    </div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center">
                    Company Overview
                </h2>

                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-center leading-relaxed font-semibold text-lg text-slate-900">
                    Mobile App Development • Web Design & Engineering • Enterprise SaaS Products
                </p>
                <p className="text-gray-600 mt-2 max-w-3xl mx-auto text-center leading-relaxed">
                    Ardent & Vale Consultants Pvt Ltd (CIN: U78100TS2025PTC200214) is a technology innovation company
                    delivering state-of-the-art mobile applications, full-stack web platforms, and intelligent SaaS solutions for businesses globally.
                </p>

                <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-stretch gap-8 md:gap-12">
                    {/* LEFT IMAGE */}
                    <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                            alt="Team"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* RIGHT CARDS */}
                    <div className="w-full md:w-1/2 space-y-8">
                        <div className="bg-white shadow-lg p-8 rounded-xl border border-gray-200 transition hover:shadow-2xl hover:scale-[1.03]">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Engineering Excellence</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We architect high-performance digital products from the ground up. Combining cutting-edge mobile
                                engineering across iOS and Android with resilient web ecosystems and automated SaaS architectures,
                                we empower organizations to modernize workflows and capture market leadership.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg p-8 rounded-xl border border-gray-200 transition hover:shadow-2xl hover:scale-[1.03]">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Mission & Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Our mission is to engineer intuitive, secure, and scalable digital solutions that accelerate business growth.
                                By staying at the forefront of AI innovation, cloud architecture, and modern UX design, we build long-term
                                technology partnerships rooted in transparency, performance, and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={appDevelopmentImg} className="w-8 h-8" alt="Mobile App Development" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mobile App Development</h3>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                        Custom native iOS, Android, Flutter, and React Native mobile applications engineered for fluid user experiences, high retention, and effortless scalability.
                    </p>
                    <Link to="/mobile">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={webDevelopmentImg} className="w-8 h-8" alt="Web Development" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Web Design & Development</h3>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                        Visually stunning, secure, and responsive web platforms and custom portals built with modern full-stack architectures and seamless API integrations.
                    </p>
                    <Link to="/webdesign">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={staffManagementImg} className="w-8 h-8" alt="SaaS Products" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">SaaS Products</h3>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                        Explore our enterprise SaaS products: SynqDoc™ for AI conversational & document intelligence (synqdoc.com), and HRMS™ for automated HR, payroll, and workforce operations.
                    </p>
                    <Link to="/saas-products">
                        <button className="bg-slate-900 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

            {/* 3 Core Technology Pillars */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[{
                        title: "Cross-Platform Mobile Apps",
                        img: appDevelopmentImg,
                        desc: "High-performance iOS and Android mobile solutions built with React Native and Flutter for seamless multi-platform reach and native speed.",
                        link: "/mobile"
                    }, {
                        title: "Custom Full-Stack Web",
                        img: webDevelopmentImg,
                        desc: "Modern React, Next.js, and cloud backend web applications optimized for speed, search visibility, conversion, and robust security.",
                        link: "/webdesign"
                    }, {
                        title: "Cloud & AI SaaS Platforms",
                        img: staffManagementImg,
                        desc: "Proprietary multi-tenant SaaS platforms featuring SynqDoc™ for AI document automation and HRMS™ for intelligent operational workflows.",
                        link: "/saas-products"
                    }].map((card, i) => (
                        <div key={i} className="bg-white p-8 shadow-lg rounded-lg hover:bg-slate-700 hover:text-white transition">
                            <div className="flex justify-center mb-6">
                                <img src={card.img} className="w-16 h-16" alt={card.title} />
                            </div>
                            <h3 className="text-xl font-bold text-center">{card.title}</h3>
                            <p className="text-center my-4">{card.desc}</p>
                            <div className="text-center">
                                <Link to={card.link} className="inline-block bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 rounded-md transition">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Vision & Purpose */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Our Vision & Purpose</h2>

                    <div className="space-y-8 text-gray-600 leading-relaxed">
                        <p>
                            At Ardent and Vale Consultants Pvt Ltd, we are committed to engineering world-class software products that empower businesses to innovate and scale in an increasingly digital world.
                        </p>
                        <p>
                            We bring together expert engineers, modern design paradigms, and agile methodologies to solve complex technology challenges for our partners across industries.
                        </p>
                        <p>
                            From concept discovery and UI/UX design to cloud deployment and continuous optimization, we turn visionary ideas into production-ready digital realities.
                        </p>
                        <p>
                            Our purpose is to lead the technological frontier with high-impact mobile apps, robust websites, and intelligent SaaS solutions built on trust, innovation, and performance excellence.
                        </p>
                    </div>
                    {/* Contact Snapshot */}
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Snapshot</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[{
                            icon: <Phone className="text-slate-700" />,
                            label: "Phone",
                            value: "+91 7207837711"
                        }, {
                            icon: <Mail className="text-slate-700" />,
                            label: "Email",
                            value: "info@ardentval.com"
                        }, {
                            icon: <MapPin className="text-slate-700" />,
                            label: "Headquarters",
                            value: "16th Floor Orbit, Raidurg, Hyderabad-500032"
                        }].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition">
                                <div className="p-3 bg-gray-100 rounded-md">{item.icon}</div>
                                <div>
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                    <p className="font-medium text-gray-800">{item.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            <TestimonialSection />

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7 7 7M12 3v18" />
                </svg>
            </button>

        </div>
    );
};

export default AboutUsPage;
