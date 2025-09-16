'use client';

import React from 'react';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 1
            ? currentStep === 1
              ? 'bg-purple-600 text-white'
              : 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-600'
            }`}>
            {currentStep > 1 ? '✓' : '1'}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-900">Job details</span>
        </div>
        <div className={`flex-1 h-px ${currentStep >= 2 ? 'bg-green-600' : 'bg-gray-300'
          }`}></div>
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 2
            ? currentStep === 2
              ? 'bg-purple-600 text-white'
              : 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-600'
            }`}>
            {currentStep > 2 ? '✓' : '2'}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-900">Candidate requirements</span>
        </div>
        <div className={`flex-1 h-px ${currentStep >= 3 ? 'bg-green-600' : 'bg-gray-300'
          }`}></div>
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 3
            ? currentStep === 3
              ? 'bg-purple-600 text-white'
              : 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-600'
            }`}>
            {currentStep > 3 ? '✓' : '3'}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-900">Interview information</span>
        </div>
        <div className={`flex-1 h-px ${currentStep >= 4 ? 'bg-green-600' : 'bg-gray-300'}`} />
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 4
            ? currentStep === 4
              ? 'bg-purple-600 text-white'
              : 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-600'
            }`}>
            {currentStep > 4 ? '✓' : '4'}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-900">Job preview</span>
        </div>
        <div className={`flex-1 h-px ${currentStep >= 5 ? 'bg-green-600' : 'bg-gray-300'}`} />
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 5
            ? currentStep === 5
              ? 'bg-purple-600 text-white'
              : 'bg-green-600 text-white'
            : 'bg-gray-300 text-gray-600'
            }`}>
            {currentStep > 5 ? '✓' : '5'}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-900">Select Plan</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;