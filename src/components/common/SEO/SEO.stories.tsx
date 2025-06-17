import type { Meta, StoryObj } from '@storybook/react';

import SEO from './SEO';

const meta: Meta<typeof SEO> = {
  title: 'Components/SEO',
  component: SEO,
  parameters: {
    docs: {
      description: {
        component: `
          **SEO Component Instructions**

          This component uses [react-helmet](https://github.com/nfl/react-helmet) to inject SEO and social metadata into the HTML \`<head>\`. It does **not render any visible UI**.

          ✅ **Usage:**
          Use this component at the top level of a page component to set meta tags dynamically.

          ✅ **Example Tags Added:**
          - \`<title>\`, \`<meta name="description">\`
          - Open Graph tags: \`og:title\`, \`og:image\`, etc.
          - Twitter card support

          🔍 **To Verify:**
          Open **DevTools → Elements → <head>** and inspect the updated meta tags.

          ⚠️ **Note:**
          This component will not show anything in the Storybook preview pane.
        `,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof SEO>;

export const Default: Story = {
  args: {
    title: 'My Page Title',
    description: 'This is an SEO description for My Page.',
    keywords: 'react, seo, helmet',
    url: 'https://storybook-react-design-patterns.vercel.app',
    image: '/startup.png',
    type: 'website',
  },
};
