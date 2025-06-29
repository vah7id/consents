import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProvider } from '../../context/AppContext';

// Create a custom theme for testing
const testTheme = createTheme();

// Create a fresh QueryClient for each test
const createTestQueryClient = () => new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            gcTime: 0,
        },
        mutations: {
            retry: false,
        },
    },
});

// Custom render function that includes all necessary providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
    queryClient?: QueryClient;
    withRouter?: boolean;
    withTheme?: boolean;
    withContext?: boolean;
}

const AllTheProviders = ({
    children,
    queryClient,
    withRouter = true,
    withTheme = true,
    withContext = true
}: {
    children: React.ReactNode;
    queryClient: QueryClient;
    withRouter?: boolean;
    withTheme?: boolean;
    withContext?: boolean;
}) => {
    let element = children;

    if (withContext) {
        element = <AppProvider>{element}</AppProvider>;
    }

    if (withTheme) {
        element = <ThemeProvider theme={testTheme}>{element}</ThemeProvider>;
    }

    if (withRouter) {
        element = <BrowserRouter>{element}</BrowserRouter>;
    }

    return (
        <QueryClientProvider client={queryClient}>
            {element}
        </QueryClientProvider>
    );
};

const customRender = (
    ui: ReactElement,
    options: CustomRenderOptions = {}
) => {
    const {
        queryClient = createTestQueryClient(),
        withRouter = true,
        withTheme = true,
        withContext = true,
        ...renderOptions
    } = options;

    const Wrapper = ({ children }: { children: React.ReactNode }) => (
        <AllTheProviders
            queryClient={queryClient}
            withRouter={withRouter}
            withTheme={withTheme}
            withContext={withContext}
        >
            {children}
        </AllTheProviders>
    );

    return {
        ...render(ui, { wrapper: Wrapper, ...renderOptions }),
        queryClient,
    };
};

// Re-export everything
export * from '@testing-library/react';
export { customRender as render };
export { createTestQueryClient }; 