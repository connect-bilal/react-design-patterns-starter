import clsx from 'clsx';
import { forwardRef } from 'react';

import { dividerStyles } from './Divider.styles';
import { dividerDefaultProps, type DividerProps } from './Divider.types';

const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      orientation = dividerDefaultProps.orientation,
      variant = dividerDefaultProps.variant,
      spacing = dividerDefaultProps.spacing,
      bold = dividerDefaultProps.bold,
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const hasChildren = Boolean(children);

    const wrapperClass = clsx(
      dividerStyles.wrapper,
      dividerStyles.spacing.horizontal[spacing],
      bold && dividerStyles.thickness.boldText,
      className,
    );

    const lineClass = clsx(
      dividerStyles.line.horizontal,
      dividerStyles.variant[variant],
      bold ? dividerStyles.thickness.boldLine : 'border',
      hasChildren ? dividerStyles.withChildren.line : dividerStyles.withoutChildren.lineFullWidth,
    );

    return (
      <div
        ref={ref}
        className={wrapperClass}
        role='separator'
        aria-orientation={orientation}
        {...rest}
      >
        {hasChildren ? (
          <>
            <span className={lineClass} />
            <span className={dividerStyles.withChildren.text}>{children}</span>
            <span className={lineClass} />
          </>
        ) : (
          <span className={lineClass} />
        )}
      </div>
    );
  },
);

Divider.displayName = 'Divider';

export default Divider;
