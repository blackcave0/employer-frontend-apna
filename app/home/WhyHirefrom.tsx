"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const WhyHirefrom = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const [scrollCount, setScrollCount] = useState(2); // Start at 2 to show better initial values
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      quote: "We are closely working with apna for talent discovery and hiring across job families. Their quickest turn-around time is enabling us to uninterruptedly continue our daily functions and services, especially during the present times.",
      author: "Dr Varun",
      position: "SVP, Medical Affairs",
      company: "TATA 1mg",
      logo: "https://framerusercontent.com/images/8RLbLulCj8zX9PXABrKbdL2oKk.png?scale-down-to=512",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 2,
      quote: "Team apna has provided us with great support. 75% of our job fulfillment for delivery personnel has been through the apna. I love the skill tag feature as we don't have to manually type requirements.",
      author: "Neraj Gupta",
      position: "City Head of Supply, Mumbai",
      company: "Shadowfax",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Shadowfax_logo.svg/320px-Shadowfax_logo.svg.png",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 3,
      quote: "Apna has revolutionized our recruitment process. The platform's ease of use and quality of candidates has exceeded our expectations. We've reduced our hiring time by 60% since partnering with them.",
      author: "Priya Sharma",
      position: "HR Director",
      company: "Flipkart",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Flipkart_logo.svg/320px-Flipkart_logo.svg.png",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      id: 4,
      quote: "The diversity and skill range of candidates on apna is remarkable. We've successfully filled positions across all levels, from entry-level to management roles, with high-quality hires.",
      author: "Rajesh Kumar",
      position: "Talent Acquisition Lead",
      company: "Zomato",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Zomato_logo.png/320px-Zomato_logo.png",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    }
  ];

  // Base statistics that increment on each scroll towards target values
  const getStatsForScroll = (scrollNumber: number) => {
    // Final target values that we want to reach
    const targetValues = {
      lakhs: 5,
      categories: 200,
      multiplier: 5,
      percentage: 80
    };

    // Calculate incremental values based on scroll count
    // Reach target values more quickly - within 3-4 scrolls
    const incrementStep = scrollNumber + 1;

    const currentLakhs = Math.min(Math.ceil(incrementStep * 1.67), targetValues.lakhs); // Reaches 5 in 3 scrolls
    const currentCategories = Math.min(Math.ceil(incrementStep * 67), targetValues.categories); // Reaches 200 in 3 scrolls
    const currentMultiplier = Math.min(Math.ceil(incrementStep * 1.67), targetValues.multiplier); // Reaches 5 in 3 scrolls
    const currentPercentage = Math.min(Math.ceil(incrementStep * 27), targetValues.percentage); // Reaches 80 in 3 scrolls

    return [
      {
        baseNumber: currentLakhs,
        unit: "Lakhs+",
        description: "New candidates join apna every month",
        targetValue: currentLakhs
      },
      {
        baseNumber: currentCategories,
        unit: "+",
        description: "Job categories to publish your job",
        targetValue: currentCategories
      },
      {
        baseNumber: currentMultiplier,
        unit: "X",
        highlight: true,
        description: "More walk-ins than competitors",
        targetValue: currentMultiplier
      },
      {
        baseNumber: currentPercentage,
        unit: "%",
        description: "Business get qualified candidates within 24 hrs",
        targetValue: currentPercentage
      }
    ];
  };

  const currentStats = getStatsForScroll(scrollCount);

  // Initial animation on component mount
  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      const initialStats = getStatsForScroll(2); // Use scroll count 2 for initial display
      initialStats.forEach((stat, index) => {
        animateValue(index, 0, stat.targetValue, 2000);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  // Scroll animation effect with data rotation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          console.log('Section is visible, changing data set');

          // Reset animated stats to 0
          setAnimatedStats([0, 0, 0, 0]);

          // Increment scroll count for higher values
          setScrollCount(prev => {
            const newScrollCount = prev + 1;
            console.log('New scroll count:', newScrollCount);

            // Start animation after state update
            setTimeout(() => {
              const newStats = getStatsForScroll(newScrollCount);
              newStats.forEach((stat, index) => {
                animateValue(index, 0, stat.targetValue, 2000);
              });
            }, 150);

            return newScrollCount;
          });
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px' // Only trigger when element is well within viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []); // Remove dependencies to avoid circular updates

  const animateValue = (index: number, start: number, end: number, duration: number) => {
    const startTime = performance.now();

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(start + (end - start) * easeOutQuart);

      setAnimatedStats(prev => {
        const newStats = [...prev];
        newStats[index] = currentValue;
        return newStats;
      });

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  return (
    <div className="bg-white py-16 px-16 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why hire from apna?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            From startups to SMEs to established enterprises, Apna revolutionizes the way businesses find high-quality talent quickly & effortlessly.
          </p>
        </div>

        {/* Statistics Section */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {currentStats.map((stat, index) => (
            <div key={index} className="text-center p-6 relative">
              {index < currentStats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-600"></div>
              )}
              <div className="mb-4">
                {stat.highlight ? (
                  <div className="text-3xl md:text-4xl font-bold text-green-600">
                    Upto <span className="text-green-600">{animatedStats[index]}X</span>
                  </div>
                ) : index === 0 ? (
                  <div className="text-3xl md:text-4xl font-bold text-green-600">
                    {animatedStats[index]} {stat.unit}
                  </div>
                ) : (
                  <div className="text-3xl md:text-4xl font-bold text-green-600">
                    {animatedStats[index]}{stat.unit}
                  </div>
                )}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Testimonial Image */}
          <div className="relative">
            <div className="relative w-3/5 h-[350px] mx-auto">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].author}
                fill
                className="object-cover object-center rounded-lg"
                sizes="(max-width: 768px) 75vw, (max-width: 1200px) 37.5vw, 25vw"
              />
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            <blockquote className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed">
              &quot;{testimonials[currentTestimonial].quote}&quot;
            </blockquote>

            {/* Navigation Dots */}


            {/* Author Info */}
            <div className="pt-4 border-t border-gray-200">
              <div className="font-bold text-gray-900 text-lg">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-gray-600 text-sm font-bold mb-4">
                {testimonials[currentTestimonial].position}
              </div>
              <div className="flex items-center">
                <div className="w-24 h-8 relative">
                  <Image
                    src={testimonials[currentTestimonial].logo}
                    alt={testimonials[currentTestimonial].company}
                    fill
                    className="object-contain object-left"
                    sizes="96px"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-8 h-1 transition-colors duration-300 ${index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="ml-4 p-2 hover:bg-gray-100 transition-colors duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHirefrom;