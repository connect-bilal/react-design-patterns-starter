import classNames from 'classnames';
import React, { useEffect, useState, memo } from 'react';

import styles from './Container.module.css';
import type { ContainerProps } from './Container.types';

const Container: React.FC<ContainerProps> = ({ children, className, onBreakpointChange }) => {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (onBreakpointChange) onBreakpointChange(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // call once on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [onBreakpointChange]);

  // You can add logic here to conditionally adjust maxWidth or class based on windowWidth
  // Example: If windowWidth < 600, force maxWidth to 'sm'
  const responsiveMaxWidth = (() => {
    if (windowWidth < 640) return 'sm';
    if (windowWidth < 768) return 'md';
    if (windowWidth < 1024) return 'lg';
    if (windowWidth < 1280) return 'xl';
    return 'xxl';
  })();

  const containerClass = classNames(styles.container, styles[responsiveMaxWidth], className);

  return <div className={containerClass}>{children}</div>;
};

Container.displayName = 'Container';
export default memo(Container);
