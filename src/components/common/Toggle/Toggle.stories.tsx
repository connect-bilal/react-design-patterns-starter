// src/features/toggle/Toggle.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './Toggle';
import { toggleDefaultProps } from './Toggle.types';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  args: toggleDefaultProps,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Toggle` component is a flexible switch or checkbox toggle supporting controlled and uncontrolled modes, accessibility, and disabled state.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Label text for the toggle, used for accessibility and display.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    variant: {
      description: 'Visual style variant of the toggle: switch or checkbox.',
      control: { type: 'radio' },
      options: ['switch', 'checkbox'],
      table: {
        type: { summary: "'switch' | 'checkbox'" },
        defaultValue: { summary: 'switch' },
      },
    },
    labelPosition: {
      description: 'Position of the label relative to the toggle.',
      control: { type: 'radio' },
      options: ['left', 'right'],
      table: {
        type: { summary: "'left' | 'right'" },
        defaultValue: { summary: 'left' },
      },
    },
    checked: {
      description: 'Controlled checked state of the toggle.',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    defaultChecked: {
      description: 'Initial checked state for uncontrolled toggle (use instead of checked).',
      control: 'boolean',
      table: { type: { summary: 'boolean' } },
    },
    disabled: {
      description: 'Disables the toggle and prevents interaction.',
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    onChange: {
      description: 'Callback fired when toggle state changes: `(checked, event) => void`',
      action: 'changed',
      table: { type: { summary: '(checked: boolean, event) => void' } },
      control: false,
    },
    className: {
      description: 'Additional CSS class names to customize styling.',
      control: 'text',
      table: { type: { summary: 'string' } },
    },
    style: {
      description: 'Inline styles applied to the root label element.',
      control: false,
      table: { type: { summary: 'React.CSSProperties' } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Helper to create stories dynamically
const createStory = (
  overrides: Partial<React.ComponentProps<typeof Toggle>>,
  name?: string,
): Story => ({
  name,
  args: {
    ...toggleDefaultProps,
    ...overrides,
  },
});

// Stories
export const Default: Story = createStory({
  label: 'Default Toggle',
});

export const CheckedSwitch = createStory({
  label: 'Checked Switch',
  checked: true,
});

export const UncheckedCheckbox = createStory({
  label: 'Unchecked Checkbox',
  variant: 'checkbox',
  checked: false,
});

export const CheckedCheckbox = createStory({
  label: 'Checked Checkbox',
  variant: 'checkbox',
  checked: true,
});

export const DisabledToggle = createStory({
  label: 'Disabled Toggle',
  disabled: true,
  checked: true,
});

export const WithoutLabel = createStory({
  label: undefined,
  'aria-label': 'Toggle without visible label',
});
