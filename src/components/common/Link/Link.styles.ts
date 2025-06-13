import { disabledStates, interactiveStates } from '@tokens';

export const linkBase = `inline-flex items-center font-sans no-underline ${interactiveStates}`;

export const linkVariants = {
  default: 'text-primary',
  underline: 'text-primary underline',
  button: 'bg-primary text-on-primary shadow-md rounded-md',
};

export const linkSizes = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-6 py-3',
};

export const linkDisabled = `text-muted ${disabledStates}`;

export const linkHover =
  'hover:text-muted focus:text-muted hover:bg-transparent focus:bg-transparent';
