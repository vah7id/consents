// Components
export { default as ConsentForm } from './components/ConsentForm/ConsentForm';
export { default as ConsentList } from './components/ConsentList/ConsentList';

// Hooks
export { useConsents, useAddConsent } from './hooks/useConsents';

// API
export { getConsents, addConsent } from './api';

// Types
export * from './types';

// Utils
export * from './utils/validation'; 