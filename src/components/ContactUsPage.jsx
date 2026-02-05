import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";

const ContactUsPage = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Email Send Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",      // ← Replace
        "YOUR_TEMPLATE_ID",     // ← Replace
        formRef.current,
        "YOUR_PUBLIC_KEY"       // ← Replace
      )
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setSending(false);
          formRef.current.reset();
        },
        () => {
          setStatusMessage("❌ Something went wrong. Try again!");
          setSending(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div
        className="relative py-20 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Get in touch with Ardent & Vale Consultants Private Limited for business inquiries,
            corporate partnerships, advisory solutions, or support.
          </p>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {[
              {
                icon: <Phone className="w-8 h-8 text-slate-700" />,
                title: "Phone Number",
                content: "+1 (718) 360-4995",
              },
              {
                icon: <Mail className="w-8 h-8 text-slate-700" />,
                title: "Email",
                content: "contact@ardentvaleconsultants.com",
              },
              {
                icon: <Clock className="w-8 h-8 text-slate-700" />,
                title: "Business Hours",
                content: "Mon - Fri : 9:00 AM to 6:00 PM IST",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="text-center hover:bg-slate-700 hover:text-white rounded-lg cursor-pointer flex flex-col justify-center items-center w-64 h-64 bg-gray-50 p-4 transition-all duration-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center">
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Office */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Corporate Office</h2>

          <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto hover:bg-slate-700 hover:text-white cursor-pointer transition-all duration-200">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-10 h-10 text-slate-700" />
            </div>
            <p className="font-semibold">16th Floor Orbit, Plot No 30/C, Sy No 83/1, Hyderabad Knowledge City Raidurg, Serilingampally Mandal, Hyderabad,</p>
          </div>
        </div>
      </div>

      {/* Google Map - Exact Location */}
      <div className="px-4 max-w-5xl mx-auto mb-16">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.523415337262!2d78.37419067493587!3d17.434644583460557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cfd19ae321%3A0x20f3cd74ba70af5d!2sOrbit%20by%20Auro%20Realty%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1770303177001!5m2!1sen!2sin"
          className="w-full h-80 rounded-lg shadow-lg"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">We'd Love to Hear From You</h2>
            <p className="text-gray-600">Send us a message and we’ll get back to you shortly.</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="fullName"
                placeholder="Your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800 mb-6"
              required
            />

            {statusMessage && (
              <p className="text-center mb-4 text-sm text-slate-700">{statusMessage}</p>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
              >
                {sending ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* WhatsApp Floating Button (Keep Empty Number for Now) */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ContactUsPage;
