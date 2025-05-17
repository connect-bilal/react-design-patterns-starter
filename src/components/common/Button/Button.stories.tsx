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
    docs: {
      description: {
        component:
          'This `Button` component supports multiple variants and sizes following the design system.',
      },
    },
  },
  argTypes: {
    variant: {
      description: 'Defines the visual style of the button (e.g., primary, success, danger).',
      control: 'radio',
      options: buttonVariants,
      table: {
        type: { summary: buttonVariants.join(' | ') },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      description: 'Sets the size of the button: small, medium, or large.',
      control: 'radio',
      options: buttonSizes,
      table: {
        type: { summary: buttonSizes.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      description: 'Disables the button if true.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'The button label text or content.',
      control: 'text',
      table: {
        defaultValue: { summary: 'Button' },
      },
    },
    onClick: {
      description: 'Function called when the button is clicked.',
      table: {
        type: { summary: '(event: React.MouseEvent<HTMLButtonElement>) => void' },
        defaultValue: { summary: '() => alert("Button clicked!")' },
      },
      control: false,
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
      children: 'Button',
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
