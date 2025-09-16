'use client'

import Image from 'next/image';
import { ChevronDown, Database } from 'lucide-react';
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

const ApnaDatabase = () => {
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



    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FFD6BA]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center lg:justify-start">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded flex items-center justify-center">
                <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-purple-600 font-medium sm:font-semibold text-xs sm:text-sm uppercase tracking-wide text-center lg:text-left">SECURE DATABASE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center lg:text-left leading-tight">
              Quickly hire active jobseekers around your office.
            </h2>

            {/* Features Section - Mobile: Heading + Paragraph + Image, Desktop: Accordion */}
            <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
              {/* Fixed height container for desktop accordion to prevent layout shifts */}
              <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center space-y-4">
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

              {/* Mobile Layout - All Features */}
              <div className="block custom-mobile-show space-y-6 sm:space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    AI Powered Search
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Leverage intelligent algorithms and machine learning to find the most qualified candidates based on skills, experience, and job requirements with advanced filtering capabilities
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                      alt="AI Powered Search Interface"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Area-based Search
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Target candidates within specific geographical locations and proximity to your office, ensuring local talent acquisition and reduced commute times for better employee retention
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                      alt="Area-based Search Map"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Bulk WhatsApp Invites
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Send bulk WhatsApp invites to multiple candidates instantly, boosting response rates with direct messaging
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMJA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                      alt="WhatsApp Bulk Messaging"
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
                Search candidates
              </button>
            </div>
          </div>

          {/* Right Content - AI Call Interface */}
          <div className="relative order-1 lg:order-2">
            {/* Desktop Images (≥ 800px) */}
            <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px]">
              {openAccordion === 0 && (
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="AI Powered Search Interface"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 1 && (
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Area-based Search Map"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 2 && (
                <Image
                  src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="WhatsApp Bulk Messaging"
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
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Unlimited Profile Views</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Review endless profiles free-of-cost. Pay only when you want to contact suitable candidates</p>
          </div>

          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707L16.414 6.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9h6m-6 3h6m-6 3h3" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Auto Generated Resumes</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Effortlessly generate downloadable resumes from apna profiles for seamless candidate review.</p>
          </div>

          <div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Precision Filtering</h3>
            <p className="text-sm sm:text-base text-gray-600 px-2">Use 22+ advanced filters to fine-tune candidate searches.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApnaDatabase;