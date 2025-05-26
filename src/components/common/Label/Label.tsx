import classNames from 'classnames';
import { memo } from 'react';

import styles from './Label.module.css';
import { labelDefaultProps } from './Label.types';
import type { LabelProps } from './Label.types';

const Label = ({
  children = labelDefaultProps.children,
  htmlFor = labelDefaultProps.htmlFor,
  required = labelDefaultProps.required,
  size = labelDefaultProps.size,
  state = labelDefaultProps.state,
  className = labelDefaultProps.className,
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
