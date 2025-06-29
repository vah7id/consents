import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '../../../../shared';
import { useConsentForm } from './hooks';
import { FormFields } from './components';
import styles from './styles';

const ConsentForm: React.FC = () => {
    const {
        formData,
        errors,
        addConsentMutation,
        handleInputChange,
        handleConsentChange,
        handleSubmit,
    } = useConsentForm();

    return (
        <Box sx={styles.formContainer}>
            <Paper sx={styles.paper}>
                <Box component="form" onSubmit={handleSubmit}>
                    <FormFields
                        formData={formData}
                        errors={errors}
                        onInputChange={handleInputChange}
                        onConsentChange={handleConsentChange}
                    />
                    <Box sx={styles.buttonContainer}>
                        <Button
                            type="submit"
                            disabled={addConsentMutation.isPending || !formData.name || !formData.email || !formData.consents.length}
                            size="large"
                        >
                            {addConsentMutation.isPending ? 'Submitting...' : 'Give Consent'}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default ConsentForm; 