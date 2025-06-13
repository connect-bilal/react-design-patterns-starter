import { Icon, Text } from '@components';
import clsx from 'clsx';
import { forwardRef, memo } from 'react';
import { FaSpinner } from 'react-icons/fa';

import * as styles from './Button.styles';
import { buttonDefaultProps, type ButtonProps } from './Button.types';

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
        [styles.disabled]: disabled || isLoading,
      },
      className,
    );

    return (
      <button ref={ref} className={btnClass} disabled={disabled} {...rest}>
        {icon && !isLoading && <Icon icon={icon} size={iconSize} variant='button' />}
        {isLoading && (
          <Icon icon={FaSpinner} size={size} variant='button' className={styles.loadingIcon} />
        )}{' '}
        <Text className={clsx(`text-on-${variant}`)}>{children}</Text>
      </button>
    );
  },
);

Button.displayName = 'Button';
export default memo(Button);
