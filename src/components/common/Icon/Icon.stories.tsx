import type { Meta, StoryObj } from '@storybook/react';
import { FaSave, FaTrash, FaDownload, FaBeer } from 'react-icons/fa';

import Icon from './Icon';
import { iconDefaultProps, iconVariants, iconSizes } from './Icon.types';

const iconOptions = {
  Save: FaSave,
  Trash: FaTrash,
  Download: FaDownload,
  Beer: FaBeer,
};

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Icon` component renders SVG icons with consistent styling and accessibility support, configurable by size and variant.',
      },
    },
  },
  argTypes: {
    'icon': {
      description: 'Icon component to render (from react-icons).',
      control: {
        type: 'select',
        labels: {
          Save: '💾 Save',
          Trash: '🗑️ Trash',
          Download: '⬇️ Download',
          Beer: '🍺 Beer',
        },
      },
      options: Object.keys(iconOptions),
      mapping: iconOptions,
      table: {
        type: { summary: 'React.ComponentType<IconBaseProps>' },
      },
    },
    'size': {
      description: 'Size of the icon.',
      control: 'radio',
      options: iconSizes,
      table: {
        type: { summary: iconSizes.join(' | ') },
        defaultValue: { summary: iconDefaultProps.size },
      },
    },
    'variant': {
      description: 'Visual variant to apply color styles.',
      control: 'radio',
      options: iconVariants,
      table: {
        type: { summary: iconVariants.join(' | ') },
        defaultValue: { summary: iconDefaultProps.variant },
      },
    },
    'className': {
      description: 'Additional CSS class for custom styling.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    'style': {
      description: 'Inline styles to apply to the icon.',
      control: 'object',
      table: {
        type: { summary: 'React.CSSProperties' },
      },
    },
    'title': {
      description: 'Title attribute for accessibility and tooltips.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-label': {
      description: 'Accessibility label for screen readers.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-hidden': {
      description: 'Whether the icon is hidden from screen readers.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Helper to create stories
const createStory = (
  overrides: Partial<React.ComponentProps<typeof Icon>>,
  name?: string,
): Story => ({
  name,
  args: {
    ...iconDefaultProps,
    ...overrides,
  },
});

// Stories
export const Default = createStory(
  { icon: FaSave, title: 'Save Icon', variant: 'primary' },
  'Save Icon',
);
export const AccessibleBeer = createStory(
  {
    'icon': FaBeer,
    'title': 'Beer Icon',
    'aria-label': 'Beer Icon',
  },
  'Accessible Beer Icon',
);
