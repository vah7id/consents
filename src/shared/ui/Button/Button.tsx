import React from 'react';
import MuiButton from '@mui/material/Button';
import { ButtonProps } from './types';

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    fullWidth = false,
    type = 'button',
    ...props
}) => {
    return (
        <MuiButton
            variant={variant}
            color={color}
            size={size}
            disabled={disabled}
            onClick={onClick}
            fullWidth={fullWidth}
            type={type}
            {...props}
        >
            {children}
        </MuiButton>
    );
};

export default Button; 