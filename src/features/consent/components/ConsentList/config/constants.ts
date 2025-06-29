// Pagination constants
export const PAGINATION_CONFIG = {
    DEFAULT_PAGE: 1,
    PAGE_SIZE: 2,
    RADIX: 10,
} as const;

// Table column configuration
export const TABLE_COLUMNS_CONFIG = {
    name: {
        width: '30%',
        label: 'Name',
    },
    email: {
        width: '35%',
        label: 'Email',
    },
    consents: {
        width: '35%',
        label: 'Consent given for',
    },
} as const; 