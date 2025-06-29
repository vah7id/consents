import { Consent } from '../types';

// Initial mock data
const INITIAL_CONSENTS: Consent[] = [
    {
      id: 1,
      name: 'Bojack Horseman',
      email: 'bojack@horseman.com',
      consents: ['NEWSLETTER', 'TARGETED_ADS'],
      createdAt: new Date('2024-01-15').toISOString(),
    },
    {
      id: 2,
      name: 'Princess Carolyn',
      email: 'princess@manager.com',
      consents: ['NEWSLETTER'],
      createdAt: new Date('2024-01-16').toISOString(),
    },
];

// Shared in-memory data store
let consents: Consent[] = [...INITIAL_CONSENTS];

// Mock API functions
export const getConsentsData = () => consents;

// Set the consents data
export const setConsentsData = (newConsents: Consent[]) => {
    consents = newConsents;
};

// Add a new consent to the data
export const addConsentToData = (consent: Consent) => {
    consents.push(consent);
};

export {INITIAL_CONSENTS}