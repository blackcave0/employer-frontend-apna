'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Building2, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const SignInContent = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, isAuthenticated } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectionSource = searchParams.get('redirectionSource');
  const redirectTo = searchParams.get('redirect') || '/dashboard';

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, router, redirectTo]);

  // Auto-fill mobile number from localStorage when component mounts
  useEffect(() => {
    const preFillMobile = localStorage.getItem('preFillMobile');
    if (preFillMobile) {
      setMobileNumber(preFillMobile);
      // Clear the stored value after using it
      localStorage.removeItem('preFillMobile');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        // Handle login
        const success = await login(mobileNumber, password);
        if (success) {
          // Redirect to dashboard or redirect URL
          router.replace(redirectTo);
        } else {
          setError('Invalid credentials. Please try again.');
        }
      } else {
        // Handle signup - you can implement signup logic here
        // For now, just show a message
        setError('Signup functionality coming soon. Please use login.');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 flex items-center justify-center p-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: 'url("https://framerusercontent.com/images/ibJ0g0Ir3S8FokflvVvOkdCQo.png?scale-down-to=2048&width=2880&height=1302")' }}>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Back button */}
        <div className="mb-6">
          <button
            onClick={() => window.close()}
            className="flex items-center text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </button>
        </div>

        {/* Main form container */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="px-8 py-6 text-center border-b border-white/10">
            <div className="mb-4">
              <Image
                src="https://framerusercontent.com/images/9Q1hdG7uJjhDT9SeHjN2Qg5s.png?width=206&height=370"
                alt="Apna Logo"
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back!' : 'Join Apna Today'}
            </h1>
            <p className="text-white/70 text-sm">
              {isLogin ? 'Sign in to your employer account' : 'Create your employer account'}
            </p>
            {redirectionSource && (
              <p className="text-teal-300 text-xs mt-2">
                Redirected from: {redirectionSource.replace('-', ' ')}
              </p>
            )}
          </div>

          {/* Form */}
          <div className="px-8 py-6">
            {/* Error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Mobile Number Input */}
              <div className="relative group">
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full px-4 py-3 bg-white/90 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/30 transition-all duration-300"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Password Input (for login) */}
              {isLogin && (
                <div className="relative group">
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 bg-white/90 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400/30 transition-all duration-300"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative overflow-hidden text-white font-semibold py-4 px-6 rounded-lg shadow-xl hover:shadow-2xl transform hover:cursor-pointer transition-all duration-300 group disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#1f8268' }}
              >
                <span className="relative z-10">
                  {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Continue')}
                </span>
                {!isLoading && (
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                )}
              </button>
            </form>

            {/* Toggle between login/signup */}
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/20"></div>
                <span className="px-4 text-sm text-white/70 font-medium">Or</span>
                <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/20"></div>
              </div>

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-teal-300 hover:text-teal-200 transition-colors font-medium underline"
              >
                {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
              </button>
            </div>

            {/* Enterprise Login */}
            <div className="mt-6 text-center">
              <Link href="/enterprise-login" className="text-white/70 hover:text-teal-300 transition-colors font-medium underline text-sm flex justify-center items-center gap-2">
                <Building2 className='h-4 w-4' />
                Enterprise login
              </Link>
            </div>

            {/* Terms and Privacy */}
            <div className="mt-6 text-center">
              <p className="text-xs text-white/60">
                By continuing, you agree to the apna{' '}
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

        {/* Additional features for mobile */}
        <div className="mt-6 space-y-3">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4">
            <h3 className="text-white font-medium mb-2 text-sm">Why choose Apna?</h3>
            <ul className="text-white/70 text-xs space-y-1">
              <li>• Access to 6 Crore+ qualified candidates</li>
              <li>• AI-driven recruitment precision</li>
              <li>• Single platform for all hiring needs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SignInPage = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    }>
      <SignInContent />
    </Suspense>
  );
};

export default SignInPage;