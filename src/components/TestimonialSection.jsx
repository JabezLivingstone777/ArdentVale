import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image from '../assets/client-testi.jpg';

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Ardent & Vale Consultants delivered an exceptional custom mobile application that exceeded our user engagement metrics. Their engineering team worked with extreme agility and technical precision from architecture to deployment.",
      author: "Chris A — VP of Product",
      image: image
    },
    {
      text: "Our enterprise web platform revamp was executed flawlessly by Ardent & Vale. The new architecture is blazing fast, accessible, and has significantly boosted our online conversion rates across global markets.",
      author: "Robert R — Head of Digital Technology",
      image: image
    },
    {
      text: "Integrating SynqDoc™ for AI document automation and their HRMS platform streamlined our daily operations drastically. Ardent & Vale Consultants is our trusted technology partner for SaaS and cloud innovation.",
      author: "Matt D — Chief Technology Officer",
      image: image
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-2">What Our Clients Say</h2>
          <div className="w-16 h-1 bg-blue-900 mx-auto mb-8"></div>
          <p className="text-black mb-12">
            Trusted by fast-growing startups and global enterprises.
          </p>

          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full hover:bg-gray-300 transition-colors mr-8"
              >
                <ChevronLeft className="w-6 h-6 text-black" />
              </button>

              <div className="w-20 h-20 rounded-full overflow-hidden mx-8 bg-black">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].author}
                  className="w-full h-full object-cover"
                />
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full hover:bg-gray-300 transition-colors ml-8"
              >
                <ChevronRight className="w-6 h-6 text-black" />
              </button>
            </div>

            <blockquote className="text-black text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </blockquote>

            <div className="text-black text-8xl font-serif mb-4">"</div>

            <cite className="text-black font-semibold text-xl">
              {testimonials[currentTestimonial].author}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
