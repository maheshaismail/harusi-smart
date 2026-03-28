import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '../dist', // ensure output goes to repo/dist so Netlify can publish it
    emptyOutDir: true,
  },
});