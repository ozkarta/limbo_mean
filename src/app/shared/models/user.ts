export interface User {
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
  isIndividual: boolean,
  isCompany: boolean,
  businessName: String,
  businessType: String,
  controlNumber: String,
  principalOfficeAddress: String,
  registrationDate: Date
}
