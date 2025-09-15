'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  position: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, position }) => {
  return (
    <div className={`absolute bg-white rounded-lg shadow-lg p-4 max-w-xs z-30 ${position}`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
          <Check className="w-4 h-4 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-sm mb-1">{title}</h4>
          <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ApnaEnterprise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Calculate if section is in viewport
        const isInViewport = sectionTop < windowHeight && sectionTop + sectionHeight > 0;
        
        if (isInViewport) {
          // Calculate scroll progress within the section
          const scrollProgress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
          
          // Calculate scale based on scroll progress
          // Scale ranges from 0.8 to 1.2
          const newScale = 0.8 + (scrollProgress * 0.4);
          setScale(newScale);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      title: "View",
      description: "Org hiring reports",
      position: "top-18 -left-10"
    },
    {
      title: "Do this",
      description: "Configure usage limits",
      position: "top-46 -right-10"
    },
    {
      title: "Check if",
      description: "You have sufficient credits",
      position: "-bottom-10 -left-4"
    },
    {
      title: "When",
      description: "You add your team",
      position: "-bottom-2 right-8"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-gray-900 py-26 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div 
        className="max-w-7xl mx-auto transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center">
          {/* Left Side - Image with Feature Cards */}
          <div className="relative">
            {/* Background decorative circle */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-90 z-0"></div>

            {/* Main image container */}
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden z-10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                alt="Business team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Feature Cards */}
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                position={feature.position}
              />
            ))}

            {/* Decorative star burst */}
            <div className="absolute -bottom-8 -right-18 z-40">
              <div className="relative w-20 h-20 ">
                {/* Star burst rays */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-8 h-2.5 bg-yellow-400 origin-left"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 w-3 h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-8">
            {/* Header */}
            <div>
              <p className="text-yellow-400 text-sm font-medium uppercase tracking-wider mb-4">
                APNA ENTERPRISE
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Performance and productivity for every level of your enterprise
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Unleash your full potential with a tailor-made Enterprise graded features that helps to stay secure, compliant, on brand
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Contact sales
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApnaEnterprise;