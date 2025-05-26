export const base =
  'inline-flex items-center justify-center gap-2 rounded-md border-none shadow-md transition cursor-pointer';

export const sizes = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-4 py-2',
  lg: 'text-lg px-5 py-3',
};

export const variants = {
  primary:
    'bg-blue-600 text-white hover:opacity-75 focus:opacity-75 active:scale-95 active:opacity-85',
  success:
    'bg-green-600 text-white hover:opacity-75 focus:opacity-75 active:scale-95 active:opacity-85',
  danger:
    'bg-red-600 text-white hover:opacity-75 focus:opacity-75 active:scale-95 active:opacity-85',
  warning:
    'bg-yellow-500 text-black hover:opacity-75 focus:opacity-75 active:scale-95 active:opacity-85',
  info: 'bg-teal-600 text-white hover:opacity-75 focus:opacity-75 active:scale-95 active:opacity-85',
};

export const fullWidth = 'w-full justify-center';

export const iconPositions = {
  left: 'flex-row',
  right: 'flex-row-reverse',
  top: 'flex-col',
  bottom: 'flex-col-reverse',
};

export const disabled = 'cursor-not-allowed opacity-60 pointer-events-none';

export const loadingIcon = 'animate-spin inline-block align-middle text-current';
