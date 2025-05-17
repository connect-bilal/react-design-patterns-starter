import type { LabelHTMLAttributes } from "react";

export const labelSizes = ['sm', 'md', 'lg'] as const;
export const labelStates = ['default', 'error', 'disabled'] as const;

export type LabelSize = typeof labelSizes[number];
export type LabelState = typeof labelStates[number];

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
  size?: LabelSize;
  state?: LabelState
  className?: string;
}