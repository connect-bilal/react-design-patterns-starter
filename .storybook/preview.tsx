import type { Preview } from '@storybook/react';

import { ThemeSwitcher } from '../src/components';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      // Only apply to canvas (story iframes)
      if (context.viewMode === 'story') {
        return (
          <div className='fixed inset-0 flex flex-col items-center justify-center bg-white p-4 dark:bg-gray-400'>
            <div className='absolute top-4 right-4'>
              <ThemeSwitcher />
            </div>
            <div className='flex w-full max-w-4xl justify-center'>
              <Story />
            </div>
          </div>
        );
      }
      // For docs pages
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export default preview;
