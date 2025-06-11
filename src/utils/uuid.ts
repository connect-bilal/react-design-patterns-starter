/**
 * Generates a random string ID.
 * @param length The length of the ID (default is 9)
 * @returns A random string of given length
 */
export const uuid = (length: number = 9): string =>
  Math.random()
    .toString(36)
    .slice(2, 2 + length);
