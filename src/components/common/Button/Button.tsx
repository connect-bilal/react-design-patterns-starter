import { forwardRef, memo } from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import type { ButtonProps } from './Button.types';
import { buttonDefaultProps } from './Button.types';
import { FaSpinner } from 'react-icons/fa';
import styles from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = buttonDefaultProps.variant,
      children = buttonDefaultProps.children,
      size = buttonDefaultProps.size,
      iconSize = buttonDefaultProps.iconSize,
      fullWidth = buttonDefaultProps.fullWidth,
      iconPosition = buttonDefaultProps.iconPosition,
      disabled = buttonDefaultProps.disabled,
      isLoading = buttonDefaultProps.isLoading,
      className = buttonDefaultProps.className,
      icon,
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
        {icon && !isLoading && <Icon icon={icon} size={iconSize} variant="button" />}
        {isLoading && (
          <Icon icon={FaSpinner} size={size} variant={variant} className={styles.loadingIcon} />
        )}{' '}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default memo(Button);
