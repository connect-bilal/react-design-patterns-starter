import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { capitalize } from '../../../utils/utility';
import { buttonVariants, buttonSizes, iconPositions } from './Button.types';
import type { ButtonProps } from './Button.types';
import { FaTrash, FaSave, FaDownload } from 'react-icons/fa';
import '../../../styles/variables.css';

const iconOptions = {
  None: undefined,
  Download: <FaDownload />,
  Save: <FaSave />,
  Trash: <FaTrash />,
};

const defaultArgs = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  isLoading: false,
  fullWidth: false,
  children: 'Button',
  icon: undefined,
  iconPosition: 'left',
  className: '',
} as const satisfies Partial<ButtonProps>;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'This `Button` component supports multiple variants, sizes, icons, full width layout, and loading states.',
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
    icon: {
      description: 'Optional icon element (ReactNode).',
      control: {
        type: 'select',
        labels: {
          None: 'No icon',
          Download: '⬇️ Download',
          Save: '💾 Save',
          Trash: '🗑️ Trash',
        },
      },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: 'null' },
      },
    },
    iconPosition: {
      description: 'Position of the icon relative to the label.',
      control: 'radio',
      options: iconPositions,
      table: {
        type: { summary: iconPositions.join(' | ') },
        defaultValue: { summary: 'left' },
      },
    },
    isLoading: {
      description: 'Displays a loading spinner in place of icon.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      description: 'Expands the button to take full width.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
type Story = StoryObj<typeof Button>;

// Helper to create stories dynamically
const createStory = (
  overrides: Partial<React.ComponentProps<typeof Button>>,
  name?: string,
): Story => ({
  name: name ?? capitalize((overrides.variant ?? '') as string),
  args: {
    ...defaultArgs,
    ...overrides,
    onClick: () => alert(`You clicked the ${overrides.variant} button!`),
  },
});

// Variant Stories
export const Primary = createStory({ variant: 'primary' });
export const Success = createStory({ variant: 'success' });
export const Danger = createStory({ variant: 'danger' });
export const Warning = createStory({ variant: 'warning' });
export const Info = createStory({ variant: 'info' });

// Other Variations
export const IconButton = createStory({
  children: 'Icon Button',
  icon: <FaDownload />,
});

export const LoadingButton = createStory({
  children: 'Loading Button',
  isLoading: true,
});

export const FullWidthButton = createStory({
  variant: 'primary',
  children: 'Full Width Button',
  fullWidth: true,
});

export const DisabledButton = createStory({
  variant: 'primary',
  children: 'Disabled Button',
  disabled: true,
});