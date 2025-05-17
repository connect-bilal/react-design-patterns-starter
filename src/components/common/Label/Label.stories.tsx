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
