import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ErrorContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: theme.spacing(2.5),
    backgroundColor: theme.palette.grey[100]
}));

const ErrorCard = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
    maxWidth: '500px',
    width: '100%'
}));

const GlobalErrorFallback: React.FC = () => (
    <ErrorContainer>
        <ErrorCard>
            <Typography
                variant="h4"
                color="error"
                gutterBottom
                sx={{ mb: 2.5 }}
            >
                Application Error
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 3.75 }}
            >
                Something went wrong with the application. Please refresh the page or contact support if the problem persists.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => window.location.reload()}
                sx={{
                    px: 3,
                    py: 1.5,
                    fontSize: '1rem'
                }}
            >
                Refresh Application
            </Button>
        </ErrorCard>
    </ErrorContainer>
);

export default GlobalErrorFallback; 