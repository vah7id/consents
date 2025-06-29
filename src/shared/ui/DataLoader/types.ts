export interface DataLoaderProps {
    loading: boolean;
    error?: Error | null;
    children: React.ReactNode;
    loadingMessage?: string;
    errorMessage?: string;
    onRetry?: () => void;
    showSkeleton?: boolean;
    skeletonRows?: number;
    skeletonHeight?: number;
}