import { mergeRefs } from '@utils';
import clsx from 'clsx';
import { forwardRef, memo } from 'react';

import { getIconComponent } from './Icon.helper';
import * as styles from './Icon.styles';
import { iconDefaultProps, type IconProps } from './Icon.types';

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = iconDefaultProps.size,
      variant = iconDefaultProps.variant,
      className = iconDefaultProps.className,
      icon,
      style,
      title,
      onClick,
      onKeyDown,
      onMouseDown,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden = !ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const IconComponent = (
      typeof icon === 'string' ? getIconComponent(icon) : icon
    ) as React.ElementType;
    if (!IconComponent) {
      return null;
    }

    const isHidden = ariaHidden ?? !ariaLabel;
    const variantClass = styles.iconVariantClasses[variant];
    const sizeClass = styles.iconSizeClasses[size];
    const iconClasses = clsx(styles.iconBaseClasses, variantClass, sizeClass, className);

    return (
      <IconComponent
        className={iconClasses}
        style={style}
        aria-label={ariaLabel}
        aria-hidden={isHidden}
        title={title}
        onClick={onClick}
        onKeyDown={onKeyDown}
        onMouseDown={onMouseDown}
        ref={mergeRefs([ref])}
        {...rest}
      />
    );
  },
);

Icon.displayName = 'Icon';
export default memo(Icon);
