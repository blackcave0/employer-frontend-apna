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

const ApnaCampus = () => {
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



    <section className="py-16 bg-[#CDFADB]">
      <div className="container mx-auto px-16">

        {/* Main AI Calling Agent Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Right Content - AI Call Interface */}
          <div className="relative">
            {openAccordion === 0 && (
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Attract Talent Interface"
                className="w-full h-auto rounded-xl shadow-lg transition-opacity duration-300"
              />
            )}
            {openAccordion === 1 && (
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Evaluate Students Interface"
                className="w-full h-auto rounded-xl shadow-lg transition-opacity duration-300"
              />
            )}
            {openAccordion === 2 && (
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Hire Graduates Interface"
                className="w-full h-auto rounded-xl shadow-lg transition-opacity duration-300"
              />
            )}
          </div>

          {/* Left Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">APNA CAMPUS</span>
            </div>

            <h2 className="text-4xl font-bold mb-8 text-gray-800">
              Unlock opportunities, one challenge at a time
            </h2>

            {/* Expandable Features */}
            <div className="space-y-4 mb-8">
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
            <button className="bg-gray-800 text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
              Book a demo
            </button>
          </div>


        </div>

      </div>
    </section>
  );
};

export default ApnaCampus;