import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';

export default defineConfig(({ command, mode }) => {
  if (command === 'build' && mode === 'extension') {
    // Chrome Extension build configuration
    return {
      plugins: [react(), crx({ manifest })],
      build: {
        outDir: 'dist',
        rollupOptions: {
          input: 'src/content.jsx',
        },
      },
    };
  }

  if (command === 'build' && mode === 'web') {
    // Web app build configuration
    return {
      plugins: [react()],
      build: {
        outDir: 'dist_web',
      },
    };
  }

  // Development config for both modes
  return {
    plugins: [react()],
    server: {
      port: 5173,
    },
  };
});
