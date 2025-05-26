import { forwardRef, memo } from 'react';

import { getIconComponent } from './Icon.helper';
import styles from './icon.module.css';
import { iconDefaultProps } from './Icon.types';
import type { IconProps } from './Icon.types';

const Icon = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      size = iconDefaultProps.size,
      variant = iconDefaultProps.variant,
      className = iconDefaultProps.className,
      icon,
      style,
      title,
      'aria-label': ariaLabel,
      'aria-hidden': ariaHidden = !ariaLabel,
      ...rest
    },
    ref,
  ) => {
    const classNames = [styles.icon, styles[`icon-${variant}`], styles[`icon-${size}`], className]
      .filter(Boolean)
      .join(' ');

    const IconComponent = (
      typeof icon === 'string' ? getIconComponent(icon) : icon
    ) as React.ElementType;

    if (!IconComponent) {
      return null;
    }
    const isHidden = ariaHidden ?? !ariaLabel;

    return (
      <IconComponent
        className={classNames}
        style={style}
        aria-label={ariaLabel}
        aria-hidden={isHidden}
        title={title}
        ref={ref}
        {...rest}
      ></IconComponent>
    );
  },
);

Icon.displayName = 'Icon';
export default memo(Icon);
