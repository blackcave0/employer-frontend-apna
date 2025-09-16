'use client'

import Image from 'next/image';
import { ChevronDown, Trophy } from 'lucide-react';
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

const ApnaCampus = () => {
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



    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#CDFADB]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Right Content - Images */}
          <div className="relative order-1 lg:order-1">
            {/* Desktop Images (≥ 800px) */}
            <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px]">
              {openAccordion === 0 && (
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Attract Talent Interface"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 1 && (
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Evaluate Students Interface"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 2 && (
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Hire Graduates Interface"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
            </div>
          </div>

          {/* Left Content */}
          <div className="order-2 lg:order-2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center lg:justify-start">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded flex items-center justify-center">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-purple-600 font-medium sm:font-semibold text-xs sm:text-sm uppercase tracking-wide text-center lg:text-left">APNA CAMPUS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center lg:text-left leading-tight">
              Unlock opportunities, one challenge at a time
            </h2>

            {/* Features Section - Mobile: Heading + Paragraph + Image, Desktop: Accordion */}
            <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
              {/* Fixed height container for desktop accordion to prevent layout shifts */}
              <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center space-y-4">
                <AccordionItem
                  title="Attract"
                  content="Draw top talent to your campus recruitment program with engaging challenges, competitions, and career opportunities that showcase your company culture and growth potential"
                  isOpen={openAccordion === 0}
                  onToggle={() => handleToggle(0)}
                />
                <AccordionItem
                  title="Evaluate"
                  content="Assess student capabilities through practical coding challenges, skill-based assessments, and project evaluations to identify the best fit for your organization"
                  isOpen={openAccordion === 1}
                  onToggle={() => handleToggle(1)}
                />
                <AccordionItem
                  title="Hire"
                  content="Streamline your campus hiring process with automated screening, interview scheduling, and offer management to secure top graduates before your competitors"
                  isOpen={openAccordion === 2}
                  onToggle={() => handleToggle(2)}
                />
              </div>

              {/* Mobile Layout - All Features */}
              <div className="block custom-mobile-show space-y-6 sm:space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Attract
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Draw top talent to your campus recruitment program with engaging challenges, competitions, and career opportunities that showcase your company culture and growth potential
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Attract Talent Interface"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Evaluate
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Assess student capabilities through practical coding challenges, skill-based assessments, and project evaluations to identify the best fit for your organization
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Evaluate Students Interface"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Hire
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Streamline your campus hiring process with automated screening, interview scheduling, and offer management to secure top graduates before your competitors
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Hire Graduates Interface"
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
                Book a demo
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ApnaCampus;