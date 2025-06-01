import type { Ref } from 'react';

/**
 * Capitalize the first letter of a string
 */
export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

// Generic type guard to check if a value is in a readonly string array
export const isValidLiteral = <T extends readonly string[]>(
  arr: T,
  value: string,
): value is T[number] => (arr as readonly string[]).includes(value);

// Utility function to merge multiple React refs into a single ref callback
export function mergeRefs<T>(refs: Array<Ref<T> | undefined>): Ref<T> {
  return value => {
    refs.forEach(ref => {
      if (!ref) {return};
      if (typeof ref === 'function') {
        ref(value);
      } else if (typeof ref === 'object' && 'current' in ref) {
        (ref as React.RefObject<T | null>).current = value;
      }
    });
  };
}
