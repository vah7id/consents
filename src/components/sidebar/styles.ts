import { SxProps, Theme } from '@mui/material/styles';

export const sidebarStyles = {
    drawer: {
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
        },
    } as SxProps<Theme>,

    appBar: (theme: Theme) => ({
        zIndex: theme.zIndex.drawer + 1,
    }) as SxProps<Theme>,

    toolbar: {
        justifyContent: 'center',
    } as SxProps<Theme>,

    list: (isMobile: boolean) => ({
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
    }) as SxProps<Theme>,

    listItem: (isMobile: boolean) => ({
        ...(isMobile && { width: 'auto' }),
    }) as SxProps<Theme>,

    listItemButton: (isMobile: boolean) => ({
        ...(isMobile && {
            color: 'white',
            '&.Mui-selected': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                },
            },
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
        }),
    }) as SxProps<Theme>,

    listItemText: (isMobile: boolean) => ({
        ...(isMobile && {
            '& .MuiListItemText-primary': {
                color: 'white',
            },
        }),
    }) as SxProps<Theme>,
}; 