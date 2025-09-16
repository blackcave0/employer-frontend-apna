'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import ProtectedRoute from '../components/ProtectedRoute';
import { LogOut, User } from 'lucide-react';
import { FormValues } from './types';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import ProgressBar from './components/ProgressBar';

const DashboardContent = () => {
  const { user, logout } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormValues>({
    company: '',
    jobTitle: '',
    jobCategory: '',
    jobType: '',
    isNightShift: false,
    workLocationType: '',
    locationAddress: '',
    citySelection: '',
    payType: '',
    fixedSalaryMin: '',
    fixedSalaryMax: '',
    averageIncentive: '',
    perks: [],
    hasJoiningFee: '',
    customPerks: [],
    // Step 2 initial values
    minimumEducation: '',
    englishLevel: '',
    experienceRequired: '',
    additionalRequirements: [],
    jobDescription: '',
    // Additional requirement fields
    ageMin: '',
    ageMax: '',
    genderPreference: '',
    industryExperience: '',
    selectedIndustries: [],
    selectedLanguages: [],
    selectedSkills: [],
    // Step 3 initial values
    isWalkInInterview: '',
    communicationPreference: '',
    walkInAddress: '',
    walkInFloorPlot: '',
    walkInStartDate: '',
    walkInEndDate: '',
    walkInStartTime: '',
    walkInEndTime: '',
    otherInstructions: '',
    companyAddress: '',
    candidateContactPreference: '',
    notificationPreference: '',
    recruiterName: '',
    recruiterWhatsapp: '',
    recruiterEmail: '',
    selectedPlan: '',
  });

  // Update URL when step changes
  const updateURL = (newStep: number) => {
    const stepUrls = {
      1: '#basic',
      2: '#candidate-requirement',
      3: '#interview-information',
      4: '#job-preview',
      5: '#select-plan'
    };
    window.history.pushState(null, '', stepUrls[newStep as keyof typeof stepUrls] || '#basic');
  };

  // URL-based step management
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#basic') {
        setStep(1);
      } else if (hash === '#candidate-requirement') {
        setStep(2);
      } else if (hash === '#interview-information') {
        setStep(3);
      } else if (hash === '#job-preview') {
        setStep(4);
      } else if (hash === '#select-plan') {
        setStep(5);
      } else {
        // Set default URL to #basic if no hash present
        setStep(1);
        updateURL(1);
      }
    };

    // Handle initial load
    handleHashChange();

    // Listen for hash changes (browser back/forward)
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Handle form submission with proper typing
  const handleSubmit = (values: FormValues) => {
    // Save current form data
    setFormData(values);

    if (step < 5) {
      const newStep = step + 1;
      setStep(newStep);
      updateURL(newStep);
    } else {
      console.log('Form submitted:', values);
      // Handle final form submission here
    }
  };

  const handleBack = () => {
    if (step > 1) {
      const newStep = step - 1;
      setStep(newStep);
      updateURL(newStep);
    }
  };

  const handleLogout = () => {
    logout();
    // The middleware will handle the redirect
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <User className="w-5 h-5" />
                <span className="text-sm">
                  Welcome, {user?.name || user?.email || 'User'}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Post a new job</h2>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
              <span className="w-4 h-4 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white text-xs">📄</span>
              </span>
              <span>Use Templates</span>
            </button>
          </div>

          {/* Progress Steps */}
          <ProgressBar currentStep={step} />

          {/* Form Content */}
          <div className="p-6">
            {/* Step 1 Content */}
            {step === 1 && (
              <Step1 formData={formData} onSubmit={handleSubmit} />
            )}

            {/* Step 2 Content */}
            {step === 2 && (
              <Step2 formData={formData} onSubmit={handleSubmit} onBack={handleBack} />
            )}

            {/* Step 3 Content */}
            {step === 3 && (
              <Step3 formData={formData} onSubmit={handleSubmit} onBack={handleBack} />
            )}

            {/* Step 4 Content */}
            {step === 4 && (
              <Step4 formData={formData} onSubmit={handleSubmit} onBack={handleBack} />
            )}

            {/* Step 5 Content */}
            {step === 5 && (
              <Step5 formData={formData} onSubmit={handleSubmit} onBack={handleBack} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
};

export default DashboardPage;
