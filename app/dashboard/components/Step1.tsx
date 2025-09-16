'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../types';

// Validation schema for Step 1
const step1ValidationSchema = Yup.object({
  company: Yup.string().min(2, 'Company name must be at least 2 characters').required('Company name is required'),
  jobTitle: Yup.string().min(3, 'Job title must be at least 3 characters').required('Job title is required'),
  jobCategory: Yup.string().required('Job category is required'),
  jobType: Yup.string().required('Job type is required'),
  workLocationType: Yup.string().required('Work location type is required'),
  locationAddress: Yup.string().when('workLocationType', {
    is: (val: string) => val === 'Work From Office' || val === 'Field Job',
    then: (schema) => schema.required('Location address is required'),
    otherwise: (schema) => schema
  }),
  citySelection: Yup.string().when('workLocationType', {
    is: 'Work From Home',
    then: (schema) => schema.required('City selection is required'),
    otherwise: (schema) => schema
  }),
  payType: Yup.string().required('Pay type is required'),
  fixedSalaryMin: Yup.string().when('payType', {
    is: (val: string) => val === 'Fixed Only' || val === 'Fixed + Incentive',
    then: (schema) => schema.required('Minimum salary is required'),
    otherwise: (schema) => schema
  }),
  fixedSalaryMax: Yup.string().when('payType', {
    is: (val: string) => val === 'Fixed Only' || val === 'Fixed + Incentive',
    then: (schema) => schema.required('Maximum salary is required'),
    otherwise: (schema) => schema
  }),
  averageIncentive: Yup.string().when('payType', {
    is: (val: string) => val === 'Fixed + Incentive' || val === 'Incentive Only',
    then: (schema) => schema.required('Average incentive is required'),
    otherwise: (schema) => schema
  }),
  hasJoiningFee: Yup.string().required('This field is required'),
});

interface Step1Props {
  formData: FormValues;
  onSubmit: (values: FormValues) => void;
}

const Step1: React.FC<Step1Props> = ({ formData, onSubmit }) => {
  const [customPerk, setCustomPerk] = useState('');
  const [showJobSuggestions, setShowJobSuggestions] = useState(false);
  const [jobTitleInput, setJobTitleInput] = useState(formData.jobTitle || '');
  const [showCategorySuggestions, setShowCategorySuggestions] = useState(false);
  const [categoryInput, setCategoryInput] = useState(formData.jobCategory || '');

  // Update local state when formData changes
  React.useEffect(() => {
    setJobTitleInput(formData.jobTitle || '');
    setCategoryInput(formData.jobCategory || '');
  }, [formData.jobTitle, formData.jobCategory]);

  const perkOptions = [
    'Flexible Working Hours', 'Weekly Payout', 'Overtime Pay', 'Joining Bonus', 'Annual Bonus', 'PF',
    'Travel Allowance (TA)', 'Petrol Allowance', 'Mobile Allowance', 'Internet Allowance', 'Laptop',
    'Health Insurance', 'ESI (ESIC)', 'Food/Meals', 'Accommodation', '5 Working Days', 'One Way Cab', 'Two Way Cab'
  ];

  const jobTitleSuggestions = [
    'Full-stack Developer', 'Full Stack Web Developer', 'Senior Full Stack Developer', 'Full Stack Java Developer',
    'Full Stack Engineer', 'Frontend Developer', 'Backend Developer', 'Software Engineer', 'Web Developer', 'Mobile App Developer'
  ];

  const jobCategories = [
    'DevOps', 'Software Backend Development', 'Frontend Development', 'Website Development', 'Software Project Management',
    'Software Development', 'DBA / Data warehousing', 'Admin / Back Office / Computer Operator', 'Advertising / Communication',
    'Aviation & Aerospace', 'Banking / Insurance / Financial Services', 'Beauty, Fitness & Personal Care', 'CSR & Social Service'
  ];

  const cities = [
    'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune', 'Ahmedabad', 'Jaipur', 'Surat',
    'Lucknow', 'Kanpur', 'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Pimpri-Chinchwad', 'Patna', 'Vadodara'
  ];

  const filteredJobTitles = jobTitleSuggestions.filter(title =>
    title.toLowerCase().includes(jobTitleInput.toLowerCase())
  );

  const filteredCategories = jobCategories.filter(category =>
    category.toLowerCase().includes(categoryInput.toLowerCase())
  );

  const addCustomPerk = (setFieldValue: FormikProps<FormValues>['setFieldValue'], values: FormValues) => {
    if (customPerk.trim() && !values.customPerks.includes(customPerk.trim())) {
      const newCustomPerks = [...values.customPerks, customPerk.trim()];
      setFieldValue('customPerks', newCustomPerks);
      setCustomPerk('');
    }
  };

  const removeCustomPerk = (perk: string, setFieldValue: FormikProps<FormValues>['setFieldValue'], values: FormValues) => {
    const newCustomPerks = values.customPerks.filter(p => p !== perk);
    setFieldValue('customPerks', newCustomPerks);
  };

  const handleNumericInput = (e: React.KeyboardEvent) => {
    if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
      (e.keyCode === 65 && e.ctrlKey === true) ||
      (e.keyCode === 67 && e.ctrlKey === true) ||
      (e.keyCode === 86 && e.ctrlKey === true) ||
      (e.keyCode === 88 && e.ctrlKey === true)) {
      return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Job details</h3>
        <p className="text-sm text-gray-600 mb-1">We use this information to find the best candidates for the job.</p>
        <p className="text-sm text-red-600">* Marked fields are mandatory</p>
      </div>

      <Formik
        initialValues={formData}
        validationSchema={step1ValidationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ values, setFieldValue }: FormikProps<FormValues>) => (
          <Form className="space-y-6">
            {/* Company Field */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company you&#39;re hiring for <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <Field
                  type="text"
                  id="company"
                  name="company"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Company Name"
                />
                <button
                  type="button"
                  className="px-3 py-2 border border-l-0 border-gray-300 rounded-r-md text-sm text-blue-600 hover:bg-gray-50"
                >
                  Change
                </button>
              </div>
              <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Job Title Field */}
            <div className="relative">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Job title / Designation <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Field name="jobTitle">
                  {({ field }: { field: React.ComponentProps<typeof Field>['field'] }) => (
                    <input
                      {...field}
                      type="text"
                      id="jobTitle"
                      value={jobTitleInput}
                      onChange={(e) => {
                        setJobTitleInput(e.target.value);
                        setFieldValue('jobTitle', e.target.value);
                        setShowJobSuggestions(true);
                      }}
                      onFocus={() => setShowJobSuggestions(true)}
                      onBlur={() => setTimeout(() => setShowJobSuggestions(false), 300)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Eg. Accountant"
                    />
                  )}
                </Field>
                {showJobSuggestions && filteredJobTitles.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-48 overflow-y-auto">
                    {filteredJobTitles.map((title, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-sm text-blue-600"
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setJobTitleInput(title);
                          setFieldValue('jobTitle', title);
                          setShowJobSuggestions(false);
                        }}
                      >
                        {title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <ErrorMessage name="jobTitle" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Job Category Field */}
            <div className="relative">
              <label htmlFor="jobCategory" className="block text-sm font-medium text-gray-700 mb-2">
                Job Role / Category <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Field name="jobCategory">
                  {({ field }: { field: React.ComponentProps<typeof Field>['field'] }) => (
                    <input
                      {...field}
                      type="text"
                      id="jobCategory"
                      value={categoryInput}
                      onChange={(e) => {
                        setCategoryInput(e.target.value);
                        setFieldValue('jobCategory', e.target.value);
                        setShowCategorySuggestions(true);
                      }}
                      onFocus={() => setShowCategorySuggestions(true)}
                      onBlur={() => setTimeout(() => setShowCategorySuggestions(false), 300)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Type at least 2 letters for search"
                    />
                  )}
                </Field>

                {showCategorySuggestions && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-64 overflow-y-auto">
                    <div className="px-3 py-2 bg-purple-100 text-purple-800 text-sm font-medium flex items-center justify-between">
                      <span>🔮 AI recommended job roles</span>
                      <button className="text-purple-600 hover:text-purple-800">
                        ↕️
                      </button>
                    </div>

                    {filteredCategories.map((category, index) => (
                      <div
                        key={index}
                        className={`px-3 py-2 cursor-pointer text-sm ${index < 3 ? 'bg-blue-50 hover:bg-blue-100' : 'hover:bg-gray-50'
                          }`}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          setCategoryInput(category);
                          setFieldValue('jobCategory', category);
                          setShowCategorySuggestions(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}

                    <div className="px-3 py-2 text-sm text-gray-600 border-t">
                      <div className="font-medium mb-2">All Job Roles</div>
                      <div className="text-xs text-gray-500">Admin / Back Office / Computer Operator ⌄</div>
                    </div>
                  </div>
                )}
              </div>
              <ErrorMessage name="jobCategory" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Type of Job <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3 mb-3">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="jobType"
                    value="Full Time"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.jobType === 'Full Time'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Full Time
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="jobType"
                    value="Part Time"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.jobType === 'Part Time'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Part Time
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="jobType"
                    value="Both (Full Time And Part Time)"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.jobType === 'Both (Full Time And Part Time)'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Both (Full Time And Part Time)
                  </span>
                </label>
              </div>
              <label className="inline-flex items-center">
                <Field
                  type="checkbox"
                  name="isNightShift"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">This is a night shift job</span>
              </label>
              <ErrorMessage name="jobType" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <p className="text-sm text-gray-600 mb-3">Let candidates know where they will be working from.</p>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Work location type <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="workLocationType"
                    value="Work From Office"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.workLocationType === 'Work From Office'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Work From Office
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="workLocationType"
                    value="Work From Home"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.workLocationType === 'Work From Home'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Work From Home
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="workLocationType"
                    value="Field Job"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.workLocationType === 'Field Job'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Field Job
                  </span>
                </label>
              </div>
              <ErrorMessage name="workLocationType" component="div" className="text-red-500 text-sm mt-1" />

              {/* Location Address Field */}
              {(values.workLocationType === 'Work From Office' || values.workLocationType === 'Field Job') && (
                <div className="mt-4">
                  <label htmlFor="locationAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Location Address <span className="text-red-500">*</span>
                  </label>
                  <Field
                    type="text"
                    id="locationAddress"
                    name="locationAddress"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter complete address"
                  />
                  <ErrorMessage name="locationAddress" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              )}

              {/* City Selection Field */}
              {values.workLocationType === 'Work From Home' && (
                <div className="mt-4">
                  <label htmlFor="citySelection" className="block text-sm font-medium text-gray-700 mb-2">
                    Select City <span className="text-red-500">*</span>
                  </label>
                  <Field
                    as="select"
                    id="citySelection"
                    name="citySelection"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="citySelection" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              )}
            </div>

            {/* Compensation */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Compensation
              </label>
              <p className="text-sm text-gray-600 mb-3">Job postings with right salary & incentives will help you find the right candidates.</p>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                What is the pay type? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3 mb-6">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="payType"
                    value="Fixed Only"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.payType === 'Fixed Only'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Fixed Only
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="payType"
                    value="Fixed + Incentive"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.payType === 'Fixed + Incentive'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Fixed + Incentive
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="payType"
                    value="Incentive Only"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.payType === 'Incentive Only'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Incentive Only
                  </span>
                </label>
              </div>
              <ErrorMessage name="payType" component="div" className="text-red-500 text-sm mt-1" />

              {/* Dynamic Salary Fields */}
              {(values.payType === 'Fixed Only' || values.payType === 'Fixed + Incentive') && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fixed salary / month {values.payType === 'Fixed + Incentive' ? '(excluding incentives)' : ''} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="number"
                      name="fixedSalaryMin"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Minimum fixed salary"
                      min="0"
                      onKeyDown={handleNumericInput}
                    />
                    <span className="text-gray-500">to</span>
                    <Field
                      type="number"
                      name="fixedSalaryMax"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Maximum fixed salary"
                      min="0"
                      onKeyDown={handleNumericInput}
                    />
                  </div>
                  <ErrorMessage name="fixedSalaryMin" component="div" className="text-red-500 text-sm mt-1" />
                  <ErrorMessage name="fixedSalaryMax" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              )}

              {(values.payType === 'Fixed + Incentive' || values.payType === 'Incentive Only') && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Average Incentive / month <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="number"
                      name="averageIncentive"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Eg. 2000"
                      min="0"
                      onKeyDown={handleNumericInput}
                    />
                    {values.payType === 'Fixed + Incentive' && (
                      <button
                        type="button"
                        className="px-3 py-2 bg-gray-100 text-gray-600 rounded-md text-sm hover:bg-gray-200"
                      >
                        +
                      </button>
                    )}
                  </div>
                  <ErrorMessage name="averageIncentive" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              )}
            </div>

            {/* Additional Perks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Do you offer any additional perks ?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {perkOptions.map((perk) => (
                  <label key={perk} className="inline-flex items-center">
                    <Field
                      type="checkbox"
                      name="perks"
                      value={perk}
                      className="sr-only"
                    />
                    <span className={`px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors flex items-center ${values.perks.includes(perk)
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                      }`}>
                      <span className="mr-2">
                        {values.perks.includes(perk) ? '×' : '+'}
                      </span>
                      {perk}
                    </span>
                  </label>
                ))}
              </div>

              {/* Custom Perks */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={customPerk}
                    onChange={(e) => setCustomPerk(e.target.value)}
                    placeholder="Add other perks"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addCustomPerk(setFieldValue, values);
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => addCustomPerk(setFieldValue, values)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    Add
                  </button>
                </div>

                {/* Display custom perks */}
                {values.customPerks.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {values.customPerks.map((perk, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center"
                      >
                        {perk}
                        <button
                          type="button"
                          onClick={() => removeCustomPerk(perk, setFieldValue, values)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Joining Fee */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Is there any joining fee or deposit required from the candidate? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="hasJoiningFee"
                    value="Yes"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${values.hasJoiningFee === 'Yes'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    Yes
                  </span>
                </label>
                <label className="inline-flex items-center">
                  <Field
                    type="radio"
                    name="hasJoiningFee"
                    value="No"
                    className="sr-only"
                  />
                  <span className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${values.hasJoiningFee === 'No'
                    ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                    }`}>
                    No
                  </span>
                </label>
              </div>
              <ErrorMessage name="hasJoiningFee" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Continue Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Continue
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step1;