import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env variables for current mode, no prefix filter
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tailwindcss()],
    define: {
      __APP_NAME__: JSON.stringify(env.APP_NAME),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components/index.ts'),
        '@utils': path.resolve(__dirname, './src/utils/index.ts'),
        '@hooks': path.resolve(__dirname, './src/hooks/index.ts'),
        '@tokens': path.resolve(__dirname, './src/styles/tokens.ts'),
        '@styles': path.resolve(__dirname, './src/styles'),
      },
    },
  };
});
