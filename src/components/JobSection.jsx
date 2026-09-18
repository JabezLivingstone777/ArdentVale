import React from 'react';
import { Link } from "react-router-dom";

const JobSection = () => {
    return (
        <section
            className="relative py-20 text-white bg-cover bg-center"
            style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200)'
            }}
        >

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-center">
                    <main className="w-full max-w-4xl">
                        <div className="text-center">

                            <h3 className="text-white text-lg font-semibold mb-4">
                                Enterprise Engineering & Cloud SaaS
                            </h3>

                            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                                Ready to build your next Mobile App, Web Platform, or SaaS Solution? Let's turn your vision into reality.
                            </h2>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                                <Link to="/saas-products">
                                    <button className="bg-slate-900 hover:bg-slate-700 text-white px-8 py-4 rounded-md font-semibold transition-colors">
                                        Explore SaaS Products
                                    </button>
                                </Link>

                                <Link to="/contact-us">
                                    <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-md font-semibold transition-colors">
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
