import { defineConfig } from 'vite';

// Replace 'wordsearch-creator' with your exact GitHub repository name if different
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
});