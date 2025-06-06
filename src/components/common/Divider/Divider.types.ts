export type DividerOrientation = 'horizontal';
export type DividerVariant = 'solid';
export type DividerSpacing = 'sm' | 'md' | 'lg';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: DividerOrientation;
  variant?: DividerVariant;
  spacing?: DividerSpacing;
  bold?: boolean;
  children?: React.ReactNode;
}

export const dividerOrientations = ['horizontal'] as const;
export const dividerVariants = ['solid'] as const;
export const dividerSpacings = ['sm', 'md', 'lg'] as const;

export const dividerDefaultProps: Required<
  Pick<DividerProps, 'orientation' | 'variant' | 'spacing' | 'bold'>
> = {
  orientation: 'horizontal',
  variant: 'solid',
  spacing: 'md',
  bold: false,
};
