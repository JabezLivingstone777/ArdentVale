import React from 'react';
import { Link } from "react-router-dom";
const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl w-10/12 mx-auto px-4 space-y-20">

                {/* ROW 1 → ABOUT & VISION/MISSION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* ABOUT LEFT */}
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">About Us</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Ardent & Vale Consultants Pvt Ltd is a premier software engineering and
                            technology consulting company specializing in custom mobile application development,
                            high-performance web platforms, and intelligent enterprise SaaS products. We partner
                            with startups and global enterprises to accelerate digital transformation and build
                            scalable digital ecosystems.
                        </p>

                        <Link to="/about">
                            <button className="bg-slate-900 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-semibold transition">
                                Learn More
                            </button>
                        </Link>
                    </div>
                    {/* MISSION & VISION */}
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Mission & Vision</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our mission is to architect next-generation digital products through cutting-edge
                            mobile engineering, modern cloud web architectures, and proprietary SaaS innovations—empowering
                            organizations to scale effortlessly with unmatched security and efficiency.
                        </p>

                        <Link to="/about">
                            <button className="bg-slate-900 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-semibold transition">
                                Learn More
                            </button>
                        </Link>
                    </div>
                    <div className="w-full  h-auto  overflow-hidden rounded-xl shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
                            alt="Company Team Collaboration"
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Company Overview</h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Ardent & Vale Consultants Pvt Ltd (CIN: U78100TS2025PTC200214) delivers full-lifecycle
                            mobile app development, custom web engineering, and enterprise SaaS solutions.
                            Headquartered in Hyderabad, Telangana — we build digital platforms engineered for global scale.
                        </p>

                        <Link to="/about">
                            <button className="bg-slate-900 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-semibold transition">
                                Learn More
                            </button>
                        </Link>
                    </div>


                </div>

            </div>
        </section>

    );
};

export default AboutSection;
