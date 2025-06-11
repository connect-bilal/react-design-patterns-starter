// Generic type guard to check if a value is in a readonly string array
/**
 * Checks if a given string value is a valid member of a provided readonly string array literal.
 *
 * @typeParam T - A readonly array of string literals.
 * @param arr - The array of valid string literals.
 * @param value - The string value to check for validity.
 * @returns `true` if the value is included in the array, otherwise `false`.
 *
 * @example
 * const colors = ['red', 'green', 'blue'] as const;
 * isValidLiteral(colors, 'red'); // true
 * isValidLiteral(colors, 'yellow'); // false
 */
export const isValidLiteral = <T extends readonly string[]>(
  arr: T,
  value: string,
): value is T[number] => (arr as readonly string[]).includes(value);
