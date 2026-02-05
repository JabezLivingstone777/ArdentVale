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

                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-center leading-relaxed">
                    IT Consulting • Staffing Solutions • Business Services
                </p>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-center leading-relaxed">
                    Ardent & Vale Consultants Pvt Ltd (CIN: U78100TS2025PTC200214) delivers strategic
                    consulting, staffing, and professional solutions for global organizations.
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
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Key Company Details</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We are a consulting and workforce solutions company connecting skilled talent with businesses worldwide.
                                Ardent & Vale Consultants Pvt Ltd is a professional consulting and
                                workforce solutions company dedicated to connecting businesses with
                                skilled talent while enabling sustainable organizational growth. We
                                work across multiple industries helping organizations build strong,
                                scalable, and people-focused work environments.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg p-8 rounded-xl border border-gray-200 transition hover:shadow-2xl hover:scale-[1.03]">
                            <h3 className="text-2xl font-semibold text-slate-900 mb-4">Mission & Vision</h3>
                            <p className="text-gray-700 leading-relaxed">
                                We aim to transform how companies engage with talent.
                                By following our values to achieve significant growth and success, we aim to make a meaningful change in the way our industry partners with and is regarded by candidates and clients.
                                Our mission is to deliver long-term value through trust, transparency and performance-driven partnerships.
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
                            <img src={appDevelopmentImg} className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Mobile App Development</h3>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                        We specialize in creating high-quality mobile applications that enhance user experience and drive business growth.                    </p>
                    <Link to="/mobile">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={webDevelopmentImg} className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Web Design & Development</h3>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                        We craft visually stunning and highly functional websites that deliver seamless user experiences and empower businesses to thrive online.                    </p>
                    <Link to="/webdesign">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition">
                            Read More
                        </button>
                    </Link>
                </div>

                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition group hover:bg-slate-700 hover:text-white">
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-white">
                            <img src={staffManagementImg} className="w-8 h-8" />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4">Staff Augmentation</h3>
                    <p className="text-gray-600 group-hover:text-white leading-relaxed mb-6">
                        Our recruitment arm keeps evolving. At Ardent and Vale Consultants Pvt Ltd, we don't just fill roles. We align with your vision of business transformation.                    </p>
                    <Link to="/staff-augmentation">
                        <button className="bg-slate-900 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>

            {/* Job / Employee / Client */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {[{
                        title: "Job Seekers",
                        img: appDevelopmentImg,
                        desc: "Are you looking to jump start your career or acquire more experience in the IT sectors of Application Development and Maintenance, Data Warehousing, QA Testing, ERP, or Infrastructure Management? Then you’ve come to the right place.",
                        link: "/mobile"
                    }, {
                        title: "Employees",
                        img: staffManagementImg,
                        desc: "Are you a business establishment who wants recruits on contract or contract-to-hire basis to realize your short-term or specialized work requirements? We can delegate the right candidate to suit your project needs.",
                        link: "/webdesign"
                    }, {
                        title: "Clients",
                        img: webDevelopmentImg,
                        desc: "Are you an organization looking for manpower with the perfect blend of IT experience, knowledge and commitment to your business goals and ideals? Allow us to help you fulfill your needs.",
                        link: "/staff-augmentation"
                    }].map((card, i) => (
                        <div key={i} className="bg-white p-8 shadow-lg rounded-lg hover:bg-slate-700 hover:text-white transition">
                            <div className="flex justify-center mb-6">
                                <img src={card.img} className="w-16 h-16" />
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
                            At Ardent and Vale Consultants Pvt Ltd, we are committed to building the best IT careers possible by creating the perfect match between a job seeker’s expertise and client requirements, guaranteeing a long and fruitful association for all.
                            We are committed to building strong IT careers by creating perfect talent-role matches.
                        </p>
                        <p>
                            To elevate the recruiting industry by changing the rules of the game. We're building a company made up of profoundly talented people who leverage data to deliver the top passive technology talent.
                            We elevate recruiting by leveraging data-driven talent sourcing.
                        </p>
                        <p>
                            We aim to transform how companies engage with talent.
                            By following our values to achieve significant growth and success, we aim to make a meaningful change in the way our industry partners with and is regarded by candidates and clients.
                        </p>
                        <p>
                            We connect technology’s brightest with world-leading organizations.
                            Our purpose is to connect technology’s greatest minds with the world’s top companies while cultivating a work environment that reflects our values: Be Amazing, Have Fun, Do the Essential, Adapt, and Have Purpose.
                        </p>
                    </div>
                    {/* Contact Snapshot */}
                    <h2 className="text-3xl font-bold text-slate-800 mb-8">Contact Snapshot</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[{
                            icon: <Phone className="text-slate-700" />,
                            label: "Phone",
                            value: "+1 (718) 360-4995"
                        }, {
                            icon: <Mail className="text-slate-700" />,
                            label: "Email",
                            value: "contact@ardentvaleconsultants.com"
                        }, {
                            icon: <MapPin className="text-slate-700" />,
                            label: "Headquarters",
                            value: "Shaikpet, Telangana, 500081"
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
