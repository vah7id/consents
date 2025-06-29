export interface LoadingSpinnerProps {
    message?: string;
    size?: 'small' | 'medium' | 'large';
    fullScreen?: boolean;
    variant?: 'spinner' | 'skeleton';
    skeletonRows?: number;
    skeletonHeight?: number;
}
