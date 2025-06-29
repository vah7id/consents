import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ErrorContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '400px',
    padding: theme.spacing(2.5)
}));

const ErrorCard = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    maxWidth: '400px',
    width: '100%'
}));

const RouteErrorFallback: React.FC = () => (
    <ErrorContainer>
        <ErrorCard>
            <Typography
                variant="h5"
                color="error"
                gutterBottom
                sx={{ mb: 2 }}
            >
                Failed to load page
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 3 }}
            >
                Please refresh the page or try again later.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={() => window.location.reload()}
                sx={{
                    px: 2.5,
                    py: 1
                }}
            >
                Refresh Page
            </Button>
        </ErrorCard>
    </ErrorContainer>
);

export default RouteErrorFallback; 