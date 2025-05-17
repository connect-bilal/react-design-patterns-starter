import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';
import type { TextProps } from './Text.types';
import { textTags } from './Text.types';
import '../../../styles/variables.css';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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
    family: {
      description: 'Sets a custom font family (e.g., Roboto, Arial).',
      control: 'text',
      table: {
        type: { summary: 'string' },
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

const createTextTagStory = (tag: TextProps['as']): Story => {
  const label = typeof tag === 'string' ? tag.toUpperCase() : 'TEXT';
  return {
    name: label,
    args: {
      as: tag,
      children: `This is an element`,
      color: '#333',
      textAlign: undefined,
      className: '',
      style: {},
      family: '',
    },
  };
};

export const Span = createTextTagStory('span');
export const Paragraph = createTextTagStory('p');
export const H1 = createTextTagStory('h1');
export const H2 = createTextTagStory('h2');
export const H3 = createTextTagStory('h3');
export const H4 = createTextTagStory('h4');
export const H5 = createTextTagStory('h5');
export const H6 = createTextTagStory('h6');
