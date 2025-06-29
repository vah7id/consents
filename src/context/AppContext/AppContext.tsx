import React, { createContext, useContext, useReducer } from 'react';
import { AppContextType, AppState, AppAction, AppProviderProps } from './types';

// Initial state
const initialState: AppState = {
    isLoading: false,
};

// Reducer
const appReducer = (state: AppState, action: AppAction): AppState => {
    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const setLoading = (loading: boolean) => {
        dispatch({ type: 'SET_LOADING', payload: loading });
    };

    const value: AppContextType = {
        state,
        setLoading,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// Hook to use the context
export const useApp = (): AppContextType => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useApp must be used within an AppProvider');
    }

    return context;
}; 