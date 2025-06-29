import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { theme, queryClient } from './index';
import { AppProvider } from '../context';

interface ProvidersProps {
    children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppProvider>
                    <SnackbarProvider
                        maxSnack={3}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        autoHideDuration={5000}
                    >
                        <Router>
                            {children}
                        </Router>
                    </SnackbarProvider>
                </AppProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default Providers; 