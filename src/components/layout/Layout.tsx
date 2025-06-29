import React from 'react';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Sidebar from '../sidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: { xs: 2, md: 3 },
                    minHeight: isMobile ? 'calc(100vh - 64px)' : '100vh',
                    backgroundColor: 'grey.50',
                    width: '100%',
                }}
            >
                {children}
            </Box>
        </Box>
    );
};

export default Layout; 