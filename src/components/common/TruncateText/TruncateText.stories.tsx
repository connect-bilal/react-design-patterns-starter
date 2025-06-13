import type { Meta, StoryObj } from '@storybook/react';

import TruncateText from './TruncateText';

const meta: Meta<typeof TruncateText> = {
  title: 'Components/TruncateText',
  component: TruncateText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `TruncateText` component displays a truncated paragraph with optional "More"/"Less" toggling based on the character limit.',
      },
    },
  },
  argTypes: {
    text: {
      description: 'The string to truncate.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    limit: {
      description: 'Character limit before truncation occurs.',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof TruncateText>;

export const Default: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.',
    limit: 50,
  },
};

export const ShortText: Story = {
  args: {
    text: 'Short sentence.',
    limit: 50,
  },
};

export const LongTextWithToggle: Story = {
  args: {
    text: 'This is a very long description that should be truncated and allow users to expand and collapse the content using the "More" and "Less" button.',
    limit: 40,
  },
};
