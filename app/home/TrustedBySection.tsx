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
  <section className="bg-white py-12">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-[1.3rem] font-semibold text-gray-800 mb-2">Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for hiring</h2>
      <div className="mt-8 overflow-hidden">
        <div className="flex animate-marquee space-x-12">
          {logos.map((logo, index) => (
            <Image
              key={index}
              alt={logo.alt}
              className="h-7  w-auto flex-shrink-0"
              src={logo.src}
              height={logo.height * 2}
              width={logo.height * 8}
            />
          ))}
          {logos.map((logo, index) => (
            <Image
              key={`duplicate-${index}`}
              alt={logo.alt}
              className="h-7  w-auto flex-shrink-0"
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
        animation: marquee 10s linear infinite;
      }
    `}</style>
  </section>
);

export default TrustedBySection;