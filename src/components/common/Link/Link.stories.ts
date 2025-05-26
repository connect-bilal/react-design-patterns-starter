import type { Meta, StoryObj } from '@storybook/react';

import Link from './Link';
import { linkDefaultProps, linkVariants, linkSizes, targetOptions } from './Link.types';
import type { LinkProps } from './Link.types';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Link` component renders accessible, styled hyperlinks with support for multiple variants, sizes, external links, and disabled state handling.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content inside the link (usually text or elements).',
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    href: {
      description: 'The URL the link points to.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#' },
      },
    },
    variant: {
      description: 'Visual style of the link (e.g., underline, button, or default).',
      control: 'radio',
      options: linkVariants,
      table: {
        type: { summary: linkVariants.join(' | ') },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: `Specifies the size of the link's text and padding.`,
      control: 'select',
      options: linkSizes,
      table: {
        type: { summary: linkSizes.join(' | ') },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      description: 'Disables the link interaction and styles it accordingly.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    external: {
      description: 'Marks the link as external, affecting the rel attribute.',
      control: 'boolean',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    target: {
      description: 'Specifies where to open the linked document.',
      control: 'select',
      options: targetOptions,
      table: {
        type: { summary: targetOptions.join(' | ') },
        defaultValue: { summary: '_self' },
      },
    },
    ariaLabel: {
      description: 'Accessibility label for the link.',
      control: 'text',
      table: {
        type: { summary: 'string' },
      },
    },
    className: {
      description: 'Custom class name for additional styling.',
      control: 'text',
    },
    style: {
      description: 'Inline styles applied to the link element.',
      control: 'object',
      table: {
        type: { summary: 'React.CSSProperties' },
        defaultValue: { summary: '{}' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

const createLinkStory = (argsOverrides: Partial<LinkProps> = {}): Story => ({
  args: {
    ...linkDefaultProps,
    ...argsOverrides,
  },
});

export const Default = createLinkStory();
export const Underline = createLinkStory({ variant: 'underline', children: 'Underline Link' });
export const Button = createLinkStory({ variant: 'button', children: 'Button Link' });
export const Disabled = createLinkStory({ disabled: true, href: '', children: 'Disabled Link' });
export const External = createLinkStory({
  external: true,
  target: '_blank',
  href: 'https://external.com',
  children: 'External Link',
});
