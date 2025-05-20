import type { AnchorHTMLAttributes, ReactNode, CSSProperties } from 'react';

export const linkVariants = ['default', 'underline', 'button'] as const;
export type LinkVariant = (typeof linkVariants)[number];

export const linkSizes = ['sm', 'md', 'lg'] as const;
export type LinkSize = (typeof linkSizes)[number];

export const targetOptions = ['_self', '_blank', '_parent', '_top'] as const;
export type TargetProp = (typeof targetOptions)[number] | (string & {});

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: LinkVariant;
  external?: boolean;
  className?: string;
  target?: TargetProp;
  ariaLabel?: string;
  size?: LinkSize;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

export const linkDefaultProps = {
  children: 'Link',
  href: '#',
  target: '_self',
  variant: 'default',
  external: false,
  size: 'md',
  disabled: false,
  style: {},
} satisfies Required<
  Pick<
    LinkProps,
    'children' | 'href' | 'target' | 'variant' | 'external' | 'size' | 'disabled' | 'style'
  >
>;
