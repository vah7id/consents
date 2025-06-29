import React from 'react';
import MuiCheckbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CheckboxProps } from './types';

const Checkbox: React.FC<CheckboxProps> = ({
    label,
    checked,
    onChange,
    disabled = false,
    ...props
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            onChange(event.target.checked);
        }
    };

    return (
        <FormControlLabel
            control={
                <MuiCheckbox
                    checked={checked}
                    onChange={handleChange}
                    disabled={disabled}
                    {...props}
                />
            }
            label={
                <Box>
                    <Typography variant="body1" component="span">
                        {label}
                    </Typography>
                </Box>
            }
            sx={{ alignItems: 'center' }}
        />
    );
};

export default Checkbox; 