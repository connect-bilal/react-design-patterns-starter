import clsx from 'clsx';
import React, { memo, useMemo } from 'react';

import { useWindowWidth } from '../../../hooks/useWindowWidth';

import { getBreakpointLabel } from './Container.helper';
import * as styles from './Container.styles';
import type { ContainerProps, MaxWidthLabel } from './Container.types';

const Container: React.FC<ContainerProps> = ({ children, className, onBreakpointChange }) => {
  const windowWidth = useWindowWidth(onBreakpointChange);

  // Determine the responsive max width label based on current window width
  const responsiveMaxWidth = useMemo<MaxWidthLabel>(() => {
    if (windowWidth === 0) {
      return 'sm';
    }
    return getBreakpointLabel(windowWidth);
  }, [windowWidth]);

  const containerClass = clsx(
    styles.base,
    styles.maxWidths[responsiveMaxWidth as keyof typeof styles.maxWidths],
    className,
  );

  return <div className={containerClass}>{children}</div>;
};

Container.displayName = 'Container';
export default memo(Container);
