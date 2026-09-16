import React from 'react';
import aboutImg1 from '../assets/about-img1.png';
import googleMap from '../assets/google-map.png';
import { ChevronRight, Smartphone, Monitor, Search } from 'lucide-react';
import appDevelopmentImg from '../assets/Techeminence/app-development.png';
import webDevelopmentImg from '../assets/Techeminence/development.svg';
import staffManagementImg from '../assets/Techeminence/staff-management.svg';
import { Link } from "react-router-dom";
import TestimonialSection from "./TestimonialSection";

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb Section */}
            <div
                className="relative py-20 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl font-bold text-white mb-4">Services</h1>
                    <div className="flex items-center justify-center text-white">
                        <Link to="/" className="hover:text-white transition">
                            <span className="hover:text-slate-400 transition-colors cursor-pointer">
                                Home
                            </span>
                        </Link>
                        <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
                        <span className="text-white">Services</span>
                    </div>
                </div>
            </div>


            {/* Hero Section with Team Image */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center relative">
                    {/* World Map Background */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 pointer-events-none select-none">
                        <img
                            src={googleMap}
                            alt="World map background"
                            className="w-full max-w-3xl mx-auto opacity-60"
                            style={{ zIndex: 0 }}
                        />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-slate-800 mb-4">
                            Welcome to Ardent and Vale Consultants Pvt Ltd
                        </h2>
                        <p className="text-xl text-gray-500 mb-12">
                            Engineering Tomorrow's Tech - Today!
                        </p>
                    </div>
                    {/* Team Illustration */}
                    <div className="relative mb-12">
                        <img
                            src={aboutImg1}
                            alt="Professional team illustration"
                            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                        />
                    </div>
                    {/* Services Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Mobile App Development */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img src={appDevelopmentImg} alt="Mobile App Development" className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Mobile App Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership.
                            </p>
                            <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/mobile">Read More</Link>
                            </button>
                        </div>

                        {/* Web Development */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img src={webDevelopmentImg} alt="Web Development" className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                Web Design and Development
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth.
                            </p>
                            <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/webdesign">Read More</Link>
                            </button>
                        </div>

                        {/* SaaS Products */}
                        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow group hover:bg-slate-700 hover:text-white">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                                    <img src={staffManagementImg} alt="SaaS Products" className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-white">
                                SaaS Products
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-white">
                                Accelerate your enterprise with our flagship SaaS products: SynqDoc™ for AI conversational & document intelligence, and HRMS™ for automated HR & payroll management.
                            </p>
                            <button className="bg-slate-900 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors">
                                <Link to="/saas-products">Read More</Link>
                            </button>
                        </div>

                    </div>
                    <div className="bg-white py-16">
                        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

                            {[{
                                title: "Job Seekers",
                                img: appDevelopmentImg,
                                desc: "Meaningful career opportunities in top organizations.Looking to build your career with the right guidance, training, and opportunities? At Ardent & Vale Consultants Pvt. Ltd., we help freshers and experienced professionals connect with leading organizations and reputable roles that align with their skills and aspirations.",
                                link: "/mobile"
                            }, {
                                title: "Employees",
                                img: staffManagementImg,
                                desc: "Permanent & contract staffing with onboarding support.Interested in being a part of a collaborative, progressive, and dynamic work culture? Join our internal team and work alongside industry experts to deliver top-class staffing and workforce solutions to global clients.",
                                link: "/webdesign"
                            }, {
                                title: "SaaS & Enterprise",
                                img: webDevelopmentImg,
                                desc: "Intelligent SaaS products and cloud architectures. We empower organizations with scalable AI automation and infrastructure visibility to drive peak operational performance.",
                                link: "/saas-products"
                            }].map((card, i) => (
                                <div key={i} className="bg-white p-8 shadow-xl rounded-lg hover:bg-slate-700 hover:text-white transition">
                                    <div className="flex justify-center mb-6">
                                        <img src={card.img} className="w-16 h-16" alt="service" />
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
                </div>

            </div>
            <TestimonialSection />

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

export default Services;



