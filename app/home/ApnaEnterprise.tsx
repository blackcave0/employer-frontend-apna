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
    <div className={`absolute bg-white rounded-lg shadow-lg p-3 sm:p-4 max-w-xs z-30 ${position}`}>
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
          <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">{title}</h4>
          <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ApnaEnterprise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const sectionBottom = sectionTop + sectionHeight;

        // Calculate if section is in viewport
        const isInViewport = sectionTop < windowHeight && sectionBottom > 0;

        if (isInViewport) {
          // Calculate the center position of the viewport
          const viewportCenter = windowHeight / 2;
          const sectionCenter = sectionTop + sectionHeight / 2;

          // Calculate distance from section center to viewport center
          const distanceFromCenter = Math.abs(viewportCenter - sectionCenter);
          const maxDistance = windowHeight / 2 + sectionHeight / 2;

          // Normalize distance (0 = centered, 1 = far from center)
          const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1);

          // Calculate scale: 1.0 when centered, 0.95 when far
          const newScale = 1.0 - (normalizedDistance * 0.05);
          setScale(Math.max(0.95, Math.min(1.0, newScale)));
        } else {
          // Reset scale when out of viewport
          setScale(0.95);
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
      position: "top-12 sm:top-16 md:top-18 -left-6 sm:-left-8 md:-left-10"
    },
    {
      title: "Do this",
      description: "Configure usage limits",
      position: "top-32 sm:top-40 md:top-46 -right-6 sm:-right-8 md:-right-10"
    },
    {
      title: "Check if",
      description: "You have sufficient credits",
      position: "-bottom-6 sm:-bottom-8 md:-bottom-10 -left-2 sm:-left-3 md:-left-4"
    },
    {
      title: "When",
      description: "You add your team",
      position: "-bottom-1 sm:-bottom-2 right-6 sm:right-7 md:right-8"
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start lg:items-center">
          {/* Left Side - Image with Feature Cards */}
          <div className="relative order-2 lg:order-1">
            {/* Background decorative circle */}
            <div className="absolute -top-6 sm:-top-8 md:-top-10 -left-6 sm:-left-8 md:-left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-90 z-0"></div>

            {/* Main image container */}
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden z-10">
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
            <div className="absolute -bottom-6 sm:-bottom-8 -right-12 sm:-right-16 md:-right-18 z-40">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                {/* Star burst rays */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-4 h-1.5 sm:w-6 sm:h-2 md:w-8 md:h-2.5 bg-yellow-400 origin-left"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                    }}
                  />
                ))}
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 w-2 h-2 sm:w-2.5 sm:h-3 md:w-3 md:h-4 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left">
            {/* Header */}
            <div>
              <p className="text-yellow-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                APNA ENTERPRISE
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                Performance and productivity for every level of your enterprise
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Unleash your full potential with a tailor-made Enterprise graded features that helps to stay secure, compliant, on brand
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200 w-full sm:w-auto">
                Contact sales
              </button>
              <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-colors duration-200 w-full sm:w-auto">
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