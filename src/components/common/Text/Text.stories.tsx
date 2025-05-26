import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';
import type { TextProps } from './Text.types';
import { textTags } from './Text.types';
import { textDefaultProps } from './Text.types';
import '../../../styles/variables.css';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `Text` component renders styled semantic HTML text elements (`h1`, `p`, `span`, etc.) with support for color, alignment, and font customization.',
      },
    },
  },
  argTypes: {
    as: {
      description: 'Specifies the HTML tag to render (e.g., h1, p, span).',
      control: 'select',
      options: textTags,
    },
    children: {
      description: 'The text content to display inside the component.',
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    color: {
      description: 'Text color. Accepts any valid CSS color value.',
      control: 'color',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '#333' },
      },
    },
    textAlign: {
      description: 'Horizontal alignment of the text.',
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    style: {
      description: 'Inline styles to apply to the text element.',
      control: 'object',
      table: {
        type: { summary: 'React.CSSProperties' },
        defaultValue: { summary: '{}' },
      },
    },
    className: {
      description: 'Custom class name for additional styling.',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

// Helper to create stories dynamically
const createTextTagStory = (overrides: Partial<TextProps> = {}): Story => {
  const tag = typeof overrides.as === 'string' ? overrides.as.toUpperCase() : 'TEXT';

  return {
    name: tag,
    args: {
      ...textDefaultProps,
      ...overrides,
    },
  };
};

// Stories
export const Span = createTextTagStory({ as: 'span', children: 'This is a <span> element' });
export const Paragraph = createTextTagStory({ as: 'p', children: 'This is a <p> element' });
export const H1 = createTextTagStory({ as: 'h1', children: 'This is a <h1> element' });
export const H2 = createTextTagStory({ as: 'h2', children: 'This is a <h2> element' });
export const H3 = createTextTagStory({ as: 'h3', children: 'This is a <h3> element' });
export const H4 = createTextTagStory({ as: 'h4', children: 'This is a <h4> element' });
export const H5 = createTextTagStory({ as: 'h5', children: 'This is a <h5> element' });
export const H6 = createTextTagStory({ as: 'h6', children: 'This is a <h6> element' });
