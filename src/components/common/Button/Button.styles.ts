import { interactiveStates, disabledStates } from '../../../styles/token';

export const base =
  'inline-flex items-center justify-center gap-2 rounded-md border-0 shadow-md transition-standard cursor-pointer';

export const sizes = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
};

export const variants = {
  primary: `bg-primary text-on-primary ${interactiveStates}`,
  success: `bg-success text-on-success ${interactiveStates}`,
  danger: `bg-danger text-on-danger ${interactiveStates}`,
  warning: `bg-warning text-on-warning ${interactiveStates}`,
  info: `bg-info text-on-info ${interactiveStates}`,
};

export const fullWidth = 'w-full justify-center';

export const iconPositions = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

export const disabled = disabledStates;
export const loadingIcon = 'animate-spin inline-block align-middle text-current';
