import { forwardRef, memo } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      children = 'Button',
      size = 'md',
      disabled,
      isLoading = false,
      className,
      icon,
      iconPosition = 'left',
      fullWidth,
      ...rest
    },
    ref,
  ) => {
    const btnClass = classNames(
      styles.button,
      styles[variant],
      styles[size],
      styles[`icon-${iconPosition}`],
      { [styles.fullWidth]: fullWidth },
      className,
    );

    return (
      <button ref={ref} className={btnClass} disabled={disabled} {...rest}>
        {isLoading ? (
          <span className={styles.spinner} />
        ) : (
          icon && <span className={styles.icon}>{icon}</span>
        )}{' '}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default memo(Button);
