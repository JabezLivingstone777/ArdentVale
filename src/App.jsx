import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";
import HeroSection1 from "./components/HeroSection1";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import JobSection from "./components/JobSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import ClientLogos from "./components/ClientLogos";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import Services from "./components/Services";
import CareersPage from "./components/CareersPage";
import MobileAppDevelopmentPage from "./components/MobileAppDevelopmentPage";
import WebDesignPage from "./components/WebDesignPage";
import StaffAugmentationPage from "./components/StaffAugmentationPage";
import PortfolioPage from "./components/PortfolioPage";

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 text-gray-700 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4"><strong>Last Updated:</strong> [30-10-2025]</p>

      <p className="mb-4">
        Ardent and Vale Consultants Pvt. Ltd. (“we”, “our”, “us”) is committed to protecting your privacy. 
        This Privacy Policy explains how we collect, use, and safeguard your information when you visit 
        our website or use our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, phone number, company details, 
        and any information submitted through forms. We may also collect non-personal data such as IP address, 
        browser information, and website usage data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We may use your information to provide services, respond to inquiries, send updates, improve our 
        website, and ensure security. We do not sell your personal information to third parties.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
      <p className="mb-4">
        We may share information with trusted third-party service providers who assist in business operations, 
        or if required by law or legal obligation.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance website experience and analyze usage. You may disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We take reasonable security measures to protect your information. However, no online transmission is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You may request access, correction, or deletion of your personal data by contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        <strong>Ardent and Vale Consultants Pvt. Ltd.</strong><br />
        Email: [contact@ardentvaleconsultants.com]<br />
        Phone: [+1 (718) 360-4995]<br />
        Website: [https://ardent-and-vale-consultants-pvt-ltd.vercel.app/]
      </p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection1 />
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <JobSection />
                <TestimonialSection />
                <ClientLogos />
                <ContactSection />
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </>
            }
          />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/mobile" element={<MobileAppDevelopmentPage />} />
          <Route path="/webdesign" element={<WebDesignPage />} />
          <Route path="/staff-augmentation" element={<StaffAugmentationPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
