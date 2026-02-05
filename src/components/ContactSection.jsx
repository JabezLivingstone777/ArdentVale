import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Briefcase, Users, Mail, Phone, MapPin, Clock } from "lucide-react";
import avcplLogo from "../assets/avcpl-logo.png";

const ContactSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3
    });

    return (
        <div className="w-full">

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Section Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">Need Any Help?</h2>
                        <p className="text-gray-600 text-lg">
                            We are here to support Job Seekers, Employees, and Clients with reliable guidance and solutions.
                        </p>
                    </div>

                    {/* Contact Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                        {/* Email */}
                        <div className="bg-white p-8 rounded-lg shadow-sm">
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">Email Us</h3>
                            <p className="text-gray-600 mb-4">Feel free to reach out to us anytime.</p>
                            <div className="flex items-center text-slate-900">
                                <Mail className="h-5 w-5 mr-2" />
                                <a href="mailto:info@ardentvale.com" className="text-slate-900 hover:underline">
                                    contact@ardentvaleconsultants.com
                                </a>
                            </div>
                        </div>

                        {/* Call */}
                        <div className="bg-blue-900 text-white p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                            <p className="mb-4">Our team will assist you with all queries.</p>
                            <div className="flex items-center">
                                <Phone className="h-5 w-5 mr-2" />
                                <a href="tel:+1 (718) 360-4995" className="text-white hover:underline">
                                    +1 (718) 360-4995
                                </a>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="bg-slate-800 text-white p-8 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Address</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0" />
                                    <p>
                                        16th Floor Orbit, Plot No 30/C, Sy No 83/1, Hyderabad Knowledge City Raidurg, Serilingampally Mandal, Hyderabad,<br />
                                        Telangana, India - 500032
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold">Opening Hours</p>
                                    <div className="flex items-center mt-1">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <p className="text-sm">Mon - Fri: 9:00 AM to 6:00 PM IST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                  

                </div>
                  {/* Stats Section */}
                    <section ref={ref} className="w-full bg-gray-200 py-12">
                        <div className="w-full max-w-7xl mx-auto px-4 lg:px-16">
                            <div className="flex flex-col lg:flex-row items-center justify-between w-full">

                                {/* Logo & Text */}
                                <div className="flex flex-col lg:flex-row items-center lg:items-start mb-8 lg:mb-0 text-center lg:text-left lg:w-7/12">
                                    <div className="shrink-0 mb-4 lg:mb-0">
                                        <img
                                            src={avcplLogo}
                                            alt="AVCPL Logo"
                                            className="h-16 w-auto object-contain mx-auto lg:mx-0"
                                        />
                                    </div>
                                    <p className="text-gray-700 lg:ml-4">
                                        We bring talent and opportunities together through trust, professionalism, and growth-focused collaboration.
                                    </p>
                                </div>

                                {/* Counters */}
                                <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-12 lg:space-x-16 lg:w-5/12 text-center lg:text-left">

                                    {/* Candidates Placed */}
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className="flex items-center mb-2">
                                            <Briefcase className="h-8 w-8 text-slate-900 mr-2" />
                                            <span className="text-3xl font-bold text-gray-800">
                                                {inView ? <CountUp start={0} end={1250} duration={3} separator="," /> : 0}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">Candidates Placed</p>
                                    </div>

                                    {/* Companies Served */}
                                    <div className="flex flex-col items-center sm:items-start">
                                        <div className="flex items-center mb-2">
                                            <Users className="h-8 w-8 text-slate-900 mr-2" />
                                            <span className="text-3xl font-bold text-gray-800">
                                                {inView ? <CountUp start={0} end={160} duration={3} separator="," /> : 0}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">Clients Served</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </section>
            </section>
        </div>
    );
};

export default ContactSection;
