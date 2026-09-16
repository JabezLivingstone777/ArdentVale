import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronDown, ChevronUp, X, Upload, CheckCircle2, FileText, User, Mail, Phone, Loader2 } from 'lucide-react';
import Footer from './Footer'; // Adjust the import path according to your project structure

const CareersPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedSections, setExpandedSections] = useState({
        datePosted: true,
        specialism: true,
        jobType: true,
        experience: true,
        offeredSalary: true,
        gender: true,
        qualification: true,
    });

    // Modal & Form States
    const [selectedJob, setSelectedJob] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        experience: '',
        coverNote: '',
        resume: null
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleSection = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const jobs = [
        {
            id: 1,
            title: 'Full Stack Web Developer',
            location: 'Hyderabad, Telangana',
            technology: 'Java',
            type: 'Remote',
            postedTime: '1M ago'
        },
        {
            id: 2,
            title: 'Sr. Bigdata Developer',
            location: 'Hyderabad, Telangana',
            technology: 'Bigdata',
            type: 'Hybrid Remote',
            postedTime: '1M ago'
        }
    ];

    // ✅ Filter Jobs based on Search Input
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.technology.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleOpenModal = (job) => {
        setSelectedJob(job);
        setIsSubmitted(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            experience: '',
            coverNote: '',
            resume: null
        });
    };

    const handleCloseModal = () => {
        setSelectedJob(null);
        setIsSubmitted(false);
        setIsSubmitting(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, resume: file }));
        }
    };

    const handleSubmitApplication = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network submission delay
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section with Search */}
            <div className="relative bg-slate-900 text-white py-24">
                <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 to-slate-800/90">
                    <div className="absolute inset-0 opacity-20" style={{
                        backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Find Your Dream Job</h1>
                        <p className="text-gray-300">Explore exciting career opportunities at Ardent and Vale Consultants pvt ltd</p>
                    </div>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-900 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Software Developer"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                            />
                        </div>
                        <button className="bg-slate-900 hover:bg-slate-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                            <Search className="w-5 h-5" />
                            Find Job
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="lg:w-3/12 w-full space-y-4">
                        {/* Date Posted */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('datePosted')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Date Posted</h3>
                                {expandedSections.datePosted ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.datePosted && (
                                <div className="space-y-3">
                                    {['Last hour', 'Last 24 hour', 'Last 7 days', 'Last 14 days', 'Last 30 days'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Specialism */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('specialism')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Specialism</h3>
                                {expandedSections.specialism ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.specialism && (
                                <div className="space-y-3">
                                    {['IT Contractor', 'Charity & Voluntary', 'Digital & Creative', 'Estate Agency', 'Graduate'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Job Type */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('jobType')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Job Type</h3>
                                {expandedSections.jobType ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.jobType && (
                                <div className="space-y-3">
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" defaultChecked />
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-blue-500 rounded-sm"></span>
                                            <span className="text-gray-700">Full Time</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-yellow-500 rounded-sm"></span>
                                            <span className="text-gray-700">Part-Time</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-green-500 rounded-sm"></span>
                                            <span className="text-gray-700">Freelance</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center space-x-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                        <div className="flex items-center gap-2">
                                            <span className="w-3 h-3 bg-red-500 rounded-sm"></span>
                                            <span className="text-gray-700">Temporary</span>
                                        </div>
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Experience */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('experience')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Experience</h3>
                                {expandedSections.experience ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.experience && (
                                <div className="space-y-3">
                                    {['Fresher', 'Less than 1 year', '2 Year', '3 Year', '4 Year'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Offered Salary */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('offeredSalary')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Offered Salary</h3>
                                {expandedSections.offeredSalary ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.offeredSalary && (
                                <div className="space-y-3">
                                    {['10k - 20k', '20k - 30k', '30k - 40k', '40k - 50k', '50k - 60k'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Gender */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('gender')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Gender</h3>
                                {expandedSections.gender ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.gender && (
                                <div className="space-y-3">
                                    {['Male', 'Female'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Qualification */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <button
                                onClick={() => toggleSection('qualification')}
                                className="flex items-center justify-between w-full mb-4"
                            >
                                <h3 className="font-semibold text-lg text-slate-900">Qualification</h3>
                                {expandedSections.qualification ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {expandedSections.qualification && (
                                <div className="space-y-3">
                                    {['Matriculation', 'Intermediate'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-slate-900 focus:ring-slate-500" />
                                            <span className="text-gray-700">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>
                    </aside>

                    {/* Job Listings */}
                    <main className="lg:w-8/12 w-full">
                        <div className="space-y-6">
                            {filteredJobs.length === 0 && (
                                <p className="text-center text-gray-600 text-lg">No jobs found matching your search.</p>
                            )}

                            {filteredJobs.map((job) => (
                                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h2 className="text-xl font-semibold text-slate-900 mb-3">{job.title}</h2>
                                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{job.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>{job.technology}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className={`px-2 py-1 rounded text-xs font-medium ${job.type === 'Remote' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                                                        }`}>
                                                        {job.type}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <button
                                                onClick={() => handleOpenModal(job)}
                                                className="bg-slate-900 hover:bg-slate-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow hover:shadow-md cursor-pointer active:scale-95"
                                            >
                                                Apply Job
                                            </button>
                                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                                <Clock className="w-4 h-4" />
                                                <span>{job.postedTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>

            {/* Application Modal Popup */}
            {selectedJob && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity"
                    onClick={handleCloseModal}
                >
                    <div 
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden transform transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Apply for Position</h3>
                                <p className="text-sm text-slate-300 mt-0.5">{selectedJob.title} • {selectedJob.location}</p>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            {isSubmitted ? (
                                <div className="text-center py-6 space-y-4">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-900">Application Submitted Successfully!</h4>
                                    <p className="text-gray-600 text-sm max-w-md mx-auto leading-relaxed">
                                        Thank you, <span className="font-semibold text-slate-800">{formData.fullName || 'Candidate'}</span>! 
                                        Your application for <span className="font-semibold text-slate-800">{selectedJob.title}</span> has been received. Our recruitment team will review your resume and contact you soon.
                                    </p>
                                    <div className="pt-3">
                                        <button
                                            onClick={handleCloseModal}
                                            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition cursor-pointer shadow hover:shadow-lg"
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmitApplication} className="space-y-4">
                                    {/* Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input
                                                type="text"
                                                name="fullName"
                                                required
                                                placeholder="e.g. John Doe"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 text-gray-900 text-sm outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="e.g. john@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 text-gray-900 text-sm outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <Phone className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                placeholder="e.g. +91 9876543210"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 text-gray-900 text-sm outline-none transition"
                                            />
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Upload Resume (PDF / DOC) <span className="text-red-500">*</span>
                                        </label>
                                        <div className="mt-1 flex justify-center px-4 pt-4 pb-4 border-2 border-dashed border-gray-300 rounded-xl hover:border-slate-700 transition bg-slate-50/60 relative">
                                            <input
                                                type="file"
                                                required
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileChange}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <div className="space-y-1 text-center pointer-events-none">
                                                {formData.resume ? (
                                                    <div className="flex items-center justify-center gap-2 text-slate-800 font-medium text-sm">
                                                        <FileText className="w-5 h-5 text-green-600" />
                                                        <span className="truncate max-w-xs">{formData.resume.name}</span>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Upload className="mx-auto h-7 w-7 text-gray-400" />
                                                        <div className="flex text-sm text-gray-600 justify-center">
                                                            <span className="font-medium text-slate-900">Click to upload</span>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Note */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Cover Note / Message (Optional)
                                        </label>
                                        <textarea
                                            name="coverNote"
                                            rows={2}
                                            placeholder="Tell us why you're a great fit for this role..."
                                            value={formData.coverNote}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-slate-900 text-gray-900 text-sm outline-none transition resize-none"
                                        />
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={handleCloseModal}
                                            className="w-1/3 border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium py-2.5 rounded-xl transition cursor-pointer text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-2/3 bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-xl transition cursor-pointer flex items-center justify-center gap-2 shadow text-sm disabled:opacity-70"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                'Submit Application'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 w-12 h-12 bg-slate-900 hover:bg-slate-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-colors z-40 cursor-pointer"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            </button>
        </div>
    );
};

export default CareersPage;