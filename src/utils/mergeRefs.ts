import type { Ref } from 'react';

/**
 * Merges multiple React refs into a single ref callback.
 *
 * This utility allows you to assign a value to multiple refs (either callback refs or ref objects)
 * at once, which is useful when you want to forward refs or combine refs from different sources.
 *
 * @typeParam T - The type of the ref value.
 * @param refs - An array of refs (either callback refs or ref objects) to be merged.
 * @returns A ref callback that assigns the given value to all provided refs.
 *
 * @example
 * const ref1 = useRef<HTMLDivElement>(null);
 * const ref2 = useRef<HTMLDivElement>(null);
 * const mergedRef = mergeRefs([ref1, ref2]);
 * <div ref={mergedRef} />
 */
export function mergeRefs<T>(refs: Array<Ref<T> | undefined>): Ref<T> {
  return value => {
    refs.forEach(ref => {
      if (!ref) {
        return;
      }
      if (typeof ref === 'function') {
        ref(value);
      } else if (typeof ref === 'object' && 'current' in ref) {
        (ref as React.RefObject<T | null>).current = value;
      }
    });
  };
}
