/**
 * Generates a unique ID for items in a collection
 */
export const generateId = <T extends { id: number }>(items: T[]): number => {
    return Math.max(...items.map(item => item.id), 0) + 1;
};

