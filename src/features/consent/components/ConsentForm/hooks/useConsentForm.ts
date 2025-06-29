import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddConsent } from '../../../hooks/useConsents';
import { ConsentFormData } from '../../../shared/types';
import { validateConsentForm } from '../../../utils/validation';
import { useNotification } from '../../../../../shared/ui/NotificationSystem';
import { UseConsentFormReturn, FormErrors } from '../types';

export const useConsentForm = (): UseConsentFormReturn => {
    const [formData, setFormData] = useState<ConsentFormData>({
        name: '',
        email: '',
        consents: [],
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const addConsentMutation = useAddConsent();
    const navigate = useNavigate();
    const { showNotification } = useNotification();

    const handleInputChange = (field: keyof ConsentFormData, value: string | string[]) => {
        setFormData((prev: ConsentFormData) => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors((prev: FormErrors) => ({ ...prev, [field]: '' }));
        }
    };

    const handleConsentChange = (consentValue: string, checked: boolean) => {
        const newConsents = checked
            ? [...formData.consents, consentValue]
            : formData.consents.filter((c: string) => c !== consentValue);

        handleInputChange('consents', newConsents);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateConsentForm(formData);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            await addConsentMutation.mutateAsync(formData);
            setFormData({ name: '', email: '', consents: [] });
            setErrors({});
            showNotification('Consent submitted successfully!', 'success');
            // Navigate immediately after successful submission
            navigate('/consents');
        } catch (error) {
            showNotification('Failed to submit consent.', 'error');
            console.error('Failed to submit consent:', error);
        }
    };

    return {
        formData,
        errors,
        addConsentMutation,
        handleInputChange,
        handleConsentChange,
        handleSubmit,
    };
}; 