'use client'

import Image from 'next/image';
import { ChevronDown, Phone, TrendingUp, Clock } from 'lucide-react';
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
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen && content ? 'max-h-40' : 'max-h-0'
      }`}>
      {content && (
        <div className="px-3 sm:px-4 pb-3 sm:pb-4 text-xs sm:text-sm text-gray-600 transition-all duration-300 ease-in-out">
          {content}
        </div>
      )}
    </div>
  </div>
);

const SinglePlatform = () => {
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
    <section>
      <div className='flex my-6 sm:my-8 md:my-10 lg:my-12 flex-col items-center px-4 sm:px-6'>
        <div className='max-w-4xl mx-auto'>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#00425A] mb-3 sm:mb-4 lg:mb-6 leading-tight">
            A single platform for your hiring needs
          </h2>
        </div>
        <div className='flex w-full max-w-xs sm:max-w-sm md:max-w-md justify-center mt-2 sm:mt-4'>
          <div className='h-0.5 sm:h-1 w-1/6 bg-[#06923E]'></div>
          <div className='h-0.5 sm:h-1 w-1/6 bg-[#FFE31A]'></div>
          <div className='h-0.5 sm:h-1 w-1/6 bg-[#FF0000]'></div>
        </div>
      </div>


      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-purple-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

          {/* Main AI Calling Agent Section */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center lg:justify-start">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded flex items-center justify-center">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <span className="text-purple-600 font-medium sm:font-semibold text-xs sm:text-sm uppercase tracking-wide text-center lg:text-left">
                  JOB WITH AI CALLING AGENT
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center lg:text-left leading-tight">
                AI Calling Agent interviews and shortlists candidates 24/7
              </h2>

              {/* Features Section - Mobile: Heading + Paragraph + Image, Desktop: Accordion */}
              <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
                {/* Fixed height container for desktop accordion to prevent layout shifts */}
                <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center space-y-4">
                  <AccordionItem
                    title="Post a Premium job with AI Calling Agent"
                    content="AI Calling Agent calls all interested candidates 24/7. Follows up 5 times via call, whatsapp & email even after work hours"
                    isOpen={openAccordion === 0}
                    onToggle={() => handleToggle(0)}
                  />
                  <AccordionItem
                    title="AI agent calls candidates on your behalf 24/7"
                    content="Interviews all interested candidates. Follows up 5 times via call, whatsapp & email even after work hours"
                    isOpen={openAccordion === 1}
                    onToggle={() => handleToggle(1)}
                  />
                  <AccordionItem
                    title="Gives you a ready shortlist of top candidates"
                    content="Provides a curated list of qualified candidates based on AI screening results, ready for your final interview process"
                    isOpen={openAccordion === 2}
                    onToggle={() => handleToggle(2)}
                  />
                </div>

                {/* Mobile Layout - All Features */}
                <div className="block custom-mobile-show space-y-6 sm:space-y-8">
                  {/* Feature 1 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                      Post a Premium job with AI Calling Agent
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      AI Calling Agent calls all interested candidates 24/7. Follows up 5 times via call, whatsapp & email even after work hours
                    </p>
                    <div className="mb-4">
                      <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="AI job posting interface"
                        width={600}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Feature 2 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                      AI agent calls candidates on your behalf 24/7
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Interviews all interested candidates. Follows up 5 times via call, whatsapp & email even after work hours
                    </p>
                    <div className="mb-4">
                      <Image
                        src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="AI calling agent interface"
                        width={600}
                        height={300}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Feature 3 */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                      Gives you a ready shortlist of top candidates
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">
                      Provides a curated list of qualified candidates based on AI screening results, ready for your final interview process
                    </p>
                    <div className="mb-4">
                      <Image
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                        alt="Candidate shortlist dashboard"
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
                  Post a job now
                </button>
              </div>

            </div>

            {/* Right Content - AI Call Interface */}
            <div className="relative order-1 lg:order-2">
              {/* Desktop Images (≥ 800px) */}
              <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px]">
                {openAccordion === 0 && (
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="AI job posting interface"
                    width={2070}
                    height={1380}
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                  />
                )}
                {openAccordion === 1 && (
                  <Image
                    src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="AI calling agent interface"
                    width={2070}
                    height={1380}
                    className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                  />
                )}
                {openAccordion === 2 && (
                  <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Candidate shortlist dashboard"
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
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Inbound & Outbound AI Calling</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">AI interviews all job applicants 24/7 & shortlists only the best candidates</p>
            </div>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">80% response rate with AI</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">Compared to just 30% call connection rate in manual hiring.</p>
            </div>

            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 px-2">Reduce hiring time by 50%</h3>
              <p className="text-sm sm:text-base text-gray-600 px-2">AI does initial screening & shortlisting of candidates with whom you can do final interview</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SinglePlatform;