import clsx from 'clsx';
import { memo } from 'react';

import { labelBase, labelSizes, labelStates, requiredClass } from './Label.styles';
import { labelDefaultProps, type LabelProps } from './Label.types';

const Label = ({
  children = labelDefaultProps.children,
  htmlFor = labelDefaultProps.htmlFor,
  required = labelDefaultProps.required,
  size = labelDefaultProps.size,
  state = labelDefaultProps.state,
  className = labelDefaultProps.className,
  ...rest
}: LabelProps) => {
  const sizeClass = labelSizes[size] || labelSizes.md;
  const stateClass = labelStates[state] || labelStates.default;

  return (
    <label
      htmlFor={htmlFor}
      className={clsx(labelBase, sizeClass, stateClass, className)}
      {...rest}
    >
      {children}
      {required && <span className={requiredClass}>*</span>}
    </label>
  );
};

Label.displayName = 'Label';
export default memo(Label);
