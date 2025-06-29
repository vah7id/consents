import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner, ErrorBoundary, RouteErrorFallback } from '../shared';

// Lazy load components
const ConsentForm = lazy(() => import('../features/consent/components/ConsentForm/ConsentForm'));
const ConsentList = lazy(() => import('../features/consent/components/ConsentList/ConsentList'));

// Loading fallback components
const RouteLoadingFallback: React.FC = () => (
    <LoadingSpinner
        message="Loading page..."
        size="large"
        fullScreen={false}
    />
);

const ComponentLoadingFallback: React.FC = () => (
    <LoadingSpinner
        message="Loading component..."
        size="medium"
        fullScreen={false}
    />
);

const AppRoutes: React.FC = () => {
    return (
        <ErrorBoundary fallback={<RouteErrorFallback />}>
            <Suspense fallback={<RouteLoadingFallback />}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <ErrorBoundary>
                                <Suspense fallback={<ComponentLoadingFallback />}>
                                    <ConsentForm />
                                </Suspense>
                            </ErrorBoundary>
                        }
                    />
                    <Route
                        path="/consents"
                        element={
                            <ErrorBoundary>
                                <Suspense fallback={<ComponentLoadingFallback />}>
                                    <ConsentList />
                                </Suspense>
                            </ErrorBoundary>
                        }
                    />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default AppRoutes; 