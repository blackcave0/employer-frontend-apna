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

const SinglePlatform = () => {
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
    <section>
      <div className='flex my-10 flex-col items-center '>
        <div>
          <h2 className="text-3xl font-bold text-center text-[#00425A] mb-4">A single platform for your hiring needs</h2>
        </div >
        <div className='flex w-full justify-center'>
          <div className='h-1 w-1/6 bg-[#06923E]'></div>
          <div className='h-1 w-1/6 bg-[#FFE31A]'></div>
          <div className='h-1 w-1/6 bg-[#FF0000]'></div>
        </div>
      </div>


      <section className="py-16 bg-purple-200">
        <div className="container mx-auto px-16">

          {/* Main AI Calling Agent Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wide">JOB WITH AI CALLING AGENT</span>
              </div>

              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                AI Calling Agent interviews and shortlists candidates 24/7
              </h2>

              {/* Expandable Features */}
              <div className="space-y-4 mb-8">
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

              <button className="bg-gray-800 text-white px-8 py-3 rounded font-semibold hover:bg-gray-900 transition-colors">
                Post a job now
              </button>

            </div>

            {/* Right Content - AI Call Interface */}
            {/* <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-purple-600 font-semibold">AI Calling Agent 🤖</span>
                <span className="text-gray-600">Candidate</span>
              </div>

              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full"></div>
                </div>
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold mb-2">00:05</div>
                <div className="flex justify-center gap-8 mb-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-800 rounded-full mb-1"></div>
                    <span className="text-xs text-gray-600">Mute</span>
                  </div>
                  <button className="bg-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    End Call
                  </button>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-full mb-1"></div>
                    <span className="text-xs text-gray-600">Speaker</span>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Right Content - AI Call Interface */}
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Smart Job Posting Interface"
                width={2070}
                height={1380}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inbound & Outbound AI Calling</h3>
              <p className="text-gray-600">AI interviews all job applicants 24/7 & shortlists only the best candidates</p>
            </div>

            <div>
              <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">80% response rate with AI</h3>
              <p className="text-gray-600">Compared to just 30% call connection rate in manual hiring.</p>
            </div>

            <div>
              <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reduce hiring time by 50%</h3>
              <p className="text-gray-600">AI does initial screening & shortlisting of candidates with whom you can do final interview</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SinglePlatform;