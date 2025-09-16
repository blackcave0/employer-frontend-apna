'use client'

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
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

const BulkWhatsapp = () => {
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



    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#FDFFAE]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center lg:justify-start">
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
              </div>
              <span className="text-purple-600 font-medium sm:font-semibold text-xs sm:text-sm uppercase tracking-wide text-center lg:text-left">Bulk WhatsApp sender for fast hiring</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800 text-center lg:text-left leading-tight">
              Unlock opportunities, one challenge at a time
            </h2>

            {/* Features Section - Mobile: Heading + Paragraph + Image, Desktop: Accordion */}
            <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
              {/* Fixed height container for desktop accordion to prevent layout shifts */}
              <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col justify-center space-y-4">
                <AccordionItem
                  title="Bulk communication with candidates"
                  content="Send personalized WhatsApp messages to hundreds of candidates simultaneously. Reach potential hires directly on their preferred communication platform with customizable templates and automated follow-ups."
                  isOpen={openAccordion === 0}
                  onToggle={() => handleToggle(0)}
                />
                <AccordionItem
                  title="Responses delivered to your inbox"
                  content="All candidate replies are automatically collected and organized in your dashboard. Track response rates, manage conversations, and never miss an interested candidate with our centralized inbox system."
                  isOpen={openAccordion === 1}
                  onToggle={() => handleToggle(1)}
                />
                <AccordionItem
                  title="Fast track hiring process"
                  content="Accelerate your recruitment timeline by connecting with candidates instantly through WhatsApp. Schedule interviews, share job details, and close positions faster with direct mobile communication that candidates actually read and respond to."
                  isOpen={openAccordion === 2}
                  onToggle={() => handleToggle(2)}
                />
              </div>

              {/* Mobile Layout - All Features */}
              <div className="block custom-mobile-show space-y-6 sm:space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Bulk communication with candidates
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Send personalized WhatsApp messages to hundreds of candidates simultaneously. Reach potential hires directly on their preferred communication platform with customizable templates and automated follow-ups.
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                      alt="WhatsApp Bulk Message Interface"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Responses delivered to your inbox
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    All candidate replies are automatically collected and organized in your dashboard. Track response rates, manage conversations, and never miss an interested candidate with our centralized inbox system.
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Inbox Management Dashboard"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800">
                    Fast track hiring process
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">
                    Accelerate your recruitment timeline by connecting with candidates instantly through WhatsApp. Schedule interviews, share job details, and close positions faster with direct mobile communication that candidates actually read and respond to.
                  </p>
                  <div className="mb-4">
                    <Image
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                      alt="Fast Hiring Process"
                      width={600}
                      height={300}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button className="relative bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded text-sm sm:text-base font-semibold hover:bg-gray-900 transition-colors w-full sm:w-auto max-w-xs">
                Install chrome extension
              </button>
            </div>
          </div>

          {/* Right Content - AI Call Interface */}
          <div className="relative order-1 lg:order-2">
            {/* Desktop Image (≥ 800px) */}
            <div className="hidden custom-mobile-hide h-[400px] sm:h-[450px] lg:h-[500px]">
              {openAccordion === 0 && (
                <Image
                  src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="WhatsApp Bulk Message Sender - Chat Interface"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 1 && (
                <Image
                  src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Inbox Management Dashboard"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
              {openAccordion === 2 && (
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Fast Hiring Process"
                  width={2070}
                  height={1380}
                  className="w-full h-full object-cover rounded-lg sm:rounded-xl shadow-lg transition-opacity duration-300"
                />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BulkWhatsapp;