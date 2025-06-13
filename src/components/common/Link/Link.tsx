import clsx from 'clsx';
import { memo } from 'react';

import { linkBase, linkVariants, linkSizes, linkDisabled, linkHover } from './Link.styles';
import { linkDefaultProps, type LinkProps } from './Link.types';

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

  const classes = clsx(
    linkBase,
    linkVariants[variant],
    linkSizes[size],
    disabled && linkDisabled,
    disabled && linkHover,
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
