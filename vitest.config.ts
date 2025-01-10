import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ['**/*.test.tsx'],
      globals: true,
      restoreMocks: true,
      environment: 'jsdom',
    },
  }),
);
