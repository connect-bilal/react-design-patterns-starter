import { forwardRef, memo } from 'react';
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

    const IconComponent = icon;
    const isHidden = ariaHidden ?? !ariaLabel;

    return (
      <IconComponent
        title={title}
        className={classNames}
        style={style}
        aria-label={ariaLabel}
        aria-hidden={isHidden}
        {...rest}
        {...(typeof icon === 'string' ? { ref } : {})}
      />
    );
  },
);

Icon.displayName = 'Icon';
export default memo(Icon);
