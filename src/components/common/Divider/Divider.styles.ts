const color = 'text-primary';

export const dividerStyles = {
  wrapper: `flex items-center w-full text-sm select-none ${color}`,

  line: {
    horizontal: `border-t w-full flex-shrink-0 h-px`,
  },

  variant: {
    solid: 'border-solid',
  },

  spacing: {
    horizontal: {
      sm: 'my-1',
      md: 'my-2',
      lg: 'my-4',
    },
  },

  thickness: {
    boldLine: 'border-2',
    boldText: 'font-semibold',
  },

  withChildren: {
    line: 'flex-1',
    text: 'whitespace-nowrap px-3',
  },

  withoutChildren: {
    lineFullWidth: 'w-full',
    lineFullHeight: 'h-full',
  },
};
