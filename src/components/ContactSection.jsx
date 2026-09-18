import React from "react";
import { Link } from "react-router-dom";
import { Smartphone, Code2, Rocket, Bot, Mail, Phone, MapPin, Clock } from "lucide-react";
import avcplLogo from "../assets/avcpl-logo.png";

const ContactSection = () => {
    return (
        <div className="w-full">

            <section className="py-12 md:py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-slate-800 mb-3">Need Any Help?</h2>
                        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                            Connect with our engineering experts to build custom mobile apps, modern web platforms, AI chatbots, and enterprise SaaS solutions.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

                        {/* Email */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Email Us</h3>
                            <p className="text-gray-600 mb-4">Feel free to reach out to us anytime.</p>
                            <div className="flex items-center text-slate-900">
                                <Mail className="h-5 w-5 mr-2 text-orange-600" />
                                <a href="mailto:info@ardentval.com" className="text-slate-900 hover:text-orange-600 transition font-medium">
                                    info@ardentval.com
                                </a>
                            </div>
                        </div>

                        {/* Call */}
                        <div className="bg-slate-900 text-white p-8 rounded-lg shadow-md hover:bg-slate-800 transition">
                            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                            <p className="text-slate-300 mb-4">Our tech consultants are ready to assist you.</p>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2 text-orange-400" />
                                <a href="tel:+917207837711" className="text-white hover:text-orange-300 transition font-medium">
                                    +91 7207837711
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="bg-slate-800 text-white p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">Address</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-orange-400" />
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        16th Floor Orbit, Plot No 30/C, Sy No 83/1, Hyderabad Knowledge City Raidurg, Serilingampally Mandal, Hyderabad,<br />
                                        Telangana, India - 500032
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Opening Hours</p>
                                    <div className="flex items-center mt-1">
                                        <Clock className="h-4 w-4 mr-2 text-orange-400" />
                                        <p className="text-sm text-slate-300">Mon - Fri: 9:00 AM to 6:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Services Bar */}
                <section className="w-full bg-slate-100 border-y border-slate-200 py-10">
                    <div className="w-full max-w-7xl mx-auto px-4 lg:px-12">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                            {/* Logo & Value Proposition */}
                            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left lg:w-5/12">
                                <div className="shrink-0 mb-4 lg:mb-0">
                                    <img
                                        src={avcplLogo}
                                        alt="AVCPL Logo"
                                        className="h-16 w-auto object-contain mx-auto lg:mx-0"
                                    />
                                </div>
                                <p className="text-gray-700 lg:ml-5 text-sm sm:text-base leading-relaxed">
                                    Engineering next-gen mobile apps, high-performance web platforms, and intelligent SaaS solutions built for scale and security.
                                </p>
                            </div>

                            {/* Services Icon Cards */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full lg:w-7/12">

                                {/* Mobile App Development */}
                                <Link
                                    to="/mobile"
                                    className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-500/50 hover:-translate-y-0.5 transition-all text-center"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center mb-2 group-hover:bg-orange-600 group-hover:text-white transition-colors text-orange-600">
                                        <Smartphone className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                        Mobile Apps
                                    </span>
                                    <span className="text-[10px] text-gray-500 hidden sm:inline-block mt-0.5">
                                        iOS & Android
                                    </span>
                                </Link>

                                {/* Web Development */}
                                <Link
                                    to="/webdesign"
                                    className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-500/50 hover:-translate-y-0.5 transition-all text-center"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center mb-2 group-hover:bg-orange-600 group-hover:text-white transition-colors text-slate-800">
                                        <Code2 className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                        Web Design
                                    </span>
                                    <span className="text-[10px] text-gray-500 hidden sm:inline-block mt-0.5">
                                        Full-Stack & Cloud
                                    </span>
                                </Link>

                                {/* SaaS Products */}
                                <Link
                                    to="/our-products"
                                    className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-500/50 hover:-translate-y-0.5 transition-all text-center"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center mb-2 group-hover:bg-orange-600 group-hover:text-white transition-colors text-orange-600">
                                        <Rocket className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                        SaaS Suite
                                    </span>
                                    <span className="text-[10px] text-gray-500 hidden sm:inline-block mt-0.5">
                                        3 Platforms
                                    </span>
                                </Link>

                                {/* AI & Chatbot */}
                                <Link
                                    to="/chatbot-development"
                                    className="group flex flex-col items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md hover:border-orange-500/50 hover:-translate-y-0.5 transition-all text-center"
                                >
                                    <div className="w-11 h-11 rounded-lg bg-slate-100 flex items-center justify-center mb-2 group-hover:bg-orange-600 group-hover:text-white transition-colors text-slate-800">
                                        <Bot className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                        AI & Chatbots
                                    </span>
                                    <span className="text-[10px] text-gray-500 hidden sm:inline-block mt-0.5">
                                        Smart Automation
                                    </span>
                                </Link>

                            </div>

                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ContactSection;
