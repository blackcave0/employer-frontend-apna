"use client";
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AskedQuestionsProps {
  className?: string;
}

const AskedQuestions: React.FC<AskedQuestionsProps> = ({ className = "" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "Why should I use Apna over others?",
      answer: "Apna offers a unique platform specifically designed for blue-collar and grey-collar job seekers and employers. We provide verified candidates, regional language support, and a streamlined hiring process that connects you directly with skilled workers in your area."
    },
    {
      question: "What happens if I don't receive enough candidates?",
      answer: "We guarantee candidate delivery based on your requirements. If you don't receive sufficient qualified candidates, our team will work with you to adjust your job posting criteria, expand the search radius, or provide additional promotional support to ensure you get the candidates you need."
    },
    {
      question: "In which cities can I hire via Apna?",
      answer: "Apna operates in major cities across India including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Jaipur, Lucknow, and many more. We're continuously expanding to new cities to serve employers and job seekers nationwide."
    },
    {
      question: "I want to hire more than 10 candidates, do you have any bulk-hiring plans?",
      answer: "Yes, we offer specialized bulk hiring solutions for employers looking to hire multiple candidates. Our bulk hiring plans include dedicated account management, customized screening processes, faster turnaround times, and competitive pricing for volume hiring."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out">
              <button
                className="w-full px-6 py-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-all duration-300 ease-in-out cursor-pointer"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4 transition-all duration-300 ease-in-out">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-600 transition-all duration-300 ease-in-out ${openIndex === index ? 'transform rotate-180' : ''
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-300 ease-in-out">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AskedQuestions;