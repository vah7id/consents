import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Table, Pagination, DataLoader } from '../../../../shared';
import styles from './styles';
import { useConsentList } from './hooks';

const ConsentList: React.FC = () => {
    const {
        currentPage,
        tableColumns,
        tableData,
        shouldShowPagination,
        isLoading,
        error,
        data,
        handlePageChange,
        handleRetry,
    } = useConsentList();

    return (
        <Box sx={styles.container}>
            <Paper sx={styles.paper}>
                <DataLoader
                    loading={isLoading}
                    error={error}
                    onRetry={handleRetry}
                    loadingMessage={'Loading consents...'}
                    errorMessage={'Failed to load consents'}
                    showSkeleton={true}
                >
                    <Table
                        data={tableData}
                        columns={tableColumns}
                        emptyMessage={'No consents collected yet.'}
                    />

                    {shouldShowPagination && data && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={data.totalPages}
                            onPageChange={handlePageChange}
                            disabled={isLoading}
                        />
                    )}
                </DataLoader>
            </Paper>
        </Box>
    );
};

export default ConsentList; 