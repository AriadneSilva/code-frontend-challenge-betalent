export interface NetworkData {
  id: string
  name: string
  email: string
  jobTitle: string
  company: string
  roles: string[]
  profilePicture: string
  availability: string[]
}

export type ContactVerificationFormValues = {
  name: string
  email: string
}

export interface AddressFormValues {
  zipCode: string
  street: string
  number: string
  complement: string
  city: string
  state: string
}

export interface ContactInformationFormValues {
  country: string
  phoneNumber: string
  email: string
}

export interface PersonalDataFormValues {
  name: string
  miniBio: string
  birthday: string
  gender: string
  ethnicity: string
  birthday: string
  hasDisability: 'yes' | 'no'
  profilePicture: string
}

export interface ProfessionalDataFormValues {
  linkedin: string
  jobTitle: string
  company: string
  segmentOfActivity: string
  hadExperienceAsMentorOrTeacher: 'yes' | 'no'
}

export interface StatusAndAvailabilityFormValues {
  status: string
  roles: string[]
  daysAvailable: string[]
  periodsAvailable: string[]
  numberOfClasses: number
  comments: string
}

export interface PersonData {
  address: AddressFormValues
  contactInformation: ContactInformationFormValues
  personalData: PersonalDataFormValues
  professionalData: ProfessionalDataFormValues
  statusAndAvailability: StatusAndAvailabilityFormValues
  financial: FinancialFormValues
}

export interface FinancialFormValues {
  type: string
  totalHours: string
  classHourValueInValidation: string
  classHourValueValidated: string
  mentoryHourValue: string
}
