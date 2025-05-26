import classNames from 'classnames';
import { forwardRef, memo } from 'react';

import styles from './Text.module.css';
import { textDefaultProps } from './Text.types';
import type { TextProps } from './Text.types';

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = textDefaultProps.as,
      color = 'var(--color-text-primary)',
      textAlign = 'left',
      className,
      children,
      style,
      ...rest
    },
    ref,
  ) => {
    const tagClass = typeof Component === 'string' && styles[Component] ? styles[Component] : '';

    return (
      <Component
        // @ts-expect-error ref type depends on 'as'
        ref={ref}
        style={{ ...style, color, textAlign }}
        className={classNames(tagClass, className)}
        {...rest}
      >
        {children}
      </Component>
    );
  },
);

Text.displayName = 'Text';
export default memo(Text);
