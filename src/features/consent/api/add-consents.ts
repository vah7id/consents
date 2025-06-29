import { Consent, ConsentFormData } from '../types';
import { delay, generateId } from '../../../shared/utils';
import { addConsentToData, getConsentsData } from './data-mocks';

export const addConsent = async (consentData: ConsentFormData): Promise<Consent> => {
  await delay(500); // Keep a small delay for realistic API simulation
  
  const consents = getConsentsData();
  const newConsent: Consent = {
    id: generateId(consents),
    ...consentData,
    createdAt: new Date().toISOString(),
  };
  
  addConsentToData(newConsent);
  return newConsent;
};

