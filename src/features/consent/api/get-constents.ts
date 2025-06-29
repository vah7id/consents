import { Consent } from '../types';
import { delay } from '../../../shared/utils';
import { getConsentsData } from './data-mocks';

// API functions - always returns all consents for client-side pagination
export const getConsents = async (): Promise<Consent[]> => {
  await delay(500); // Keep a small delay for realistic API simulation
  
  return getConsentsData();
};