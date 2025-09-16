'use client';

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikProps } from 'formik';
import * as Yup from 'yup';
import { FormValues } from '../types';

// Validation schema for Step 2
const step2ValidationSchema = Yup.object({
  minimumEducation: Yup.string().required('Minimum education is required'),
  englishLevel: Yup.string().required('English level is required'),
  experienceRequired: Yup.string().required('Experience requirement is required'),
  selectedIndustries: Yup.array().of(Yup.string()),
  selectedLanguages: Yup.array().of(Yup.string()),
  selectedSkills: Yup.array().of(Yup.string()),
});

interface Step2Props {
  formData: FormValues;
  onSubmit: (values: FormValues) => void;
  onBack: () => void;
}

const Step2: React.FC<Step2Props> = ({ formData, onSubmit, onBack }) => {
  const [industrySearchTerm, setIndustrySearchTerm] = useState('');
  const [skillSearchTerm, setSkillSearchTerm] = useState('');
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);

  const allIndustries = [
    'Any Industry',
    'Accounting / Auditing / Taxation',
    'Agriculture / Forestry / Livestock / Fertilizers',
    'Airlines / Aviation / Aerospace',
    'Automobile/Auto-Components',
    'Banking, Financial Services & Insurance',
    'Beverage / Brewery / Distillery',
    'Chemical Manufacturing',
    'Construction / Engineering / Cement / Metals',
    'Consumer Electronics / Appliances / Durables',
    'Education / Training',
    'Food Processing / Manufacturing',
    'Government / Defence',
    'Healthcare / Biotechnology / Pharmaceutical',
    'Hotels / Restaurants / Travel & Tourism',
    'Industrial Products / Heavy Machinery',
    'Insurance',
    'IT-Software / Software Services',
    'IT-Hardware & Networking',
    'Legal / Law Firms',
    'Media / Entertainment / Internet',
    'Medical / Healthcare / Hospitals',
    'Mining / Metals / Steel / Iron',
    'Oil and Gas / Energy / Utilities / Power',
    'Packaging',
    'Pharmaceuticals / Biotechnology',
    'Real Estate / Property',
    'Retail / Wholesale',
    'Shipping / Marine',
    'Textiles / Garments / Fashion / Gems / Jewellery',
    'Tyres',
    'Water Treatment / Waste Management'
  ];

  const regionalLanguages = [
    'Assamese',
    'Bengali',
    'Gujarati',
    'Hindi',
    'Kannada',
    'Malayalam',
    'Marathi',
    'Oriya',
    'Punjabi',
    'Tamil',
    'Telugu'
  ];

  const allSkills = [
    'DevOps',
    'Google Cloud',
    'Google Cloud Architect',
    'Stack',
    'MS Azure',
    'AWS Glue',
    'AWS',
    'Ansible',
    'Cloud Services',
    'Cloud Platform',
    'Cloud Architecture',
    'Cloud computing',
    'Cloud cost optimization',
    'Cloud budgeting',
    'MongoDB',
    'Stacks',
    'Node',
    'React',
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'Docker',
    'Kubernetes',
    'Terraform',
    'Jenkins',
    'Git',
    'Linux',
    'SQL',
    'NoSQL',
    'REST API',
    'GraphQL',
    'Microservices',
    'Spring Boot',
    'Express.js',
    'Next.js',
    'Vue.js',
    'Angular'
  ];

  const filteredIndustries = allIndustries.filter(industry =>
    industry.toLowerCase().includes(industrySearchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">Candidate requirements</h3>
        <p className="text-sm text-gray-600 mb-1">We&#39;ll use these requirement details to make your job visible to the right candidates.</p>
        <p className="text-sm text-red-600">* Marked fields are mandatory</p>
      </div>

      <Formik
        initialValues={{
          ...formData,
          selectedIndustries: formData.selectedIndustries || [],
          selectedLanguages: formData.selectedLanguages || [],
          selectedSkills: formData.selectedSkills || []
        }}
        validationSchema={step2ValidationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ values, setFieldValue }: FormikProps<FormValues>) => (
          <Form className="space-y-6">
            {/* Basic Requirements */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Basic Requirements</h4>

              {/* Minimum Education */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Minimum Education <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {['10th Or Below 10th', '12th Pass', 'Diploma', 'Graduate', 'Post Graduate'].map((education) => (
                    <label key={education} className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="minimumEducation"
                        value={education}
                        className="sr-only"
                      />
                      <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.minimumEducation === education
                        ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                        }`}>
                        {education}
                      </span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="minimumEducation" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* English Level */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  English level required <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {['No English', 'Basic English', 'Good English'].map((level) => (
                    <label key={level} className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="englishLevel"
                        value={level}
                        className="sr-only"
                      />
                      <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors flex items-center ${values.englishLevel === level
                        ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                        }`}>
                        {level}
                        {level !== 'No English' && (
                          <span className="ml-1 text-gray-500">ⓘ</span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="englishLevel" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Experience Required */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Total experience required <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {['Any', 'Experienced Only', 'Fresher Only'].map((exp) => (
                    <label key={exp} className="inline-flex items-center">
                      <Field
                        type="radio"
                        name="experienceRequired"
                        value={exp}
                        className="sr-only"
                      />
                      <span className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${values.experienceRequired === exp
                        ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                        : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                        }`}>
                        {exp}
                      </span>
                    </label>
                  ))}
                </div>
                <ErrorMessage name="experienceRequired" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </div>

            {/* Additional Requirements */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-2">Additional Requirements (Optional)</h4>
              <p className="text-sm text-gray-600 mb-4">Add additional requirement so that we can help you find the right candidates</p>

              <div className="flex flex-wrap gap-3 mb-6">
                {['Industry', 'Gender', 'Age', 'Regional Languages', 'Skills'].map((req) => (
                  <label key={req} className="inline-flex items-center">
                    <Field
                      type="checkbox"
                      name="additionalRequirements"
                      value={req}
                      className="sr-only"
                    />
                    <span className={`px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors flex items-center ${values.additionalRequirements.includes(req)
                      ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                      : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                      }`}>
                      <span className="mr-2">
                        {values.additionalRequirements.includes(req) ? '×' : '+'}
                      </span>
                      {req}
                    </span>
                  </label>
                ))}
              </div>

              {/* Skills Preference */}
              {values.additionalRequirements.includes('Skills') && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">Skills preference</label>
                    <span className="ml-2 text-gray-400 cursor-help" title="Skills information">ⓘ</span>
                    <button
                      type="button"
                      className="ml-auto text-gray-400 hover:text-gray-600"
                      onClick={() => {
                        setFieldValue('additionalRequirements', values.additionalRequirements.filter(req => req !== 'Skills'));
                        setFieldValue('selectedSkills', []);
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">You can add up to 15 key skills to make your job visible to the right candidates.</p>

                  {/* Selected Skills */}
                  {values.selectedSkills.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {values.selectedSkills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-300"
                        >
                          {skill}
                          <button
                            type="button"
                            className="ml-2 text-blue-600 hover:text-blue-800"
                            onClick={() => {
                              const updatedSkills = values.selectedSkills.filter(s => s !== skill);
                              setFieldValue('selectedSkills', updatedSkills);
                            }}
                          >
                            &#215;
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Search Input */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Type to search for skills"
                      value={skillSearchTerm}
                      onChange={(e) => {
                        setSkillSearchTerm(e.target.value);
                        setShowSkillDropdown(e.target.value.length > 0);
                      }}
                      onFocus={() => setShowSkillDropdown(skillSearchTerm.length > 0 || allSkills.filter(skill => !values.selectedSkills.includes(skill)).length > 0)}
                      onBlur={() => {
                        setTimeout(() => setShowSkillDropdown(false), 300);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    {skillSearchTerm && (
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                        onClick={() => {
                          setSkillSearchTerm('');
                          setShowSkillDropdown(false);
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>

                  {/* Dropdown with filtered skills */}
                  {showSkillDropdown && (
                    <div className="border border-gray-300 rounded-md max-h-40 overflow-y-auto mb-3 bg-white shadow-sm">
                      {allSkills
                        .filter(skill =>
                          !values.selectedSkills.includes(skill) &&
                          skill.toLowerCase().includes(skillSearchTerm.toLowerCase())
                        )
                        .slice(0, 10)
                        .map((skill) => (
                          <button
                            key={skill}
                            type="button"
                            onMouseDown={(e) => {
                              e.preventDefault();
                              setTimeout(() => {
                                if (values.selectedSkills.length < 15) {
                                  setFieldValue('selectedSkills', [...values.selectedSkills, skill]);
                                }
                                setSkillSearchTerm('');
                                setShowSkillDropdown(false);
                              }, 100);
                            }}
                            className="w-full text-left px-3 py-2 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 text-sm"
                          >
                            {skill}
                          </button>
                        ))}
                      {allSkills.filter(skill =>
                        !values.selectedSkills.includes(skill) &&
                        skill.toLowerCase().includes(skillSearchTerm.toLowerCase())
                      ).length === 0 && (
                          <div className="px-3 py-2 text-gray-500 text-sm">
                            No skills found matching &#34;{skillSearchTerm}&#34;
                          </div>
                        )}
                    </div>
                  )}

                  {/* Suggested skills */}
                  {!showSkillDropdown && (
                    <div className="mb-3">
                      <p className="text-sm font-medium text-gray-700 mb-2">Suggested skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {allSkills
                          .filter(skill => !values.selectedSkills.includes(skill))
                          .slice(0, 8)
                          .map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => {
                                if (values.selectedSkills.length < 15) {
                                  setFieldValue('selectedSkills', [...values.selectedSkills, skill]);
                                }
                              }}
                              className="px-3 py-1 text-sm border border-gray-300 rounded-full hover:bg-gray-50 flex items-center transition-colors"
                            >
                              <span className="mr-1">+</span>
                              {skill}
                            </button>
                          ))}
                        {allSkills.filter(skill => !values.selectedSkills.includes(skill)).length > 8 && (
                          <button
                            type="button"
                            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-800"
                            onClick={() => setShowSkillDropdown(true)}
                          >
                            Show More &#9660;
                          </button>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Skill limit warning */}
                  {values.selectedSkills.length >= 15 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">!</span>
                        </div>
                        <span className="text-sm text-amber-800">
                          You have reached the maximum limit of 15 skills.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Regional Languages */}
              {values.additionalRequirements.includes('Regional Languages') && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">Regional language required</label>
                    <button
                      type="button"
                      className="ml-auto text-gray-400 hover:text-gray-600"
                      onClick={() => setFieldValue('additionalRequirements', values.additionalRequirements.filter(req => req !== 'Regional Languages'))}
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-3">
                    {regionalLanguages.map((language) => {
                      const isSelected = values.selectedLanguages.includes(language);
                      return (
                        <button
                          key={language}
                          type="button"
                          onClick={() => {
                            const currentLanguages = values.selectedLanguages;
                            if (isSelected) {
                              setFieldValue('selectedLanguages', currentLanguages.filter(lang => lang !== language));
                            } else {
                              setFieldValue('selectedLanguages', [...currentLanguages, language]);
                            }
                          }}
                          className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium transition-colors ${isSelected
                            ? 'bg-blue-100 text-blue-800 border border-blue-300'
                            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-gray-200'
                            }`}
                        >
                          {language}
                          <span className="ml-2 text-sm">
                            {isSelected ? '×' : '+'}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {values.selectedLanguages.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                      <div className="flex items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mr-2">
                          <span className="text-white text-xs">ⓘ</span>
                        </div>
                        <span className="text-sm text-blue-800">
                          The candidates who apply will be able to speak atleast one of selected languages
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Age Range */}
              {values.additionalRequirements.includes('Age') && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">Age (in years)</label>
                    <span className="ml-2 text-gray-400 cursor-help" title="Age information">ⓘ</span>
                    <button
                      type="button"
                      className="ml-auto text-gray-400 hover:text-gray-600"
                      onClick={() => setFieldValue('additionalRequirements', values.additionalRequirements.filter(req => req !== 'Age'))}
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Field
                      type="number"
                      name="ageMin"
                      placeholder="18"
                      min="18"
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="text-gray-500">to</span>
                    <Field
                      type="number"
                      name="ageMax"
                      placeholder="60"
                      min="18"
                      max="100"
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs mr-1">&#33;</span>
                    Min. age must be above 18
                  </p>
                </div>
              )}

              {/* Gender */}
              {values.additionalRequirements.includes('Gender') && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <span className="ml-2 text-gray-400 cursor-help" title="Gender information">ⓘ</span>
                    <button
                      type="button"
                      className="ml-auto text-gray-400 hover:text-gray-600"
                      onClick={() => setFieldValue('additionalRequirements', values.additionalRequirements.filter(req => req !== 'Gender'))}
                    >
                      ×
                    </button>
                  </div>

                  <div className="flex gap-3">
                    {['Both', 'Male', 'Female'].map((gender) => (
                      <label key={gender} className="inline-flex items-center">
                        <Field
                          type="radio"
                          name="genderPreference"
                          value={gender}
                          className="sr-only"
                        />
                        <span className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${values.genderPreference === gender
                          ? 'bg-blue-100 text-blue-800 border-2 border-blue-500'
                          : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                          }`}>
                          {gender}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Industry Selection */}
              {values.additionalRequirements.includes('Industry') && (
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700">Previous industry experience</label>
                    <span className="ml-2 text-gray-400 cursor-help" title="Industry information">ⓘ</span>
                    <button
                      type="button"
                      className="ml-auto text-gray-400 hover:text-gray-600"
                      onClick={() => setFieldValue('additionalRequirements', values.additionalRequirements.filter(req => req !== 'Industry'))}
                    >
                      ×
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Add industries in which candidates should have prior experience for this job</p>

                  {/* Selected Industries */}
                  {values.selectedIndustries.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {values.selectedIndustries.map((industry) => (
                        <span
                          key={industry}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 border border-blue-300"
                        >
                          {industry}
                          <button
                            type="button"
                            className="ml-2 text-blue-600 hover:text-blue-800"
                            onClick={() => {
                              const updatedIndustries = values.selectedIndustries.filter(ind => ind !== industry);
                              setFieldValue('selectedIndustries', updatedIndustries);
                            }}
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Industry Search Input */}
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Type to search industry"
                      value={industrySearchTerm}
                      onChange={(e) => setIndustrySearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <span className="absolute right-3 top-2.5 text-gray-400">▼</span>
                  </div>

                  {/* Industry Options */}
                  <div className="border border-gray-300 rounded-md max-h-60 overflow-y-auto">
                    {filteredIndustries.map((industry) => {
                      const isSelected = values.selectedIndustries.includes(industry);
                      return (
                        <label key={industry} className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => {
                              const currentIndustries = values.selectedIndustries;
                              if (e.target.checked) {
                                setFieldValue('selectedIndustries', [...currentIndustries, industry]);
                              } else {
                                setFieldValue('selectedIndustries', currentIndustries.filter(ind => ind !== industry));
                              }
                            }}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          />
                          <span className="ml-3 text-sm text-gray-700 flex-1">{industry}</span>
                          <span className="text-gray-400">▶</span>
                        </label>
                      );
                    })}
                    {filteredIndustries.length === 0 && (
                      <div className="p-3 text-center text-gray-500 text-sm">
                        No industries found matching &#34;{industrySearchTerm}&#34;
                      </div>
                    )}

                  </div>
                </div>
              )}
            </div>

            {/* Job Description */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-2">Job Description</h4>
              <p className="text-sm text-gray-600 mb-4">Describe the responsibilities of this job and other specific requirements here.</p>

              <div className="border border-gray-300 rounded-md">
                <div className="flex items-center space-x-2 p-3 border-b border-gray-300 bg-gray-50">
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <strong>B</strong>
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <em>I</em>
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    <u>U</u>
                  </button>
                  <div className="border-l border-gray-400 h-4 mx-2"></div>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    •
                  </button>
                  <button type="button" className="p-1 rounded hover:bg-gray-200">
                    1.
                  </button>
                </div>

                <Field
                  as="textarea"
                  name="jobDescription"
                  rows={6}
                  className="w-full p-3 border-none focus:outline-none resize-none"
                  placeholder="Enter the job description, including the main responsibility and tasks..."
                />
              </div>
              <ErrorMessage name="jobDescription" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center pt-6">
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
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

export default Step2;