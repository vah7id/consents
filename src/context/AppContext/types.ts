import { ReactNode } from 'react';

// App State Types
export interface AppState {
    isLoading: boolean;
}

// Action Types
export type AppAction = { type: 'SET_LOADING'; payload: boolean };

// Context Types
export interface AppContextType {
    state: AppState;
    setLoading: (loading: boolean) => void;
}

// Provider Types
export interface AppProviderProps {
    children: ReactNode;
}