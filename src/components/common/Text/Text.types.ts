import type { CSSProperties } from 'react';

export type TextTag = (typeof textTags)[number];

export const textTags = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface TextProps {
  as?: TextTag;
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  color?: string;
  textAlign?: CSSProperties['textAlign'];
}

export const textDefaultProps = {
  as: 'p',
  color: 'var(--color-text-primary)',
  textAlign: 'left',
} satisfies Required<Pick<TextProps, 'as' | 'color' | 'textAlign'>>;
