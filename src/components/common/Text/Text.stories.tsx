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
      control: 'select',
      options: textTags,
    },
    color: {
      control: 'color',
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
    },
    family: {
      control: 'text',
    },
    className: {
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
      children: `This is a ${label} element`,
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
