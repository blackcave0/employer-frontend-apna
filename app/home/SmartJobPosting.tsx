'use client'

import Image from 'next/image';
import { ChevronDown, Phone, TrendingUp, Clock, BugOffIcon, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';

// AccordionItem component
interface AccordionItemProps {
  title: string;
  content?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg transition-all duration-300 ease-in-out">
    <button
      className="w-full flex items-center justify-between p-4 text-left cursor-pointer transition-all duration-300 ease-in-out"
      onClick={onToggle}
    >
      <span className="font-semibold text-gray-800 transition-all duration-300 ease-in-out">{title}</span>
      <ChevronDown className={`w-5 h-5 text-gray-500 transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && content && (
      <div className="px-4 pb-4 text-gray-600 transition-all duration-300 ease-in-out">
        {content}
      </div>
    )}
  </div>
);

const SmartJobPosting = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  // Auto-cycle through accordion items
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenAccordion(prev => {
        if (prev === null) return 0;
        return (prev + 1) % 3; // Cycle through 0, 1, 2
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Manual toggle function that also resets the auto-cycle
  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (



    <section className="py-16 bg-[#f1eafa]">
      <div className="container mx-auto px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">SMART JOB POSTING</span>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Get applications from relevant, high-intent candidates
            </h2>

            {/* Expandable Features */}
            <div className="space-y-4 mb-8">
              <AccordionItem
                title="Advanced Job Filters & Smart Matching"
                content="Leverage intelligent job filtering and automated candidate screening to identify and attract top-quality, high-intent applicants who perfectly match your requirements"
                isOpen={openAccordion === 0}
                onToggle={() => handleToggle(0)}
              />

              <AccordionItem
                title="AI-Powered Candidate Screening"
                content="Automatically screens and evaluates candidates using advanced AI algorithms to identify the best matches for your role"
                isOpen={openAccordion === 1}
                onToggle={() => handleToggle(1)}
              />

              <AccordionItem
                title="Real-time Notifications & Insights"
                content="Receive instant notifications about qualified candidates and get detailed analytics on application performance"
                isOpen={openAccordion === 2}
                onToggle={() => handleToggle(2)}
              />
            </div>

            <button className="bg-gray-800 text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
              Post a smart-AI job
            </button>
          </div>

          {/* Right Content - AI Call Interface */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Smart Job Posting Interface"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Suggested Candidates</h3>
            <p className="text-gray-600">Get AI-recommended candidates from our database matching to your job postings.</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Customized Lead Management</h3>
            <p className="text-gray-600">Manage leads efficiently with ATS integration, CSV access, dashboard tracking, and WhatsApp alerts.</p>
          </div>

          <div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Job Post Boosts</h3>
            <p className="text-gray-600">Enhance visibility with walk-in and premium job post boosts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartJobPosting;