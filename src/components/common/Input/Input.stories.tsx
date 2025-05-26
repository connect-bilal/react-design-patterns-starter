import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';

import Input from './Input';
import { getValidationRules, validateInput } from './Input.helper';
import { inputDefaultProps } from './Input.types';
import { InputTypes } from './Input.types';
import type { InputProps } from './Input.types';

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Input` component supports all standard HTML input types with validation and styling options.',
      },
    },
  },
  argTypes: {
    type: {
      description: 'Specifies the type of input.',
      control: { type: 'select' },
      options: InputTypes,
      table: {
        type: { summary: InputTypes.join(' | ') },
        defaultValue: { summary: inputDefaultProps.type },
      },
    },
    label: { description: 'Label text for the input.', control: 'text' },
    error: { description: 'Error message to display below the input.', control: 'text' },
    required: {
      description: 'Marks the input as required.',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    className: { description: 'Custom CSS class for the input wrapper.', control: 'text' },
    min: {
      description: 'Minimum value.',
      control: 'text',
      table: { type: { summary: 'string | number' } },
    },
    max: {
      description: 'Maximum value.',
      control: 'text',
      table: { type: { summary: 'string | number' } },
    },
    step: {
      description: 'Step increment.',
      control: 'number',
      table: { type: { summary: 'number' } },
    },
    iconStart: { description: 'Icon at start.', control: false },
    iconEnd: { description: 'Icon at end.', control: false },
    iconPosition: {
      description: 'Position of the icon.',
      control: { type: 'radio' },
      options: ['left', 'right'],
      table: { defaultValue: { summary: 'left' } },
    },
    value: { description: 'Value of the input.', control: 'text' },

    onChange: { description: 'Input change handler.', action: 'changed', table: { disable: true } },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const createInputStory = (argsOverrides: Partial<InputProps>): Story => {
  const Template = (args: InputProps) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (error) {
          setError(null);
        }
      },
      [error],
    );

    const handleBlur = useCallback(() => {
      const rules = getValidationRules(args.type || inputDefaultProps.type);
      const validationError = validateInput(value, rules, Boolean(args.required));
      setError(validationError);
    }, [value, args.type, args.required]);

    return (
      <Input
        {...args}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error || args.error}
      />
    );
  };

  return {
    render: args => <Template {...args} />,
    args: {
      label: 'Example Label',
      ...inputDefaultProps,
      ...argsOverrides,
    },
  };
};

export const Color = createInputStory({ type: 'color', label: 'Pick a Color', value: '#ff0088' });
export const Date = createInputStory({ type: 'date', label: 'Select Date' });
export const DateTimeLocal = createInputStory({
  type: 'datetime-local',
  label: 'Select Date and Time',
});
export const Email = createInputStory({ type: 'email', label: 'Email Address', required: true });
export const File = createInputStory({ type: 'file', label: 'Upload File' });
export const Image = createInputStory({ type: 'image', label: 'Image Input' });
export const Month = createInputStory({ type: 'month', label: 'Select Month' });
export const NumberInput = createInputStory({
  type: 'number',
  label: 'Number Input',
  min: 0,
  max: 100,
  step: 1,
});
export const Password = createInputStory({ type: 'password', label: 'Password', required: true });
export const Range = createInputStory({
  type: 'range',
  label: 'Range Slider',
  min: 0,
  max: 10,
  step: 1,
});
export const Search = createInputStory({ type: 'search', label: 'Search Query' });
export const Tel = createInputStory({ type: 'tel', label: 'Phone Number' });
export const Text = createInputStory({ type: 'text', label: 'Text Input' });
export const Time = createInputStory({ type: 'time', label: 'Select Time' });
export const Url = createInputStory({
  type: 'url',
  label: 'Website URL',
  value: 'https://example.com',
});
export const Week = createInputStory({ type: 'week', label: 'Select Week' });

export const WithError = createInputStory({
  error: 'This field is required',
  label: 'Input with error',
});
export const Default = createInputStory({});
export const WithIcon = createInputStory({
  type: 'text',
  label: 'Search Input',
  iconStart: FiSearch,
  iconPosition: 'left',
});
