import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';

export default defineConfig(({ command, mode }) => {
  if (mode === 'sdk') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist/sdk',
        lib: {
          entry: 'src/sdk.tsx',
          name: 'AccesibilifySDK',
          formats: ['umd', 'es'],
          fileName: (format) => `accesibilify-sdk.${format}.js`
        },
        rollupOptions: {
          output: {
            name: 'AccesibilifySDK',
            minifyInternalExports: true,
            compact: true,
            manualChunks: undefined
          }
        },
        minify: 'terser',
        sourcemap: true,
        target: 'es2018'
      }
    };
  }

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
    return {
      plugins: [react()],
      build: {
        outDir: 'dist/web_app'
      }
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
