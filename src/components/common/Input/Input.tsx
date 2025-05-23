import { forwardRef } from 'react';
import Label from '../Label';
import { inputDefaultProps, isValidInputType } from './Input.types';
import { getValidationRules, generateIdFromLabel } from './Input.helper';
import type { InputProps } from './Input.types';
import styles from './Input.module.css';
import Icon from '../Icon';

function classNames(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error,
    required = inputDefaultProps.required,
    type = inputDefaultProps.type,
    id,
    iconStart,
    iconEnd,
    iconPosition = 'left',
    className,
    ...rest
  } = props;
  const inputType = isValidInputType(type) ? type : 'text';
  const inputId = id || (label ? generateIdFromLabel(label) : 'input-id');

  const validationRules = getValidationRules(inputType);

  const statusClass = error ? styles.inputError : '';
  const normalizedValidationRules = validationRules
    ? {
        ...validationRules,
        ...(validationRules.pattern instanceof RegExp
          ? { pattern: validationRules.pattern.source }
          : {}),
      }
    : {};

  return (
    <div className={classNames(styles.wrapper, className)}>
      {label && (
        <Label htmlFor={inputId} required={required} className={styles.label}>
          {label}
        </Label>
      )}

      <div
        className={classNames(
          styles.inputContainer,
          statusClass,
          iconStart || iconEnd ? styles.withIcon : '',
          iconPosition === 'right' ? styles.iconRight : styles.iconLeft,
        )}
      >
        {iconStart && <Icon className={styles.icon} icon={iconStart} />}

        <input
          id={inputId}
          ref={ref}
          type={inputType}
          required={required}
          className={styles.input}
          {...normalizedValidationRules}
          {...rest}
        />

        {iconEnd && <Icon className={styles.icon} icon={iconEnd} />}
      </div>

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
