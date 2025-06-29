/**
 * Generic validation utilities that can be reused across features
 */

/**
 * Validates if a string is not empty and has minimum length
 */
export const validateRequiredString = (
    value: string,
    fieldName: string,
    minLength: number = 1,
    maxLength?: number
): string | null => {
    if (!value || !value.trim()) {
        return `${fieldName} is required`;
    }
    
    if (value.length < minLength) {
        return `${fieldName} must be at least ${minLength} characters`;
    }
    
    if (maxLength && value.length > maxLength) {
        return `${fieldName} must be no more than ${maxLength} characters`;
    }
    
    return null;
};

/**
 * Validates email format
 */
export const validateEmail = (email: string): string | null => {
    if (!email.trim()) {
        return 'Email is required';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email address';
    }
    
    return null;
};

/**
 * Validates if an array has minimum required items
 */
export const validateArrayMinLength = (
    array: any[],
    fieldName: string,
    minLength: number = 1
): string | null => {
    if (!array || array.length < minLength) {
        return `${fieldName} must have at least ${minLength} item${minLength === 1 ? '' : 's'}`;
    }
    
    return null;
};
