import { memo } from 'react';
import classNames from 'classnames';
import styles from './Label.module.css';
import type { LabelProps } from './Label.types';

const Label = ({
  children,
  htmlFor,
  required = false,
  size = 'md',
  state = 'default',
  className,
  ...rest
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames(styles.label, styles[size], styles[state], className)}
      {...rest}
    >
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  );
};

Label.displayName = 'Label';
export default memo(Label);
