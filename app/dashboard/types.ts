// Define the form values interface
export interface FormValues {
  company: string;
  jobTitle: string;
  jobCategory: string;
  jobType: string;
  isNightShift: boolean;
  workLocationType: string;
  locationAddress: string;
  citySelection: string;
  payType: string;
  fixedSalaryMin: string;
  fixedSalaryMax: string;
  averageIncentive: string;
  perks: string[];
  hasJoiningFee: string;
  customPerks: string[];
  // Step 2 fields
  minimumEducation: string;
  englishLevel: string;
  experienceRequired: string;
  additionalRequirements: string[];
  jobDescription: string;
  // Additional requirement fields
  ageMin: string;
  ageMax: string;
  genderPreference: string;
  industryExperience: string;
  selectedIndustries: string[];
  selectedLanguages: string[];
  selectedSkills: string[];
  // Step 3 fields
  isWalkInInterview: string;
  communicationPreference: string;
  walkInAddress: string;
  walkInFloorPlot: string;
  walkInStartDate: string;
  walkInEndDate: string;
  walkInStartTime: string;
  walkInEndTime: string;
  otherInstructions: string;
  companyAddress: string;
  candidateContactPreference: string;
  notificationPreference: string;
  recruiterName: string;
  recruiterWhatsapp: string;
  recruiterEmail: string;
  selectedPlan: string;
}
