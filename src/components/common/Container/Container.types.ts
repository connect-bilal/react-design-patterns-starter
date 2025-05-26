export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  onBreakpointChange?: (width: number) => void; // optional callback
}

export const breakpoints = [
  { maxWidth: 639, label: 'sm' },
  { maxWidth: 767, label: 'md' },
  { maxWidth: 1023, label: 'lg' },
  { maxWidth: 1279, label: 'xl' },
];

export type MaxWidthLabel = (typeof breakpoints)[number]['label'] | 'xxl';
