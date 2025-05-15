import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { capitalize } from '../../../utils/utility';
import { buttonVariants, buttonSizes } from './Button.types';
import type { ButtonVariant } from './Button.types';
import '../../../styles/variables.css';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: buttonVariants,
    },
    size: {
      control: { type: 'radio' },
      options: buttonSizes,
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

const createVariantStory = (variant: ButtonVariant): Story => {
  const capitalized = capitalize(variant);
  return {
    name: capitalized,
    args: {
      variant,
      size: 'md',
      disabled: false,
      children: capitalized,
      className: 'custom-class',
      onClick: () => alert(`You clicked the ${variant} button!`),
    },
  };
};

export const Primary = createVariantStory('primary');
export const Success = createVariantStory('success');
export const Danger = createVariantStory('danger');
export const Warning = createVariantStory('warning');
export const Info = createVariantStory('info');
