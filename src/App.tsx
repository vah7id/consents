import React from 'react';
import { Layout } from './components';
import { AppRoutes } from './router';
import { ErrorBoundary, GlobalErrorFallback } from './shared';

function App() {
    return (
        <ErrorBoundary fallback={<GlobalErrorFallback />}>
            <Layout>
                <AppRoutes />
            </Layout>
        </ErrorBoundary>
    );
}

export default App; 