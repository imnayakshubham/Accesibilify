import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import path from 'path';


export default defineConfig(({ command, mode }) => {
  if (mode === 'sdk') {
    return {
      plugins: [react()],
      build: {
        outDir: 'dist/sdk',
        lib: {
          entry: path.resolve(__dirname, 'src/integration.tsx'),
          name: 'AccesibilifySDK',
          formats: ['umd', 'es'],
          fileName: (format) => `accesibilify-sdk.${format}.js`
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM'
            }
          }
        }
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
