import { Text } from '@components';
import clsx from 'clsx';
import { useState, useEffect, useRef, useCallback, type FC, type JSX } from 'react';
import { FaCheckCircle, FaInfoCircle, FaExclamationCircle } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';

import {
  alertBase,
  alertVariantsStyle,
  closeButton,
  messageText,
  alertAnimationHidden,
  alertAnimationVisible,
} from './Alert.styles';
import { type AlertProps, AlertDefaultProps } from './Alert.types';

// Map each alert variant to its corresponding icon
const iconMap = {
  info: FaInfoCircle,
  success: FaCheckCircle,
  warning: FaExclamationCircle,
  error: FaExclamationCircle,
};

// Map each alert variant to its corresponding icon element (with styling)
const variantIcons: Record<NonNullable<AlertProps['variant']>, JSX.Element> = Object.fromEntries(
  Object.entries(iconMap).map(([key, Icon]) => [key, <Icon className='mt-0.5 text-lg' />]),
) as Record<NonNullable<AlertProps['variant']>, JSX.Element>;

const Alert: FC<AlertProps> = ({
  message,
  className,
  variant = AlertDefaultProps.variant,
  duration = AlertDefaultProps.duration,
  closable = AlertDefaultProps.closable,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Handles closing the alert (animation + unmount)
  const handleClose = useCallback(() => {
    setVisible(false);
    closeTimeout.current = setTimeout(() => {
      onClose?.();
      closeTimeout.current = null;
    }, 300);
  }, [onClose]);

  // Auto-close the alert after `duration` seconds
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(handleClose, 1000 * duration);
      return () => clearTimeout(timer);
    }
  }, [duration, handleClose]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout.current) {
        clearTimeout(closeTimeout.current);
      }
    };
  }, []);

  // Don't render if visible is false
  if (!visible) {
    return null;
  }

  return (
    <div
      role='alert'
      className={clsx(
        alertBase,
        alertVariantsStyle[variant],
        visible ? alertAnimationVisible : alertAnimationHidden,
        className,
      )}
    >
      <span>{variantIcons[variant]}</span>
      <Text className={messageText}>{message}</Text>
      {closable && (
        <button className={closeButton} onClick={handleClose} aria-label='Close alert'>
          <GrClose />
        </button>
      )}
    </div>
  );
};

Alert.displayName = 'Alert';
export default Alert;
