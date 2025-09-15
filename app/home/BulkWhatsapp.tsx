'use client'

import Image from 'next/image';
import { ChevronDown, Phone, TrendingUp, Clock, BugOffIcon, Briefcase, Database, Trophy } from 'lucide-react';
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

const BalkWhatsapp = () => {
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



    <section className="py-16 bg-[#FDFFAE]">
      <div className="container mx-auto px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">


          {/* Left Content */}
          <div className=''>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386" />
                </svg>
              </div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">Bulk WhatsApp sender for fast hiring</span>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Unlock opportunities, one challenge at a time
            </h2>

            {/* Expandable Features */}
            <div className="space-y-4 mb-8 ">
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
            <button className="relative bg-gray-800 text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
              Install chrome extension
            </button>
          </div>


          {/* Right Content - AI Call Interface */}
          <div className="relative ">
            <img
              src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="WhatsApp Bulk Message Sender - Chat Interface"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>


        </div>

      </div>
    </section>
  );
};

export default BalkWhatsapp;