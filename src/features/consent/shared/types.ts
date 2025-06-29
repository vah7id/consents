
// Core consent types used across the feature
export interface ConsentFormData {
    name: string;
    email: string;
    consents: string[];
}

export interface Consent {
    id: number;
    name: string;
    email: string;
    consents: string[];
    createdAt: string;
}

export interface ConsentType {
    value: string;
    label: string;
    category: 'marketing' | 'analytics';
}

// Consent Types Enum
export const CONSENT_TYPES = {
    NEWSLETTER: 'NEWSLETTER',
    TARGETED_ADS: 'TARGETED_ADS',
    ANALYTICS: 'ANALYTICS',
} as const;

// Consent Options with display labels
export const CONSENT_OPTIONS: ConsentType[] = [
    {
        value: CONSENT_TYPES.NEWSLETTER,
        label: 'Receive newsletter',
        category: 'marketing',
    },
    {
        value: CONSENT_TYPES.TARGETED_ADS,
        label: 'Be shown targeted ads',
        category: 'marketing',
    },
    {
        value: CONSENT_TYPES.ANALYTICS,
        label: 'Contribute to anonymous visit statistics',
        category: 'analytics',
    },
]; 

export interface FormErrors {
    [key: string]: string;
}

export interface FormFieldsProps {
    formData: ConsentFormData;
    errors: FormErrors;
    onInputChange: (field: keyof ConsentFormData, value: string | string[]) => void;
    onConsentChange: (consentValue: string, checked: boolean) => void;
}