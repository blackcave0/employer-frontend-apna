// components/HeroSection.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CirclePlay, Building2 } from 'lucide-react';
import Header from './header';


const HeroSection = () => {
  return (
    <section className="bg-purple-gradient text-black pb-16 px-16 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url("https://framerusercontent.com/images/ibJ0g0Ir3S8FokflvVvOkdCQo.png?scale-down-to=2048&width=2880&height=1302")' }}>
      <Header />

      <div className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center text-white">
        <div className="md:w-1/1 mb-8 md:mb-0 flex flex-col">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6">
              <Image
                src="https://framerusercontent.com/images/9Q1hdG7uJjhDT9SeHjN2Qg5s.png?width=206&height=370"
                alt="Recruitment team illustration"
                width={200}
                height={200}
                className=""
              />
            </div>
            <div className="md:w-1/1 md:mt-16 text-center md:text-left">
              <h1 className="text-3xl md:text-3xl font-bold mb-4  leading-tight">
                Hire your <br /> next great team with apna
              </h1>
              <p className="mb-6 leading-relaxed max-w-md">
                Streamline your recruitment with AI-driven precision. Single solution from fresher to experienced hiring.
              </p>
              <Link href="#" className="text-teal-500 font-semibold flex items-center justify-center md:justify-start">
                <span className="material-icons mr-2"><CirclePlay /></span>
                Watch video
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2">6 Crore +</h3>
              <p className="text-sm opacity-90">Qualified candidates</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2">7
                Lakh +</h3>
              <p className="text-sm opacity-90"> Employers use apna

              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-extrabold mb-2">900
                +</h3>
              <p className="text-sm opacity-90"> Available cities

              </p>
            </div>
          </div>
        </div>


        <div className="md:w-2/3 flex justify-center ">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 text-white py-8 px-6 rounded-xl shadow-2xl w-full max-w-lg relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-teal-500/10 pointer-events-none"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
              <div className="text-start mb-8">
                <h2 className="text-2xl font-bold mb-2  text-white">
                  Let&apos;s Get Started
                </h2>
                <p className="text-white/70 text-sm">Join thousands of employers</p>
              </div>

              <form className="space-y-6">
                <div className="relative group">
                  <input
                    className="w-full px-6 py-4 bg-white border border-gray-200 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/30 transition-all duration-300 peer"
                    id="mobile"
                    placeholder="Enter your mobile number"
                    type="text"
                  />
                  <label className="absolute left-6 -top-2 text-xs font-medium text-white/80 bg-gradient-to-r from-purple-400 to-teal-400 px-2 rounded-full" htmlFor="mobile">
                    Mobile Number
                  </label>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/0 via-teal-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                <button
                  className="w-full relative overflow-hidden text-white font-semibold py-4 px-6 rounded shadow-xl hover:shadow-2xl transform hover:cursor-pointer transition-all duration-300 group"
                  style={{ backgroundColor: '#1f8268' }}
                  type="submit"
                >
                  <span className="relative z-10">Continue</span>
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div> */}
                </button>
              </form>

              <div className="mt-8 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                  <span className="px-4 text-sm text-white/70 font-medium">Or</span>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
                </div>

                <div className="flex flex-col justify-start items-start text-left">
                  <div className="flex flex-col mb-4">

                    <Link href="/enterprise-login" className="text-white-400 hover:text-teal-300 transition-colors font-medium underline text-left flex flex-row items-center gap-2" >
                      <Building2 className='h-5 w-5' />
                      Click here for Enterprise login
                    </Link>
                  </div>

                  <div className="flex flex-col text-xs text-white/60 text-left mr-10">
                    <p className="text-left">
                      By clicking continue, you agree to the apna{' '}
                      <Link href="/terms" className="hover:text-white/80 transition-colors underline">
                        Terms & Conditions
                      </Link>
                      {' '}and{' '}
                      <Link href="/privacy" className="hover:text-white/80 transition-colors underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;