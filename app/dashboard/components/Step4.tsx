'use client';

import React from 'react';
import { FormValues } from '../types';

interface Step4Props {
  formData: FormValues;
  onBack: () => void;
  onSubmit: (values: FormValues) => void;
}

const Step4: React.FC<Step4Props> = ({ formData, onBack, onSubmit }) => {
  const handleContinue = () => {
    onSubmit(formData);
    // Since this is preview, onSubmit will handle final submission
    // No next step, perhaps redirect or show success
  };

  return (
    <div className="space-y-6">
      {/* Job Details Section */}
      <div className="border border-blue-500 rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Details</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Company</span>
            <span className="text-sm text-gray-900">{formData.company || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Job Title</span>
            <span className="text-sm text-gray-900">{formData.jobTitle || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Job Category</span>
            <span className="text-sm text-gray-900">{formData.jobCategory || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Location</span>
            <span className="text-sm text-gray-900">{formData.workLocationType || 'Not specified'}, {formData.citySelection || ''}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Salary</span>
            <span className="text-sm text-gray-900">₹ {formData.fixedSalaryMin || '0'} - ₹ {formData.fixedSalaryMax || '0'} (per month)</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Monthly Salary</span>
            <span className="text-sm text-gray-900">₹ {formData.fixedSalaryMin || '0'} - ₹ {formData.fixedSalaryMax || '0'} (per month)</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-gray-700">Perks</span>
            <span className="text-sm text-gray-900">{(formData.perks.length > 0 ? formData.perks.join(', ') : '') + (formData.customPerks.length > 0 ? (formData.perks.length > 0 ? ', ' : '') + formData.customPerks.join(', ') : '') || 'None'}</span>
          </div>
        </div>
      </div>

      {/* Candidate Requirements Section */}
      <div className="border border-blue-500 rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Candidate Requirements</h3>
        <p className="text-sm text-gray-600 mb-4">Job description will only be visible to the candidates who meet these requirements.</p>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Minimum Education</span>
            <span className="text-sm text-gray-900">{formData.minimumEducation || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">English Level</span>
            <span className="text-sm text-gray-900">{formData.englishLevel || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Experience Required</span>
            <span className="text-sm text-gray-900">{formData.experienceRequired || 'Not specified'}</span>
          </div>
          <div className="py-3">
            <div className="flex justify-between items-start py-2 border-b border-gray-100">
              <span className="text-sm font-medium text-gray-700">Job Description</span>
              <span className="text-sm text-gray-900 max-w-md">{formData.jobDescription || 'Not specified'}</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Age</span>
            <span className="text-sm text-gray-900">{formData.ageMin || '18'} - {formData.ageMax || '30'} yrs</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Gender</span>
            <span className="text-sm text-gray-900">{formData.genderPreference || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Industry Experience</span>
            <span className="text-sm text-gray-900">{formData.industryExperience || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-start py-2">
            <span className="text-sm font-medium text-gray-700">Industries</span>
            <span className="text-sm text-gray-900 max-w-md">{formData.selectedIndustries.length > 0 ? formData.selectedIndustries.join(', ') : 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-start py-2">
            <span className="text-sm font-medium text-gray-700">Languages</span>
            <span className="text-sm text-gray-900 max-w-md">{formData.selectedLanguages.length > 0 ? formData.selectedLanguages.join(', ') : 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-start py-2">
            <span className="text-sm font-medium text-gray-700">Skills</span>
            <span className="text-sm text-gray-900 max-w-md">{formData.selectedSkills.length > 0 ? formData.selectedSkills.join(', ') : 'Not specified'}</span>
          </div>
        </div>
      </div>

      {/* Interview Details Section */}
      <div className="border border-blue-500 rounded-lg p-6 bg-white shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Interview Details</h3>
        <p className="text-sm text-gray-600 mb-4">Preferred requirements. Meeting these will get priority, others can still apply.</p>
        <div className="space-y-3">
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Communication Preference</span>
            <span className="text-sm text-gray-900">Walk-in</span>
          </div>
          {formData.isWalkInInterview === 'Yes' && (
            <>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Walk-in Address</span>
                <span className="text-sm text-gray-900">{formData.walkInAddress || ''}, {formData.walkInFloorPlot || ''}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Walk-in Dates</span>
                <span className="text-sm text-gray-900">{formData.walkInStartDate || ''} to {formData.walkInEndDate || ''}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-sm font-medium text-gray-700">Walk-in Times</span>
                <span className="text-sm text-gray-900">{formData.walkInStartTime || ''} - {formData.walkInEndTime || ''}</span>
              </div>
            </>
          )}
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-gray-700">Other Instructions</span>
            <span className="text-sm text-gray-900 max-w-md">{formData.otherInstructions || 'None'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Company Address</span>
            <span className="text-sm text-gray-900">{formData.companyAddress || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Candidate Contact Preference</span>
            <span className="text-sm text-gray-900">{formData.candidateContactPreference || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Notification Preference</span>
            <span className="text-sm text-gray-900">{formData.notificationPreference || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Recruiter Name</span>
            <span className="text-sm text-gray-900">{formData.recruiterName || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-gray-100">
            <span className="text-sm font-medium text-gray-700">Recruiter WhatsApp</span>
            <span className="text-sm text-gray-900">{formData.recruiterWhatsapp || 'Not specified'}</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-sm font-medium text-gray-700">Recruiter Email</span>
            <span className="text-sm text-gray-900">{formData.recruiterEmail || 'Not specified'}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <button
          onClick={onBack}
          className="px-6 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={handleContinue}
          className="px-6 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step4;
