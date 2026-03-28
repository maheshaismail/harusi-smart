import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src', // location of index.html and main entry
  build: {
    outDir: '../dist', // ensure output goes to repo/dist so Netlify can publish it
    emptyOutDir: true,
  },
});