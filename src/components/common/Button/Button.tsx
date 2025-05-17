import { forwardRef, memo } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', children = 'Button', size = 'md', disabled, className, ...rest },
    ref,
  ) => {
    const btnClass = classNames(styles.button, styles[variant], styles[size], className);

    return (
      <button ref={ref} className={btnClass} disabled={disabled} {...rest}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default memo(Button);
