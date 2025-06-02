import clsx from 'clsx';
import { forwardRef, useRef, useState, useCallback, useMemo } from 'react';
import { RxCrossCircled } from 'react-icons/rx';

import { mergeRefs } from '../../../utils';
import Icon from '../Icon';
import Label from '../Label';

import { getValidationRules, generateIdFromLabel } from './Input.helper';
import {
  wrapper,
  inputContainer,
  input,
  icon,
  iconLeft,
  iconRight,
  withIconLeft,
  withIconRight,
  inputError,
  errorMessage,
  resetIcon,
} from './Input.styles';
import { inputDefaultProps, isValidInputType, allowIcons } from './Input.types';
import type { InputProps } from './Input.types';

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error,
    required = inputDefaultProps.required,
    type = inputDefaultProps.type,
    resettable = inputDefaultProps.resettable,
    id,
    iconStart,
    iconEnd,
    iconPosition = 'left',
    className,
    onChange,
    value,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const [touched, setTouched] = useState(false);

  // Determine safe input type fallback
  const inputType = isValidInputType(type) ? type : 'text';

  // Generate accessible ID
  const inputId = useMemo(
    () => id || (label ? generateIdFromLabel(label) : 'input-id'),
    [id, label],
  );

  // Memoized HTML validation rules (e.g., pattern, min, max)
  const normalizedValidationRules = useMemo(() => {
    const rules = getValidationRules(inputType);
    if (!rules) {
      return {};
    }
    const pattern = typeof rules.pattern === 'string' ? rules.pattern : rules.pattern?.source;
    return pattern ? { ...rules, pattern } : rules;
  }, [inputType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
    setTouched(true);
  };

  const handleBlur = () => setIsFocused(false);

  const handleReset = useCallback(() => {
    setInputValue('');
    if (inputRef.current) {
      const event = new Event('input', { bubbles: true });
      inputRef.current.dispatchEvent(event);
      inputRef.current.focus();
      setTouched(false);
    }
  }, []);

  // Computed flags
  const showIcon = allowIcons(inputType) && (iconStart || iconEnd);
  const shouldShowReset = resettable && !!inputValue && isFocused;
  const showError = (touched && !!inputRef.current?.value.trim()) || !!error;
  let iconPaddingClass = '';

  if (iconPosition === 'left') {
    iconPaddingClass = withIconLeft;
  } else if (iconPosition === 'right') {
    iconPaddingClass = withIconRight;
  }

  return (
    <div className={clsx(wrapper, className)}>
      {label && (
        <Label htmlFor={inputId} required={required}>
          {label}
        </Label>
      )}

      <div className={clsx(inputContainer, error && inputError)}>
        {iconStart && iconPosition === 'left' && (
          <Icon className={clsx(icon, iconLeft)} icon={iconStart} />
        )}

        <input
          id={inputId}
          ref={mergeRefs([inputRef, ref])}
          type={inputType}
          required={required}
          className={clsx(input, showIcon && iconPaddingClass)}
          value={inputValue}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
          {...normalizedValidationRules}
          {...rest}
        />

        {shouldShowReset && (
          <Icon
            icon={RxCrossCircled}
            className={clsx(resetIcon)}
            onMouseDown={e => {
              e.preventDefault();
              handleReset();
            }}
            aria-label='Reset input'
          />
        )}

        {iconEnd && iconPosition === 'right' && (
          <Icon className={clsx(icon, iconRight)} icon={iconEnd} />
        )}
      </div>

      {<p className={errorMessage}>{showError && error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
