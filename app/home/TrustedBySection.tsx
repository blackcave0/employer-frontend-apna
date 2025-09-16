'use client'
import Image from 'next/image';
const logos = [
  { src: "https://framerusercontent.com/images/KCRiFij6lCCsfiAwvBcnLZGZN4.png?width=544&height=128", alt: "Company logo", height: 32 },
  { src: "https://framerusercontent.com/images/6MqbXWXucqBYjTm6hzP0YJ0JLo.png?width=300&height=54", alt: "Company logo", height: 24 },
  { src: "https://framerusercontent.com/images/bNcmzTEX4AQx6bHzeTNLOAvPhM.png?width=2560&height=486", alt: "Company logo", height: 24 },
  { src: "https://framerusercontent.com/images/RdDC2YtfhCyahB7DK6vUOY6Sr0.png?width=368&height=128", alt: "Company logo", height: 32 },
  { src: "https://framerusercontent.com/images/BP0vuq7mtsXsInJhngcYqwUFk4.png?width=1030&height=309", alt: "Company logo", height: 32 },
  { src: "https://framerusercontent.com/images/zIskNwdwEZJloMkOYtEQfhGA7fY.png?width=1202&height=339", alt: "Company logo", height: 32 },
  { src: "https://framerusercontent.com/images/YALf4vlwSXrvH9eskRLGLLihnUM.png?width=292&height=128", alt: "Company logo", height: 32 },
];



const TrustedBySection = () => (
  <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.3rem] font-medium sm:font-semibold text-gray-800 mb-2 sm:mb-3 md:mb-4 lg:mb-6 leading-relaxed px-2 sm:px-4">
        Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for hiring
      </h2>
      <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 overflow-hidden">
        <div className="flex animate-marquee space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 xl:space-x-16">
          {logos.map((logo, index) => (
            <Image
              key={index}
              alt={logo.alt}
              className="h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={logo.src}
              height={logo.height * 2}
              width={logo.height * 8}
            />
          ))}
          {logos.map((logo, index) => (
            <Image
              key={`duplicate-${index}`}
              alt={logo.alt}
              className="h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={logo.src}
              height={logo.height * 2}
              width={logo.height * 8}
            />
          ))}
        </div>
      </div>
    </div>
    <style jsx>{`
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-marquee {
        animation: marquee 15s linear infinite;
      }
      
      @media (max-width: 640px) {
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      }
      
      @media (min-width: 1024px) {
        .animate-marquee {
          animation: marquee 12s linear infinite;
        }
      }
    `}</style>
  </section>
);

export default TrustedBySection;