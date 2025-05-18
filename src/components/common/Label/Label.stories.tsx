import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import { labelStates, labelSizes, labelDefaultProps } from './Label.types';

const meta: Meta<typeof Label> = {
  title: 'Components/Form/Label',
  component: Label,
  tags: ['autodocs'],
  args: labelDefaultProps,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Label` component is used to provide accessible and styled labels for form inputs. It supports different sizes, states, and can indicate required fields.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content inside the label, usually the text describing the input.',
      table: {
        type: { summary: 'React.ReactNode' },
      },
      control: 'text',
    },
    htmlFor: {
      description: 'The `id` of the input element this label is associated with for accessibility.',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    required: {
      description: 'If `true`, displays a required indicator (e.g., asterisk) next to the label.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      control: 'boolean',
    },
    size: {
      description:
        'Sets the size of the label text. Accepts `sm` (small), `md` (medium), and `lg` (large).',
      control: 'radio',
      options: labelSizes,
      table: {
        type: { summary: labelSizes.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    state: {
      description:
        'Visual state of the label. Controls styling for validation and disabled states.',
      control: 'radio',
      options: labelStates,
      table: {
        type: { summary: labelStates.join(' | ') },
        defaultValue: { summary: 'default' },
      },
    },
    className: {
      description: 'Optional CSS class to apply additional custom styles.',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

const createStory = (
  overrides: Partial<React.ComponentProps<typeof Label>>,
  name?: string,
): Story => ({
  name: name ?? overrides.htmlFor ?? 'Custom Label',
  args: {
    ...labelDefaultProps,
    ...overrides,
  },
});

export const RequiredLabel = createStory({
  required: true,
  children: 'Required Label',
  htmlFor: 'email',
});

export const DisabledLabel = createStory({
  size: 'lg',
  children: 'Disabled Label',
  state: 'disabled',
});

export const ErrorLabel = createStory({
  size: 'lg',
  children: 'Error Label',
  state: 'error',
});
