import React from 'react';
import { render, screen, fireEvent, waitFor } from '../../../../../shared/test-utils/test-utils';
import ConsentForm from '../ConsentForm';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
}));

// Mock the useNotification hook
const mockShowNotification = jest.fn();
jest.mock('../../../../../shared/ui/NotificationSystem', () => ({
    useNotification: () => ({
        showNotification: mockShowNotification,
    }),
}));

describe('ConsentForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders the consent form with all fields', () => {
        render(<ConsentForm />);

        expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
        expect(screen.getByText('I agree to:')).toBeInTheDocument();
        expect(screen.getByText('Receive newsletter')).toBeInTheDocument();
        expect(screen.getByText('Be shown targeted ads')).toBeInTheDocument();
        expect(screen.getByText('Contribute to anonymous visit statistics')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /give consent/i })).toBeInTheDocument();
    });

    it('validates email format', async () => {
        render(<ConsentForm />);

        const emailInput = screen.getByRole('textbox', { name: /email/i });
        fireEvent.change(emailInput, { target: { value: 'invalid-email' } });

        //fill in name
        const nameInput = screen.getByRole('textbox', { name: /name/i });
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });

        //fill in newsletter checkbox
        const newsletterCheckbox = screen.getByLabelText(/receive newsletter/i);
        fireEvent.click(newsletterCheckbox);

        const submitButton = screen.getByRole('button', { name: /give consent/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
        });
    });

    it('validates name length', async () => {
        render(<ConsentForm />);

        const nameInput = screen.getByRole('textbox', { name: /name/i });
        fireEvent.change(nameInput, { target: { value: 'A' } }); // Too short

        // fill in email
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });

        //fill in newsletter checkbox
        const newsletterCheckbox = screen.getByLabelText(/receive newsletter/i);
        fireEvent.click(newsletterCheckbox);

        const submitButton = screen.getByRole('button', { name: /give consent/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Name must be at least 2 characters')).toBeInTheDocument();
        });
    });

    it('allows form submission with valid data', async () => {
        render(<ConsentForm />);

        // Fill in valid data
        const nameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const newsletterCheckbox = screen.getByLabelText(/receive newsletter/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.click(newsletterCheckbox);

        const submitButton = screen.getByRole('button', { name: /give consent/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(mockShowNotification).toHaveBeenCalledWith(
                'Consent submitted successfully!',
                'success'
            );
        });
    });

    it('clears form after successful submission', async () => {
        render(<ConsentForm />);

        // Fill in valid data
        const nameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const newsletterCheckbox = screen.getByLabelText(/receive newsletter/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.click(newsletterCheckbox);

        const submitButton = screen.getByRole('button', { name: /give consent/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(nameInput).toHaveValue('');
        });
        await waitFor(() => {
            expect(emailInput).toHaveValue('');
        });
        await waitFor(() => {
            expect(newsletterCheckbox).not.toBeChecked();
        });
    });

    it('shows loading state during submission', async () => {
        render(<ConsentForm />);

        // Fill in valid data
        const nameInput = screen.getByRole('textbox', { name: /name/i });
        const emailInput = screen.getByRole('textbox', { name: /email/i });
        const newsletterCheckbox = screen.getByLabelText(/receive newsletter/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        fireEvent.click(newsletterCheckbox);

        const submitButton = screen.getByRole('button', { name: /give consent/i });
        fireEvent.click(submitButton);

        await waitFor(() => {
            expect(screen.getByText('Submitting...')).toBeInTheDocument();
        });
    });
}); 