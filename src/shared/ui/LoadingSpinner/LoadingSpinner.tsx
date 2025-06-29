import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { LoadingSpinnerProps } from './types';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
    message = 'Loading...',
    size = 'medium',
    fullScreen = false,
    variant = 'spinner',
    skeletonRows = 2,
    skeletonHeight = 20,
}) => {
    const sizeMap = {
        small: 24,
        medium: 40,
        large: 60,
    };

    const renderContent = () => {
        if (variant === 'skeleton') {
            return (
                <Box display="flex" flexDirection="column" gap={2} width="100%">
                    {Array.from({ length: skeletonRows }).map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="rectangular"
                            height={skeletonHeight}
                            width="100%"
                            data-testid="skeleton"
                            sx={{
                                borderRadius: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.11)',
                            }}
                        />
                    ))}
                </Box>
            );
        }

        return (
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={2}
            >
                <CircularProgress size={sizeMap[size]} />
                {message && (
                    <Typography variant="body2" color="text.secondary">
                        {message}
                    </Typography>
                )}
            </Box>
        );
    };

    const content = renderContent();

    if (fullScreen) {
        return (
            <Box
                position="fixed"
                top={0}
                left={0}
                right={0}
                bottom={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                bgcolor="rgba(255, 255, 255, 0.8)"
                zIndex={9999}
                data-testid="fullscreen-container"
            >
                {content}
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight={variant === 'skeleton' ? 'auto' : 200}
            p={variant === 'skeleton' ? 3 : 0}
            width="100%"
        >
            {content}
        </Box>
    );
};

export default LoadingSpinner; 