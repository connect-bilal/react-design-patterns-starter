import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';
import { dividerDefaultProps, dividerSpacings } from './Divider.types';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
  args: dividerDefaultProps,
  parameters: {
    ayout: 'fullscreen',
    docs: {
      description: {
        component:
          'The `Divider` component is used to visually separate content. It supports only horizontal orientation and solid style.',
      },
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    orientation: {
      description: 'Direction of the divider. Only `horizontal` is supported.',
      control: { type: 'radio' },
      options: ['horizontal'],
      table: {
        type: { summary: 'horizontal' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    variant: {
      description: 'Style variant of the divider. Only `solid` is supported.',
      control: { type: 'radio' },
      options: ['solid'],
      table: {
        type: { summary: 'solid' },
        defaultValue: { summary: 'solid' },
      },
    },
    spacing: {
      description: 'Spacing around the divider.',
      control: { type: 'radio' },
      options: dividerSpacings,
      table: {
        type: { summary: dividerSpacings.join(' | ') },
        defaultValue: { summary: dividerDefaultProps.spacing },
      },
    },
    bold: {
      description: 'Whether the divider and text are bold.',
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
      },
    },
    className: {
      description: 'Optional CSS class for custom styling.',
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
      },
    },
    children: {
      description: 'Optional content displayed inside the divider (e.g., text).',
      control: { type: 'text' },
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const WithText: Story = {
  args: {
    children: 'OR',
  },
};

export const BoldDivider: Story = {
  args: {
    bold: true,
    children: 'Bold Text',
  },
};
