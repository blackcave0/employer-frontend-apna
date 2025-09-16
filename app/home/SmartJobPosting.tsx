'use client'

import Image from 'next/image';
import { ChevronDown, Briefcase } from 'lucide-react';
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
      className="w-full flex items-center justify-between p-3 sm:p-4 text-left cursor-pointer transition-all duration-300 ease-in-out"
      onClick={onToggle}
    >
      <span className="font-medium sm:font-semibold text-sm sm:text-base text-gray-800 transition-all duration-300 ease-in-out pr-2">{title}</span>
      <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-500 transition-all duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen && content ? 'max-h-40' : 'max-h-0'}`}>
      {content && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600 transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  </div>
);

const SmartJobPosting = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 800);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-cycle through accordion items only on desktop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setOpenAccordion(prev => {
          if (prev === null) return 0;
          return (prev + 1) % 3; // Cycle through 0, 1, 2
        });
      }, 3000); // Change every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isMobile]);

  // Manual toggle function that also resets the auto-cycle
  const handleToggle = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (



    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#f1eafa]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center lg:justify-start">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded flex items-center justify-center">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-purple-600 font-medium sm:font-semibold text-xs sm:text-sm uppercase tracking-wide text-center lg:text-left">SMART JOB POSTING</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center lg:text-left leading-tight">
              Get applications from relevant, high-intent candidates
            </h2>

            {/* Features Section - Mobile: Heading + Paragraph + Image, Desktop: Accordion */}
            <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
              {/* Fixed height container for desktop accordion to prevent layout shifts */}
              <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center space-y-4">
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

              {/* Mobile Layout - All Features */}
              <div className="block custom-mobile-show space-y-6 sm:space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Advanced Job Filters & Smart Matching
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Leverage intelligent job filtering and automated candidate screening to identify and attract top-quality, high-intent applicants who perfectly match your requirements
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                      alt="Smart Job Posting Interface"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    AI-Powered Candidate Screening
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Automatically screens and evaluates candidates using advanced AI algorithms to identify the best matches for your role
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="AI Candidate Screening"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Real-time Notifications & Insights
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Receive instant notifications about qualified candidates and get detailed analytics on application performance
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Real-time Analytics Dashboard"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-semibold hover:bg-gray-900 transition-colors w-full sm:w-auto max-w-xs">
                Post a smart-AI job
              </button>
            </div>
          </div>

          {/* Right Content - AI Call Interface */}
          <div className="relative order-1 lg:order-2">
            {/* Desktop Image (≥ 800px) */}
            <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px]">
              {openAccordion === 0 && (
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Smart Job Posting Interface"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 1 && (
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Candidate Screening"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 2 && (
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Real-time Analytics Dashboard"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">AI-Suggested Candidates</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Get AI-recommended candidates from our database matching to your job postings.</p>
          </div>

          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Customized Lead Management</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Manage leads efficiently with ATS integration, CSV access, dashboard tracking, and WhatsApp alerts.</p>
          </div>

          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Job Post Boosts</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Enhance visibility with walk-in and premium job post boosts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartJobPosting;