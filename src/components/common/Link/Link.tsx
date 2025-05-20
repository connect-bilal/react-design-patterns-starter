import { memo } from 'react';
import classNames from 'classnames';
import styles from './Link.module.css';
import { linkDefaultProps } from './Link.types';
import type { LinkProps } from './Link.types';

const Link = ({
  children = linkDefaultProps.children,
  href = linkDefaultProps.href,
  target = linkDefaultProps.target,
  variant = linkDefaultProps.variant,
  external = linkDefaultProps.external,
  size = linkDefaultProps.size,
  disabled = linkDefaultProps.disabled,
  style = linkDefaultProps.style,
  ariaLabel,
  className,
  rel,
  onClick,
  ...rest
}: LinkProps) => {
  const computedRel = rel ?? (external && target === '_blank' ? 'noopener noreferrer' : undefined);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const classes = classNames(
    styles.link,
    styles[`link_${variant}`],
    styles[`link_${size}`],
    disabled && styles.link_disabled,
    className,
  );

  return (
    <a
      href={disabled ? undefined : href}
      target={target}
      rel={computedRel}
      aria-label={ariaLabel || undefined}
      aria-disabled={disabled || undefined}
      onClick={handleClick}
      className={classes}
      style={style}
      tabIndex={disabled ? -1 : undefined}
      {...rest}
    >
      {children}
    </a>
  );
};

Link.displayName = 'Link';
export default memo(Link);
