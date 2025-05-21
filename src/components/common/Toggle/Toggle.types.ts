import type { InputHTMLAttributes } from 'react';

export type ToggleVariant = 'switch' | 'checkbox';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'checked' | 'defaultChecked'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  variant?: ToggleVariant;
  labelPosition?: 'left' | 'right';
}

export const toggleDefaultProps = {
  checked: false,
  disabled: false,
  variant: 'switch',
  labelPosition: 'right',
  'aria-label': '',
} satisfies Required<
  Pick<ToggleProps, 'checked' | 'disabled' | 'variant' | 'aria-label' | 'labelPosition'>
>;
