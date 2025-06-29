import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { LoadingSpinner } from '../index';
import { DataLoaderProps } from './types';

const DataLoader: React.FC<DataLoaderProps> = ({
    loading,
    error,
    children,
    loadingMessage = 'Loading data...',
    errorMessage = 'Failed to load data',
    onRetry,
    showSkeleton = false,
}) => {
    if (loading) {
        return (
            <LoadingSpinner
                message={loadingMessage}
                variant={showSkeleton ? 'skeleton' : 'spinner'}
                skeletonRows={2}
                skeletonHeight={40}
                size="medium"
            />
        );
    }

    if (error) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
                <Paper sx={{ p: 3, textAlign: 'center', maxWidth: 400 }}>
                    <Typography variant="h6" color="error" gutterBottom>
                        {errorMessage}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {error.message || 'An unexpected error occurred while loading data'}
                    </Typography>
                    {onRetry && (
                        <Button onClick={onRetry} variant="outlined">
                            Try Again
                        </Button>
                    )}
                </Paper>
            </Box>
        );
    }

    return <>{children}</>;
};

export default DataLoader; 