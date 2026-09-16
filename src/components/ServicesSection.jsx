import React from 'react';
import { Link } from "react-router-dom";
import mobileAppImg from '../assets/services-1.jpg';
import webDevImg from '../assets/services-2.jpg';
import staffAugImg from '../assets/services-3.jpg';
import mobileAppImg1 from '../assets/mobileapp.webp';
import webDevImg2 from '../assets/webdev.webp';
import staffAugImg3 from '../assets/staffaug.webp';

const ServicesSection = () => {

  const services = [
    {
      title: "Mobile App Development",
      description: " We engineer high-performance, custom mobile apps that drive massive user acquisition and ensure long-term market leadership.",
      image: mobileAppImg1,
      alt: "Mobile App Development",
      link: "/mobile",
    },
    {
      title: "Web Design and Development",
      description: "We build intuitive, scalable web platforms designed to convert visitors into loyal customers and accelerate your business growth.",
      image: webDevImg2,
      alt: "Web Design and Development",
      link: "/webdesign"
    },
    {
      title: "SaaS Products",
      description: "Explore our enterprise SaaS suite featuring SynqDoc™ (AI Conversational & Smart Document Intelligence) and HRMS™ (Workforce & Payroll Suite).",
      image: staffAugImg3,
      alt: "SaaS Products",
      link: "/saas-products",
    },
    {
      title: "Job Seeker",
      description: "Looking to build your career with the right guidance, training, and opportunities? At Ardent & Vale Consultants Pvt. Ltd., we help freshers and experienced professionals connect with leading organizations and reputable roles that align with their skills and aspirations.",
      image: mobileAppImg,
      alt: "Job Seeker",
      link: "/mobile",
    },
    {
      title: "Employee",
      description: "Interested in being a part of a collaborative, progressive, and dynamic work culture? Join our internal team and work alongside industry experts to deliver top-class staffing and workforce solutions to global clients.",
      image: webDevImg,
      alt: "Employee",
      link: "/webdesign",
    },
    {
      title: "Enterprise Solutions",
      description: "We empower organizations with robust digital transformation, custom SaaS architectures, and cloud modernization to maximize operational efficiency.",
      image: staffAugImg,
      alt: "Enterprise Solutions",
      link: "/saas-products",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-14">
          Our Services
        </h2>

        <div className="mx-auto w-full lg:w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 justify-center items-stretch">
            {services.map((service, index) => (
              <div key={index} className="group flex flex-col h-full items-center text-center">
                <div className="mb-6 overflow-hidden rounded-lg w-full">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 w-full">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed grow w-full">
                  {service.description}
                </p>
                <div className="mt-auto w-full flex justify-center">
                  <Link to={service.link}>
                    <button className="border-2 border-slate-900 text-white bg-slate-900 hover:bg-slate-700 hover:text-white px-8 py-3 rounded-md font-semibold transition-colors">

                      More Info

                    </button></Link>
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
