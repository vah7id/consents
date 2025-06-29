import React from 'react';
import { render, screen } from '../../../../../shared/test-utils/test-utils';
import ConsentList from '../ConsentList';
import { useConsents } from '../../../hooks/useConsents';

// Mock the consent API
jest.mock('../../../api', () => ({
    getConsents: jest.fn(),
}));

// Mock the useConsents hook
jest.mock('../../../hooks/useConsents', () => ({
    useConsents: jest.fn(),
}));

const mockUseConsents = useConsents as jest.MockedFunction<typeof useConsents>;

describe('ConsentList', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        // Set up default mock implementation for useConsents
        mockUseConsents.mockReturnValue({
            data: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@example.com',
                    consents: ['NEWSLETTER', 'TARGETED_ADS'],
                    createdAt: '2024-01-15T10:00:00.000Z',
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    email: 'jane@example.com',
                    consents: ['NEWSLETTER'],
                    createdAt: '2024-01-16T11:00:00.000Z',
                },
            ],
            isLoading: false,
            isError: false,
            isPending: false,
            error: null,
            refetch: jest.fn(),
            isFetching: false,
            isSuccess: true,
            isRefetching: false,
            isRefetchError: false,
            isLoadingError: false,
            isPlaceholderData: false,
            dataUpdatedAt: 0,
            errorUpdatedAt: 0,
            failureCount: 0,
            failureReason: null,
            fetchStatus: 'idle',
            status: 'success',
        } as any);
    });

    it('displays correct consent information', () => {
        render(<ConsentList />);
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('jane@example.com')).toBeInTheDocument();
        expect(screen.getByText('Receive newsletter, Be shown targeted ads')).toBeInTheDocument();
    });

    it('handles empty consent list', () => {
        mockUseConsents.mockReturnValue({
            data: [],
            isLoading: false,
            isError: false,
            isPending: false,
            error: null,
            refetch: jest.fn(),
            isFetching: false,
            isSuccess: true,
            isRefetching: false,
            isRefetchError: false,
            isLoadingError: false,
            isPlaceholderData: false,
            dataUpdatedAt: 0,
            errorUpdatedAt: 0,
            failureCount: 0,
            failureReason: null,
            fetchStatus: 'idle',
            status: 'success',
        } as any);

        render(<ConsentList />);
        expect(screen.getByText('No consents collected yet.')).toBeInTheDocument();
    });

    it('handles API error', () => {
        mockUseConsents.mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: true,
            isPending: false,
            error: new Error('API Error'),
            refetch: jest.fn(),
            isFetching: false,
            isSuccess: false,
            isRefetching: false,
            isRefetchError: false,
            isLoadingError: true,
            isPlaceholderData: false,
            dataUpdatedAt: 0,
            errorUpdatedAt: Date.now(),
            failureCount: 1,
            failureReason: new Error('API Error'),
            fetchStatus: 'idle',
            status: 'error',
        } as any);

        render(<ConsentList />);
        expect(screen.getByText('Failed to load consents')).toBeInTheDocument();
        expect(screen.getByText('Try Again')).toBeInTheDocument();
    });
}); 