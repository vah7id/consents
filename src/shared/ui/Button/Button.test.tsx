import React from 'react';
import { render, screen, fireEvent } from '../../test-utils/test-utils';
import Button from './Button';

describe('Button', () => {
    it('renders with default props', () => {
        render(<Button>Click me</Button>);

        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('MuiButton-contained');
    });

    it('renders with different variants', () => {
        const { rerender } = render(<Button variant="outlined">Outlined</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-outlined');

        rerender(<Button variant="text">Text</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-text');
    });

    it('renders with different colors', () => {
        const { rerender } = render(<Button color="primary">Primary</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-colorPrimary');

        rerender(<Button color="secondary">Secondary</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-colorSecondary');

        rerender(<Button color="error">Error</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-colorError');
    });

    it('renders with different sizes', () => {
        const { rerender } = render(<Button size="small">Small</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeSmall');

        rerender(<Button size="large">Large</Button>);
        expect(screen.getByRole('button')).toHaveClass('MuiButton-sizeLarge');
    });

    it('handles click events', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('can be disabled', () => {
        const handleClick = jest.fn();
        render(<Button disabled onClick={handleClick}>Disabled</Button>);

        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        fireEvent.click(button);
        expect(handleClick).not.toHaveBeenCalled();
    });

    it('can be full width', () => {
        render(<Button fullWidth>Full Width</Button>);

        expect(screen.getByRole('button')).toHaveClass('MuiButton-fullWidth');
    });

    it('can be submit type', () => {
        render(<Button type="submit">Submit</Button>);

        expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('can be reset type', () => {
        render(<Button type="reset">Reset</Button>);

        expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
}); 