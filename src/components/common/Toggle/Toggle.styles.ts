import { disabledStates, transitionStates } from '@tokens';

export const baseStyles = {
  toggle: `inline-flex items-center cursor-pointer select-none transition-opacity ${transitionStates}`,
  toggleDisabled: disabledStates,

  checkbox: `w-4 h-4 border-2 rounded-sm bg-white relative flex-shrink-0 transition-colors ${transitionStates} border-muted`,
  checkboxChecked: `border-primary`,

  checkboxCheckmark: `
    absolute
    w-1.5
    h-3
    top-[-0.22rem]  
    border-2
    border-primary
    border-t-0
    border-l-0
    rotate-33
    origin-bottom-left
    `,

  switch: `relative w-9 h-5 bg-muted rounded-lg transition-colors ${transitionStates}`,
  switchChecked: `bg-primary`,

  switchThumb: `absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-all ${transitionStates}`,
  switchCheckedThumb: `left-5`,

  labelText: `ml-2 inline-flex items-center text-sm mt-0.5`,
  labelLeft: `mr-2 mt-0.5`,
};
