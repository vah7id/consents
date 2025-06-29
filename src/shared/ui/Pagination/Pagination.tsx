import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PaginationProps } from './types';

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    onPageChange,
    disabled = false,
}) => {
    if (totalPages <= 1) return null;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={1}
            mt={2}
        >
            <Button
                disabled={disabled || currentPage <= 1}
                onClick={() => onPageChange(currentPage - 1)}
                variant="outlined"
                size="small"
            >
                {`<<`} Previous page
            </Button>

            <Box display="flex" gap={1}>
                {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                        key={i + 1}
                        variant={currentPage === i + 1 ? 'contained' : 'outlined'}
                        onClick={() => onPageChange(i + 1)}
                        disabled={disabled}
                        size="small"
                    >
                        {i + 1}
                    </Button>
                ))}
            </Box>

            <Button
                disabled={disabled || currentPage >= totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                variant="outlined"
                size="small"
            >
                Next page {`>>`}
            </Button>
        </Box>
    );
};

export default Pagination; 