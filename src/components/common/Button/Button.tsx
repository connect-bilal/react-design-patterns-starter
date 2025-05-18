import { forwardRef, memo } from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';
import type { ButtonProps } from './Button.types';
import { buttonDefaultProps } from './Button.types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = buttonDefaultProps.variant,
      children = buttonDefaultProps.children,
      size = buttonDefaultProps.size,
      fullWidth = buttonDefaultProps.fullWidth,
      icon = buttonDefaultProps.icon,
      iconPosition = buttonDefaultProps.iconPosition,
      disabled = buttonDefaultProps.disabled,
      isLoading = buttonDefaultProps.isLoading,
      className = buttonDefaultProps.className,
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
