/**
 * Returns true if the code is executing on the client (browser) side.
 * Useful for avoiding SSR-related issues like accessing `window`, `document`, or `localStorage`.
 */
export const isClient = typeof window !== 'undefined';
