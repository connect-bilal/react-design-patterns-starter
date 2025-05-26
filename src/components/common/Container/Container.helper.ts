import { breakpoints } from './Container.types';
import type { MaxWidthLabel } from './Container.types';

export const getBreakpointLabel = (width: number): MaxWidthLabel => {
  for (const bp of breakpoints) {
    if (width <= bp.maxWidth) {
      return bp.label;
    }
  }
  return 'xxl';
};
