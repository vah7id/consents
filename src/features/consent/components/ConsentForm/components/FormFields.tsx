import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextField, Checkbox } from '../../../../../shared';
import { CONSENT_OPTIONS } from '../../../shared/types';
import styles from '../styles/index';
import { FormFieldsProps } from '../types';

export const FormFields: React.FC<FormFieldsProps> = ({
    formData,
    errors,
    onInputChange,
    onConsentChange,
}) => {
    return (
        <>
            <Box sx={styles.inputRow}>
                <Box sx={styles.inputField}>
                    <TextField
                        label="Name"
                        value={formData.name}
                        onChange={(value: string) => onInputChange('name', value)}
                        error={errors.name}
                        required
                        fullWidth={true}
                    />
                </Box>
                <Box sx={styles.inputField}>
                    <TextField
                        label="Email address"
                        type="email"
                        value={formData.email}
                        onChange={(value: string) => onInputChange('email', value)}
                        error={errors.email}
                        required
                        fullWidth={true}
                    />
                </Box>
            </Box>

            <Box sx={styles.consentSection}>
                <Typography sx={styles.consentTitle} variant="h6" gutterBottom>
                    I agree to:
                </Typography>

                <Box sx={styles.checkboxContainer}>
                    {CONSENT_OPTIONS.map((option) => (
                        <Checkbox
                            key={option.value}
                            label={option.label}
                            checked={formData.consents.includes(option.value)}
                            onChange={(checked: boolean) => onConsentChange(option.value, checked)}
                        />
                    ))}
                </Box>

                {errors.consents && (
                    <Typography color="error" variant="body2" sx={{ mb: 1 }}>
                        {errors.consents}
                    </Typography>
                )}
            </Box>
        </>
    );
}; 