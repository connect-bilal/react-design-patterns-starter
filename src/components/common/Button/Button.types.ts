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
  iconSize?: ButtonSize;
  children?: ReactNode;
  icon?: React.ElementType;
  iconPosition?: IconPosition;
  isLoading?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const buttonDefaultProps = {
  variant: 'primary',
  children: 'Button',
  size: 'md',
  iconSize: 'sm',
  disabled: false,
  isLoading: false,
  fullWidth: false,
  iconPosition: 'left',
  className: '',
} satisfies Required<
  Pick<
    ButtonProps,
    | 'variant'
    | 'children'
    | 'size'
    | 'iconSize'
    | 'disabled'
    | 'isLoading'
    | 'fullWidth'
    | 'iconPosition'
    | 'className'
  >
>;
