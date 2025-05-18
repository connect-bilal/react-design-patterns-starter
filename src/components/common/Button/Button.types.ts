import type { ReactNode, ButtonHTMLAttributes } from 'react';

// Define allowed values as const arrays
export const buttonVariants = ['primary', 'success', 'danger', 'warning', 'info'] as const;
export const buttonSizes = ['sm', 'md', 'lg'] as const;
export const iconPositions = ['left', 'right', 'top', 'bottom'] as const;

// Derive types from the const arrays
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];
export type IconPosition = (typeof iconPositions)[number];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  size?: ButtonSize;
  children?: ReactNode;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}
