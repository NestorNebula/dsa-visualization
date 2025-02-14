import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

const base = path.resolve(__dirname, 'src');

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(base, 'assets'),
      '@components': path.resolve(base, 'components'),
      '@hooks': path.resolve(base, 'hooks'),
      '@pages': path.resolve(base, 'pages'),
      '@routes': path.resolve(base, 'routes'),
      '@services': path.resolve(base, 'services'),
      '@styles': path.resolve(base, 'styles'),
      '#types': path.resolve(base, 'types'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
