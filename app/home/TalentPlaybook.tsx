'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

const TalentPlaybook = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Check if element is in viewport
      const isInViewport = elementTop < windowHeight && elementTop + elementHeight > 0;
      // setIsVisible(isInViewport);

      if (isInViewport) {
        // Calculate scroll progress relative to element
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - elementTop) / (windowHeight + elementHeight)));

        // Scale range: 0.8 to 1.2 based on scroll progress
        // When scrolling down (progress increases): zoom in (scale increases)
        // When scrolling up (progress decreases): zoom out (scale decreases)
        const newScale = 0.8 + (scrollProgress * 0.4);
        setScale(newScale);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 py-26 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      {/* <div className="absolute top-4 left-4 z-10 opacity-50">
        <div className="w-24 h-24 text-purple-300">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div> */}

      {/* <div className="absolute bottom-4 right-4 z-40 opacity-60">
        <div className="w-16 h-16 text-yellow-400">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto"
        ref={sectionRef}
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-purple-600 font-semibold text-sm tracking-wide uppercase">
                INTRODUCING
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                The India Gen Z Talent Playbook 2025
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Insights from 140+ People & Talent Leaders on hiring, engaging,
                and retaining India&apos;s largest workforce generation
              </p>
            </div>

            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg">
              Download playbook
            </button>
          </div>

          {/* Right image */}

          <div className="relative flex justify-center lg:justify-end">

            <div className="relative w-80 h-96 transform rotate-6 hover:rotate-3 transition-transform duration-300">

              <div className="absolute -top-10 -left-14 -z-10 opacity-50">
                <div className="w-24 h-24 text-pink-400">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg shadow-2xl">
                <div className="p-8 h-full flex flex-col justify-between text-white">
                  {/* Apna logo placeholder */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white rounded text-purple-600 flex items-center justify-center font-bold text-sm">
                      apna
                    </div>
                  </div>

                  {/* Book title */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold italic">
                      The India<br />
                      <span className="text-yellow-300">Gen Z</span> Talent<br />
                      Playbook
                    </h3>
                    <p className="text-sm opacity-90">
                      Insights from 140+ People &
                      Talent Leaders on hiring, engaging &
                      retaining India&apos;s largest workforce
                      generation
                    </p>
                  </div>

                  {/* Bottom details */}
                  <div className="space-y-1">
                    <p className="text-sm font-semibold">
                      Nation&apos;s Leading<br />
                      Community
                    </p>
                    <p className="text-xs opacity-80">
                      140+ People<br />
                      and Talent<br />
                      Leaders
                    </p>
                  </div>
                </div>


              </div>

              <div className="absolute -bottom-8 -right-8 -z-40 opacity-60">
                <div className="w-16 h-16 text-yellow-400">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              {/* Book spine effect */}
              <div className="absolute -right-2 top-2 w-4 h-full bg-gradient-to-b from-purple-700 to-purple-900 rounded-r-lg transform skew-y-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentPlaybook;