import type { InputHTMLAttributes } from 'react';

export const InputTypes = [
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'image',
  'month',
  'number',
  'password',
  'range',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week',
] as const;

export type InputType = (typeof InputTypes)[number];

export type InputProps = {
  type?: InputType;
  label?: string;
  error?: string;
  required?: boolean;
  className?: string;
  iconStart?: React.ElementType;
  iconEnd?: React.ElementType;
  iconPosition?: 'left' | 'right';

  min?: number | string;
  max?: number | string;
  step?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'className'>;

export const inputDefaultProps = {
  type: 'text',
  required: false,
} as const;

export function isValidInputType(type: string): type is InputType {
  return InputTypes.includes(type as InputType);
}

const noIconTypes = ['color', 'date', 'datetime-local', 'month', 'time', 'week', 'file', 'range'];

export const allowIcons = (type: InputType): boolean => {
  return !noIconTypes.includes(type);
};
