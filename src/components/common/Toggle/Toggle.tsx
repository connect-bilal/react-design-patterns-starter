import clsx from 'clsx';
import { useState, forwardRef } from 'react';

import Label from '../Label';

import { baseStyles } from './Toggle.styles';
import type { ToggleProps } from './Toggle.types';
import { toggleDefaultProps } from './Toggle.types';

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
    // Determine if the component is controlled or uncontrolled
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = typeof checked === 'boolean';

    // Final value of the checkbox
    const isChecked = isControlled ? checked : internalChecked;

    // Handle change event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return;
      }

      const newValue = e.target.checked;

      // Update internal state if uncontrolled
      if (!isControlled) {
        setInternalChecked(newValue);
      }

      // Call external onChange handler
      onChange?.(newValue, e);
    };

    // Ensure accessible labeling
    const accessibleLabel = label || ariaLabel;

    // Auto-generate unique ID if none is provided
    const inputId = id ?? `toggle-${Math.random().toString(36).slice(2, 7)}`;

    // Visual rendering for checkbox or switch variant
    const renderVisual =
      variant === 'checkbox' ? (
        <span
          className={clsx(baseStyles.checkbox, isChecked && baseStyles.checkboxChecked)}
          aria-hidden='true'
        >
          {isChecked && <span className={baseStyles.checkboxCheckmark} />}
        </span>
      ) : (
        <span
          className={clsx(baseStyles.switch, isChecked && baseStyles.switchChecked)}
          aria-hidden='true'
        >
          <span
            className={clsx(baseStyles.switchThumb, isChecked && baseStyles.switchCheckedThumb)}
          />
        </span>
      );

    return (
      <label
        className={clsx(baseStyles.toggle, disabled && baseStyles.toggleDisabled, className)}
        style={style}
        aria-disabled={disabled}
      >
        {/* Render left-positioned label if provided */}
        {label && labelPosition === 'left' && (
          <Label
            htmlFor={inputId}
            size='md'
            className={clsx(baseStyles.labelText, baseStyles.labelLeft)}
            required={false}
          >
            {label}
          </Label>
        )}

        {/* Hidden native checkbox for accessibility and form integration */}
        <input
          id={inputId}
          type='checkbox'
          checked={isChecked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          disabled={disabled}
          aria-label={accessibleLabel}
          ref={ref}
          {...rest}
          className='sr-only'
        />

        {/* Custom UI rendering */}
        {renderVisual}

        {/* Render right-positioned label if provided */}
        {label && labelPosition === 'right' && (
          <Label size='md' className={baseStyles.labelText} required={false}>
            {label}
          </Label>
        )}
      </label>
    );
  },
);

Toggle.displayName = 'Toggle';
export default Toggle;
