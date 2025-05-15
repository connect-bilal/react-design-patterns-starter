import { forwardRef, memo } from 'react';
import classNames from 'classnames';
import styles from './Text.module.css';
import type { TextProps } from './Text.types';

const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = 'p',
      children = '',
      className = '',
      color = '#000',
      textAlign = 'left',
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
