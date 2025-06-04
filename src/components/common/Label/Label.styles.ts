import { disabledStates } from '../../../styles/token';

export const labelSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const labelStates = {
  default: 'text-base',
  error: 'text-danger',
  disabled: `text-muted ${disabledStates}`,
};

export const labelBase = 'inline-block font-medium leading-relaxed mb-1';

export const requiredClass = 'text-danger';
