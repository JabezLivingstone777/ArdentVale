import React, { useState } from "react";
import avcplLogo from "../assets/avcpl-logo.png";
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed w-full top-0 left-0 z-50 bg-gray-300 text-gray-800 shadow-md h-16 lg:h-20 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-0.5">

              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <img
                  src={avcplLogo}
                  alt="AVCPL Logo"
                  className="h-12 w-auto object-contain"
                  style={{ maxWidth: "160px" }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                to="/"
                className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
              >
                About Us
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  type="button"
                  className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors flex items-center space-x-1 focus:outline-none"
                  onClick={() => {
                    navigate("/services");
                    setIsServicesOpen(!isServicesOpen);
                  }}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white text-black rounded-md shadow-lg py-2 z-50"
                    >
                      <Link
                        to="/mobile"
                        className="block px-4 py-2 font-bold text-slate-900 hover:bg-gray-100 hover:text-blue-800 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Mobile App Development
                      </Link>
                      <Link
                        to="/webdesign"
                        className="block px-4 py-2 font-bold text-slate-900 hover:bg-gray-100 hover:text-blue-800 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        Web Design & Development
                      </Link>
                      <Link
                        to="/saas-products"
                        className="block px-4 py-2 font-bold text-slate-900 hover:bg-gray-100 hover:text-orange-600 transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        SaaS Products
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/careers"
                className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
              >
                Careers
              </Link>

              <Link
                to="/portfolio"
                className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
              >
                Portfolio
              </Link>

              <Link
                to="/contact-us"
                className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-6 ">
              <div className="flex items-center space-x-2 text-slate-900">
                <Phone className="w-4 h-4 " />
                <a href="tel:+17183604995" className="hover:text-blue-800 transition-colors">
                  <span className="text-sm font-bold">+91 7207837711</span>
                </a>
              </div>
              <button className="ml-6 bg-slate-900 hover:bg-slate-700 px-4 py-2 rounded-md text-sm flex items-center space-x-2 transition-colors font-bold text-white">
                <Mail className="w-4 h-4" />
                <span>
                  <a href="mailto:info@ardentval.com">Mail Us</a>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-800" />
              ) : (
                <Menu className="w-6 h-6 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-gray-200 py-4 shadow-inner"
              >
                <nav className="flex flex-col space-y-4">
                  <Link
                    to="/"
                    className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Mobile Services Section */}
                  <Link
                    to="/services"
                    className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>

                  <div className="pl-4 flex flex-col space-y-1">
                    <Link
                      to="/mobile"
                      className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      to="/webdesign"
                      className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Web Design & Development
                    </Link>
                    <Link
                      to="/saas-products"
                      className="font-bold text-slate-900 text-lg hover:text-orange-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      SaaS Products
                    </Link>
                  </div>

                  <Link
                    to="/careers"
                    className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Careers
                  </Link>

                  <Link
                    to="/portfolio"
                    className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Portfolio
                  </Link>

                  <Link
                    to="/contact-us"
                    className="font-bold text-slate-900 text-lg hover:text-blue-800 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>

                  <div className="flex items-center space-x-2 text-slate-900 pt-2">
                    <Phone className="w-4 h-4" />
                    <a href="tel:+17183604995" className="hover:text-blue-800 transition-colors">
                      <span className="text-sm font-bold">+91 7207837711</span>
                    </a>
                    <button className="ml-6 bg-slate-900 hover:bg-slate-700 px-4 py-2 rounded-md text-sm flex items-center space-x-2 transition-colors font-bold text-white">
                      <Mail className="w-4 h-4" />
                      <span>
                        <a href="mailto:info@ardentval.com">Mail Us</a>
                      </span>
                    </button>
                  </div>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Header;
