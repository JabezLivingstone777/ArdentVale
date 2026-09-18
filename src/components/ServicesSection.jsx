import React from 'react';
import { Link } from "react-router-dom";
import servicesMobileAppImg from '../assets/services-mobile-app.jpg';
import servicesWebDevImg from '../assets/services-web-dev.jpg';
import servicesSaasProductsImg from '../assets/services-saas-products.jpg';
import servicesCrossPlatformImg from '../assets/services-cross-platform.jpg';
import servicesEnterpriseWebImg from '../assets/services-enterprise-web.jpg';
import chatbotHeroImg from '../assets/chatbot-hero.jpg';

const ServicesSection = () => {

  const services = [
    {
      title: "AI & Chatbot Development",
      description: "Autonomous multi-channel AI agents, WhatsApp bots, and custom LLM RAG pipelines engineered with 24/7 intelligent self-learning resolution.",
      image: chatbotHeroImg,
      alt: "AI and Chatbot Development",
      link: "/chatbot-development",
      highlight: true,
      badge: "AI Powered"
    },
    {
      title: "Mobile App Development",
      description: "We engineer high-performance, custom mobile applications across iOS and Android that drive massive user engagement and scale effortlessly.",
      image: servicesMobileAppImg,
      alt: "Mobile App Development",
      link: "/mobile",
      highlight: false,
      badge: "iOS & Android"
    },
    {
      title: "Web Design and Development",
      description: "Intuitive, responsive, and scalable web platforms engineered to convert visitors into loyal customers and accelerate enterprise growth.",
      image: servicesWebDevImg,
      alt: "Web Design and Development",
      link: "/webdesign",
      highlight: false,
      badge: "Full-Stack Web"
    },
    {
      title: "SaaS Products",
      description: "Enterprise SaaS suite featuring SynqDoc™ (AI Conversational & Document Intelligence) and HRMS™ (Automated Workforce & Payroll Suite).",
      image: servicesSaasProductsImg,
      alt: "SaaS Products Suite",
      link: "/saas-products",
      highlight: false,
      badge: "Enterprise SaaS"
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Cross-platform mobile apps built with Flutter and React Native delivering 60fps performance, native APIs, and unified codebase efficiency.",
      image: servicesCrossPlatformImg,
      alt: "Cross-Platform Mobile Apps",
      link: "/mobile",
      highlight: false,
      badge: "Flutter & React Native"
    },
    {
      title: "Enterprise Web Applications",
      description: "Modern cloud-native web architectures, microservices, secure API gateways, and scalable portals built for 99.99% uptime.",
      image: servicesEnterpriseWebImg,
      alt: "Enterprise Web Applications",
      link: "/webdesign",
      highlight: false,
      badge: "Cloud Architecture"
    },
  ];

  return (
    <section className="py-24 bg-gray-50/70 border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-3">
            What We Deliver
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            End-to-end software engineering, intelligent AI systems, and cloud digital products tailored for industry leaders.
          </p>
        </div>

        <div className="mx-auto w-full lg:w-11/12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group flex flex-col h-full bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 ${
                  service.highlight
                    ? "border-orange-300 shadow-md shadow-orange-500/10"
                    : "border-slate-200/90 shadow-sm"
                }`}
              >
                {/* Image Showcase Container */}
                <div className="relative overflow-hidden w-full h-56 bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm ${
                      service.highlight
                        ? "bg-orange-600 text-white"
                        : "bg-slate-900/80 text-white border border-white/20"
                    }`}>
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between text-left">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* Button */}
                  <div className="pt-2">
                    <Link
                      to={service.link}
                      className={`w-full py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-center ${
                        service.highlight
                          ? "bg-orange-600 hover:bg-orange-500 text-white shadow-md shadow-orange-500/25"
                          : "bg-slate-900 hover:bg-slate-800 text-white hover:shadow-md"
                      }`}
                    >
                      <span>{service.highlight ? "Explore AI Bots" : "Learn More"}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
