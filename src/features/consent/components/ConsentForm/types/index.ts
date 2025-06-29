import { ConsentFormData } from '../../../shared/types';

export interface FormErrors {
    [key: string]: string;
}

export interface FormFieldsProps {
    formData: ConsentFormData;
    errors: FormErrors;
    onInputChange: (field: keyof ConsentFormData, value: string | string[]) => void;
    onConsentChange: (consentValue: string, checked: boolean) => void;
}

export interface UseConsentFormReturn {
    formData: ConsentFormData;
    errors: FormErrors;
    addConsentMutation: any; // Replace with proper type from your mutation hook
    handleInputChange: (field: keyof ConsentFormData, value: string | string[]) => void;
    handleConsentChange: (consentValue: string, checked: boolean) => void;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
} 