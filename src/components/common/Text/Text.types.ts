import type { CSSProperties } from 'react';

export type TextTag = (typeof textTags)[number];

export const textTags = ['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;

export interface TextProps {
  /** The HTML tag to render */
  as?: TextTag;

  /** The content inside Text */
  children: React.ReactNode;

  /** CSS class names */
  className?: string;

  /** Inline styles */
  style?: CSSProperties;

  /** Text color */
  color?: string;

  /** Text alignment */
  textAlign?: CSSProperties['textAlign'];

  /** Font family*/
  family?: string;
}
