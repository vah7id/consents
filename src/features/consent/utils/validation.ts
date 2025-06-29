import { FORM_VALIDATION } from './types';
import { ConsentFormData, FormErrors } from '../shared/types';
import { validateRequiredString, validateEmail, validateArrayMinLength } from '../../../shared/utils';

export interface ValidationError {
  field: string;
  message: string;
}

// Consent-specific validation functions
export const validateName = (name: string): string | null => {
  return validateRequiredString(
    name, 
    'Name', 
    FORM_VALIDATION.NAME_MIN_LENGTH, 
    FORM_VALIDATION.NAME_MAX_LENGTH
  );
};

export const validateConsents = (consents: string[]): string | null => {
  return validateArrayMinLength(consents, 'Consent options', FORM_VALIDATION.MIN_CONSENTS);
};

export const validateConsentForm = (data: ConsentFormData): FormErrors => {
  const errors: FormErrors = {};

  const nameError = validateName(data.name);
  if (nameError) errors.name = nameError;

  const emailError = validateEmail(data.email);
  if (emailError) errors.email = emailError;

  const consentsError = validateConsents(data.consents);
  if (consentsError) errors.consents = consentsError;

  return errors;
}; 