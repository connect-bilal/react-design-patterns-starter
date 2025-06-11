/**
 * Clamps a number within the inclusive range specified by the minimum and maximum values.
 *
 * @param value - The number to be clamped.
 * @param min - The lower bound of the range.
 * @param max - The upper bound of the range.
 * @returns The clamped value, which will be:
 * - `min` if `value` is less than `min`
 * - `max` if `value` is greater than `max`
 * - `value` itself if it is within the range `[min, max]`
 *
 * @example
 * ```typescript
 * clamp(5, 1, 10); // returns 5
 * clamp(-2, 0, 8); // returns 0
 * clamp(15, 0, 10); // returns 10
 * ```
 */
export const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);
