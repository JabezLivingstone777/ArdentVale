import React, { useState, Suspense, lazy, memo } from 'react';
import { Link } from "react-router-dom";
import { ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
// Lazy load Lottie
const Lottie = lazy(() => import('lottie-react'));
import recruitmentAnimation from "../assets/Recruitment Hiring.json";
import modelImg from '../assets/model.png';
import productChainImg from '../assets/product-chain.png';
import softwareEngineerImg from '../assets/softwareengineer.png';
import teamLeaderImg from '../assets/team-leader.png';


const StaffAugmentationPage = () => {
    const [openAccordion, setOpenAccordion] = useState('why-choose');



    const toggleAccordion = (section) => {
        setOpenAccordion(openAccordion === section ? '' : section);
    };

    // Memoized image component
    const OptimizedImg = memo(({ src, alt, className }) => (
        <img loading="lazy" src={src} alt={alt} className={className} />
    ));

    return (
        <div className="bg-white">
            {/* <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4"> */}
            <div
                className="relative py-20 bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800')",
                }}
            >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Staff Augmentation</h1>
                    <div className="flex items-center justify-center space-x-2 text-white text-sm sm:text-base">
                        <span className="hover:text-slate-400 transition-colors cursor-pointer">Home</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-white">Staff Augumentation</span>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-10 w-full lg:w-10/12">
                <section className="py-12 bg-white mb-4">
                    <div className="container mx-auto px-4 w-full lg:w-10/12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">

                            {/* Text Content */}
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                                    Staff Augmentation
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                                    Our recruitment arm keeps evolving. At Ardent and Vale Consultants Pvt Ltd, we don't just fill roles. We align with your vision of
                                    business transformation.
                                </p>
                                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                                    It is not about the costs — it is about capability, control and
                                    how fast you want to lead in this ever changing tech marketplace.
                                </p>
                            </div>

                            {/* Lottie Animation */}
                            <div className="flex justify-center mt-4 md:mt-0">
                                <div className="w-full sm:w-[400px] md:w-[450px] h-auto">
                                    <Suspense fallback={<div className="w-full h-40 flex items-center justify-center">Loading animation...</div>}>
                                        <Lottie
                                            animationData={recruitmentAnimation}
                                            loop
                                            autoplay
                                            style={{ width: "100%", height: "auto" }}
                                        />
                                    </Suspense>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="py-10 bg-white">
                    <div className="max-w-5xl mx-auto px-6 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-6">Client</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Ervinsoft India Pvt Ltd fulfils the IT manpower requirements of small, medium and large-scale companies including the Fortune 500s across the American continent. We select the best of the lot from a global pool of candidates both locally and overseas to successfully meet the client’s permanent staffing needs. We keenly study all aspects of the organization, its short-term and long-term goals, to provide only the best resources we can. We assess each aspect of the candidate’s work and educational backgrounds, analyze the applicability of his or her skills through interviews and written tests, and perform background checks and verifications to ensure a hassle-free recruitment process for our clients.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg mt-4">
                            Our demand-supply recruitment framework is supported by a robust 24/7 recruitment engine and an extensive database of industry requirements—ensuring you always stay ahead in the job market.
                        </p>
                    </div>
                </section> */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-6">
                        Our Engagement Models
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-3xl mx-auto">
                        We offer flexible engagement models tailored to your product lifecycle, resource needs, and budget.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-slate-900 hover:text-white group transition-colors duration-200">
                            <div className="flex justify-center mb-6">
                                <OptimizedImg src={productChainImg} alt="Product Development" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 group-hover:text-white transition-colors">Product Development</h3>
                            <p className="text-slate-900 group-hover:text-white text-sm sm:text-base leading-relaxed transition-colors">
                                Bring us your idea, and we'll transform it into a fully functional, market-ready product—handling everything from architecture to launch.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-slate-900 hover:text-white group transition-colors duration-200">
                            <div className="flex justify-center mb-6">
                                {/* <img src={teamLeaderImg} alt="Team Extension" className="w-20 h-20 object-contain" /> */}
                                <OptimizedImg src={teamLeaderImg} alt="Team Extension" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Team Extension</h3>
                            <p className="text-slate-900 group-hover:text-white leading-relaxed transition-colors">
                                Already have a roadmap? Extend your in-house capabilities with our vetted engineers, designers, and QA experts who align seamlessly with your workflows.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl border border-gray-200 hover:bg-slate-900 hover:text-white group transition-colors duration-200">
                            <div className="flex justify-center mb-6">
                                {/* <img src={softwareEngineerImg} alt="Dedicated Development Team" className="w-20 h-20 object-contain" /> */}
                                <OptimizedImg src={softwareEngineerImg} alt="Dedicated Development Team" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">Dedicated Development Team</h3>
                            <p className="text-slate-900 group-hover:text-white leading-relaxed transition-colors">
                                Stay in control of your product's direction with a handpicked team working exclusively for you - agile, transparent, and fully integrated into your vision.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                                Our Model
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
                                If you are planning for long-term innovation or want to build proprietary systems, having a dedicated offshore team is always the best choice.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-4">Our model helps you -</p>
                            <ul className="text-gray-500 text-sm sm:text-base space-y-1 mb-4">
                                <li>Establish team continuity and ownership over your products and services</li>
                                <li>Build an environment aligned with the goals of your brand.</li>
                                <li>Ensure deep domain understanding and long-term efficiency.</li>
                            </ul>
                            <p className="text-gray-500 leading-relaxed mb-4">
                                The long-term value, loyalty and control our model offers, is unmatched. What you can expect:
                            </p>
                            <ul className="text-gray-500 space-y-2 list-disc pl-6">
                                <li>Long-term ROI</li>
                                <li>Full-time commitment</li>
                                <li>Deep engineering knowledge</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <OptimizedImg src={modelImg} alt="Our Model" className="w-full max-w-md rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>

                <div className="mb-12 max-w-8xl mx-auto">
                    <div className="space-y-4">
                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <button
                                onClick={() => toggleAccordion('why-choose')}
                                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${openAccordion === 'why-choose' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                                    }`}
                            >
                                <span className="text-lg font-semibold">Why choose this model?</span>
                                {openAccordion === 'why-choose' ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </button>
                            {openAccordion === 'why-choose' && (
                                <div className="bg-gray-50 px-6 py-4">
                                    <ul className="text-gray-600 space-y-2 list-disc pl-6">
                                        <li>This model is your best choice for projects with dynamic requirements, ongoing development or when flexibility is the key.</li>
                                        <li>You only pay for the time and resources used. Have full control over the scope, budget and pace of your project.</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <button
                                onClick={() => toggleAccordion('per-hour')}
                                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${openAccordion === 'per-hour' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                                    }`}
                            >
                                <span className="text-lg font-semibold">Per Hour Basis Expert Support When You Need It</span>
                                {openAccordion === 'per-hour' ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </button>
                            {openAccordion === 'per-hour' && (
                                <div className="bg-gray-50 px-6 py-4">
                                    <p className="text-gray-600">
                                        Need a specialist for a quick code review? This hourly engaging model gives you instant access to expert engineers, solution architects, designers, or strategists without long-term commitments.<br />
                                        This model is perfect for stints or niche technical tasks where every minute counts.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <button
                                onClick={() => toggleAccordion('fixed-price')}
                                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${openAccordion === 'fixed-price' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                                    }`}
                            >
                                <span className="text-lg font-semibold">Fixed Price Predictability You Can Count On</span>
                                {openAccordion === 'fixed-price' ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </button>
                            {openAccordion === 'fixed-price' && (
                                <div className="bg-gray-50 px-6 py-4 space-y-4">
                                    <p className="text-gray-600">
                                        This is your best bet when your project scope is well-defined and you seek cost-certainty.<br />
                                        Our team of vetted software veterans handle end-to-end execution with clear timeframes, milestones and deliverables.<br />
                                        No hidden surprises - only complete accountability, smooth delivery from concept to deployment.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <button
                                onClick={() => toggleAccordion('contract-staffing')}
                                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${openAccordion === 'contract-staffing' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                                    }`}
                            >
                                <span className="text-lg font-semibold">Contract Staffing</span>
                                {openAccordion === 'contract-staffing' ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </button>
                            {openAccordion === 'contract-staffing' && (
                                <div className="bg-gray-50 px-6 py-4 space-y-4">
                                    <p className="text-gray-600">
                                        In this fast-moving era, where technology evolves and project timeframes shrink at the speed of business, businesses cannot afford delays in talent acquisition. Our Contract Staffing solutions are designed to give you the best speed and expertise you need.
                                    </p>
                                    <p className="text-gray-600 font-semibold">We assist you with</p>
                                    <ul className="list-disc list-inside text-gray-600 pl-4">
                                        <li>Deploying specialized vetted talent instantly for the niche project and workloads.</li>
                                        <li>Staying agile by scaling, augmenting our resources depending on your dynamic project demands</li>
                                        <li>Cutting your expenses strategically by avoiding the overheads while maintaining quality</li>
                                        <li>Retaining total control as you manage the project while we manage the talent pool</li>
                                    </ul>
                                    <p className="text-gray-600">
                                        At Ardent and Vale Consultants Pvt Ltd, contract staffing is not just a quick fix; it is a strategic answer to your call that streamlines those tightest timeframes, keeps the project on time, meets your budget, and keeps you ahead in this ever changing-market.
                                    </p>
                                    <p className="text-gray-600 font-semibold">What you can expect</p>
                                    <ul className="list-disc list-inside text-gray-600 pl-4">
                                        <li>Rapid onboarding of software veterans</li>
                                        <li>In-depth tech expertise on demand</li>
                                        <li>Flexible timeframes (short-term or extensible contracts)</li>
                                        <li>Improved operational efficiency</li>
                                        <li>Reduced risks in contract staffing</li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                            <button
                                onClick={() => toggleAccordion('permanent-hiring')}
                                className={`w-full px-6 py-4 flex items-center justify-between transition-colors ${openAccordion === 'permanent-hiring' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
                                    }`}
                            >
                                <span className="text-lg font-semibold">Permanent Hiring</span>
                                {openAccordion === 'permanent-hiring' ? (
                                    <ChevronUp className="w-5 h-5" />
                                ) : (
                                    <ChevronDown className="w-5 h-5" />
                                )}
                            </button>
                            {openAccordion === 'permanent-hiring' && (
                                <div className="bg-gray-50 px-6 py-4 space-y-4">
                                    <p className="text-gray-600">
                                        Having the right people in the right roles makes all the difference when it comes to business continuity. We have been helping Fortune 500 companies build a workforce that has been growing with their vision.
                                    </p>
                                    <p className="text-gray-600 font-semibold">We focus on</p>
                                    <ul className="list-disc list-inside text-gray-600 pl-4">
                                        <li><span className="font-medium">Strategic alignment</span> - bridging those staffing gaps that streamlines your technical requirements and matches your cultural DNA.</li>
                                        <li><span className="font-medium">Long-term retention</span> - assisting you with talent that brings stability, ownership and leadership for long-term strategic alignment.</li>
                                        <li><span className="font-medium">Reduced hiring churn</span> - our stringent vetting process ensures only the best-fit candidates join your team.</li>
                                    </ul>
                                    <p className="text-gray-600">
                                        Our process comprises in-depth industry knowledge, personalized candidate engagement, and advanced sourcing techniques to deliver professionals who stay not just to contribute but to lead your organizational goals to success.
                                    </p>
                                    <p className="text-gray-600 font-semibold">What you can expect</p>
                                    <ul className="list-disc list-inside text-gray-600 pl-4">
                                        <li>End-to-end recruitment support services</li>
                                        <li>Quicker submissions</li>
                                        <li>Consistency in quality hires</li>
                                    </ul>
                                    <p className="text-gray-600">
                                        Need some assistance in selecting what works best for you?<br />
                                        At Ardent and Vale Consultants Pvt Ltd , we know the importance of customization. Our tech team of managers and strategists are here to help you with a concrete roadmap and help you <b><i>Build Your Own Team</i></b>. Talk to functional consultants and we will guide you to the smartest fit!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="bg-linear-to-b from-white to-gray-50 py-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Need some assistance in selecting what works best for you?
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-4 max-w-3xl mx-auto">
                        At Ardent and Vale Consultants Pvt Ltd , we know the importance of customization. Our tech team of managers and strategists are here to help you with a concrete roadmap and help you <span className="font-bold italic text-gray-600">Build Your Own Team</span>.
                    </p>
                    <p className="text-gray-500 text-sm sm:text-base md:text-lg mb-8">
                        Talk to functional consultants and we will guide you to the smartest fit!
                    </p>
                    <button className="bg-slate-900 hover:bg-slate-700 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
                        <Link to="/contact-us">
                            Contact Us
                        </Link>
                    </button>
                </div>
            </div>

            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-50"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    );
};

export default StaffAugmentationPage;
