import React from 'react';
import MuiTextField from '@mui/material/TextField';
import { TextFieldProps } from './types';

const TextField: React.FC<TextFieldProps> = ({
    label,
    value,
    onChange,
    error,
    required = false,
    type = 'text',
    fullWidth = true,
    multiline = false,
    rows = 1,
    ...props
}) => {
    return (
        <MuiTextField
            label={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            error={!!error}
            helperText={error}
            required={required}
            type={type}
            fullWidth={fullWidth}
            multiline={multiline}
            rows={rows}
            variant="outlined"
            margin="normal"
            {...props}
        />
    );
};

export default TextField; 