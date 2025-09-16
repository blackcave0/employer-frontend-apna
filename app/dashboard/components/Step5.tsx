'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FormValues } from '../types';

interface Step5Props {
  formData: FormValues;
  onBack: () => void;
  onSubmit: (values: FormValues) => void;
}

const plans = [
  {
    id: 'classic',
    title: 'Classic Job',
    price: '₹649',
    basePrice: 649,
    validity: '15 days',
    features: ['High visibility', 'WhatsApp tagging', '1 Sourcing Agent'],
    badge: null,
  },
  {
    id: 'premium',
    title: 'Premium Job',
    price: '₹1299',
    basePrice: 1299,
    validity: '15 days',
    features: ['High visibility', 'WhatsApp tagging', '2 Sourcing Agents'],
    badge: null,
  },
  {
    id: 'premium-ai',
    title: 'Premium Job AI',
    price: '₹2999',
    basePrice: 2999,
    validity: '15 days',
    features: ['Max visibility', 'WhatsApp + Calls + Emails', '3 Sourcing Agents'],
    badge: 'Recommended by AI',
  },
];

const Step5: React.FC<Step5Props> = ({ formData, onBack, onSubmit }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>(formData.selectedPlan || '');

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleProceed = () => {
    if (selectedPlan) {
      onSubmit({ ...formData, selectedPlan });
    } else {
      // Optionally show error, but for now just proceed without
      onSubmit(formData);
    }
  };

  const logos = [
    { src: "https://framerusercontent.com/images/KCRiFij6lCCsfiAwvBcnLZGZN4.png?width=544&height=128", alt: "Company logo", height: 32 },
    { src: "https://framerusercontent.com/images/6MqbXWXucqBYjTm6hzP0YJ0JLo.png?width=300&height=54", alt: "Company logo", height: 24 },
    { src: "https://framerusercontent.com/images/bNcmzTEX4AQx6bHzeTNLOAvPhM.png?width=2560&height=486", alt: "Company logo", height: 24 },
    { src: "https://framerusercontent.com/images/RdDC2YtfhCyahB7DK6vUOY6Sr0.png?width=368&height=128", alt: "Company logo", height: 32 },
    { src: "https://framerusercontent.com/images/BP0vuq7mtsXsInJhngcYqwUFk4.png?width=1030&height=309", alt: "Company logo", height: 32 },
    { src: "https://framerusercontent.com/images/zIskNwdwEZJloMkOYtEQfhGA7fY.png?width=1202&height=339", alt: "Company logo", height: 32 },
    { src: "https://framerusercontent.com/images/YALf4vlwSXrvH9eskRLGLLihnUM.png?width=292&height=128", alt: "Company logo", height: 32 },
  ];

  const selectedPlanDetails = plans.find(p => p.id === selectedPlan);

  const calculateGST = (price: number) => Math.round(price * 0.18);
  const calculateTotal = (price: number) => price + calculateGST(price);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-900">Choose a plan for your hiring needs</h3>
        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
          Offer valid 15-18 days
        </div>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`border rounded-lg p-6 text-center cursor-pointer transition-all ${
                    isSelected
                      ? 'border-2 border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  {plan.badge && (
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mb-4 w-fit mx-auto">
                      {plan.badge}
                    </div>
                  )}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{plan.title}</h4>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</div>
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    <li className="text-xs text-gray-500">Job active for {plan.validity}</li>
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-left">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {selectedPlan && selectedPlanDetails && (
          <div className="md:col-span-3">
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Plan Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium text-gray-700">{selectedPlanDetails.title}</span>
                  <span className="text-sm font-medium text-gray-900">{selectedPlanDetails.price}</span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {selectedPlanDetails.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹{selectedPlanDetails.basePrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>GST (18%)</span>
                    <span>₹{calculateGST(selectedPlanDetails.basePrice).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>₹{calculateTotal(selectedPlanDetails.basePrice).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={onBack}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleProceed}
                    className="flex-1 px-4 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="text-center text-sm text-gray-500">Prices excluding taxes</p>

      <div className="text-center text-sm text-gray-500 mb-8">
        Plus get job alerts
      </div>

      <div className="overflow-hidden bg-white py-4">
        <div className="text-center mb-4">
          <h3 className="text-sm font-medium text-gray-800">
            Trusted by 1000+ enterprises and 7 lakhs+ MSMEs for hiring
          </h3>
        </div>
        <div className="flex animate-marquee space-x-6">
          {logos.map((logo, index) => (
            <Image
              key={index}
              alt={logo.alt}
              className="h-8 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={logo.src}
              height={logo.height}
              width={logo.height * 4}
            />
          ))}
          {logos.map((logo, index) => (
            <Image
              key={`duplicate-${index}`}
              alt={logo.alt}
              className="h-8 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              src={logo.src}
              height={logo.height}
              width={logo.height * 4}
            />
          ))}
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

      {!selectedPlan && (
        <div className="flex justify-between pt-6 border-t border-gray-200">
          <button
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          <button
            onClick={handleProceed}
            className="px-6 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!selectedPlan}
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default Step5;
