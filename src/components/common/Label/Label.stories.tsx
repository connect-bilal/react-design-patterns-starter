import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';
import { labelStates, labelSizes } from './Label.types';
import '../../../styles/variables.css';

const meta: Meta<typeof Label> = {
  title: 'Components/Form/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    children: 'Username',
    htmlFor: 'username',
  },
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

const StoryWrapper = ({ children }: { children: React.ReactNode }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>{children}</div>
);

export const Sizes: Story = {
  render: () => (
    <StoryWrapper>
      {labelSizes.map(size => (
        <Label key={size} htmlFor={size} size={size}>
          {`${size.charAt(0).toUpperCase() + size.slice(1)} Label`}
        </Label>
      ))}
    </StoryWrapper>
  ),
};

export const States: Story = {
  render: () => (
    <StoryWrapper>
      {labelStates.map(state => (
        <Label key={state} htmlFor={state} state={state}>
          {state.charAt(0).toUpperCase() + state.slice(1)}
        </Label>
      ))}
    </StoryWrapper>
  ),
};

export const Required: Story = {
  args: {
    required: true,
    children: 'Email Address',
    htmlFor: 'email',
  },
};
