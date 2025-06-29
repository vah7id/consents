export interface TextFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  type?: 'text' | 'email' | 'password';
  fullWidth?: boolean;
  multiline?: boolean;
  rows?: number;
} 