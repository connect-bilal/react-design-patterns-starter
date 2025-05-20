import type { IconBaseProps } from 'react-icons';

export const iconVariants = ['primary', 'success', 'danger', 'warning', 'info'] as const;
export const iconSizes = ['sm', 'md', 'lg'] as const;

export type IconVariant = (typeof iconVariants)[number];
export type IconSize = (typeof iconSizes)[number];

export interface IconProps {
  icon: React.ComponentType<IconBaseProps>;
  size?: IconSize;
  variant?: IconVariant;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

export const iconDefaultProps = {
  size: 'md',
  variant: 'primary',
  'aria-hidden': false,
  className: '',
} satisfies Required<Pick<IconProps, 'size' | 'variant' | 'aria-hidden' | 'className'>>;
