import { SxProps, Theme } from '@mui/material/styles';
import { Consent } from '../../../shared/types';
import { TableColumn } from '../../../../../shared/ui/Table';

export interface ConsentListStyles {
    paper: SxProps<Theme>;
    title: SxProps<Theme>;
    container: SxProps<Theme>;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
} 

export interface UseConsentListReturn {
    currentPage: number;
    tableColumns: TableColumn<Consent>[];
    tableData: Consent[];
    shouldShowPagination: boolean;
    isLoading: boolean;
    error: any;
    data: PaginatedResponse<Consent>;
    handlePageChange: (newPage: number) => void;
    handleRetry: () => void;
} 