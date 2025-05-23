import type { InputType } from './Input.types';

export const generateIdFromLabel = (label: string): string =>
  label
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');

type ValidationRule = {
  pattern?: RegExp;
  min?: number;
  max?: number;
  minLength?: number;
  message: string;
} | null;

const validationRulesMap: Record<InputType, ValidationRule> = {
  color: { pattern: /^#([0-9A-Fa-f]{3}){1,2}$/, message: 'Please enter a valid hex color.' },
  date: { message: 'Please enter a valid date.' },
  'datetime-local': { message: 'Please enter a valid date and time.' },
  email: { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' },
  file: { message: 'Please select a valid file.' },
  image: { message: 'Please select a valid image file.' },
  month: { message: 'Please enter a valid month.' },
  number: { min: 0, max: 100, message: 'Please enter a valid number.' },
  password: { minLength: 6, message: 'Password must be at least 6 characters.' },
  range: { min: 0, max: 100, message: 'Please enter a valid number.' },
  search: { message: 'Please enter a valid search query.' },
  submit: null,
  reset: null,
  tel: { pattern: /^[0-9()+-\s]*$/, message: 'Please enter a valid phone number.' },
  text: { message: 'Please enter a valid text.' },
  time: { message: 'Please enter a valid time.' },
  url: {
    pattern:
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?$/,
    message: 'Please enter a valid URL.',
  },
  week: { message: 'Please enter a valid week.' },
};

export function getValidationRules(type: InputType): ValidationRule {
  return validationRulesMap[type] ?? null;
}

export function validateInput(
  value: string,
  rules: ValidationRule,
  required: boolean,
): string | null {
  if (required && (!value || value.trim() === '')) {
    return 'This field is required.';
  }
  if (!value || !rules) return null;

  if (rules.pattern && !rules.pattern.test(value)) return rules.message;
  if (rules.minLength !== undefined && value.length < rules.minLength) return rules.message;

  const numericValue = Number(value);
  if (!isNaN(numericValue)) {
    if (rules.min !== undefined && numericValue < rules.min) return rules.message;
    if (rules.max !== undefined && numericValue > rules.max) return rules.message;
  }

  return null;
}
