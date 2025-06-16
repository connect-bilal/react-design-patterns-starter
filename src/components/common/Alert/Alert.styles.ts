export const alertBase =
  'flex items-center gap-3 px-4 py-2 rounded-md absolute left-1/2 top-2 transform -translate-x-1/2 z-50 shadow-md text-white';

export const alertVariantsStyle = {
  success: 'bg-success border border-success',
  error: 'bg-danger border border-danger',
  warning: 'bg-warning border border-warning',
  info: 'bg-info border border-info ',
};

export const messageText = 'break-words whitespace-pre-wrap flex-1 text-white';

export const closeButton =
  'ml-4 text-lg leading-none text-white hover:text-white cursor-pointer w-auto';

export const alertAnimationHidden =
  'opacity-0 -translate-y-4 scale-95 pointer-events-none transition-all duration-500 ease-in-out';

export const alertAnimationVisible =
  'opacity-100 translate-y-0 scale-100 transition-all duration-500 ease-in-out';
