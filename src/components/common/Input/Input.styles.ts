export const wrapper = `
  flex flex-col
  font-base text-md text-text-primary
  w-full max-w-[360px]
`;

export const inputContainer = `
  relative flex items-center
  border border-muted rounded-sm
  px-2 py-3
  bg-surface
  transition-all duration-300 ease-base
  focus-within:border-primary
  focus-within:shadow-[0_0_0_2px_rgba(0,123,255,0.2)]
`;

export const input = `
  flex-1 border border-transparent outline-none
  text-md font-regular text-text-primary
  bg-transparent px-0 py-0 box-border  
`;

export const icon = `
  absolute text-muted pointer-events-none
`;

export const iconLeft = `left-[10px]`;
export const iconRight = `right-[10px]`;

export const withIconLeft = `pl-8`;
export const withIconRight = `pr-6`;

export const inputError = `border-danger`;
export const errorMessage = `
  mt-1 text-md text-danger select-none min-h-[1.75rem]
`;

export const resetIcon = `cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-150`;
