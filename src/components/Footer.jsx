import React from "react";
import { Mail, Phone, Facebook, Instagram, Linkedin, Twitter, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    const handleJoinClick = (e) => {
        e.preventDefault();
        navigate("/contact-us");
    };

    return (
        <>
            <footer className="bg-[#111827] text-gray-300 py-12">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-600 pb-2">
                            Popular Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/mobile" className="hover:text-orange-400 transition-colors">→ Mobile App Development</Link></li>
                            <li><Link to="/webdesign" className="hover:text-orange-400 transition-colors">→ Web Design and Development</Link></li>
                            <li><Link to="/staff-augmentation" className="hover:text-orange-400 transition-colors">→ Staff Augmentation</Link></li>
                            <li><Link to="/about" className="hover:text-orange-400 transition-colors">→ About Us</Link></li>
                            <li><Link to="/contact-us" className="hover:text-orange-400 transition-colors">→ Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-600 pb-2">
                            Get in Touch
                        </h3>
                        <p className="text-sm leading-relaxed">
                            <span className="font-medium text-2xl">Ardent and Vale Consultants Pvt Ltd</span>
                            <br />
                                        16th Floor Orbit, Plot No 30/C, Sy No 83/1, Hyderabad Knowledge City Raidurg, Serilingampally Mandal, Hyderabad,<br />
                                        Telangana, India - 500032
                        </p>
                        <div className="mt-4 space-y-2 text-sm">
                            <p className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" /> +1 (718) 360-4995
                            </p>
                            <p className="flex items-center">
                                <Mail className="w-4 h-4 mr-2" /> contact@ardentvaleconsultants.com
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-600 pb-2">
                            Find Us and Say HAI
                        </h3>
                        <div className="flex space-x-4 mt-2">
                            <a href="https://www.facebook.com/people/APTIT-Professional-Service/100066877321032/#" className="hover:text-blue-500"><Facebook className="w-6 h-6" /></a>
                            <a href="https://x.com/APTITServices" className="hover:text-blue-400"><Twitter className="w-6 h-6" /></a>
                            <a href="https://www.instagram.com/aptitps/" className="hover:text-pink-500"><Instagram className="w-6 h-6" /></a>
                            <a href="https://www.linkedin.com/company/aptit-professional-services-usa/" className="hover:text-blue-600"><Linkedin className="w-6 h-6" /></a>
                            {/* <a href="#" className="hover:text-red-500"><Globe className="w-6 h-6" /></a> */}
                        </div>
                    </div>


                    <div>
                        <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-600 pb-2">
                            Newsletter
                        </h3>
                        <p className="text-sm mb-4">
                            Sign up with your name and email to get fresh updates.
                        </p>
                        <form className="flex flex-col gap-3" onSubmit={handleJoinClick}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />

                            <button
                                type="submit"
                                className="w-full px-5 py-2 bg-slate-400 hover:bg-slate-700 text-white font-medium rounded"
                            >
                                Join
                            </button>
                        </form>

                    </div>
                </div>
            </footer>

            {/* ✅ This black footer is now below the main footer */}
            <div className="bg-black text-white py-6 w-full border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        <div className="flex space-x-6 text-sm">
                            <Link to="/privacy-policy" className="hover:text-orange-400 transition-colors">Privacy Policy</Link>
                            <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
                            <Link to="/contact-us" className="hover:text-orange-400 transition-colors">Contact Us</Link>
                        </div>

                        <div className="text-sm">
                            © 2025 <span className="text-orange-400">Ardent and Vale Consultant pvt ltd</span> All Rights Reserved
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
