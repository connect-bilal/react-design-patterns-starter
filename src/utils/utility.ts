/**
 * Capitalize the first letter of a string
 */
export const capitalize = (text: string): string => text.charAt(0).toUpperCase() + text.slice(1);

// Generic type guard to check if a value is in a readonly string array
export const isValidLiteral = <T extends readonly string[]>(
  arr: T,
  value: string,
): value is T[number] => (arr as readonly string[]).includes(value);
