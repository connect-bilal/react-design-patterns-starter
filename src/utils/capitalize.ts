/**
 * Capitalizes the first character of the given string.
 * Returns the original string if it's empty.
 * @param text - The string to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (text: string): string =>
  text.length === 0 ? text : text[0].toUpperCase() + text.slice(1);
