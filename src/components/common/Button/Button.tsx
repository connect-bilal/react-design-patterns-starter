import { forwardRef, memo } from 'react';
import { FaSpinner } from 'react-icons/fa';
import clsx from 'clsx';
import Icon from '../Icon';
import type { ButtonProps } from './Button.types';
import { buttonDefaultProps } from './Button.types';
import * as styles from './style';

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
    const btnClass = clsx(
      styles.base,
      styles.variants[variant],
      styles.sizes[size],
      styles.iconPositions[iconPosition],
      {
        [styles.fullWidth]: fullWidth,
        [styles.disabled]: disabled,
      },
      className,
    );

    return (
      <button ref={ref} className={btnClass} disabled={disabled} {...rest}>
        {icon && !isLoading && <Icon icon={icon} size={iconSize} variant="button" />}
        {isLoading && (
          <Icon icon={FaSpinner} size={size} variant="button" className={styles.loadingIcon} />
        )}{' '}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
export default memo(Button);
