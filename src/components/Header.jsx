import React, { useState, useEffect } from "react";
import avcplLogo from "../assets/avcpl-logo.png";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Glassmorphic Pill Header */}
      <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-300">
        <div
          className={`w-full rounded-full border px-3 sm:px-5 py-1.5 sm:py-2 transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "bg-[#0b091e]/92 border-white/20 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-2xl"
              : "bg-[#0c0a24]/80 border-white/15 shadow-[0_6px_24px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          }`}
        >
          {/* Brand Logo - Sleek & Refined */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 shrink-0"
          >
            <div className="bg-white px-3.5 py-1 rounded-full flex items-center justify-center shadow-sm hover:opacity-95 transition-opacity duration-200">
              <img
                src={avcplLogo}
                alt="Ardent and Vale Logo"
                className="h-6 sm:h-7 w-auto object-contain"
                style={{ maxWidth: "135px" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation (Existing Links) */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 text-[13px] font-medium">
            <Link
              to="/"
              className={`transition-colors hover:text-white ${
                location.pathname === "/" ? "text-white font-bold" : "text-slate-300"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`transition-colors hover:text-white ${
                location.pathname === "/about" ? "text-white font-bold" : "text-slate-300"
              }`}
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
                className={`flex items-center space-x-1 transition-colors hover:text-white focus:outline-none ${
                  location.pathname.startsWith("/services") ||
                  location.pathname === "/mobile" ||
                  location.pathname === "/webdesign" ||
                  location.pathname === "/saas-products"
                    ? "text-white font-bold"
                    : "text-slate-300"
                }`}
                onClick={() => {
                  navigate("/services");
                  setIsServicesOpen(!isServicesOpen);
                }}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-blue-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-60 bg-[#100d2b]/95 backdrop-blur-2xl text-slate-200 rounded-2xl shadow-2xl border border-white/15 p-1.5 z-50 overflow-hidden"
                  >
                    <Link
                      to="/mobile"
                      className="block px-3.5 py-2 text-xs font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Mobile App Development
                    </Link>
                    <Link
                      to="/webdesign"
                      className="block px-3.5 py-2 text-xs font-medium rounded-xl hover:bg-white/10 hover:text-white transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      Web Design & Development
                    </Link>
                    <Link
                      to="/saas-products"
                      className="block px-3.5 py-2 text-xs font-semibold rounded-xl text-orange-400 hover:bg-orange-500/20 hover:text-orange-300 transition-colors"
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
              className={`transition-colors hover:text-white ${
                location.pathname === "/careers" ? "text-white font-bold" : "text-slate-300"
              }`}
            >
              Careers
            </Link>

            <Link
              to="/portfolio"
              className={`transition-colors hover:text-white ${
                location.pathname === "/portfolio" ? "text-white font-bold" : "text-slate-300"
              }`}
            >
              Portfolio
            </Link>

            <Link
              to="/contact-us"
              className={`transition-colors hover:text-white ${
                location.pathname === "/contact-us" ? "text-white font-bold" : "text-slate-300"
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Right Action Button & Contact Info */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href="tel:+917207837711"
              className="flex items-center space-x-1 text-[11px] text-slate-300 hover:text-white font-medium transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>+91 7207837711</span>
            </a>

            <Link
              to="/contact-us"
              className="bg-white hover:bg-slate-100 text-slate-950 px-4 py-1.5 rounded-full font-bold text-xs transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center space-x-1"
            >
              <Mail className="w-3 h-3 text-slate-950" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-white/20 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-3 bg-[#0d0b24]/95 backdrop-blur-2xl rounded-3xl border border-white/15 p-5 shadow-2xl text-white"
            >
              <nav className="flex flex-col space-y-3 text-base">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-xl hover:bg-white/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-xl hover:bg-white/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/services"
                  className="px-3 py-2 rounded-xl hover:bg-white/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <div className="pl-4 flex flex-col space-y-2 border-l border-white/10 ml-2">
                  <Link
                    to="/mobile"
                    className="text-slate-300 text-sm hover:text-white transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • Mobile App Development
                  </Link>
                  <Link
                    to="/webdesign"
                    className="text-slate-300 text-sm hover:text-white transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • Web Design & Development
                  </Link>
                  <Link
                    to="/saas-products"
                    className="text-orange-400 text-sm font-semibold hover:text-orange-300 transition"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • SaaS Products
                  </Link>
                </div>
                <Link
                  to="/careers"
                  className="px-3 py-2 rounded-xl hover:bg-white/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/portfolio"
                  className="px-3 py-2 rounded-xl hover:bg-white/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/contact-us"
                  className="px-3 py-2 rounded-xl hover:bg-white/10 transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>

                <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="tel:+917207837711"
                    className="flex items-center justify-center space-x-2 text-sm text-slate-300 hover:text-white py-2"
                  >
                    <Phone className="w-4 h-4 text-blue-400" />
                    <span>+91 7207837711</span>
                  </a>
                  <Link
                    to="/contact-us"
                    className="w-full text-center bg-white text-slate-950 font-bold py-3 rounded-full hover:bg-slate-100 transition shadow-lg flex items-center justify-center space-x-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Mail className="w-4 h-4 text-slate-950" />
                    <span>Contact Us</span>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;


