import type { ButtonHTMLAttributes } from 'react';

// Define allowed values as const arrays (for both runtime and types)
export const buttonVariants = ['primary', 'success', 'danger', 'warning', 'info'] as const;
export const buttonSizes = ['sm', 'md', 'lg'] as const;

// Derive types from the const arrays
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: ButtonSize;
  children?: React.ReactNode;
  className?: string;
}
