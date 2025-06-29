import React from 'react';
import { useSnackbar, VariantType } from 'notistack';

// Re-export useSnackbar for convenience
export { useSnackbar } from 'notistack';

// Simple wrapper component that exposes notistack functionality
const NotificationSystem: React.FC = () => {
    // This component doesn't render anything, it's just a placeholder
    // for the notistack integration
    return null;
};

// Utility hook for easier notification usage
export const useNotification = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const showNotification = (
        message: string,
        variant: VariantType = 'info',
        options?: {
            autoHideDuration?: number;
            persist?: boolean;
        }
    ) => {
        enqueueSnackbar(message, {
            variant,
            autoHideDuration: options?.autoHideDuration || 5000,
            persist: options?.persist || false,
        });
    };

    return {
        showNotification,
        enqueueSnackbar,
        closeSnackbar,
    };
};

export default NotificationSystem; 