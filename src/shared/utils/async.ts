/**
 * Creates a delay for a specified number of milliseconds
 * Useful for simulating network delays or rate limiting
 */
export const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
};
