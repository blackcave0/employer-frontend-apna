'use client'

import Image from 'next/image';
import { ChevronDown, Phone, TrendingUp, Clock, BugOffIcon, Briefcase, Database } from 'lucide-react';
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

const ApnaDatabase = () => {
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



    <section className="py-16 bg-[#FFD6BA]">
      <div className="container mx-auto px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <Database className="w-4 h-4 text-white" />
              </div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">SECURE DATABASE</span>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Quickly hire active jobseekers around your office.
            </h2>

            {/* Expandable Features */}
            <div className="space-y-4 mb-8">
              <AccordionItem
                title="AI Powered Search"
                content="Leverage intelligent algorithms and machine learning to find the most qualified candidates based on skills, experience, and job requirements with advanced filtering capabilities"
                isOpen={openAccordion === 0}
                onToggle={() => handleToggle(0)}
              />

              <AccordionItem
                title="Area-based Search"
                content="Target candidates within specific geographical locations and proximity to your office, ensuring local talent acquisition and reduced commute times for better employee retention"
                isOpen={openAccordion === 1}
                onToggle={() => handleToggle(1)}
              />

              <AccordionItem
                title="Bulk WhatsApp Invites"
                content="Send bulk WhatsApp invites to multiple candidates instantly, boosting response rates with direct messaging"
                isOpen={openAccordion === 2}
                onToggle={() => handleToggle(2)}
              />
            </div>
            <button className="bg-gray-800 text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
              Search candidates
            </button>
          </div>

          {/* Right Content - AI Call Interface */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Smart Job Posting Interface"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Unlimited Profile Views</h3>
            <p className="text-gray-600">Review endless profiles free-of-cost. Pay only when you want to contact suitable candidates</p>
          </div>

          <div>
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707L16.414 6.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6m-6 3h6m-6 3h3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Auto Generated Resumes</h3>
            <p className="text-gray-600">Effortlessly generate downloadable resumes from apna profiles for seamless candidate review.</p>
          </div>

          <div>
            <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Precision Filtering</h3>
            <p className="text-gray-600">Use 22+ advanced filters to fine-tune candidate searches.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApnaDatabase;