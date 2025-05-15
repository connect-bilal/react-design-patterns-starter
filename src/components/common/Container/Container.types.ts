export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  onBreakpointChange?: (width: number) => void; // optional callback
}
