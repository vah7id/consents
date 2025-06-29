import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { SidebarItem } from './types';
import { sidebarStyles } from './styles';

const sidebarItems: SidebarItem[] = [
    {
        path: '/',
        label: 'Give consent',
    },
    {
        path: '/consents',
        label: 'Collected consents',
    },
];

const Sidebar: React.FC = () => {
    const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navigationItems = (
        <List sx={sidebarStyles.list(isMobile)}>
            {sidebarItems.map((item) => (
                <ListItem key={item.path} disablePadding sx={sidebarStyles.listItem(isMobile)}>
                    <ListItemButton
                        component={Link}
                        to={item.path}
                        selected={location.pathname === item.path}
                        sx={sidebarStyles.listItemButton(isMobile)}
                    >
                        <ListItemText
                            primary={item.label}
                            sx={sidebarStyles.listItemText(isMobile)}
                        />
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );

    if (isMobile) {
        return (
            <AppBar position="static" sx={sidebarStyles.appBar(theme)}>
                <Toolbar sx={sidebarStyles.toolbar}>
                    {navigationItems}
                </Toolbar>
            </AppBar>
        );
    }

    return (
        <Drawer
            variant="permanent"
            sx={sidebarStyles.drawer}
        >
            {navigationItems}
        </Drawer>
    );
};

export default Sidebar; 