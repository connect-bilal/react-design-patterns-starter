import { useState, forwardRef } from 'react';
import classnames from 'classnames';
import Label from '../Label';
import { toggleDefaultProps } from './Toggle.types';
import type { ToggleProps } from './Toggle.types';
import styles from './Toggle.module.css';

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      id,
      checked = toggleDefaultProps.checked,
      disabled = toggleDefaultProps.disabled,
      variant = toggleDefaultProps.variant,
      labelPosition = toggleDefaultProps.labelPosition,
      defaultChecked,
      onChange,
      label,
      className,
      style,
      'aria-label': ariaLabel = '',
      ...rest
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = typeof checked === 'boolean';
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;
      if (!isControlled) setInternalChecked(e.target.checked);
      onChange?.(e.target.checked, e);
    };

    const accessibleLabel = label || ariaLabel;
    const inputId =
      id ?? (accessibleLabel ? `toggle-${Math.random().toString(36).slice(2, 7)}` : undefined);

    const renderVisual =
      variant === 'checkbox' ? (
        <span
          className={classnames(styles.checkbox, { [styles.checkboxChecked]: isChecked })}
          aria-hidden="true"
        />
      ) : (
        <span
          className={classnames(styles.switch, { [styles.switchChecked]: isChecked })}
          aria-hidden="true"
        >
          <span
            className={classnames(styles.switchThumb, { [styles.switchCheckedThumb]: isChecked })}
          />
        </span>
      );

    return (
      <label
        className={classnames(styles.toggle, { [styles.toggleDisabled]: disabled }, className)}
        style={style}
        aria-disabled={disabled}
      >
        {label && labelPosition === 'left' && (
          <Label
            size="md"
            className={classnames(styles.labelText, styles.labelLeft)}
            required={false}
          >
            {label}
          </Label>
        )}
        <input
          id={inputId}
          type="checkbox"
          checked={isChecked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          aria-label={accessibleLabel}
          ref={ref}
          {...rest}
          style={{ display: 'none' }}
        />
        {renderVisual}
        {label && labelPosition === 'right' && (
          <Label size="md" className={styles.labelText} required={false}>
            {label}
          </Label>
        )}
      </label>
    );
  },
);

Toggle.displayName = 'Toggle';
export default Toggle;
