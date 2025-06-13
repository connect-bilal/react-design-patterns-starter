/**
 * Truncates a given text to a specified character limit and appends an ellipsis ("…") if the text exceeds the limit.
 * Optionally, returns an object with the truncated text and a flag indicating if truncation occurred.
 *
 * @param text - The input string to be truncated.
 * @param limit - The maximum number of characters allowed before truncation. Defaults to 100.
 * @param expand - If true, returns an object with the truncated text and truncation status; otherwise, returns a string.
 * @returns If expand is false, returns the truncated string (with ellipsis if truncated). If expand is true, returns an object: { displayText, isTruncated }.
 *
 * @example
 * truncateText("Hello world", 5); // Returns "Hello…"
 * truncateText("Hello world", 5, true); // Returns { displayText: "Hello", isTruncated: true }
 */
export interface TruncateResult {
  displayText: string;
  isTruncated: boolean;
}

export const truncateText = (
  text: string,
  limit: number = 100,
  expanded: boolean = false,
): TruncateResult => {
  const isTruncated = text.length > limit;
  const displayText = expanded || !isTruncated ? text : `${text.slice(0, limit).trimEnd()}…`;

  return { displayText, isTruncated };
};
