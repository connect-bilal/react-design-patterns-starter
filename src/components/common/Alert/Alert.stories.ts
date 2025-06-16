import type { Meta, StoryObj } from '@storybook/react';
import { capitalize } from '@utils';

import Alert from './Alert';
import { type AlertProps, alertVariants } from './Alert.types';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The `Alert` component displays messages with variant-based styling, optional icons, auto-dismiss timers, and close functionality.',
      },
    },
  },
  argTypes: {
    message: {
      description: 'The text content of the alert.',
      control: 'text',
      defaultValue: 'This is an alert message!',
    },
    variant: {
      description: 'Visual style of the alert.',
      control: 'radio',
      options: ['info', 'success', 'warning', 'error'],
      table: {
        type: { summary: alertVariants.join(' | ') },
        defaultValue: { summary: 'info' },
      },
    },
    duration: {
      description: 'Time (in seconds) before the alert auto-dismisses. Set to 0 to disable.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '5' },
      },
    },
    closable: {
      description: 'Whether the alert can be manually dismissed.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    onClose: {
      description: 'Callback triggered after alert closes.',
      action: 'closed',
      control: false,
    },
    className: {
      description: 'Optional custom class names.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Helper to create stories dynamically
const createStory = (overrides: Partial<AlertProps>, name?: string): Story => ({
  name: name ?? capitalize(overrides.variant ?? 'info'),
  args: {
    message: `This is a ${overrides.variant ?? 'info'} alert.`,
    duration: 0,
    ...overrides,
  },
});

// Variant Stories
export const Info = createStory({ variant: 'info' });
export const Success = createStory({ variant: 'success' });
export const Warning = createStory({ variant: 'warning' });
export const Error = createStory({ variant: 'error' });

// Other Variations
export const NonClosable = createStory({
  variant: 'info',
  closable: false,
  message: 'Non-closable alert.',
});

export const Persistent = createStory({
  variant: 'warning',
  duration: 0,
  message: 'Persistent alert (no auto-close).',
});

export const CustomClass = createStory({
  variant: 'success',
  className: 'w-full',
  message: 'Custom class alert with extra shadow.',
});
