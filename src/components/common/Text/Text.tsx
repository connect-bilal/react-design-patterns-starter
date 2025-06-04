import clsx from 'clsx';
import { forwardRef, memo } from 'react';

import { textVariants } from './Text.styles';
import { textDefaultProps } from './Text.types';
import type { TextProps } from './Text.types';

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = textDefaultProps.as,
      textAlign = textDefaultProps.textAlign,
      color,
      className,
      children,
      style,
      ...rest
    },
    ref,
  ) => {
    const tagClass = typeof Component === 'string' && textVariants[Component]
      ? textVariants[Component]
      : '';

    return (
      <Component
        // @ts-expect-error ref type depends on 'as'
        ref={ref}
        style={{ ...style, color, textAlign }}
        className={clsx(className, tagClass)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
export default memo(Text);
