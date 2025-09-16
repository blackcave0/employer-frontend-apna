'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../types';

// Validation schema for Step 3
const step3ValidationSchema = Yup.object().shape({
  isWalkInInterview: Yup.string().required('Please specify if this is a walk-in interview'),
  communicationPreference: Yup.string().required('Please specify your communication preference'),
  candidateContactPreference: Yup.string().required('Please specify which candidates can contact you'),
  notificationPreference: Yup.string().required('Please specify your notification preference'),
  walkInAddress: Yup.string().when('isWalkInInterview', {
    is: 'Yes',
    then: (schema) => schema.required('Walk-in interview address is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  walkInStartDate: Yup.string().when('isWalkInInterview', {
    is: 'Yes',
    then: (schema) => schema.required('Walk-in start date is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  walkInEndDate: Yup.string().when('isWalkInInterview', {
    is: 'Yes',
    then: (schema) => schema.required('Walk-in end date is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  walkInStartTime: Yup.string().when('isWalkInInterview', {
    is: 'Yes',
    then: (schema) => schema.required('Walk-in start time is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  walkInEndTime: Yup.string().when('isWalkInInterview', {
    is: 'Yes',
    then: (schema) => schema.required('Walk-in end time is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  companyAddress: Yup.string().when('isWalkInInterview', {
    is: 'No',
    then: (schema) => schema.required('Company address is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  recruiterName: Yup.string().when('communicationPreference', {
    is: 'other_recruiter',
    then: (schema) => schema.required('Recruiter full name is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  recruiterWhatsapp: Yup.string().when('communicationPreference', {
    is: 'other_recruiter',
    then: (schema) => schema.required('Recruiter WhatsApp number is required'),
    otherwise: (schema) => schema.notRequired()
  }),
  recruiterEmail: Yup.string().when('communicationPreference', {
    is: 'other_recruiter',
    then: (schema) => schema.required('Recruiter email ID is required').email('Invalid email format'),
    otherwise: (schema) => schema.notRequired()
  })
});

interface Step3Props {
  formData: FormValues;
  onSubmit: (values: FormValues) => void;
  onBack: () => void;
}

const Step3: React.FC<Step3Props> = ({ formData, onSubmit, onBack }) => {
  const [showFloorPlot, setShowFloorPlot] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Interviewer information</h3>
        <p className="text-sm text-gray-600">Let candidates know how the interview will be conducted for this job.</p>
      </div>

      <Formik
        initialValues={{
          ...formData,
          isWalkInInterview: formData.isWalkInInterview || '',
          communicationPreference: formData.communicationPreference || '',
          candidateContactPreference: formData.candidateContactPreference || '',
          notificationPreference: formData.notificationPreference || '',
          walkInAddress: formData.walkInAddress || '',
          walkInFloorPlot: formData.walkInFloorPlot || '',
          walkInStartDate: formData.walkInStartDate || '',
          walkInEndDate: formData.walkInEndDate || '',
          walkInStartTime: formData.walkInStartTime || '10:00 AM',
          walkInEndTime: formData.walkInEndTime || '4:00 PM',
          otherInstructions: formData.otherInstructions || '',
          companyAddress: formData.companyAddress || '',
          recruiterName: formData.recruiterName || '',
          recruiterWhatsapp: formData.recruiterWhatsapp || '',
          recruiterEmail: formData.recruiterEmail || ''
        }}
        validationSchema={step3ValidationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ values }: FormikProps<FormValues>) => (
          <Form className="space-y-6">
            {/* Interview Method and Address */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-2">Interview method and address</h4>
              <p className="text-sm text-gray-600 mb-4">Let candidates know how the interview will be conducted for this job.</p>

              {/* Walk-in Interview */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Is this a walk-in interview?
                  </label>
                  <span className="ml-2 text-red-500">*</span>
                  <div className="ml-2 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    New
                  </div>
                  <button
                    type="button"
                    className="ml-2 text-blue-600 hover:text-blue-800 underline text-sm"
                  >
                    Know More
                  </button>
                </div>

                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="isWalkInInterview"
                      value="Yes"
                      className="sr-only"
                    />
                    <span className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.isWalkInInterview === 'Yes'
                      ? 'bg-blue-100 text-blue-800 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}>
                      Yes
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <Field
                      type="radio"
                      name="isWalkInInterview"
                      value="No"
                      className="sr-only"
                    />
                    <span className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.isWalkInInterview === 'No'
                      ? 'bg-blue-100 text-blue-800 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}>
                      No
                    </span>
                  </label>
                </div>
                <ErrorMessage name="isWalkInInterview" component="div" className="text-red-500 text-sm mt-1" />

                {/* Conditional Company Address Field - when No is selected */}
                {values.isWalkInInterview === 'No' && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company address <span className="text-red-500">*</span>
                    </label>
                    <Field
                      type="text"
                      name="companyAddress"
                      placeholder="Search for your address/locality"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ErrorMessage name="companyAddress" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                )}

                {/* Conditional Walk-in Interview Fields */}
                {values.isWalkInInterview === 'Yes' && (
                  <div className="mt-6 space-y-6">
                    {/* Walk-in Interview Address */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Walk-in Interview address <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="walkInAddress"
                        placeholder="Search for your address/locality"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage name="walkInAddress" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                    {/* Add Floor/Plot/Shop Number */}
                    <div>
                      <button
                        type="button"
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                        onClick={() => setShowFloorPlot(!showFloorPlot)}
                      >
                        + Add Floor / Plot no. / Shop no. (optional)
                      </button>
                      {showFloorPlot && (
                        <div className="mt-2">
                          <Field
                            type="text"
                            name="walkInFloorPlot"
                            placeholder="Floor / Plot no. / Shop no."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      )}
                    </div>

                    {/* Walk-in Dates */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Walk-in Start date <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="date"
                          name="walkInStartDate"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage name="walkInStartDate" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Walk-in End Date <span className="text-red-500">*</span>
                        </label>
                        <Field
                          type="date"
                          name="walkInEndDate"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        <ErrorMessage name="walkInEndDate" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    {/* Walk-in Timings */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Walk-in timings <span className="text-red-500">*</span>
                      </label>
                      <div className="flex items-center space-x-4">
                        <Field
                          as="select"
                          name="walkInStartTime"
                          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="9:00 AM">9:00 AM</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:00 AM">11:00 AM</option>
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                        </Field>
                        <span className="text-gray-500">-</span>
                        <Field
                          as="select"
                          name="walkInEndTime"
                          className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                          <option value="12:00 PM">12:00 PM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:00 PM">2:00 PM</option>
                          <option value="3:00 PM">3:00 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:00 PM">5:00 PM</option>
                          <option value="6:00 PM">6:00 PM</option>
                          <option value="7:00 PM">7:00 PM</option>
                          <option value="8:00 PM">8:00 PM</option>
                          <option value="9:00 PM">9:00 PM</option>
                        </Field>
                      </div>
                      <div className="flex space-x-4">
                        <ErrorMessage name="walkInStartTime" component="div" className="text-red-500 text-sm mt-1" />
                        <ErrorMessage name="walkInEndTime" component="div" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>

                    {/* Other Instructions */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Other Instructions
                      </label>
                      <Field
                        as="textarea"
                        name="otherInstructions"
                        rows={4}
                        placeholder="e.g, Bring ID card , CV / Resume etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      />
                      <div className="flex justify-between items-center mt-1">
                        <span></span>
                        <span className="text-sm text-gray-500">
                          {values.otherInstructions ? values.otherInstructions.length : 0}/300
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Communication Preferences */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Communication Preferences</h4>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Do you want candidates to contact you via Call / Whatsapp after they apply?
                  <span className="ml-1 text-red-500">*</span>
                </label>

                <div className="space-y-3">
                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="communicationPreference"
                      value="myself"
                      className="sr-only"
                    />
                    <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.communicationPreference === 'myself'
                      ? 'bg-blue-100 text-blue-800 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}>
                      <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                        {values.communicationPreference === 'myself' && (
                          <span className="w-2 h-2 bg-current rounded-full"></span>
                        )}
                      </span>
                      Yes, to <span className="text-blue-600 underline ml-1">myself</span>
                    </span>
                  </label>

                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="communicationPreference"
                      value="other_recruiter"
                      className="sr-only"
                    />
                    <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.communicationPreference === 'other_recruiter'
                      ? 'bg-blue-100 text-blue-800 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}>
                      <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                        {values.communicationPreference === 'other_recruiter' && (
                          <span className="w-2 h-2 bg-current rounded-full"></span>
                        )}
                      </span>
                      Yes, to <span className="text-blue-600 underline ml-1">other recruiter</span>
                    </span>
                  </label>

                  <label className="flex items-center">
                    <Field
                      type="radio"
                      name="communicationPreference"
                      value="no_contact"
                      className="sr-only"
                    />
                    <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.communicationPreference === 'no_contact'
                      ? 'bg-blue-100 text-blue-800 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}>
                      <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                        {values.communicationPreference === 'no_contact' && (
                          <span className="w-2 h-2 bg-current rounded-full"></span>
                        )}
                      </span>
                      No, I will contact candidates first
                    </span>
                  </label>
                </div>
                <ErrorMessage name="communicationPreference" component="div" className="text-red-500 text-sm mt-1" />

                {/* Conditional Recruiter Details */}
                {values.communicationPreference === 'other_recruiter' && (
                  <div className="mt-6 space-y-4">
                    <h4 className="text-sm font-medium text-gray-900">Fill other recruiter *</h4>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="text"
                        name="recruiterName"
                        placeholder="Enter full name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage name="recruiterName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Recruiter WhatsApp No. <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="tel"
                        name="recruiterWhatsapp"
                        placeholder="Enter number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage name="recruiterWhatsapp" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Recruiter Email ID <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="email"
                        name="recruiterEmail"
                        placeholder="Enter email ID"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                      <ErrorMessage name="recruiterEmail" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>
                )}

                {/* Which candidates should be able to contact you */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Which candidates should be able to contact you?
                    </label>
                    <span className="ml-2 text-red-500">*</span>
                    <div className="ml-2 inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                      New
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="candidateContactPreference"
                        value="all_candidates"
                        className="sr-only"
                      />
                      <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.candidateContactPreference === 'all_candidates'
                          ? 'bg-blue-100 text-blue-800 border-blue-500'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}>
                        <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                          {values.candidateContactPreference === 'all_candidates' && (
                            <span className="w-2 h-2 bg-current rounded-full"></span>
                          )}
                        </span>
                        All candidates
                      </span>
                    </label>

                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="candidateContactPreference"
                        value="matched_candidates"
                        className="sr-only"
                      />
                      <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.candidateContactPreference === 'matched_candidates'
                          ? 'bg-blue-100 text-blue-800 border-blue-500'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}>
                        <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                          {values.candidateContactPreference === 'matched_candidates' && (
                            <span className="w-2 h-2 bg-current rounded-full"></span>
                          )}
                        </span>
                        Only matched candidates (~30% of all candidates)
                      </span>
                    </label>
                  </div>
                  <ErrorMessage name="candidateContactPreference" component="div" className="text-red-500 text-sm mt-1" />

                  {/* Info box for matched candidates */}
                  {values.candidateContactPreference === 'matched_candidates' && (
                    <div className="mt-3 bg-blue-50 border border-blue-200 rounded-md p-3">
                      <div className="flex items-start">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mr-2 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <div className="text-sm text-blue-800">
                          <span className="font-medium">Matched candidates meet your key requirements such as education, work experience, skills, location, age and language</span>
                          <button
                            type="button"
                            className="ml-2 text-blue-600 hover:text-blue-800 underline"
                          >
                            Know more
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Notification Preferences */}
              <div>
                <h4 className="text-md font-medium text-gray-900 mb-4">Notification Preferences</h4>

                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Every time you receive a candidate application, do you want
                    </label>
                    <span className="ml-2">
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        📱 WhatsApp Alerts from Apna?
                      </span>
                    </span>
                    <span className="ml-1 text-red-500">*</span>
                  </div>

                  <div className="space-y-3">
                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="notificationPreference"
                        value="yes_myself"
                        className="sr-only"
                      />
                      <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.notificationPreference === 'yes_myself'
                          ? 'bg-blue-100 text-blue-800 border-blue-500'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}>
                        <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                          {values.notificationPreference === 'yes_myself' && (
                            <span className="w-2 h-2 bg-current rounded-full"></span>
                          )}
                        </span>
                        Yes, <span className="text-blue-600 underline ml-1">to myself</span>
                      </span>
                    </label>

                    <label className="flex items-center">
                      <Field
                        type="radio"
                        name="notificationPreference"
                        value="summary_once_day"
                        className="sr-only"
                      />
                      <span className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium cursor-pointer transition-colors border-2 ${values.notificationPreference === 'summary_once_day'
                          ? 'bg-blue-100 text-blue-800 border-blue-500'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                        }`}>
                        <span className="mr-3 w-4 h-4 rounded-full border-2 border-current flex items-center justify-center">
                          {values.notificationPreference === 'summary_once_day' && (
                            <span className="w-2 h-2 bg-current rounded-full"></span>
                          )}
                        </span>
                        No, send me summary once a day
                      </span>
                    </label>
                  </div>
                  <ErrorMessage name="notificationPreference" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center pt-6">
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step3;
