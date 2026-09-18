import React from "react";

const clientLogos = [
  { name: "Schengen Visa Itinerary", src: "/successclients/logo1.webp" },
  { name: "Apvision", src: "/successclients/logo2.png" },
  { name: "Nano Space", src: "/successclients/Logo3.png" },
  { name: "Pyramid IT Solutions", src: "/successclients/logo4.png" },
  { name: "Saffron Vacations", src: "/successclients/logo5.png" },
  { name: "Pixel Media", src: "/successclients/logo6.png" },
  { name: "Plan At", src: "/successclients/logo7.png" },
  { name: "Quadrant Neotech", src: "/successclients/logo8.png" },
  { name: "Aarna", src: "/successclients/logo9.png" },
  { name: "Powerlifting Association", src: "/successclients/logo10.png" },
  { name: "Venetia", src: "/successclients/logo12.jpg" },
  { name: "Talent Sync", src: "/successclients/logo13.png" },
  { name: "Dhruva Publications", src: "/successclients/logo14.png" },
  { name: "e-lead", src: "/successclients/logo16.webp" },
  { name: "Sastra Herbals", src: "/successclients/logo17.png" },
  { name: "NP Pesto", src: "/successclients/logo18.webp" },
  { name: "Busy Bees", src: "/successclients/logo19.png" },
];

const ClientLogos = () => {
  return (
    <section className="py-10 md:py-12 bg-slate-50 overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <span className="text-[11px] font-bold uppercase tracking-widest text-orange-600 bg-orange-500/10 px-2.5 py-0.5 rounded-full">
          Trusted Partnerships
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 mb-1.5">
          Our Valued Clients
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
          Proud to partner with innovative enterprises and fast-growing organizations across diverse industries.
        </p>
      </div>

      <div className="overflow-hidden relative py-1 mask-radial">
        <div className="flex animate-scroll whitespace-nowrap hover:animation-pause items-center">
          {[...clientLogos, ...clientLogos].map((client, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-3 px-5 py-2.5 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-orange-500/40 hover:scale-105 transition-all duration-300 shrink-0 h-16 w-38 sm:w-40"
            >
              <img
                src={client.src}
                alt={client.name}
                className="max-h-10 max-w-[110px] w-auto h-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes scrollLogos {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            width: max-content;
            animation: scrollLogos 35s linear infinite;
          }
          .hover\\:animation-pause:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default ClientLogos;
