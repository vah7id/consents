import React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { TableProps } from './types';

const Table = <T extends Record<string, any>>({
    data,
    columns,
    emptyMessage = 'No data available',
}: TableProps<T>) => {
    if (data.length === 0) {
        return (
            <Box display="flex" justifyContent="center" p={3}>
                <Typography color="text.secondary">{emptyMessage}</Typography>
            </Box>
        );
    }

    return (
        <TableContainer component={Paper}>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={String(column.key)}
                                style={{ width: column.width }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {columns.map((column) => (
                                <TableCell key={String(column.key)}>
                                    {column.render
                                        ? column.render(row[column.key], row)
                                        : String(row[column.key] || '')}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
};

export default Table; 