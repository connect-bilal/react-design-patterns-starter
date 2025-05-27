export const base =
  'inline-flex items-center justify-center gap-2 rounded-md border-0 shadow-md transition-standard cursor-pointer';

export const sizes = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
};

export const variants = {
  primary:
    'bg-primary text-on-primary hover:opacity-hover focus:opacity-hover active:scale-95 active:opacity-active',
  success:
    'bg-success text-on-success hover:opacity-hover focus:opacity-hover active:scale-95 active:opacity-active',
  danger:
    'bg-danger text-on-danger hover:opacity-hover focus:opacity-hover active:scale-95 active:opacity-active',
  warning:
    'bg-warning text-on-warning hover:opacity-hover focus:opacity-hover active:scale-95 active:opacity-active',
  info: 'bg-info text-on-info hover:opacity-hover focus:opacity-hover active:scale-95 active:opacity-active',
};

export const fullWidth = 'w-full justify-center';

export const iconPositions = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

export const disabled = 'cursor-not-allowed opacity-disabled pointer-events-none';
export const loadingIcon = 'animate-spin inline-block align-middle text-current';
