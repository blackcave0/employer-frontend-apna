'use client'
// components/Header.js
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MoveUpRight, Menu, X } from 'lucide-react';
import SparkleAnimation from '../components/SparkleAnimation';
// import rotbotIcon from '../icons/robotIcon.svg'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  return (
    <header className="bg-purple-dark text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <Link href="#" className="text-xl sm:text-2xl font-bold whitespace-nowrap">apnaLOGO</Link>
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {/* Product dropdown */}
              <div className="relative group">
                <Link href="#" className="hover:text-gray-300 hover:bg-gray-700 px-2 xl:px-3 py-2 rounded flex items-center transition-all duration-300 text-sm xl:text-base">
                  Product
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <div className="absolute top-full left-0 mt-2 w-[90vw] max-w-[40rem] bg-white text-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex">
                    <div className="w-4/1 p-6">
                      <div className="space-y-3 space-x-7">
                        <Link href="#" className="block hover:text-purple-600 font-medium flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1 bg-[#5409DA] rounded-full p-3 flex-shrink-0 relative overflow-hidden" >
                            <Image src='/robotIcon.svg' alt="AI Calling Agent" width={24} height={24} className="relative z-10" />
                            {/* Sparkle animations */}
                            <SparkleAnimation />
                          </div>
                          <div>
                            <span className="font-semibold">Job with AI Calling Agent</span>
                            <span className="block text-sm text-gray-500 mt-1">Automate candidate outreach with intelligent AI-powered calling</span>
                          </div>
                        </Link>

                        <Link href="#" className="block hover:text-purple-600 font-medium flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1 bg-[#FF3F33] rounded-full p-3 flex-shrink-0 relative overflow-hidden" >
                            <Image src='/jobIcon.svg' alt="AI Calling Agent" width={24} height={24} className="relative z-10" />
                            {/* Sparkle animations */}
                            <SparkleAnimation />
                          </div>
                          <div>
                            <span className="font-semibold">Smart jobs</span>
                            <span className="block text-sm text-gray-500 mt-1">AI-driven job matching for better candidate-role alignment</span>
                          </div>
                        </Link>

                        <Link href="#" className="block hover:text-purple-600 font-medium flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1 bg-[#191825] rounded-full p-3 flex-shrink-0 relative overflow-hidden" >
                            <Image src='/databaseIcon.svg' alt="AI Calling Agent" width={24} height={24} className="relative z-10" />
                            {/* Sparkle animations */}
                            <SparkleAnimation />
                          </div>
                          <div>
                            <span className="font-semibold">Hyperlocal Database</span>
                            <span className="block text-sm text-gray-500 mt-1">Access location-specific talent pools in your area</span>
                          </div>
                        </Link>

                        <Link href="#" className="block hover:text-purple-600 font-medium flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1 bg-[#E18237] rounded-full p-3 flex-shrink-0 relative overflow-hidden" >
                            <Image src='/campusAiIcon.svg' alt="AI Calling Agent" width={24} height={24} className="relative z-10" />
                            {/* Sparkle animations */}
                            <SparkleAnimation />
                          </div>
                          <div>
                            <span className="font-semibold">apna CampusAI</span>
                            <span className="block text-sm text-gray-500 mt-1">Connect with fresh graduates through AI-powered campus recruitment</span>
                          </div>
                        </Link>

                        <Link href="#" className="block hover:text-purple-600 font-medium flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1 bg-[#FF2DD1] rounded-full p-3 flex-shrink-0 relative overflow-hidden" >
                            <svg className="w-5 h-5 relative z-10" viewBox="0 0 24 24" fill="white">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.384" />
                            </svg>
                            {/* Sparkle animations */}
                            <SparkleAnimation />
                          </div>
                          <div>
                            <span className="font-semibold">WhatsApp Fast Recruit</span>
                            <span className="block text-sm text-gray-500 mt-1">Streamline hiring process through WhatsApp integration</span>
                          </div>
                        </Link>

                        {/* <Link href="#" className="block hover:text-purple-600 font-medium flex items-start space-x-3"> */}
                        {/* <div className="flex-shrink-0 mt-1 bg-[#191825] rounded-full p-3 flex-shrink-0 relative overflow-hidden" > */}
                        {/* <img src='/databaseIcon.svg' alt="AI Calling Agent" className="w-6 h-6 relative z-10" /> */}
                        {/* Sparkle animations */}
                        {/* <SparkleAnimation /> */}
                        {/* </div> */}
                        {/* <div> */}
                        {/* <span className="font-semibold">Looking for a job</span> */}
                        {/* <span className="block text-sm text-gray-500 mt-1">Browse and apply to thousands of job opportunities</span> */}
                        {/* </div> */}
                        {/* </Link> */}
                        {/* <MoveUpRight /> */}
                      </div>
                    </div>
                    <div className="w-4/2 p-6 bg-[#F9CB99] rounded-r-lg">
                      <div className="text-center">
                        <Image src="/api/placeholder/150/100" alt="Product Demo" width={150} height={100} className="w-full h-24 object-cover rounded mb-3" />
                        <p className="text-sm text-gray-600 mb-3">Discover how our platform can transform your hiring process</p>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded text-sm hover:bg-purple-700 transition-colors">
                          Watch Video
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* <Link href="#" className="hover:text-gray-300">Jobs</Link> */}
              <Link href="#" className="hover:text-gray-300 hover:bg-gray-700 px-2 xl:px-3 py-2 rounded transition-all duration-300 text-sm xl:text-base">Enterprise</Link>
              <Link href="#" className="hover:text-gray-300 hover:bg-gray-700 px-2 xl:px-3 py-2 rounded transition-all duration-300 text-sm xl:text-base">Blogs</Link>
              <Link href="#" className="hover:text-gray-300 hover:bg-gray-700 px-2 xl:px-3 py-2 rounded transition-all duration-300 text-sm xl:text-base">Pricing</Link>
              <Link href="#" className="hover:text-gray-300 hover:bg-gray-700 px-2 xl:px-3 py-2 rounded transition-all duration-300 text-sm xl:text-base whitespace-nowrap"><span className='flex items-center'>Looking for a job <MoveUpRight className='ml-1 w-4 h-4' /></span></Link>

            </nav>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="#" className="hidden md:block hover:text-gray-300 border rounded font-medium px-3 lg:px-6 py-2 text-sm lg:text-base whitespace-nowrap">Contact us</Link>
            <Link href="#" className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-3 sm:px-4 rounded text-sm lg:text-base whitespace-nowrap">
              Login/Sign up
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 hover:bg-gray-700 rounded transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-purple-dark border-t border-gray-600">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Product Menu */}
              <div>
                <button
                  onClick={toggleProductDropdown}
                  className="w-full flex justify-between items-center text-left hover:text-gray-300 py-2 text-base font-medium"
                >
                  Product
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isProductDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-3 border-l-2 border-gray-600">
                    <Link href="#" className="block hover:text-gray-300 py-2">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 bg-[#5409DA] rounded-full p-2">
                          <Image src='/robotIcon.svg' alt="AI Agent" width={16} height={16} />
                        </div>
                        <div>
                          <span className="font-semibold text-sm">AI Calling Agent</span>
                          <span className="block text-xs text-gray-300 mt-1">Automate outreach</span>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" className="block hover:text-gray-300 py-2">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 bg-[#FF3F33] rounded-full p-2">
                          <Image src='/jobIcon.svg' alt="Smart Jobs" width={16} height={16} />
                        </div>
                        <div>
                          <span className="font-semibold text-sm">Smart jobs</span>
                          <span className="block text-xs text-gray-300 mt-1">AI job matching</span>
                        </div>
                      </div>
                    </Link>
                    <Link href="#" className="block hover:text-gray-300 py-2">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 bg-[#191825] rounded-full p-2">
                          <Image src='/databaseIcon.svg' alt="Database" width={16} height={16} />
                        </div>
                        <div>
                          <span className="font-semibold text-sm">Hyperlocal Database</span>
                          <span className="block text-xs text-gray-300 mt-1">Local talent pools</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link href="#" className="block hover:text-gray-300 py-2 text-base font-medium">Enterprise</Link>
              <Link href="#" className="block hover:text-gray-300 py-2 text-base font-medium">Blogs</Link>
              <Link href="#" className="block hover:text-gray-300 py-2 text-base font-medium">Pricing</Link>
              <Link href="#" className="block hover:text-gray-300 py-2 text-base font-medium flex items-center">
                Looking for a job <MoveUpRight className='ml-1 w-4 h-4' />
              </Link>
              <Link href="#" className="block text-center border border-gray-400 rounded font-medium px-4 py-2 mt-4 hover:bg-gray-700 transition-colors">Contact us</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;