import { useMemo, useState } from 'react';
import { useConsents } from '../../../hooks/useConsents';
import { Consent, CONSENT_OPTIONS } from '../../../shared/types';
import { TableColumn } from '../../../../../shared/ui/Table';
import { PAGINATION_CONFIG, TABLE_COLUMNS_CONFIG } from '../config';
import { UseConsentListReturn } from '../types';

export const useConsentList = (): UseConsentListReturn => {
    // Use state for current page instead of URL search params
    const [currentPage, setCurrentPage] = useState<number>(PAGINATION_CONFIG.DEFAULT_PAGE);

    // Data fetching - now gets all consents
    const { data: allConsents, isLoading, error, refetch } = useConsents();

    const startIndex = (currentPage - 1) * PAGINATION_CONFIG.PAGE_SIZE;
    const endIndex = startIndex + PAGINATION_CONFIG.PAGE_SIZE;
    const paginatedData = allConsents ? allConsents.slice(startIndex, endIndex) : [];
    const totalPages = allConsents ? Math.ceil(allConsents.length / PAGINATION_CONFIG.PAGE_SIZE) : 0;

    // Helper function to map consent values to their labels
    const getConsentLabels = (consentValues: string[]): string => {
        return consentValues
            .map(value => {
                const consentOption = CONSENT_OPTIONS.find(option => option.value === value);
                return consentOption ? consentOption.label : value;
            })
            .join(', ');
    };

    // Memoized table columns configuration
    const tableColumns = useMemo((): TableColumn<Consent>[] => [
        {
            key: 'name',
            label: TABLE_COLUMNS_CONFIG.name.label,
            width: TABLE_COLUMNS_CONFIG.name.width,
        },
        {
            key: 'email',
            label: TABLE_COLUMNS_CONFIG.email.label,
            width: TABLE_COLUMNS_CONFIG.email.width,
        },
        {
            key: 'consents',
            label: TABLE_COLUMNS_CONFIG.consents.label,
            width: TABLE_COLUMNS_CONFIG.consents.width,
            render: (value: string[]) => getConsentLabels(value),
        },
    ], []);

    // Event handlers
    const handlePageChange = (newPage: number): void => {
        setCurrentPage(newPage);
    };

    const handleRetry = (): void => {
        refetch();
    };

    // Derived state
    const shouldShowPagination = totalPages > 1;

    return {
        currentPage,
        tableColumns,
        tableData: paginatedData,
        shouldShowPagination,
        isLoading,
        error,
        data: {
            data: paginatedData,
            total: allConsents?.length || 0,
            page: currentPage,
            pageSize: PAGINATION_CONFIG.PAGE_SIZE,
            totalPages
        },
        handlePageChange,
        handleRetry,
    };
}; 